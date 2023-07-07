var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var targetX=0;
var targetY=0;
var isphone=false;
var hero;
var mitadX, mitadY;
var  angulo=0;
var requestAnimationFrame;
var arrayParaOrdenar=[];
var progreso;
var volver;
var mcTile;
var tutorial;
var ganaste;
var mapita;
var gridCargada;
var anchoTiles; //ancho medido en tiles
var altoTiles;   //alto medido en tiles
var fr=0;
var grid= new Array();
var ahora, antes;
var nivel;
var loading;
var arrayDinos=[];
var popup;
var coeficiente=0.1;
var audioVoz;
var textosDinos;
var musica=new Audio("musica.mp3");
var popupFX=new Audio("popup.mp3");
var botonFX=new Audio("click.mp3");
var caminandoFX=new Audio("pasos.mp3");
caminandoFX.volume=0.35;
caminandoFX.loop=true;
popupFX.volume=0.5;
musica.loop=true;
var idiomaElegido;

function cambiarIdioma(idioma){
	idiomaElegido=idioma;
	$("body").removeClass("en he ar es pt")
	$("body").addClass(idioma)
	//carga el json, lo convierte en objeto de JS y va item por item con el $.each
	$.ajax({
		dataType:"json",
		url:"../../localization/"+idioma+".json",
		success:function( data ) {	
			textosJSON=data;
			textosDinos=data;			
		},error: (e)=>{
			//dizque try catch
			cambiarIdioma("en")	
		}
	})
	
	//cambia titulo de la pagina	
	//deja establecido el idioma, para las demas seccinoes





}

function inicializarIdioma(){
idiomaSistema = navigator.language || navigator.userLanguage; 
idiomaSistema=idiomaSistema.substr(0,2);
cambiarIdioma(idiomaSistema);
}

inicializarIdioma()

///////////// PANEL DE CONTROL
var mostrarFPS=false;
var anchoStage=640;
var altoStage=1136;
var tile=50;
var velLider=20;
var visibleTiles=false;
var dibujarGridEnConsola=true;
var dibujarPathAstar=false;
var escanearPiso=false; //esto deberia estar en un archivo aparte, no leerse cada vez q entras al jeugo
//si escanearPiso==false, se carga de grid.json.
//lo q guardo es 0,1, nada mas
var numFramesChangui=10;
var cantBolitas=0;
var distanciaDelLider=0;
//////////////////////////


//bolitas=new Array();
var pause=true;



function redondearPosTipitos(){
	for(i=0; bolitas.length>i;i++){
		t=bolitas[i];
		t.x=Math.floor(Math.floor(t.x/tile)*tile+tile/2);
		t.y=Math.floor(Math.floor(t.y/tile)*tile+tile/2);
	}
}





function Lider(){
	obj=new lib.lider(); //disque extencion de la clase lib.lider
	
	obj.velocidad=velLider;
	obj.dinoTarget=null;
	obj.x=canvas.width/2;
	obj.y=canvas.height/2	
	obj.gotoAndStop("s"); //se queda parado ni bien arranca
	obj.children[1].gotoAndStop("parado");
	obj.tileX=coord2Tiles(obj.x);
	obj.tileY=coord2Tiles(obj.y);
	obj.stepX=0;
	obj.stepY=0;	
	obj.estado=0;
	obj.path=[];
	obj.pathNum=0;
	obj.cambiarSprite=function(){
	
		var x=parseInt(obj.stepX*10);
		var y=parseInt(obj.stepY*10);
		//console.log(x,y);
		if(x>=0 && x<=2){		
			if(y>=9 && y<=10){
			
				obj.gotoAndStop("n");
			}else if(y<=-9 && y>=-10){
				
				obj.gotoAndStop("s");
			}
		}else if (x>=5 && x<=8){
			if (y>=5 && y<=8){
				obj.gotoAndStop("no");
			}else if(y<=-5 && y>=-8){
				obj.gotoAndStop("so");
			}
		}else if (x>=9 && x<=10){
			obj.gotoAndStop("o");	
		}else if (x<=-5 && x>=-8){ //hacia la derecha...
			if (y>=5 && y<=8){
				obj.gotoAndStop("ne");
			}else if(y<=-5 && y>=-8){
				obj.gotoAndStop("se");
			}
		}else if(x<=-9 && x>=-10){
			obj.gotoAndStop("e");
		}
		
	}

	obj.caminar=function(stepX,stepY){
		obj.stepX=stepX;
		obj.stepY=stepY;
		obj.x-=stepX*obj.velocidad;
		obj.y-=stepY*obj.velocidad;
	}
	obj.distDinos=function(){
		for(i=0; i<arrayDinos.length;i++){
			console.log(i)
			console.log(calcularDistanciaObj(obj, arrayDinos[i])+" "+i);
		}
	}

	return obj;
}


function setupJuego(){
	console.log("game setup");

	popup=new lib.popup();
	ganaste=new lib.ganaste();
	ganaste.addEventListener("click", function(){
		pause=false;
		stage.removeChild(ganaste);
	});
	popup.ok.addEventListener("click", cerrarPopup);
	
	
	progreso=new lib.progreso();
	volver=new lib.volver();
	volver.x=30;
	volver.y=30;
	progreso.y=30;
	progreso.x=1030;
	volver.addEventListener("click", volverALaApp);
	nivel= new lib.nivel1();
	stage.addChild(nivel);

	stage.addChild(volver);
	stage.addChild(progreso);
	
	tutorial=new lib.tutorial();
	stage.addChild(tutorial);

	

	stage.update();
		

	mitadX=canvas.width/2;
	mitadY=canvas.height/2;
	
	tutorial.addEventListener("click", function(){
		stage.removeChild(tutorial);		
		musica.play();
	})
	pause=false;
	

	nivel.escenario.piso.addEventListener("click", clickCanvas);
	anchoTiles=Math.floor(nivel.escenario.piso.nominalBounds.width/tile);
	altoTiles=Math.floor(nivel.escenario.piso.nominalBounds.height/tile);
	hero=new Lider();
	//requestAnimationFrame(gameLoop); //empieza el gameLoop

	console.log("fin game setup");
}

function setupJuego2(){

	piso2Grid();
	
	nivel.escenario.objetos.addChild(hero);
	hero.x=1000;
	hero.y=1000;
	nivel.x=mitadX-hero.x;
	nivel.y=mitadY-hero.y;


	setTimeout(function(){
		//stage.removeChild(loading);	
		document.body.removeChild(document.getElementById("loading"))
		
	}, 300);

	nivel.escenario.objetos.herrera.addEventListener("click", function(t){clickDino("Herrerasaurus",t)});
	nivel.escenario.objetos.rebbcuerpo.addEventListener("click", function(t){clickDino("Rebbachisaurus",t)});
	nivel.escenario.objetos.rebbcara.addEventListener("click", function(t){clickDino("Rebbachisaurus",t)});
	nivel.escenario.objetos.rebbpatas.addEventListener("click", function(t){clickDino("Rebbachisaurus",t)});
	nivel.escenario.objetos.gasparini.addEventListener("click", function(t){clickDino("Gasparinisaura",t)});
	nivel.escenario.objetos.carno.addEventListener("click", function(t){clickDino("Carnotaurus",t)});
	nivel.escenario.objetos.piat.addEventListener("click", function(t){clickDino("Piatnitzkysaurus",t)});
	nivel.escenario.objetos.unenlagia.addEventListener("click", function(t){clickDino("Unenlagia",t)});
	nivel.escenario.objetos.muss.addEventListener("click", function(t){clickDino("Mussaurus",t)});
	nivel.escenario.objetos.megaraptor.addEventListener("click", function(t){clickDino("Megaraptor",t)});
	nivel.escenario.objetos.plesio.addEventListener("click", function(t){clickDino("Tuarangisaurus",t)});
	nivel.escenario.objetos.mosa.addEventListener("click", function(t){clickDino("Taniwhasaurus",t)});
	nivel.escenario.objetos.eoraptor.addEventListener("click", function(t){clickDino("Eoraptor",t)});
	nivel.escenario.objetos.giganoto.addEventListener("click", function(t){clickDino("Giganotosaurus",t)});
	nivel.escenario.objetos.futa.addEventListener("click", function(t){clickDino("Futalongkosaurus",t)});
	nivel.escenario.objetos.buitre.addEventListener("click", function(t){clickDino("Buitreraptor",t)});

	setupMapita();
}

function cerrarPopup(){
	audioVoz.pause();
	botonFX.play();
	stage.removeChild(popup);
	//agrego un coso temporal
	ptemp=new lib.progreso();
	ptemp.gotoAndStop(arrayDinos.length);
	proxScaleY=ptemp.progBar.scaleY;	//me fijo cuanto es la escala en al proximo frame.
	console.log(progreso.progBar.scaleY, proxScaleY);

  	createjs.Tween.get(progreso.progBar).to({scaleY:proxScaleY},750).call(function(){
  		//progreso.gotoAndStop(arrayDinos.length);
  	}); //en ms


	if(arrayDinos.length==14){		
		stage.addChild(ganaste);
		

	}

}

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

function lanzarPopup(dino){
	popup.mensajeDino.text="";
	if(idiomaElegido=="he"){
		//popup.mensajeDino.font="bold 55px hebreo"
		popup.mensajeDino.font="bold 75px sinFont" //no le pongo font si usa el default del SO, pq hace algo con los numeros
		popup.mensajeDino.textAlign="right"
		popup.mensajeDino.x=985;
	}
	console.log(dino);
	popup.gotoAndStop(0);
	popup.nombreDino.text=dino;
	popup.caras.gotoAndStop(dino);
	console.log(textosDinos[dino]);
	clearInterval(varTimeout); //este es el timeout de showText
	setTimeout(function(){showText(textosDinos[dino], 0, 15); },250);//txt, desde cual letra, ms
	
	popupFX.play();
	setTimeout(function(){
	//	audioVoz=new Audio("audios/"+idiomaElegido+"/"+dino+".mp3");
		//POR AHORA AUDIOS SOLO EN HEBREO
		audioVoz=new Audio("audios/he/"+dino+".mp3");
		audioVoz.play();
	},300);
	stage.addChild(popup);
	popup.play();
	arrayDinos.push(dino);
	arrayDinos=eliminateDuplicates(arrayDinos);
	console.log(arrayDinos.length);

}

function clickDino(dino,target){
	hero.dinoTarget=dino;
	clickCanvas(target);
}

function Spot(x,y, muro){
	this.x=x;
	this.y=y;
	this.h=0;
	this.f=0;
	this.g=0;
	this.muro=muro;


}

function piso2Grid(){
	console.log("piso 2 grid");

	
	if(escanearPiso){
		console.log("ESCANEANDO PISO... esto puede tardar")
			//escanearPiso es una variable mia para saltear esto, y poder testear mas rapido
		for(n=0; n<=anchoTiles;n++){
				grid[n]=new Array(altoTiles);				
				for(m=0; m<=altoTiles;m++){
					grid[n][m]=new Spot(n,m);	
					//caminable se llama el simbolo donde pinto donde se puede caminar y donde no
					grid[n][m].muro=nivel.escenario.caminable.hitTest(n*tile+tile/2,m*tile+tile/2);
				
					if(visibleTiles){ //puedo hacer visibles los tiles
						 grid_el = new createjs.Shape();
				            grid_el.graphics.setStrokeStyle(2,"square").beginStroke("#000000");
				             if(grid[n][m].muro==true) grid_el.graphics.beginFill("#70FF85");
				            else grid_el.graphics.beginFill("#aaaaaa");
				            grid_el.graphics.rect(n*tile ,m*tile,tile,tile);
				               grid_el.x_pos = n*tile;
				               grid_el.y_pos = m*tile;
				               grid_el.alpha=0.3;
						 nivel.escenario.addChild(grid_el);
					} //if visibleTiles
								
			} //m
				

		}//n
		if(dibujarGridEnConsola) dibujarGrid(grid);
	}else{
		console.log("CARGANDO GRID DE grid.json...")
			//si no se escanea el piso, se carga la grid q alguna vez guarde
						//q sale de haber escaneado el piso anteriormente
						//cuando el nivel este listo, ya no escaneo mas la grid y queda como data.
						   $.ajax({
					          url: "grid.json",
					        crossDomain: true,   
					          success: function(data) {
					          	//console.log(data);
					          	console.log("grid cargada del archivo");
					          	gridCargada=data;
					            grid=parsearGridCargada(data);	

					            if(dibujarGridEnConsola) dibujarGrid(grid);
					          }});
	}

		
	nivel.escenario.removeChild(nivel.escenario.caminable);
	//pa q no joda, dps de escanear donde se puede caminar y donde no, borro el obj
	
		
		
} //piso2grid




function dibujarGrid(g){
	drawGrid=new Array();
		for(x=0; x<g.length;x++){
			
			for(y=0;y<g[1].length;y++){
				if(g[x][y].muro==true  )	drawGrid[y]+="#";
				else drawGrid[y]+="-";
			}			
		}

		for(var i=0;i<drawGrid.length;i++){
			num=i;
			if(i<10)num="0"+i;
			console.log(num+". "+drawGrid[i]);
		}
}

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);

	 isphone = false;
    if(document.URL.indexOf("http://") === -1 
        && document.URL.indexOf("https://") === -1) {
        isphone = true;
        console.log("ES UN TELEFONO");
    }else{
     	console.log("ESTAMOS EN LA COMPU...");
    }
    document.addEventListener("deviceready", onDeviceReady, false);
	
}



function onDeviceReady(){
	if(isphone) {
		console.log("poniendo el celu en landscape...");
		window.screen.orientation.lock('landscape'); //esto es un plugin de cordova 
	}
}

function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}



function clickCanvas(target){
	
		console.log("click canvas!")
		caminandoFX.play();
		target.preventDefault();
		targetX=Math.floor(target.stageX-nivel.x);
		targetY= Math.floor(target.stageY-nivel.y);
		
	
		//margenes de seguridad
		if(targetY<tile) targetY=tile;
		if(targetX<tile) targetX=tile;

		
		
		//pathfinding!!!!!!!!!
		// w = new Worker(function(){
		tgt=grid[coord2Tiles(targetX)][coord2Tiles(targetY)];
		src=grid[coord2Tiles(hero.x)][coord2Tiles(hero.y)];
		//console.log(tgt);
		hero.path=[];
		hero.path=aStar(src, tgt);

		

	//	 });
		
		hero.pathNum=0;

		//if(hero.path.length>0){
			hero.estado=1;
		/*	var obj=new Object();
			obj.x=targetX;
			obj.y=targetY;


			obj=calcularSteps(hero, obj);
			stepX=obj.stepX*velLider;
			stepY=obj.stepY*velLider;*/
			
		//}
		
		
		

		

		console.log("["+coord2Tiles(targetX)+"]["+coord2Tiles(targetY)+"]:"+grid[coord2Tiles(targetX)][coord2Tiles(targetY)].muro);
		



	}
////////////////////////////////////////////////////////////////////////// a*

function removeFromArray(arr,elt){
	for(var i=arr.length -1; i>=0; i--){
		if(arr[i]==elt){
			arr.splice(i,1);
			return i;
		}
	}
}

//esto funciona asi:
//aStar(grid[0][0],grid[4][4]);
function aStar(source,dest){

	if( source==undefined || dest==undefined ||  source.muro ==true || dest.muro ==true || source.x<0 || source.x>anchoTiles || source.y>altoTiles || source.y<0 || dest.x<0 || dest.x>anchoTiles || dest.y>altoTiles || dest.y<0){
		console.log("el punto de partida o destino no se pueden caminar");
		return [source];
	}
	var d = new Date();
	var tiempoInicial = d.getTime();
//	console.log("!!!! Empieza a star !!!!");
	var openSet=[];
	var closedSet=[];	
	var path=[];
	openSet.push(source);	
	
	
	var winner=0;
	var cuenta=0;

		//console.log("openSet.length="+openSet.length);
		while(openSet.length>0){
			cuenta++;
			//console.log(openSet);
			if(cuenta>anchoTiles*altoTiles){
				var d = new Date();
				var tiempoFinal = d.getTime();
				console.log("a star no encontró un camino en un tiempo prudente");
				console.log("a star demoró "+(tiempoFinal-tiempoInicial));
				return [source]; 	//no hay camino ,pero porq tardo mucho en encontrarlo
			} 
		
			
			for(var i=0;i<openSet.length-1;i++){
				if(openSet[winner].f>openSet[i].f) winner=i;
			}
			current=openSet[winner];
		//	console.log("current="+current);
			if(current==dest){
				var temp=current;
				path.push(temp);
				var cnt=0;
			
				while(temp.cameFrom){
					if(temp.cameFrom==source) break;
					if(temp.cameFrom !=undefined && temp.cameFrom.cameFrom!=undefined)  if(temp==temp.cameFrom.cameFrom) break;
					path.push(temp.cameFrom);
					temp=temp.cameFrom;
					if(cnt<60) cnt++;
					else break;

				}
				if(dibujarPathAstar) dibujarPath(path);
				var d = new Date();
				var tiempoFinal = d.getTime();
			//	console.log("a star demoró "+(tiempoFinal-tiempoInicial));
				
			//	console.log("path encontrado!");
			//	console.log(path);
			
				return path.reverse();
				

			}
			closedSet.push(current);
			removeFromArray(openSet, current);
		
			vecis = Neighbours(current.x, current.y);
		//	console.log(vecis);

			

			for(i = 0; i< vecis.length;  i++)
			{

				veci=vecis[i];	
				//wait(20);
			


				if(arrIncludes(closedSet,veci)) continue; //si esta celda esta en el closedSet, no la evalua
					//	dibujarTile(veci, "#00ff00");
				tempGScore=current.g+1;
				
				var newPath=false;
				if(arrIncludes(openSet,veci)){
					if(tempGScore<veci.g){
						veci.g=tempGScore;
						newPath=true;
					}
				}else{
					newPath=true;
					veci.g=tempGScore;
					openSet.push(veci);
				}//openset includes veci
				if(newPath){
					veci.h=calcularDistanciaObj(veci, dest);
					veci.f=veci.g+veci.h;
					veci.cameFrom=current;
				}
				


			}//for neighboors
		

	}//while


	

}

//"sobre carga de arr.includes"
function arrIncludes(arr, obj){
	if(obj==undefined || obj.x==undefined || obj.y==undefined || arr==undefined) return -1;

	for(var i=0; i<arr.length;i++){
		if(arr[i].x==obj.x && arr[i].y==obj.y) {
			return true;
		}
	}
	return false;
}

function DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result)
	{
		if(myN)
		{
			if(myE && canWalkHere(E, N))
			result.push(grid[E][N]);
			if(myW && canWalkHere(W, N))
			result.push(grid[W][N]);
		}
		if(myS)
		{
			if(myE && canWalkHere(E, S))
			result.push(grid[E][S]);
			if(myW && canWalkHere(W, S))
			result.push(grid[W][S]);
		}
	}


function vecinos(x,y){

		result=[];
		sp=new Spot(x-1, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x-1, y);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x-1, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		//result.push(x, y);
		sp=new Spot(x, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y-1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		sp=new Spot(x+1, y+1);
		if(canWalkHere(sp.x, sp.y)) result.push(sp);
		return result;
	}
function Neighbours(x, y){
		var	N = y - 1;
		var S = y + 1;
		var E = x + 1;
		var W = x - 1;
		var myN = N > -1 && canWalkHere(x, N);
		var myS = S < altoTiles &&  canWalkHere(x, S);
		var myE = E < anchoTiles && canWalkHere(E, y);
		var myW = W > -1 && canWalkHere(W, y);
		result = [];
		if(myN)
		result.push(grid[x][N]);
		if(myE)
		result.push(grid[E][y]);
		if(myS)
		result.push(grid[x][S]);
		if(myW)
		result.push(grid[W][y]);

	
		DiagonalNeighbours(myN, myS, myE, myW, N, S, E, W, result);
	
		return result;
	}

	function canWalkHere(x, y)
	{
		rta=false;
		try{
			rta= !grid[x][y].muro;
		}catch(e){
			//console.log(e);
		}
		return rta;
		 	
		
	}

//////////////////////////////////////////////////////////////////////////////

function modulo(numero){
	return Math.sqrt(numero*numero);
}

function dibujarPath(path){
	for(var i=0;i<path.length; i++){
		dibujarTile(path[i], "#aaaaaa");
	}
 
}

function dibujarTile(spot, color){
	grid_el = new createjs.Shape();
	grid_el.graphics.setStrokeStyle(2,"square").beginStroke("#000000");
	grid_el.graphics.beginFill(color);
	grid_el.graphics.rect(spot.x*tile ,spot.y*tile,tile,tile);
	grid_el.x_pos = spot.x;
	grid_el.y_pos = spot.y;
	grid_el.alpha=0.5;
	nivel.escenario.piso.addChild(grid_el);
}

function gameLoop(){

		antes=ahora;
		var d = new Date();
		 ahora = d.getTime();
		 fps=1000/(ahora-antes);
	
		//inicio, frame 0
		if(pause){
			return "pause";	
		}else{
			
			//mov del hero
			if(hero.estado==1){		
				//lo larga a caminar		
				if(hero.children[1].currentLabel=="parado"){
					console.log("camina");
					hero.children[1].gotoAndStop("caminando");			

				} 
				

				//pathNum es el numero de celda dentro del recorrido por el cual va.
				//path sale de aStar, q se ejecuta en el evento clickCanvas
				
				try{
					var spot=hero.path[hero.pathNum] //|| {x:coord2Tiles(hero.x), y: coord2Tiles(hero.y)};
					var objSteps=calcularSteps(hero, {x:spot.x*tile+tile/2, y: spot.y*tile+tile/2});
					targetX=hero.path[hero.pathNum].x*tile+tile/2;
					targetY=hero.path[hero.pathNum].y*tile+tile/2;
					
					hero.caminar(objSteps.stepX, objSteps.stepY);
					hero.cambiarSprite();
				
						



				}catch(e){
					console.log(e);
				}
				

				
				//si el hero esta a menos de medio tile de distancia de su target
				if(modulo(hero.x-targetX)<tile/2 && modulo(hero.y-targetY)<tile/2 ) {
								

					if(hero.pathNum==hero.path.length-1){
						hero.estado=0;
						console.log("LLEGO! parado!");
						hero.children[1].gotoAndStop("parado");
						caminandoFX.pause();
						hero.pathNum=0;
						hero.path=[];
						
						//si estaba yendo a un dino, lanza el popup
						if(hero.dinoTarget!=null){
							lanzarPopup(hero.dinoTarget);
							hero.dinoTarget=null;
						}



					}else{
						//sigue al siguiente
						hero.pathNum++;
					}
				} //fin if llegó
			} //if hero.estado==1
		


	

		
				
			
			
		
			fr++;

			if(fr==10){				
				setupJuego2();
			} 
			if(mostrarFPS) if(fr%60==0) console.log("fps: "+fps);
			//if(fr%2==0){
				movCamara2(nivel);
				stage.update();
			//} 
			if(fr%2==0 && fr>10){
				ordenarTipitos();
				actualizarMapita();
			} 


			//requestAnimationFrame(gameLoop);
		} //pause



		
		
} //fin gameloop

function coord2Tiles(num){
	return Math.floor(num/tile);
}

function colisionItems(tipo, obj){

	rta=false;
	if(tipo.x>obj.x && tipo.x<obj.x+obj.nominalBounds.width){
		if(tipo.y>obj.y && tipo.y<obj.y+obj.nominalBounds.height){

			rta=true
		}

	}
	return rta;
		
}

function colisionItemsXY(obj,x,y){
//no la uso al final
	var rta=false;
	for(i=0;i<nivel.escenario.objetos.length;i++){
		if(nivel.escenario.objetos.children[i].hitTest(x-nivel.escenario.objetos.children[i].x,y-nivel.escenario.objetos.children[i].y)){
			return true;
		}
		

	}


	return rta;
		
}

function movCamara2(){

		nivel.x=mitadX-hero.x;
		limiteAlto=-nivel.escenario.piso.nominalBounds.height+canvas.height;

			if(hero.y>nivel.escenario.piso.nominalBounds.height-canvas.height/2){
				nivel.y-=parseInt((nivel.y-limiteAlto)/10);
				

			}else if(hero.y<canvas.height/2){
				nivel.y-=parseInt((nivel.y)/10);
			}else{
				nivel.y+=((mitadY-hero.y)-nivel.y)*coeficiente;
			}

			if(hero.x>nivel.escenario.piso.nominalBounds.width-canvas.width/2){
				nivel.x=-nivel.escenario.piso.nominalBounds.width+canvas.width;
			}else if(hero.x<canvas.width/2){
				nivel.x=0;
			}else{
				nivel.x+=((mitadX-hero.x)-nivel.x)*coeficiente;
			}

}

function setupMapita(){
	mapita=new lib.mapita();
	

	stage.addChild(mapita);
	var arr=[];
	arr.push(nivel.escenario.objetos.herrera);
	arr.push(nivel.escenario.objetos.rebbcuerpo);
	arr.push(nivel.escenario.objetos.gasparini);
	arr.push(nivel.escenario.objetos.carno);
	arr.push(nivel.escenario.objetos.piat);
	arr.push(nivel.escenario.objetos.unenlagia);
	arr.push(nivel.escenario.objetos.muss);
	arr.push(nivel.escenario.objetos.megaraptor);
	arr.push(nivel.escenario.objetos.plesio);
	arr.push(nivel.escenario.objetos.mosa);
	arr.push(nivel.escenario.objetos.eoraptor);
	arr.push(nivel.escenario.objetos.giganoto);
	arr.push(nivel.escenario.objetos.futa);
	arr.push(nivel.escenario.objetos.buitre);
	for(i=0;i<arr.length;i++){
		posX=arr[i].x/nivel.escenario.piso.nominalBounds.width;
		posY=arr[i].y/nivel.escenario.piso.nominalBounds.height;
		pto=new lib.puntitoDino();
		pto.x=mapita.mapa.nominalBounds.width*posX;
		pto.y=mapita.mapa.nominalBounds.height*posY;
		mapita.mapa.addChild(pto);
	}

	


}

function actualizarMapita(){
	posX=hero.x/nivel.escenario.piso.nominalBounds.width;
	posY=hero.y/nivel.escenario.piso.nominalBounds.height;
	//console.log(posX,posY)
	mapita.mapa.puntito.x=mapita.mapa.nominalBounds.width*posX;
	mapita.mapa.puntito.y=mapita.mapa.nominalBounds.height*posY;
	
}

function movCamara(nivel){

			//mov camara
			//console.log(hero.x+" "+nivel.x);

			nivel.x=mitadX-hero.x;
			if(hero.y>nivel.escenario.piso.nominalBounds.height-canvas.height/2){
				nivel.y=-nivel.escenario.piso.nominalBounds.height+canvas.height;
			}else if(hero.y<canvas.height/2){
				nivel.y=0;
			}else{
				nivel.y=mitadY-hero.y;
			}

			if(hero.x>nivel.escenario.piso.nominalBounds.width-canvas.width/2){
				nivel.x=-nivel.escenario.piso.nominalBounds.width+canvas.width;
			}else if(hero.x<canvas.width/2){
				nivel.x=0;
			}else{
				nivel.x=mitadX-hero.x;
			}


}
function calcularColision(x1, y1, x2, y2, width1, width2){
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	if(distancia<=(width1/2+ width2/2)){ 
		return 1				
	}else{
		return 0
	}
}

function estanEnElMismoTile(obj1,obj2){
	if(obj1.tileX==obj2.tileX && obj1.tileY==obj2.tileY) return true;
	else return false;
}


function calcularDistancia(x1,y1,x2,y2){
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	return distancia;
}

function floorTile(n){
	return Math.floor(n/tile)*tile;

}

//no sirve para spots
function calcularDistanciaObj(o1,o2){
	x1=o1.x;
	y1=o1.y;
	x2=o2.x;
	y2=o2.y;
	distX=x1-x2;
	distY=y1-y2;
	distancia=Math.sqrt(distX*distX+distY*distY);
	return distancia;
}

function calcularSteps(obj1, obj2){


	difX=obj1.x-obj2.x;
	difY=obj1.y-obj2.y;
	hipotenusa=Math.sqrt(difX*difX+difY*difY);
	seno=difY/hipotenusa;
	coseno=difX/hipotenusa;
	stepY=seno;
	stepX=coseno;
	objReturn= new Object();
	objReturn.stepX=stepX;
	objReturn.stepY=stepY;
	return objReturn;
}

function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.

	//exportRoot = new lib.necromancer();

	

	stage = new createjs.Stage(canvas);
	//createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	//stage.addChild(exportRoot);
	canvas.addEventListener("click", fullscreen);
	stage.snapToPixel=true;
	createjs.Ticker.setFPS(24);

	createjs.Ticker.addEventListener("tick", gameLoop);
	//createjs.Ticker.addEventListener("tick", stage);

	//fnStartAnimation();
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  setupJuego();
  
	
}


 function Comparator(a, b) {
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
 }

function ordenarHero(){
	objs=nivel.escenario.objetos.children;
	cualObj={};
	arrayParaOrdenar=[]; //array bidimensional q va a tener la data de los panes, para ordenarlos.
	for(i=0; objs.length>i;i++){
		arrayParaOrdenar.push([Math.floor(objs[i].y), objs[i]]);
	}
	arrayParaOrdenar.push([Math.floor(hero.y), hero]); //meto a bellota para ordenarla
	arrayParaOrdenar.sort(Comparator);//ordena el primer valor del array [este][esteNo]
	
	for(i=0; i<arrayParaOrdenar.length;i++){
		if(arrayParaOrdenar[i][1]==hero){
			nivel.escenario.objetos.setChildIndex(hero, i+2);
			break;
		}	
	}
	
}

function ordenarTipitos(){
	objs=nivel.escenario.objetos.children;
	arrayParaOrdenar=[]; //array bidimensional q va a tener la data de los panes, para ordenarlos.
	for(i=0; objs.length>i;i++){
		arrayParaOrdenar.push([Math.floor(objs[i].y), objs[i]]);
	}
	arrayParaOrdenar.push([Math.floor(hero.y), hero]); //meto a bellota para ordenarla
	
	arrayParaOrdenar.sort(Comparator);//ordena el primer valor del array [este][esteNo]
	//yPanes.reverse(); 
	for(i=0; i<arrayParaOrdenar.length;i++){
		nivel.escenario.objetos.setChildIndex(arrayParaOrdenar[i][1], i);		
	}

	//console.log(yPanes);
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function fullscreen(){
           var el = document.getElementById('canvas');

           if(el.webkitRequestFullScreen) {
               el.webkitRequestFullScreen();
           }
          else {
             el.mozRequestFullScreen();
          }            
}


function downloadJSON(que){

	 var atag = document.createElement("a");
  var file = new Blob([stringify(que, null, 2)], {type: 'text/plain'});
  atag.href = URL.createObjectURL(file);
  atag.download = "grid.json";
  atag.click();
}

function bajarGrid(){
	downloadJSON(simplificarGrid());
}

function parsearGridCargada(g){
	try{g=JSON.parse(g);}catch(e){console.log(e)}
	arr=new Array(anchoTiles);
	for(i=0;i<g.length;i++){
		arr[i]=new Array(altoTiles);
		for(j=0;j<g[0].length;j++){
			
			if(g[i][j]==1) arr[i][j]=new Spot(i,j, true);
			else arr[i][j]=new Spot(i,j, false);
		}
	}
	return arr;
}

function simplificarGrid(){
	arr=new Array(anchoTiles);
	for(i=0;i<anchoTiles;i++){
		arr[i]=new Array(altoTiles);
		for(j=0;j<altoTiles;j++){
			
			if(grid[i][j].muro) arr[i][j]=1;
			else arr[i][j]=0;
		}
	}
	return arr;

}


function volverALaApp(){
	if(getQueryVariable("app")!=false){
		console.log("####LA ORIENTACION AHORA ES:",screen.orientation);
		 window.screen.orientation.lock('portrait'); 
		 console.log("####LA ORIENTACION AHORA ES:",screen.orientation);
			//if(confirm("Are you sure you want to go back?")){
				//window.history.back();
		  document.location.href="../../index.html?minijuegos=1";
			//}
		}else{
			if(confirm("Download App?")){
				 window.open('https://play.google.com/store/apps/details?id=com.pixeloide.giantsOfPatagonia2', '_blank');
			}
		}
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}



var varTimeout;

 function showText  ( message, index, interval) {   

 //	if(message.length>155) console.log("CUIDADO Q EL MENSAJE NO DEBERIA TENER MAS DE 150 CARACTERES");
 
 	if(index==0) popup.mensajeDino.text="";
  if (index < message.length) {
  
    popup.mensajeDino.text+=message[index++];
  varTimeout=  setTimeout(function () { showText( message, index, interval); }, interval);
  }
}