(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1136,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arbol1.png?1505156252752", id:"arbol1"},
		{src:"images/arbol2.png?1505156252752", id:"arbol2"},
		{src:"images/arbol3.png?1505156252752", id:"arbol3"},
		{src:"images/arbol4.png?1505156252752", id:"arbol4"},
		{src:"images/arbolmuerto1.png?1505156252752", id:"arbolmuerto1"},
		{src:"images/arbolmuerto2.png?1505156252752", id:"arbolmuerto2"},
		{src:"images/Bitmap1.png?1505156252752", id:"Bitmap1"},
		{src:"images/Bitmap10.png?1505156252752", id:"Bitmap10"},
		{src:"images/Bitmap12.png?1505156252752", id:"Bitmap12"},
		{src:"images/Bitmap14.png?1505156252752", id:"Bitmap14"},
		{src:"images/Bitmap15.png?1505156252752", id:"Bitmap15"},
		{src:"images/Bitmap16.png?1505156252752", id:"Bitmap16"},
		{src:"images/Bitmap17.png?1505156252752", id:"Bitmap17"},
		{src:"images/Bitmap18.png?1505156252752", id:"Bitmap18"},
		{src:"images/Bitmap19.png?1505156252752", id:"Bitmap19"},
		{src:"images/Bitmap2.png?1505156252752", id:"Bitmap2"},
		{src:"images/Bitmap20.png?1505156252752", id:"Bitmap20"},
		{src:"images/Bitmap21.png?1505156252752", id:"Bitmap21"},
		{src:"images/Bitmap22.png?1505156252752", id:"Bitmap22"},
		{src:"images/Bitmap23.png?1505156252752", id:"Bitmap23"},
		{src:"images/Bitmap24.png?1505156252752", id:"Bitmap24"},
		{src:"images/Bitmap25.png?1505156252752", id:"Bitmap25"},
		{src:"images/Bitmap26.png?1505156252752", id:"Bitmap26"},
		{src:"images/Bitmap27.png?1505156252752", id:"Bitmap27"},
		{src:"images/Bitmap28.png?1505156252752", id:"Bitmap28"},
		{src:"images/Bitmap29.png?1505156252752", id:"Bitmap29"},
		{src:"images/Bitmap3.png?1505156252752", id:"Bitmap3"},
		{src:"images/Bitmap30.png?1505156252752", id:"Bitmap30"},
		{src:"images/Bitmap31.png?1505156252752", id:"Bitmap31"},
		{src:"images/Bitmap32.png?1505156252752", id:"Bitmap32"},
		{src:"images/Bitmap33.png?1505156252752", id:"Bitmap33"},
		{src:"images/Bitmap34.png?1505156252752", id:"Bitmap34"},
		{src:"images/Bitmap35.png?1505156252752", id:"Bitmap35"},
		{src:"images/Bitmap36.png?1505156252752", id:"Bitmap36"},
		{src:"images/Bitmap37.png?1505156252752", id:"Bitmap37"},
		{src:"images/Bitmap38.png?1505156252753", id:"Bitmap38"},
		{src:"images/Bitmap39.png?1505156252753", id:"Bitmap39"},
		{src:"images/Bitmap4.png?1505156252753", id:"Bitmap4"},
		{src:"images/Bitmap40.png?1505156252753", id:"Bitmap40"},
		{src:"images/Bitmap41.png?1505156252753", id:"Bitmap41"},
		{src:"images/Bitmap42.png?1505156252753", id:"Bitmap42"},
		{src:"images/Bitmap43.png?1505156252753", id:"Bitmap43"},
		{src:"images/Bitmap44.png?1505156252753", id:"Bitmap44"},
		{src:"images/Bitmap45.png?1505156252753", id:"Bitmap45"},
		{src:"images/Bitmap46.png?1505156252753", id:"Bitmap46"},
		{src:"images/Bitmap47.png?1505156252753", id:"Bitmap47"},
		{src:"images/Bitmap48.png?1505156252753", id:"Bitmap48"},
		{src:"images/Bitmap49.png?1505156252753", id:"Bitmap49"},
		{src:"images/Bitmap5.png?1505156252753", id:"Bitmap5"},
		{src:"images/Bitmap50.png?1505156252753", id:"Bitmap50"},
		{src:"images/Bitmap51.png?1505156252753", id:"Bitmap51"},
		{src:"images/Bitmap52.png?1505156252753", id:"Bitmap52"},
		{src:"images/Bitmap53.png?1505156252753", id:"Bitmap53"},
		{src:"images/Bitmap54.png?1505156252753", id:"Bitmap54"},
		{src:"images/Bitmap55.png?1505156252753", id:"Bitmap55"},
		{src:"images/Bitmap56.png?1505156252753", id:"Bitmap56"},
		{src:"images/Bitmap57.png?1505156252753", id:"Bitmap57"},
		{src:"images/Bitmap58.png?1505156252753", id:"Bitmap58"},
		{src:"images/Bitmap59.png?1505156252753", id:"Bitmap59"},
		{src:"images/Bitmap6.png?1505156252753", id:"Bitmap6"},
		{src:"images/Bitmap7.png?1505156252753", id:"Bitmap7"},
		{src:"images/Bitmap8.png?1505156252753", id:"Bitmap8"},
		{src:"images/Bitmap9.png?1505156252753", id:"Bitmap9"},
		{src:"images/Boton3.png?1505156252753", id:"Boton3"},
		{src:"images/buitre.png?1505156252753", id:"buitre"},
		{src:"images/carnotaurus.png?1505156252753", id:"carnotaurus"},
		{src:"images/eoraptor.png?1505156252753", id:"eoraptor"},
		{src:"images/futa.png?1505156252753", id:"futa"},
		{src:"images/gasparinisaura.png?1505156252753", id:"gasparinisaura"},
		{src:"images/giganoto.png?1505156252753", id:"giganoto"},
		{src:"images/herrera.png?1505156252753", id:"herrera"},
		{src:"images/megaraptor.png?1505156252753", id:"megaraptor"},
		{src:"images/muss.png?1505156252753", id:"muss"},
		{src:"images/orilla.png?1505156252753", id:"orilla"},
		{src:"images/piat.png?1505156252753", id:"piat"},
		{src:"images/piatpngcopy.png?1505156252753", id:"piatpngcopy"},
		{src:"images/piedrotas.png?1505156252753", id:"piedrotas"},
		{src:"images/pissps.jpg?1505156252753", id:"pissps"},
		{src:"images/rebb.png?1505156252753", id:"rebb"},
		{src:"images/roca1.png?1505156252753", id:"roca1"},
		{src:"images/roca2.png?1505156252753", id:"roca2"},
		{src:"images/roca3.png?1505156252753", id:"roca3"},
		{src:"images/roca4.png?1505156252753", id:"roca4"},
		{src:"images/RoundedRectangle1.png?1505156252753", id:"RoundedRectangle1"},
		{src:"images/sombragiganoto.png?1505156252753", id:"sombragiganoto"},
		{src:"images/sombragrande.png?1505156252753", id:"sombragrande"},
		{src:"images/sombra.png?1505156252753", id:"sombra"},
		{src:"images/unenlagia.png?1505156252753", id:"unenlagia"}
	]
};



// symbols:



(lib.arbol1 = function() {
	this.initialize(img.arbol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,399);


(lib.arbol2 = function() {
	this.initialize(img.arbol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,405);


(lib.arbol3 = function() {
	this.initialize(img.arbol3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,355);


(lib.arbol4 = function() {
	this.initialize(img.arbol4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,248);


(lib.arbolmuerto1 = function() {
	this.initialize(img.arbolmuerto1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,331);


(lib.arbolmuerto2 = function() {
	this.initialize(img.arbolmuerto2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,329);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,270);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,247);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,222);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,142);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,136);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,140);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,132);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,132);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,131);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,131);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,130);


(lib.Bitmap24 = function() {
	this.initialize(img.Bitmap24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,133);


(lib.Bitmap25 = function() {
	this.initialize(img.Bitmap25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,131);


(lib.Bitmap26 = function() {
	this.initialize(img.Bitmap26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,131);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,134);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,132);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.Bitmap30 = function() {
	this.initialize(img.Bitmap30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,138);


(lib.Bitmap31 = function() {
	this.initialize(img.Bitmap31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap32 = function() {
	this.initialize(img.Bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,131);


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,134);


(lib.Bitmap35 = function() {
	this.initialize(img.Bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,131);


(lib.Bitmap37 = function() {
	this.initialize(img.Bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,131);


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Bitmap40 = function() {
	this.initialize(img.Bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap41 = function() {
	this.initialize(img.Bitmap41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,136);


(lib.Bitmap43 = function() {
	this.initialize(img.Bitmap43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,132);


(lib.Bitmap44 = function() {
	this.initialize(img.Bitmap44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,177);


(lib.Bitmap45 = function() {
	this.initialize(img.Bitmap45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,153);


(lib.Bitmap46 = function() {
	this.initialize(img.Bitmap46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,7);


(lib.Bitmap47 = function() {
	this.initialize(img.Bitmap47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,208);


(lib.Bitmap48 = function() {
	this.initialize(img.Bitmap48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,121);


(lib.Bitmap49 = function() {
	this.initialize(img.Bitmap49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,4);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,276);


(lib.Bitmap50 = function() {
	this.initialize(img.Bitmap50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,270);


(lib.Bitmap51 = function() {
	this.initialize(img.Bitmap51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,76);


(lib.Bitmap52 = function() {
	this.initialize(img.Bitmap52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,76);


(lib.Bitmap53 = function() {
	this.initialize(img.Bitmap53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,213);


(lib.Bitmap54 = function() {
	this.initialize(img.Bitmap54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,425,215);


(lib.Bitmap55 = function() {
	this.initialize(img.Bitmap55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,254);


(lib.Bitmap56 = function() {
	this.initialize(img.Bitmap56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,246);


(lib.Bitmap57 = function() {
	this.initialize(img.Bitmap57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,243);


(lib.Bitmap58 = function() {
	this.initialize(img.Bitmap58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,226);


(lib.Bitmap59 = function() {
	this.initialize(img.Bitmap59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,231);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,282);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,234);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,940);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,274);


(lib.Boton3 = function() {
	this.initialize(img.Boton3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,230);


(lib.buitre = function() {
	this.initialize(img.buitre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,299);


(lib.carnotaurus = function() {
	this.initialize(img.carnotaurus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,593,450);


(lib.eoraptor = function() {
	this.initialize(img.eoraptor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,242);


(lib.futa = function() {
	this.initialize(img.futa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,765,821);


(lib.gasparinisaura = function() {
	this.initialize(img.gasparinisaura);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,116);


(lib.giganoto = function() {
	this.initialize(img.giganoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,429);


(lib.herrera = function() {
	this.initialize(img.herrera);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,160);


(lib.megaraptor = function() {
	this.initialize(img.megaraptor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,527,223);


(lib.muss = function() {
	this.initialize(img.muss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,197);


(lib.orilla = function() {
	this.initialize(img.orilla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,412);


(lib.piat = function() {
	this.initialize(img.piat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,320);


(lib.piatpngcopy = function() {
	this.initialize(img.piatpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,320);


(lib.piedrotas = function() {
	this.initialize(img.piedrotas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,670,565);


(lib.pissps = function() {
	this.initialize(img.pissps);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1136,640);


(lib.rebb = function() {
	this.initialize(img.rebb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,589,521);


(lib.roca1 = function() {
	this.initialize(img.roca1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,119);


(lib.roca2 = function() {
	this.initialize(img.roca2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,159);


(lib.roca3 = function() {
	this.initialize(img.roca3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,190);


(lib.roca4 = function() {
	this.initialize(img.roca4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,192);


(lib.RoundedRectangle1 = function() {
	this.initialize(img.RoundedRectangle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,83);


(lib.sombragiganoto = function() {
	this.initialize(img.sombragiganoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,678,326);


(lib.sombragrande = function() {
	this.initialize(img.sombragrande);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,370);


(lib.sombra = function() {
	this.initialize(img.sombra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,55);


(lib.unenlagia = function() {
	this.initialize(img.unenlagia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,158);


(lib.volver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buitre();
	this.instance.setTransform(-138.2,-117.4,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-117.4,276.5,234.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap45();
	this.instance.setTransform(-83,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-76.5,166,153);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombra();
	this.instance.setTransform(-206.5,-49.4,1.502,1.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-49.4,413,98.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombra();
	this.instance.setTransform(-206.5,-49.4,1.502,1.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-49.4,413,98.9);


(lib.tree2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbol1();
	this.instance.setTransform(-135.5,-355.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-355.8,282,399);


(lib.tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2iA7IAAh1MAtFAAAIAAB1g");
	this.shape.setTransform(1139.7,-1278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AifCgIAAk/IE/AAIAAE/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-1284,1300,1300);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AHgLLIAA2VIu/AAIAAWVg");
	this.shape.setTransform(0.7,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.278)").s().p("AnfLKIAA2TIO+AAIAAWTg");
	this.shape_1.setTransform(0.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-71.1,98,145);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(254,254,254,0.996)").s().p("AIHKFQhkhtmon2QnFoWhth4QgBgEgQgRQgQgSgGgQQDVAaFcBNQCzAoDjA1QAHACAGgDIAGANIAnAVQAcBQAOBXQAdDBBECxQBsEYiBDYIgJBTQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABIgCADIgEgfg");
	this.shape.setTransform(63.5,67.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0CA8C0").s().p("AINKWIgtgwQg2g4h2iUQirjZgXgcQiZi6kXlIQiji/hhiEQARgFAZADQANABAMADQBsB5HEIYQGpH0BlBtIAEAfQgOAZgcAYQgEgHgIgHgAGhoQIgLgvQANAWALAYQgEABgEAAIgFAAg");
	this.shape_1.setTransform(58,72.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.3,140.3);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(254,254,254,0.996)").s().p("AsBeqIn2gpI1DiNIgqpEIhZ34IgZjLIgSnxIgqrqIgkm6IBzgHIMDAMILEgGIIxAEIREgGIABABIaxhAICEgFIAZCyMAJvBEtg");
	this.shape.setTransform(287.1,236.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0CA8C0").s().p("EAgsggXIBkBtIDsZ7MAFaApBIg6AEgEgnXAdrIgagXIjLAAIgag7IVECOgEATlgjmIEKgDIAFgIQAGgKAHABQAEAAAcAFQAdAFAFAAQAKAAAIgRIDhgCIARgSIBJBRI6xBAIgCgBIxDAGg");
	this.shape_1.setTransform(302.7,232.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,580.2,465.2);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.giganoto();
	this.instance.setTransform(-251.5,-435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-435,490,429);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombragiganoto();
	this.instance.setTransform(-339,-326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339,-326,678,326);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eoraptor();
	this.instance.setTransform(-146.5,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-242,293,242);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap54();
	this.instance.setTransform(-212.5,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-215,425,215);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.futa();
	this.instance.setTransform(-382.5,-821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.5,-821,765,821);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADaAAQAABKhAA0QhAA1haAAQhZAAhAg1QhAg0AAhKQAAhJBAg1QBAg0BZAAQBaAABAA0QBAA1AABJg");
	this.shape.setTransform(4.8,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-44.7,45.6,37.9);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap49();
	this.instance.setTransform(-27.5,-7.5,1.84,1.45);

	this.instance_1 = new lib.Bitmap46();
	this.instance_1.setTransform(14.3,-1.1,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-7.5,46,5.8);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.megaraptor();
	this.instance.setTransform(263.5,-223,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,-223,527,223);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piedrotas();
	this.instance.setTransform(-335,-565);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-565,670,565);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.muss();
	this.instance.setTransform(-211.5,-197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-197,423,197);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gasparinisaura();
	this.instance.setTransform(168,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,116);


(lib.Symbol46copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap50();
	this.instance.setTransform(-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.2,135,270);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap48();
	this.instance.setTransform(-94.9,150.1);

	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,0,230,271.1);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhEmBrRMAAAjWhMCJNAAAMAAADWhg");
	this.shape.setTransform(421.1,686.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,878.2,1373);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34D7F5").s().p("Eg4NAA4IAAhvMBwbAAAIAABvg");
	this.shape.setTransform(359.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,719.8,11.3);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEFE").s().p("Ah5DxIgTnmIBngEIAACwIBhiYIBNAZIhwDJIB0DWIhXAWIhaiTIgBAAIAACgg");
	this.shape.setTransform(76.5,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFEFE").s().p("AhcDkQgOgRgUhrQgYiJAAhNQgBhUAcgRQAygiBngHQBdAAASBBQAKApAABEQAACpg3B3QgNAXgdAKQgTAGgwAEIgEAAQg4AAgTgZgAg3h9QgPAQAVCcQAMBPAFAKQAIAOAYAAQASgCAHgDQAMgGAFgOQAWhGAAhiQAAgogEgYQgGgggmgGIgOAAQgkAAgVAUg");
	this.shape_1.setTransform(45.1,49.6);

	this.instance = new lib.RoundedRectangle1();
	this.instance.setTransform(0,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,0,51,0)").s().p("AucLGIAA2LIc5AAIAAWLg");
	this.shape_2.setTransform(60.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-21.4,185.1,142);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unenlagia();
	this.instance.setTransform(-129.5,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-158,259,158);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombra();
	this.instance.setTransform(-31.5,-25.3,0.229,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-25.3,63,25.3);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombragrande();
	this.instance.setTransform(-325.5,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.5,-370,651,370);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.rebb, null, new cjs.Matrix2D(1,0,0,1,-183.8,-143.3)).s().p("AtuWjIgFjiQgZgSgFgWQgPhBgfgeIAAgBQgOgNgJgSIgBgFIAAiTQgSgngngdIAAAAQg8grgehDIgegQQgEgCgBgCQgthxgNh8QgKhiAAhiIgegfIgCgEQgviPhfhZIAAAAQgxgxg3gsQilhNihgQQgEAAgDgDQgCgDAAgEIAAzUQAAgEADgDQADgDAEAAMAi+AAAIA2AUQCqA/BJAfQCFA6BhA9QChBmCtC/QA7BCBYBpICQCuQBmB4BuBwIkHBJIFYUqIAAAGQgBADgDACIgGACIgSAAQjmgDjSA9IAAAAQiPAph3A+QADBigDBeQgugjhNgRQhzgXiTAPQgmAEgzAJQghgygkgwQhFhdgwhsIh+gQQiyBDh9gJQh8gJhaBqQACAigOAcQgSAkgfAbQgSARAHAeIAUA4g");
	this.shape.setTransform(0,-144.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.8,-288.7,369.6,288.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.rebb, null, new cjs.Matrix2D(1,0,0,1,-316,-381.4)).s().p("AmlV9IqSAAIgFgBIgDgCQiZi1hEkIQgVhVgKhZQgqgngGg7QgEgsgHgxIgLhEIgUgKIgDgDIgCgEQgSiVgIiWQgJjDgBjCIAAgYIAAgBQACgYAPgWIAAAAIAQgYIAAAAQAJgPgEgTIAAAAQgCgNAAgNQAAgDABgCIAig4IAAhPIgWg3IhEgtIgDgEIgkg7IgBgEIgYjUIgviCIAAgBQgLgsAdgYQAbgYARghQAMgYgDgeQgBgEADgDQBniMCNgwQCfg3CvANQAEABACACIBfBTIACADQAvBrBFBcQBWBzBHB8IABACQA7CzBQCmIAAAAQBBCFAsCVIAWAWQADADAAAEIAABcIARAZQAEkSAkkzQAZjfgHj6QAAgDABgDQACgCACgBQB7hCCTgqIAAAAQDVg9DoACIA7gBIADABQFOBkCxEiQKBQeh/S3QgFApgNAlQgBADgDACQgCABgDAAI2NAAIgEgBIgEgCInCoYQBXFYiyDAIgDADIgEAAIAAAAg");
	this.shape.setTransform(0,-139.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.4,-280.1,320.9,281.2);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A2B36").s().p("Aj6A1IAAhpIH1AAIAABpg");
	this.shape.setTransform(-2,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-10.6,50.3,10.6);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.rebb, null, new cjs.Matrix2D(1,0,0,1,-49,-249.2)).s().p("AnzTyMAAAgnZQAAgDACgCIAEgEQACgBAEAAQCkARCqBPIABABQA5AtAyAyQBgBeAwCTIAfAfQADADAAAEQAABkAKBiQAMB3ArBtIAdAPQAEABACAEQAbBAA5ApQAtAhAUAtIABAEIAACUQAHANALAJQAiAiARBGQAFARAWAPIADAEIABAEIARL+QAAADgCACIgfAwQAAAvAFAwQALBpgIBeg");
	this.shape.setTransform(0,-111.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-238.4,100,253.3);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piat();
	this.instance.setTransform(-161,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-320,322,320);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD5E+QAegeAXgjQA8hegHhyQgJiIhlhhQhchXh/gJQiegJh0BxQhoBlgCCOIhjAAQAAg+ARg5QAxioCThdQCYhgCwAkQCnAhBoCJQBmCGgICnQgJCth9B5g");
	this.shape.setTransform(0,-38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AECE7IgCgCIAMgNQAVgYARgcQA4hegJhvQgCgXgEgUQgXhrhUhOQgfgcgigUQhFgnhUgFQhugFhbA4QgkAWghAhQheBcgJB+IgCAWIhiAAQAAg9ARg5IAKgdQAziRCEhVQAvgeAygSQBtgmB3AXQBhATBNA2QA1AlArA3QBWBtALCFQACAagBAbQgFCehnB0IgSARg");
	this.shape_1.setTransform(-0.2,-39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEIE3IgCgCIALgNQAUgYAQgcQA2hegMhtQgCgXgFgTQgZhphUhMQgfgbgjgTQhFglhSgEQhtgEhZA4QgkAXghAgQhcBcgJB9IgCAVIhhAAQgBg8ARg5IAKgdQAyiQCChUQAvgfAxgSQBsgmB1AVQBhARBNA1QA1AkArA1QBXBqANCEQADAZgBAaQgCCchiB1IgRAQg");
	this.shape_2.setTransform(-0.3,-40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEOEyIgCgCIALgNQATgYAPgcQAyhdgOhsQgDgWgFgTQgbhnhUhJQgfgagjgSQhFgkhRgDQhsgDhYA5QgkAXgfAgQhaBbgJB9IgEAUIhgAAQAAg8AQg4IAKgdQAyiPB/hVQAugeAxgSQBrgoB0AUQBgAQBNAzQA1AjArAzQBYBoAQCBQADAZAAAaQABCahdB1IgSAPg");
	this.shape_3.setTransform(-0.5,-40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AEUEuIgCgCIAKgNQASgZAOgbQAvhdgQhqQgEgVgFgTQgdhlhUhHQgfgZgjgRQhFgihQgCQhqgChYA5QgjAXgfAgQhYBbgJB8IgEATIhfAAQgBg8ARg3IAJgdQAxiOB+hUQAtgfAxgSQBpgoBzASQBfAOBNAyQA1AhAsAyQBYBlASB/QADAZABAZQAFCYhYB1IgSAPg");
	this.shape_4.setTransform(-0.6,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AEZEpIgBgCIAJgNQARgZANgbQArhdgShnQgEgVgGgTQgfhjhUhEQgfgYgjgRQhEgghQgBQhoAAhXA5QgiAXgfAgQhXBbgIB6IgFASIheAAQgBg7AQg3IAKgcQAwiNB8hUQAsgfAwgSQBpgpBxAQQBeANBNAwQA2AgArAxQBZBiAVB9QAEAYABAZQAICVhTB2IgSAOg");
	this.shape_5.setTransform(-0.7,-42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AEgElIgCgCIAJgNQAQgZAMgbQAohcgVhmQgEgVgHgSQghhhhUhBQgfgYgjgQQhFgfhOAAQhnAChVA6QgiAXgeAfQhWBbgIB5IgFARIheAAQAAg6AQg2IAJgdQAviMB6hUQAsgeAwgTQBngqBwAPQBdAMBNAtQA1AgAsAvQBaBfAXB7QAFAYACAYQALCThPB3IgSANg");
	this.shape_6.setTransform(-0.9,-42.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AElEgIgBgCIAIgNQAOgZAMgbQAkhcgXhkQgFgUgHgSQgihfhVg/QgfgWgjgPQhEgehMACQhoAChUA6QghAYgeAfQhTBagIB5IgGAQIhdAAQAAg6APg2IAJgcQAviLB3hUQAsgeAvgUQBmgqBvANQBcALBNAsQA1AeAtAtQBaBdAaB5QAFAXADAYQAPCRhLB3IgSANg");
	this.shape_7.setTransform(-1,-43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AEqEcIgBgCIAIgOQANgYAKgbQAhhcgZhiQgFgUgIgRQgkhdhVg8QgfgWgjgOQhEgchKACQhnAEhTA7QghAXgdAfQhSBagHB4IgHAPIhcAAQgBg5APg4IAJgaQAviKB1hUQArgeAugUQBlgrBuAMQBaAJBOAqQA2AdAsAsQBaBaAeB3QAFAXADAYQASCOhFB4IgTAMg");
	this.shape_8.setTransform(-1,-44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AEwEYIgCgCIAIgOQAMgZAJgaQAehcgbhgQgGgTgIgRQgnhbhUg6QgggVgigNQhFgbhJAEQhlAFhSA7QghAYgcAfQhQBZgHB3IgIAOIhbAAQgBg5APg3IAJgaQAtiJB0hTQAqgfAugUQBkgrBsAKQBaAIBOAoQA1AcAtAqQBbBXAgB1QAGAXADAXQAWCMhBB4IgTALg");
	this.shape_9.setTransform(-1.1,-44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AE1EUIgBgCIAGgOQAMgZAIgbQAahbgdheQgHgTgIgQQgphahUg3QgggUgigMQhFgZhIAEQhkAHhQA8QghAXgbAfQhPBZgHB2IgIANIhbAAQAAg4AOg3IAJgZQAtiIByhUQApgeAtgVQBjgsBrAIQBYAHBOAnQA2AaAtApQBbBUAjBzQAHAWAEAXQAZCKg9B5IgSAKg");
	this.shape_10.setTransform(-1.2,-45.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AE6EPIgBgCIAGgOQAKgZAHgaQAXhbgfhcQgHgTgJgQQgrhXhUg1QgggTgjgMQhEgXhHAFQhiAJhQA8QggAXgbAfQhNBWgGB3IgKAMIhZAAQgBg3APg2IAIgbQAsiFBwhUQApgeAtgVQBhgtBqAHQBXAFBOAlQA2AZAtAoQBcBQAmB0QAHAUAEAWQAcCHg3B6IgTAKg");
	this.shape_11.setTransform(-1.2,-46.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AE+ELIgBgCIAGgOQAKgZAGgaQAThbgihaQgHgSgKgQQgthVhUgyQgggSgigMQhFgVhGAHQhgAJhPA8QgfAZgaAeQhMBWgGB1IgKALIhZAAQgBg2AOg2IAJgbQAriEBuhTQAogeAsgVQBhguBoAFQBWAEBPAjQA2AYAtAnQBcBNAoByQAIATAFAWQAgCFgzB6IgTAJg");
	this.shape_12.setTransform(-1.2,-47);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AFDEHIgBgCIAFgOQAJgZAFgaQAPhbgkhYQgHgRgKgQQgvhThVgwQgfgRgjgLQhEgThFAHQhfALhOA9QgfAYgZAeQhLBWgFB0IgLAKIhYAAQgBg2AOg1IAIgaQAriDBshUQAngeAsgVQBfgvBnAEQBWACBOAiQA2AXAuAlQBdBKAqBwQAIATAGAVQAjCDguB7IgTAIg");
	this.shape_13.setTransform(-1.2,-47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AFHEDIAAgCIAEgOQAIgZAEgbQAMhagmhWQgIgQgLgQQgxhShUgsQgggRgjgKQhEgShEAJQheAMhMA9QgeAZgZAdQhJBWgFBzIgMAJIhXAAQgBg1AOg1IAIgaQAqiCBqhTQAmgeAsgWQBegvBmABQBUACBOAfQA3AWAtAkQBeBHAtBuQAJASAGAWQAmCAgpB8IgTAHg");
	this.shape_14.setTransform(-1.2,-48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AFLD/IAAgCIADgOQAHgZADgaQAJhagohVQgJgPgLgQQgzhPhUgrQgggPgjgKQhEgQhDAKQhcANhMA+QgeAYgYAeQhHBVgFByIgMAIIhXAAQAAg0ANg0IAIgaQApiCBohTQAmgeArgWQBdgwBlABQBTAABOAdQA3AVAuAiQBeBFAwBsQAJARAGAVQAqB+gkB8IgTAHg");
	this.shape_15.setTransform(-1.2,-49.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AFPD7IAAgCIADgOQAGgaACgaQAFhZgqhSQgKgPgLgQQg1hOhUgnQgggPgjgIQhEgPhCAKQhbAPhKA/QgeAYgXAdQhGBVgEByIgOAHIhVAAQgBg1ANgzIAIgaQAoiABnhTQAlgeAqgXQBcgwBlgCQBQgBBPAcQA3AUAuAgQBeBCAzBqQAKATAHATQAtB8ggB8IgTAGg");
	this.shape_16.setTransform(-1.1,-49.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AFTD3IgBgCIADgPQAFgZABgaQAChZgthQQgKgPgLgQQg3hLhVglQgggOgjgHQhEgOhAAMQhaAQhJA/QgdAZgXAdQhEBUgEBxIgOAGIhVAAQgBg0ANgzIAHgaQAoh/BkhTQAlgeAqgXQBbgxBkgDQBOgCBQAaQA2ASAvAfQBeA/A2BoQAKATAIASQAwB6gbB9IgTAFg");
	this.shape_17.setTransform(-1,-50.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AFXDzIgBgCIACgOQAEgaAAgaQgBhYgwhPQgKgOgMgPQg5hKhVgiQgfgNgjgHQhFgMg/ANQhYAShIA/QgdAZgWAdQhDBTgEBwIgOAFIhUAAQgBgzANgyIAHgaQAnh+BihTQAkgeAqgXQBZgyBjgFQBOgDBPAYQA2ARAvAeQBgA8A4BlQALATAIASQA0B3gXB+IgTAEg");
	this.shape_18.setTransform(-0.9,-51.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AFaDwIAAgCIABgPQADgagBgZQgFhZgxhMQgLgOgNgPQg6hHhVggQgggNgjgFQhCgLhAAOQhXAThHBAQgcAZgWAcQhBBUgEBvIgPAEIhTAAQgBgzAMgyIAHgZQAnh9BghTQAjgeApgYQBZgyBhgGQBNgFBPAWQA3AQAvAcQBgA5A7BkQALATAJARQA3B1gSB+IgTADg");
	this.shape_19.setTransform(-0.8,-52.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AFdDsIgBgCIABgPQACgagCgZQgIhYg0hLQgLgNgNgPQg9hFhVgeQgggLgjgFQhCgIg/AOQhVAVhHBAQgbAZgVAaQhABVgDBuIgQADIhSAAQgBgyAMgxIAHgZQAmh8BehTQAjgeAogYQBXgzBggIQBMgHBQAWQA2AOAwAbQBgA2A+BiQALASAKARQA6BygMB/IgUADg");
	this.shape_20.setTransform(-0.6,-52.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AFgDoIgBgCIABgPQAAgagDgZQgLhYg2hIQgMgNgNgPQg/hDhVgbQgggKgjgEQhCgHg+AQQhUAVhFBAQgbAagVAaQg9BUgDBuIgRACIhSAAQAAgyALgxIAHgYQAlh7BchTQAigeAogYQBXg0BegKQBLgIBQAUQA2ANAwAZQBhA0BABfQAMASAKATQA+BugIB/IgUACg");
	this.shape_21.setTransform(-0.5,-53.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFiDlIAAgDIgBgOQAAgagEgaQgPhXg4hHQgMgNgOgNQhBhBhVgZQgggJgjgDQhCgGg9ARQhTAXhEBBQgaAZgUAaQg8BUgDBsIgRABIhRAAQgBgwAMgxIAGgYQAkh7BbhSQAhgeAogYQBVg1BdgLQBKgKBPATQA3ALAwAYQBiAwBDBeQAMASALARQBBBsgDCBIgUABg");
	this.shape_22.setTransform(-0.2,-54.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AFkDhIgBgRQgJiKhlhfQhchXh/gJQiegJh0BxQhnBigDCQIhiAAQgBg9ASg7QAwimCThdQCYhgCxAkQCnAhBoCJQBcB3ACCWg");
	this.shape_23.setTransform(0,-55.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AFiDkIAAgCIgBgOQAAgagEgZQgPhYg4hHQgMgMgOgOQhBhBhVgZQgggJgjgDQhCgGg9ARQhTAXhEBBQgaAZgUAbQg8BTgDBtIgRABIhRAAQgBgxAMgxIAGgYQAkh6BbhTQAhgeAngYQBVg1BegLQBJgJBQARQA3ANAwAXQBhAwBEBeQAMASALARQBBBsgDCBIgUAAg");
	this.shape_24.setTransform(-0.2,-54.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AFgDoIgBgCIABgPQAAgagDgZQgMhYg2hJQgLgNgOgOQg/hDhVgbQgggKgjgEQhCgHg+AQQhUAWhFBAQgbAZgUAbQg+BUgDBtIgRACIhRAAQgBgxAMgxIAHgZQAkh7BdhSQAhgeAogZQBXgzBegKQBLgIBPATQA3ANAwAZQBhAzBBBgQAMASAKASQA+BugICAIgUABg");
	this.shape_25.setTransform(-0.4,-53.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AFdDrIAAgCIABgOQABgagCgZQgIhZg0hKQgLgNgOgPQg9hFhVgdQgggLgjgFQhCgIg/APQhVAUhGBAQgbAZgWAbQg/BUgDBuIgQADIhSAAQgBgyAMgxIAHgZQAmh8BehTQAigeApgYQBXgzBggIQBLgHBQAVQA2APAwAaQBgA2A+BhQAMATAJAQQA7BygMCAIgTACg");
	this.shape_26.setTransform(-0.6,-52.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AFaDvIAAgCIABgPQADgagCgZQgEhZgyhMQgLgOgNgPQg7hGhVggQgggMgjgFQhCgLhAAOQhWAUhHA/QgcAZgWAdQhBBTgDBvIgQAEIhTAAQAAgzAMgyIAHgZQAmh9BghSQAjgfApgXQBZgzBhgGQBMgGBQAXQA2AQAvAbQBgA5A8BjQALATAJARQA3B0gQB/IgUADg");
	this.shape_27.setTransform(-0.8,-52.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AFXDyIAAgCIACgOQADgaAAgZQgChZgvhOQgLgOgMgQQg5hIhVgjQgggMgjgHQhDgLhAANQhYAShIA/QgcAZgXAdQhCBTgEBwIgOAFIhUAAQgBgzANgzIAHgZQAnh+BihTQAjgeAqgXQBZgyBigFQBOgEBPAYQA3ARAvAdQBfA7A5BmQALATAIARQA1B3gWB+IgTAEg");
	this.shape_28.setTransform(-0.9,-51.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AFUD2IAAgCIACgOQAEgaABgaQAChZguhPQgKgPgMgQQg3hKhVglQgfgOgjgHQhFgNhAAMQhZARhJA/QgdAYgXAdQhDBUgEBxIgPAGIhUAAQgBg0ANgzIAHgZQAoh/BkhTQAkgeAqgXQBagxBkgEQBPgDBPAaQA2ASAvAfQBfA+A2BnQAKATAIASQAxB5gZB+IgUAEg");
	this.shape_29.setTransform(-1,-50.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AFQD6IAAgCIADgPQAFgZACgaQAEhZgrhSQgJgPgMgQQg1hMhVgnQgggPgigIQhFgOhBALQhbAPhKA+QgdAZgXAdQhGBUgEByIgNAHIhWAAQAAg0ANg0IAHgaQAoh/BmhTQAlgeAqgXQBcgxBlgCQBPgBBPAbQA3ATAuAgQBfBBA0BqQAJATAIASQAuB8gfB8IgTAGg");
	this.shape_30.setTransform(-1.1,-50.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AFND+IgBgCIAEgPQAGgZADgaQAIhagqhTQgIgQgLgQQg0hOhVgqQgfgPgjgJQhEgQhDAKQhcAOhLA+QgdAYgZAeQhGBVgFByIgNAIIhWAAQAAg1ANg0IAIgaQApiABnhUQAmgeArgWQBcgwBmAAQBRgBBPAeQA2AUAuAhQBeBEAxBrQAKASAGAVQArB9gjB8IgTAGg");
	this.shape_31.setTransform(-1.2,-49.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AFJECIgBgCIAEgOQAIgaADgaQAMhagohVQgIgQgLgQQgxhRhVgsQgfgQgjgJQhFgShDAJQhdANhMA9QgeAZgZAdQhIBVgFB0IgMAIIhXAAQgBg1AOg0IAIgaQApiCBqhTQAmgfArgWQBegvBlABQBUABBPAfQA2AWAuAiQBdBHAvBtQAJASAGAVQAnCAgnB8IgTAGg");
	this.shape_32.setTransform(-1.2,-48.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AFFEGIgBgCIAEgPQAJgZAEgaQAPhaglhXQgIgRgKgRQgwhShUguQgggRgjgKQhEgUhEAIQhfAMhNA9QgfAYgZAeQhKBVgFB1IgMAJIhXAAQgBg1AOg1IAIgbQAqiCBshUQAngeArgWQBfguBnADQBUACBPAgQA2AXAuAkQBdBJAsBvQAIATAGAVQAkCCgsB7IgTAIg");
	this.shape_33.setTransform(-1.2,-48);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AFAEJIgBgCIAGgOQAJgZAFgaQAShbgjhZQgHgSgKgQQguhUhUgxQgggSgigKQhFgVhFAHQhgAKhOA9QgfAYgaAeQhMBWgFB1IgLAKIhYAAQgBg2AOg1IAIgbQAriEBuhTQAngeAsgWQBggtBoAEQBWADBOAjQA2AXAuAmQBcBMAqBxQAHATAGAWQAhCEgxB6IgSAIg");
	this.shape_34.setTransform(-1.2,-47.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AE8ENIgBgCIAGgOQAKgZAHgaQAVhbghhbQgHgTgJgQQgshWhVgzQgfgTgjgLQhEgXhHAGQhhAJhPA8QggAYgaAfQhNBWgGB2IgKAMIhZAAQgBg3APg2IAIgbQAsiFBvhTQAogeAtgVQBhguBpAGQBWAFBPAkQA2AZAtAnQBcBPAnByQAHAUAFAWQAeCGg1B6IgTAJg");
	this.shape_35.setTransform(-1.2,-46.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AE3ERIgBgCIAGgOQAMgZAHgaQAYhbgehdQgHgTgJgQQgphZhVg1QgfgUgjgMQhFgYhHAFQhjAIhQA7QggAYgbAfQhOBWgHB4IgJAMIhaAAQAAg4AOg2IAJgZQAsiHBxhUQApgeAtgVQBigtBqAIQBYAGBOAlQA2AaAtApQBcBSAkB0QAHAUAEAWQAbCJg6B5IgTAKg");
	this.shape_36.setTransform(-1.2,-46);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AEzEVIgBgCIAHgNQAMgZAIgbQAchbgdhfQgGgTgIgRQgohahVg4QgfgVgjgNQhEgZhJAEQhkAGhRA8QghAXgbAfQhQBZgHB2IgIAOIhbAAQAAg5APg2QADgOAFgMQAtiIBzhUQApgeAugUQBjgsBsAIQBZAIBOAnQA1AbAtAqQBbBVAiB0QAGAWAEAXQAXCLg+B5IgSAKg");
	this.shape_37.setTransform(-1.2,-45.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AEtEaIgBgCIAIgOQANgZAJgbQAfhbgahhQgGgUgIgQQgmhdhUg6QgggVgigOQhFgbhJADQhmAFhSA7QghAYgcAeQhSBagHB3IgHAOIhcAAQAAg5APg3IAJgZQAtiKB1hUQAqgeAugUQBlgrBsAKQBaAJBOApQA2AcAsArQBbBYAfB2QAGAWADAYQAUCNhDB4IgSALg");
	this.shape_38.setTransform(-1.1,-44.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AEpEeIgCgCIAIgOQAOgYALgbQAihcgYhjQgGgUgHgRQgkhehUg9QgggWgigPQhFgchKACQhnADhUA7QghAYgdAfQhTBZgHB4IgHAQIhcAAQgBg6AQg3IAIgaQAviLB2hTQArgfAvgTQBlgrBuAMQBbAKBOAqQA1AeAtAsQBaBbAcB4QAFAXADAXQARCQhHB3IgSAMg");
	this.shape_39.setTransform(-1,-44);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AEjEiIgBgCIAIgOQAQgZALgbQAlhcgWhkQgFgVgHgRQgihghUhAQgfgXgjgPQhFgehLABQhoADhVA6QgiAXgdAfQhUBbgIB4IgGARIhdAAQgBg6AQg2IAJgcQAviMB4hUQAsgeAvgTQBmgqBwANQBcALBNAtQA2AeAsAuQBZBdAaB6QAFAXACAZQAOCRhMB3IgSANg");
	this.shape_40.setTransform(-0.9,-43.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AEeEmIgCgCIAKgOQAQgYAMgbQAohdgThmQgFgVgGgSQgghihVhBQgfgYgjgQQhEgghPAAQhnABhWA6QgiAXgeAgQhWBagIB6IgFARIheAAQgBg6AQg3IAJgcQAwiMB6hUQAtgfAvgTQBogpBwAPQBdAMBNAuQA2AgAsAvQBZBgAXB8QAEAYACAYQALCUhRB2IgSAOg");
	this.shape_41.setTransform(-0.8,-42.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AEZEqIgCgCIAKgNQARgZANgbQAshdgShoQgEgVgGgSQgehkhUhEQgggZgigRQhFghhPgBQhqAAhWA5QgjAXgeAgQhYBbgIB6IgFATIheAAQgBg7AQg3IAKgdQAwiNB8hUQAtgfAwgSQBpgpByARQBdANBOAwQA1AhAsAxQBYBiAVB+QAEAYABAZQAHCWhUB2IgTAOg");
	this.shape_42.setTransform(-0.7,-42);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AETEvIgCgCIAKgOQASgYAPgbQAuhdgPhqQgDgWgGgSQgchmhVhHQgfgagigRQhFgihRgCQhqgChYA5QgjAXgfAgQhZBbgIB8IgEATIhgAAQAAg8AQg3QAEgPAGgOQAxiOB+hVQAtgeAxgSQBpgoBzASQBfAPBNAxQA2AiArAyQBYBmASB/QAEAZAAAZQAFCYhaB1IgSAPg");
	this.shape_43.setTransform(-0.6,-41.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AENEzIgBgCIAKgOQATgYAQgcQAxhdgNhsQgCgWgGgSQgbhohThJQgggbgigSQhFgkhRgDQhsgDhZA5QgkAXgfAfQhaBcgJB9IgEAUIhgAAQAAg8AQg4IAKgdQAyiQCAhUQAugeAxgSQBqgoB1AUQBgAQBMAzQA2AjArA0QBYBoAPCCQADAYAAAaQABCbheB0IgRAQg");
	this.shape_44.setTransform(-0.5,-40.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AEHE3IgBgCIALgNQAUgYAQgcQA2hdgMhuQgCgWgFgUQgYhphUhMQgfgbgjgTQhFgmhSgEQhugEhZA4QgkAXghAgQhbBcgKB+IgCAVIhhAAQgBg9ARg4IAKgeQAziQCBhUQAvgfAygRQBrgnB2AVQBhASBNA0QA1AlArA1QBXBrAMCDQADAZgBAaQgCCdhiB0IgSARg");
	this.shape_45.setTransform(-0.3,-40.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AECE8IgCgCIAMgOQAVgYARgcQA4hdgJhwQgCgXgEgUQgXhrhUhOQgfgcgigUQhFgnhUgFQhugFhbA4QgkAWghAgQheBdgJB+IgCAWIhiAAQAAg9ARg5IAKgdQAziSCEhUQAvgeAygSQBtgmB3AXQBiATBMA2QA2AlAqA3QBXBuAKCFQACAZgBAbQgFCfhnBzIgSASg");
	this.shape_46.setTransform(-0.2,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-77.6,90.8,77.7);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.rebb, null, new cjs.Matrix2D(1,0,0,1,-459.6,-167.8)).s().p("ApAPUQiChpitg0IgoABQgDAAgDgDQgDgBAAgEQndpeCCrVQgCgEADgDQACgEAEgBIZYnDQADgBADABQACABACADIOoTdQACACAAAEIAAK/g");
	this.shape.setTransform(0,-98);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-196,260.9,196);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.herrera();
	this.instance.setTransform(-83.8,-148.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,-148.4,260,160);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sombra();
	this.instance.setTransform(-137.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-55,275,55);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PERFIL PERSONAJE 
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-19.9,-131.7);

	this.instance_1 = new lib.Bitmap24();
	this.instance_1.setTransform(-11.3,-131.6);

	this.instance_2 = new lib.Bitmap23();
	this.instance_2.setTransform(-15.5,-132.1);

	this.instance_3 = new lib.Bitmap22();
	this.instance_3.setTransform(-18,-131.8);

	this.instance_4 = new lib.Bitmap21();
	this.instance_4.setTransform(-11.9,-131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-131.7,38,131);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(-18.2,-126.8);

	this.instance_1 = new lib.Bitmap29();
	this.instance_1.setTransform(-15.7,-125.8);

	this.instance_2 = new lib.Bitmap30();
	this.instance_2.setTransform(-15.6,-125.8);

	this.instance_3 = new lib.Bitmap31();
	this.instance_3.setTransform(-15.4,-125.6);

	this.instance_4 = new lib.Bitmap32();
	this.instance_4.setTransform(-15.5,-126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-126.8,49,134);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ADELANTE PERSONAJE
	this.instance = new lib.Bitmap33();
	this.instance.setTransform(-13.6,-126.1);

	this.instance_1 = new lib.Bitmap34();
	this.instance_1.setTransform(-13.7,-125.8);

	this.instance_2 = new lib.Bitmap35();
	this.instance_2.setTransform(-14.2,-125.8);

	this.instance_3 = new lib.Bitmap36();
	this.instance_3.setTransform(-14.1,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-126.1,34,131);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbolmuerto1();
	this.instance.setTransform(-99.1,-321.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.1,-321.4,194,331);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-14.8,-127.4);

	this.instance_1 = new lib.Bitmap16();
	this.instance_1.setTransform(-15,-127.7);

	this.instance_2 = new lib.Bitmap17();
	this.instance_2.setTransform(-33.4,-127.9);

	this.instance_3 = new lib.Bitmap18();
	this.instance_3.setTransform(-16,-127.4);

	this.instance_4 = new lib.Bitmap19();
	this.instance_4.setTransform(-14.5,-127.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-127.4,34,142);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ATRAS PERSONAJE
	this.instance = new lib.Bitmap39();
	this.instance.setTransform(-16.2,-129.5);

	this.instance_1 = new lib.Bitmap40();
	this.instance_1.setTransform(-16.2,-129.4);

	this.instance_2 = new lib.Bitmap41();
	this.instance_2.setTransform(-16.4,-129.7);

	this.instance_3 = new lib.Bitmap42();
	this.instance_3.setTransform(-16.4,-129.8);

	this.instance_4 = new lib.Bitmap43();
	this.instance_4.setTransform(-16.4,-129.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-129.5,34,132);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbolmuerto2();
	this.instance.setTransform(-125.8,-309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.8,-309.7,253,329);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap52();
	this.instance.setTransform(-59,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-66,125,76);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap51();
	this.instance.setTransform(-59,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-67,125,76);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-50,-100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-100.1,100,100);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roca3();
	this.instance.setTransform(-128.5,-138.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-138.3,257,190);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roca1();
	this.instance.setTransform(-94.5,-86.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-86.9,189,119);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roca2();
	this.instance.setTransform(-89,-132.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-132.9,178,159);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carnotaurus();
	this.instance.setTransform(-296.5,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.5,-450,593,450);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roca4();
	this.instance.setTransform(-89.2,-136.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-136.8,198,192);


(lib.casa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+q+qMA9VAAAMAAAA9VMg9VAAAg");
	this.shape.setTransform(196.3,196.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("A+qeqMAAAg9UMA9UAAAMAAAA9Ug");
	this.shape_1.setTransform(196.3,196.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,394.6,394.6);


(lib.puntitoDinoVisitado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0.667)").s().p("AgQAQQgGgHgBgJQABgJAGgGQAIgIAIABQAJgBAIAIQAGAGABAJQgBAJgGAHQgIAIgJgBQgIABgIgIg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.3,4.8,4.8);


(lib.puntitoDino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0.667)").s().p("AgQAQQgGgHgBgJQABgJAGgGQAIgIAIABQAJgBAIAIQAGAGABAJQgBAJgGAHQgIAIgJgBQgIABgIgIg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.3,4.8,4.8);


(lib.puntito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.667)").s().p("AgQAQQgGgHgBgJQABgJAGgGQAIgIAIABQAJgBAIAIQAGAGABAJQgBAJgGAHQgIAIgJgBQgIABgIgIg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.3,4.8,4.8);


(lib.piso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pissps();
	this.instance.setTransform(2255.3,5028.2,1,1,0,180,0);

	this.instance_1 = new lib.pissps();
	this.instance_1.setTransform(2266.3,5028.2,1,1,180);

	this.instance_2 = new lib.pissps();
	this.instance_2.setTransform(0,5028.2,1,1,0,180,0);

	this.instance_3 = new lib.pissps();
	this.instance_3.setTransform(2255.3,3764.9);

	this.instance_4 = new lib.pissps();
	this.instance_4.setTransform(2266.3,3764.9,1,1,0,0,180);

	this.instance_5 = new lib.pissps();
	this.instance_5.setTransform(0,3764.9);

	this.instance_6 = new lib.pissps();
	this.instance_6.setTransform(2255.3,3768.3,1,1,0,180,0);

	this.instance_7 = new lib.pissps();
	this.instance_7.setTransform(2266.3,3768.3,1,1,180);

	this.instance_8 = new lib.pissps();
	this.instance_8.setTransform(0,3768.3,1,1,0,180,0);

	this.instance_9 = new lib.pissps();
	this.instance_9.setTransform(2255.3,2505);

	this.instance_10 = new lib.pissps();
	this.instance_10.setTransform(2266.3,2505,1,1,0,0,180);

	this.instance_11 = new lib.pissps();
	this.instance_11.setTransform(0,2505);

	this.instance_12 = new lib.pissps();
	this.instance_12.setTransform(2255.3,2523.3,1,1,0,180,0);

	this.instance_13 = new lib.pissps();
	this.instance_13.setTransform(2266.3,2523.3,1,1,180);

	this.instance_14 = new lib.pissps();
	this.instance_14.setTransform(0,2523.3,1,1,0,180,0);

	this.instance_15 = new lib.pissps();
	this.instance_15.setTransform(2255.3,1259.9);

	this.instance_16 = new lib.pissps();
	this.instance_16.setTransform(2266.3,1259.9,1,1,0,0,180);

	this.instance_17 = new lib.pissps();
	this.instance_17.setTransform(0,1259.9);

	this.instance_18 = new lib.pissps();
	this.instance_18.setTransform(2255.3,1263.4,1,1,0,180,0);

	this.instance_19 = new lib.pissps();
	this.instance_19.setTransform(2266.3,1263.4,1,1,180);

	this.instance_20 = new lib.pissps();
	this.instance_20.setTransform(0,1263.4,1,1,0,180,0);

	this.instance_21 = new lib.pissps();
	this.instance_21.setTransform(2255.3,0);

	this.instance_22 = new lib.pissps();
	this.instance_22.setTransform(2266.3,0,1,1,0,0,180);

	this.instance_23 = new lib.pissps();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3391.3,5028.2);


(lib.dinos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Rebbachisaurus:0,Herrerasaurus:1,Gasparinisaura:2,Carnotaurus:3,Piatnitzkysaurus:4,Unenlagia:5,Mussaurus:6,Megaraptor:7,Tuarangisaurus:8,Taniwhasaurus:9,Eoraptor:10,Giganotosaurus:11,Futalongkosaurus:12,Buitreraptor:13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer 1
	this.instance = new lib.Bitmap55();
	this.instance.setTransform(384.5,86.2,0.873,0.873);

	this.instance_1 = new lib.Bitmap12();
	this.instance_1.setTransform(335.8,61.1);

	this.instance_2 = new lib.Bitmap14();
	this.instance_2.setTransform(376,98.3);

	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(365.7,71.8);

	this.instance_4 = new lib.Bitmap6();
	this.instance_4.setTransform(350.7,45.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.piatpngcopy, null, new cjs.Matrix2D(0.498,0.002,-0.002,0.498,-711.8,-529.3)).s().p("Egl2ABvIAAj0MBLtAAAIgCELg");
	this.shape.setTransform(610.2,548.6);

	this.instance_5 = new lib.Bitmap7();
	this.instance_5.setTransform(375.7,84.5);

	this.instance_6 = new lib.Bitmap9();
	this.instance_6.setTransform(373.5,64);

	this.instance_7 = new lib.Bitmap44();
	this.instance_7.setTransform(371.8,111.6);

	this.instance_8 = new lib.Bitmap53();
	this.instance_8.setTransform(362.9,109.9);

	this.instance_9 = new lib.Bitmap56();
	this.instance_9.setTransform(382.5,78.7);

	this.instance_10 = new lib.Bitmap57();
	this.instance_10.setTransform(341.4,74.5);

	this.instance_11 = new lib.Bitmap58();
	this.instance_11.setTransform(379.2,73.7,0.919,0.919);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.Bitmap47, null, new cjs.Matrix2D(1,0,0,1,-86,-101)).s().p("AhiPaQi7gmithSQi9haiNidIhHhPIAA4MIa3AAIAAajQhiBMhjBJQiZBvi7AlQhnAVhoAAQhsAAhqgXg");
	this.shape_1.setTransform(497.7,211.8);

	this.instance_12 = new lib.Bitmap59();
	this.instance_12.setTransform(360.6,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384.5,86.2,276.8,221.8);


(lib.casa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgQFgx5MAgLAAAMAAABjzMggLAAAg");
	this.shape.setTransform(103.1,319.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgQFAx6MAAAhjzMAgLAAAMAAABjzg");
	this.shape_1.setTransform(103.1,319.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,208.1,640.9);


(lib.caminable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ADGHpQicgJiMgzQhGgZgvgfQhNgzhBhgQgog8g7h6Qggg/gKgpQgLgtABhWQAAglADgWQAFggAOgWQATgfAngRQAhgOAsgDQgEglAYggQAXggAlgMQAigLAnAIQAkAGAhAVQAzAiAyBKQASAdAMAIQARAJAfAAIBJABQArAAAdAFQASACAoAKQAmAJAVACQAbADA4ACQAwAGAaAXQAcAZAIAxQAEAZgBBAQgBAhACA/QABA6gHAnQgGAhgVA+QgWBAgGAfIgIAvQgFAagIASQgNAdgcAWQgZAUghAKQgmAMhBAAIgbAAg");
	this.shape.setTransform(2161.1,2359.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EigsjfaQAAC4iCCCQiDCDi4AAQi4AAiCiDQiCiCAAi4QAAi4CCiCQCCiCC4AAQC4AACDCCQCCCCAAC4gEikki5dQAAC4iCCCQiCCCi4AAQi4AAiCiCQiDiCAAi4QAAi4CDiDQCCiCC4AAQC4AACCCCQCCCDAAC4gECyeDMbQAACEh0BdQhzBeijAAQijAAhzheQh0hdAAiEQAAiEB0hdQBzhdCjAAQCjAABzBdQB0BdAACEgEBsWDgaQAACeiJBwQiJBvjAAAQjBAAiJhvQiJhwAAieQAAieCJhvQCJhwDBAAQDAAACJBwQCJBvAACeg");
	this.shape_1.setTransform(1142.2,2601.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("EASnGQqQE6jODSibQAugiAngWQAmgVCJhEQFYioHTiUQH/iiIChZQKNhxMrjnQNsj5NrlQQELhnGxjDQGtjCDXh0QD1iDEVidQD1iLB4g/QIjkfGEi/QGpjRBsggQI7isNRn/QEMihEPi1IDtiiQISlpJwlCQNam9LAi4QNJjcSEicQG3g7GJgmQFaggCogEMAAABqrgEjz3GDdQhzhRhdiUQjvl9AAqPQAAm8CmqgICHoIQBMkiAdirQAgi2ALheQAYjOABjqQABjzBdn4QBOmnAuiQQBslTBUj5QBFjHAVhBIh7nFQAcggAKgwQAHgjAAg7QAAgvgLhRIgLhOQAAgcBlhGQBag+DuiLQEDiXFPimQEdiNCMg3QF9iXIwjHQEohpGLiKQGSiRHxhjQKaiEI2AOIL5AIQM6AXMLkkQHOisIRlNQInlbGYiKQGAiBGyAAQHCAAFeDZQEHCjFDF8QC1DUEHDAQDbCgDaBsQAzAZBvA0QAKAFA1A4QA7A/AQAgQASAjAHAJIA3C8QBMEHBRDSIBzERQAzB5ASBZQAYBxAACrQAAK5kCE7QhgB2h9A3QhgAqhhAAQhYAAirg3QgggKk3htQjmhRiagmQjZg3imAAQhTAAh4ASIlOA1QAHgagcgkQgfgpg/giQiihakPAAQgfAAhBAQQhCAPgHAAQgxAAgiguQglgxgggVQgigWgsAAQg5AAgnAtQgiAoAAArQAAAiAXBEQAYBGAbAtIAyBRQAbAlA7AyQkGBji/BhQioBWjXCIQg8AnhABBQg2A4gUAiQggA6gBAkQAAAXAGAzQAABAgQBLQgPBDgxCkQgPA1g2AyQgmAjhZA8QhpBIlwBDQlvBCkjAAQmPAAkqh/QkPhzjfjsQjAgfikgXQk8gtiBAAQmMAApCCMQk8BNn1CfQkFBViFAqQjqBJi1AtQnuB4n5AAQpdAAmkjuQiOhQh3iJQhYhlgHgxQhIL2gdF/QgkHMAADPQAAC2AFB9QAJD0AdD4QAWC8AXA9QAZA/A0AAQAIAAA6gIQA6gJBjAAQCJAABHBRQA/BHAAB3QAABsh9BZQhzBRi2ApIAFBvQAAEthUEGQhMDoiGC0Qh4ChiSBbQiKBWh3AAQhWAAhlhGgEgB4GCZQhDgJiFgdQihgiiEgXQhrgTkYgiQkggihFgJQiDgShCgpQhWg1AAhjQAAg2AyidQBQj+CzmKQilgIkcgeQimgOhYhCQhNg5AAhQQAAhQAqi8QAxjfA2g6IEHjUQDpi9AYg+QgxiPgIgfQgBgNgIgdIgDgTIgCgWQAAgSACgJQAEgLAIgEQgjgMgPgPQgbgbAAg1QAAguBFhJQAIgJAUgTQApgkBGgzQAXgQA1gfQBDglAdgIQCZgrCkghQB+gaARgIQAigPDNg3QDkg8DMgtQEqhCASgDQAlgFBWAGQAUAAALgTQAJgRAKguQAzj3AMguQAHgdABgWIACgXQADgQA7hIQAzg+CMgzQCZg3CZAAQCyAAB+AWQBLANCxAkQD0AoBUAhQCUA6A3B/QAYA5A2DBQA0C5ALAWQAOAcA/BvQA2BqgFArIgIA1IAqBGQAnBAAbA3QBWCvAACKQAACziBB9QiJCFjYAAQiQAAiXg8QhjgnidhcQithmhDgeQiEg8hvAAQjrAAhoA6QheA1ABBqIgkAAQlQAAigBGQiWBDAACGQAAC0CeBGQA2AXBhAVQB9AcAbAIQAXAHARBSQASBYAhAXQAmAbA/AUQA5ATAqACQBRAEBuAXQBbASAbAMQAcAMDCA4QAjAKB1A1QB2AwBRAAQAgAABtg0QBAgeCQhHQEWiECig5QD4hYC0AAQFAAACfC0QA0A7AqBZQAXAwAgBIQALAVABADIBsCMQA5BLAmBgQAkBbAAA9QAADSnJCiQjEBGk/BMQjkA2mrBZImDBcQkfBDhvAGQhXAEkqADIkgADQoZAAi+gcgEic5FvGQhlgRhqgwQiWgwhIggQh+g5AAhNQAUg+ATgcIgagdQgNgVAAgoQAAhJBegNQAhgEA6ABIBkACQBnAADhgFQDggGB/AAQA3AACTAUQCaAVA6ACQA9ACBqgBQBcgBApADQB/AIAzAPQBbAaAABBQAABgigBUQgWAMhIAxQhIAxgPAPQg/A7iZAaQifAbkyAAQj2AAh8gUgEjICFg+QiGgKg8gOQgYgMgYgyQgVgzgHgIQgTgTgOgRQgbgfAAgSQAAgJgFgqIgFgtQAAhSBdgpQBUgkCXAAQCeAACiASICnAWQBXAFAnAYQA3AiAABSQAACshrBJQhcBAjBAAQiDAAiFgJgEjEZFdkIBOABIghgNQgIgCgHAAQgTAAgLAOgEilLFabQh2gmgkhOQgRgjAAg9QgBg9AQg7QAmiRBdAAICoAfQC1AiA1ANQBoAYAcAQQA/AhAABIQAABMgxAnQgLAJhLAiQgRAIgjAuQgnAzgHAFQgIAGgmAFQgnAFgmAAQh7AAhdgegEhgHFQiQjEhNAAi3QAAiYEIhRQDthJFaAJQArgKBVAkQBbAmAgAzQAvBMAMAjQAIAYAAAqQAAC8iUBPQhzA+jaAAQlHAAihhAgEhV3FLyIgYA2QgYAthPA8IBXABQBHAAAtgzQAhgkAAgVQAAgZgYgfQgbgigcAAQgLAAgTAmgEgpnFJaQn0ACjKhhQiUhIAAiLQAAiXCBhzQBZhQEaieQDKhxARgIQDDhgCJgNQB9gLBBgSQALgDA6gWIDjhUQDLhPGniwQD8hoE3ijQC0heBDg4IAwgrQAegZArgbQBFgqDUg1QCGghGThdQBWgVB3gXQgPA/AEA0QAHBSA1BEQA1BFBMAdIA3ASQAgAKATALQAWANAVAYQAPARATAdQAcAuAzBoQAmBOAcAvQhlAdhkAhQj/BTlACPQlRCbifBDQijBFlKCxQkdCakBCYQj0CPmFB4QmfCBk5AAQg2AAgzgEgEAnDEwMQiggDicAFIgHgPQgRgmgwgzQg5g9gQgXQgXgmgchQQghhfgPgvQgZhQgNhBQgVh8gQhSQGNg1DJgIQKCgYDlgtQBGgOBGgZQBNgbAtgKQBegVCAgqIDVhGQEFhRDhAAQF2AAD2DTQBwBgA8B9QA9B9AACHQAAAKgIBTIAigRIAJgFQAgAAAeAfQAfAfAAAeQAADTuxBlQkrAglpARIlCALgEgWdEKLQhGg9gnhIQglhFAAg9QAAirEahTQC2g1C3AAQB/AAA7AVQA/AWCMBfQBKAyAQBYQAFAfAACZQAABSgMAmQgSA2g5AoQguAgiBAEQjZAHhnANQjvgQikiQgEDSlD36QhGgXhAgzQgtgngSgbQgLgRgEgVQgKgrAAguQgBgqABgUQABghALgUQAcgzB1AAQCqAABRArQBgAzAAB8QAAAVgFAuQgGA4gHALQgDAGgZARQgWAQgFABQgOAFgTASQgTASgEABQghANglAAQgnAAgsgOgEAnuDqgQiIhvAAieQAAieCIhwQCJhvDBAAQDBAACJBvQCJBwAACeQAACeiJBvQiJBwjBAAQjBAAiJhwgECt2DnnQhagsg1g9Qg+hHARhCQAUhNCCg6QgCgFgCgQQgCgPAAgHQAAhHADgSQAGgbAagiQACgCAKgcIAOgkQAJgSAXgMQAZgOAhAAQA2AAAnA0QAuA9AABoIgHAaQgHAZAAAPIAcAjQAfAmAJAXQAHASAOBpQAABvguA4QgsA1hUAAQg9AAhWgqgEDeXDlCQhYhJAAhUQAAg3AZgfQAWgcA5gVQAggMBtgeQB5ghBageQAQAAAYgDQBiAAA9BxQAxBZAABUQAAB/g3A0QgvAthmAAQkXAAiFhugEANpDerQhmhJgtiNQgHgcgFhCQgFg6AAg5QAAhKAgg+QAUgoBEhcQBUhxBaggQBMgaDHAAQEJAABoBKQB6BXAADtQAACQgcBAQgbA8iBCbQgsA0hQAOIiXAOIhNAPQhDANhLAAQh8AAhehDgEEB6Dc1QhxhSAAhvQAAhTBPgxQBag3CtAAQAfAAAlAhQAhAcARAiQAOAcAXAiQAQAfAAA2QAABygyA3QgpAvhFAAQiEAAhshOgEBvyDV1QhzhdAAiEQAAiEBzheQB0hdCjAAQCjAABzBdQBzBeAACEQAACEhzBdQhzBdijAAQijAAh0hdgEBRpDQlQhEggg7hJQhJhbgMgfQgUgwAAh3QAAiPBXhcQBIhLBmgRQADAAA2gkQA3glAUgFQBBgSA2gGQCgAAB2CPQBtCEAACaQAACyhQBsQhuCVj/AAQiJAAhVgpgECaBDMQQghgpgSgzQgMgiAAgOQAAgnBQg6QBUg9BdgYQBugbBCAsQBQA2AACaQAADjiaAAQjEAAhkiCgEgp7DOCQiFgXiRhOIhQgfQhHgbgxggQidhmAAi6QAAhtArhIQAPgYAXgaIAjgnQAKgNAIgWIAQgoQAag4BMg+QBQhBBYgHQAxgDBFAHQBTgEEyAAQB4AACKAXQCtAcBYAyQBoA8AsBTQApBMAAB1QAAB0gvBZQguBYh+B8Qh9B7h9AhQhGATipAAQjJAAhbgPgEDDwDMMQiEhSAAh1QAAgTAYgjQAfgrAvgZQAjgSAOggQAZg5AAiNQABgkAEgOQAJglAkgTQAZgOAYAAQA9AAAYA7QAcBHgOCtQA7AHApBDQAnBCAABVQAACCgzA5QgnAshDAAQhvAAhxhGgECK3DJtQglglgWgtQgSgjAAgUQAAgxApgwQAmguBAgfQBBggBFgGQBMgGA9AcQA2AKAaBGQATAzAAA8QAACAgnA6QglA4hNAAQixAAhqhqgEEc8DJrIg/gUQhigciHAAQjbAAhXASQhWAShaAAQhhAAiagbQjggmh5hHQh0g8gigWQgzgiAAg3QAAhWATgrQAihKCJiXQArgDAugcQAygfAUgrQAPggAJgiQAHggADgLQAKgdAuAAQANAAATAQQAWATAGAZQApgBAygvIAzg5QAXgZA2gKQAmgHBCAAQCVAABQAcQCDAtDXCkQBAAxBvBSQBcBDAuAsQB5BxAACCQAABrhBBcQhABbhEAAQgbAAgggJgEEhJDIPQANACAMAEQAKAEABABQgFAJgNAAQgOAAgEgUgEgA8DFCImqAAIAAnTIBPAAQABisCViOQAugsBjhMQBrhSAugrQAUgSAVgPQgOgxAAg5QAAkCCdhfQB1hGEGAAQB/AABKAZQBkAhBVAKQChAUBuBqQB0ByAAChQAACOheBtQg/BIhQAlQgtAVgtAIQgpAHhCAAIiAAAQgOArgUArQgyBmg7AzIhcBcQhxBwhfBcQgRAWgSATIAACTIj4AAQgjAIghAAQgqAAgngIgEAl6DDoQglgbgsg0Qgzg+gggjQgvhAgGhPQADhNgEgXQgQhIgFgcQgIgsAAhNQAAiKAvhXQBPiSDJAAQBFAABHAgQBeArAlBSQAOAgAHAdQAIATAqAXQCbBXBBBZQBLBoAACkQAAD0ibBVQhaAyi5AAQi+AAhhhIgEECuDDXQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgEBHvC+dQg1gwgshWQhJiRgXhUQgOgzAAg6QAAi8BhheQBfhbC6AAQCHAABbA+QBFAvAeBIQAJAXAwBaQAsBjAABlQAAAygQAsIgZBFIgWAwQgaAzgiApQhrCAicAAQh8AAhXhQgECsOC3GQgqgogYgwQgWgsAAgiQAAg1Blg/QBshDBwAAQBWAAAvAyQAzA4AHB7IABAAQgQB9gOAdQggBFhjAAQieAAhqhngEgcsC29QhVhKgSh3QgGgngdg0Iglg+QgagugRg7QgVhIAAg/QAAiQB4hkQAxgqA5gTQA4gUAsAJIAAgFQD/gYFfDEQBNArArBSQAqBOAABaQAAA9g9CSQg3CCglA1QgqA9inApQiIAhhlAAQifAAhhhTgEiS2C3uIAApnIX1AAIAAJngEDaQC1/Qh/hVAAhdQAAhKBagxQAygbCTgsQBMgXBJA+QBNBBAABqQAABvgeA7QglBJhSAAQhzAAh6hRgEhhcCzQQh2gzg9gPQhygchNhGQhkhZAAiCQAAh/BfhcQBQhMBngVQAegGAvgmQA7gyAkgbQCLhrCbAAQCgAABiBoQBWBcAAB5QAAAmgVA/QgUA/AAAfQAAAKAJBsQAACeiQBzQgnAfhaAPQhFALhMAAQhZAAhPghgEB1fCvbQgFgDgDgDQgGgEgGgKIAApWQAJgLALgJIe/AAIAJAJIALALIAAJWQgBAJgDAEQgFAHgLAAgEDIgCoYQhzhVAAhmQAAgHAQgZQAWghAhgdQBkhZCggHQBhAHAtBCQApA8AABuQAAB+gzA0QgnAnhLAAQh7AAhvhTgEDf/CoDQhhhYAAhSQAAg2BRg4QBRg3BhgOQBugPBFAzQBRA9AACRQAAA0gXAyQgVAxgYAKIhVAmQgRAIgGAAQiJAAhthkgEg6xCpbIAAnTIM5AAIAAHTgED2LCoKQgMgRgNgMQgagKgdgNQg6gagrgmQgygsgRg0QgTg4AigeQAVg3BagsQBYgrBWAAQBmAAA0A8QA1A9AAB6QAADQisAAQhFAAgSgLgEEcdCmoQhwhVAAhjQAAg0BQg7QBRg7BggSQBtgUBDAzQBQA8AACWQAABtgpA3QgnA1hKAAQiGAAhxhWgECj6CnFQgRgNg2g6IhXhmQgHgJgIgQQgLgUAAgNQABgtgDgMQgUgcgCgHQgHgVAAgaQAAhgBWgUQAhgHA7AAIBwACQAdAAAwAFQBAAGAhALQAUAGAYAeQAMAPAIAPQATAaAsAZQAkAeAABUQAACkiegBQgbAAgHASQgNAegNAMQgQAOgjAOQglAPgZAAQgsAAglgcgEA1gCjQQg/hbAAi0QAAjDAphNIArhFQAdgxAWg/QALhpBRhIQBjhaCsAAQBfAABMArQBZAyAxBmQAaA2AEBBIAAB5QAAB3gQA+QgFAThGC8QgeBRgQAjQggBEgjAcQgnAfhGAaQhNAdg8AAQjqAAhaiCgECQzCkGIi6hLQgPgGgYhCQgWg8AAgLQAAhPB8hCQBtg6BXAAQBgAAA4BIQAyBAACBeQABBcguBCQgzBHhWAAQgDAAhcgmgEgu5CgLQidhqAAjHQAAiPA9hUQAPgUAhghQAbgbAIgQQAPgNAdgoQAggrAXgWQBUhOCbAAQDuAACUB7QCjCJAAD9QAADSiBBsQh0BhjHAAQkUAAiahogEBVbCdSQh+hhAAisQAAhuA1hXQAyhRBTgqQBWgrA4gHQAUgDCAAAQC2AABrBAQCGBSAACwQAABHglBXQgsBmhHA6QhNA/hMAVQgzAOhQAAQjWAAh7hggEAQWCb2QhhgchvhMQhfhBgmh9QgehhAAieQAAh1AShDQAYhWBfjFQBBiFBSg/QBWhCB2AAQCTAABaBuQBPBgAAB5IgGAqIgGAqQAAAIBEAkIBKAlIAkAVQAVAPAZAaQArAuASBTQAQBHAABsQAAD3iCBqQhvBcjhAAQidAAhjgdgEhs7CIVQAQgZAGgUQAEgOAAgXQAAgRgMg9QgMg8AAgOQAAgbAShWQAShWAAhsIgBgaMAonACpIglI3gEiM0CHNQogjHAAiPQAAhEB9gzQB6gzEpg4IR3AAQAdBCDEH2gEBpYCDVQhugEgfAAQg+AJhJggQhDgdg8g7Qg8g5gkhEQglhHAAhAQAAhkAUg+QAXhIA4goIBahBQAsggAfgQQBLgmCAAAQDQAACHBpQCZB3AADYQAAEQjtBDQhNAVhsAAIgFAAgEiIfBrHQiWhQg7g6QhAg/AAhKQAAiWERi+IX1AAQCVB1BMBwQBBBgAABJQAABUhXA7QhMAzh/AXgEhPKBn8Qj+hJhjg3Qhpg6AAhMQAAheCyhzQBnhCCxhOIX1AAIAAJngEDqyBY9QjQglgvhDQgxhGgcgfQgjgmgrgZQhDg9gcg2QghhBAAhcQAAhtBRhSQAagaAggVQANgJARgJQA1gbBJgKQAvgGBNAAIEngCQCxADBxAZQE3BGAAEYQAAEAjPCHQhNAyhhAbQhPAVhCAAQhqAAiRgagEA19BWwQgmgFgggMIhOgiQhVgmguhuQgmhZAAhiQAAiyBgh6QBeh3CTgUQAwgHAugRQAagKAxgWQBfgpB8AAQC1AABTBBQAcAVAfAoQAmAyAOAOQAJAJA5AvQA4AvAHAHQAoApAUAvQAbBBAABbQAABZgoBWQgqBchFAsQg6AlgTAKQghAQgnAFQgmAFkoAAQk4AAg1gGgED7eBFxQhfgLg7gkQiRhWAAkWQAAiRAlhUQAhhLBSg+QAUgQAhgrQAkgvAagXQBehSC8AAQCKAADOAtQCAAoAyAyQAgAgAeBSIAEAXQADAPAIALQAXAhBTAYQBUAXA2BZQAyBRAABcQAAC1iNBUQhjA7iJAAQgwAAhNgGQhOgFgSAAQg0AAhYAVQhYAWiFAAQh8AAg8gIgEj9gBCDQj3hYkji5QmwkSmBm3QkklNj0mTQnOr5jUwQQi+ucAAylQAAreBPqlQBMqGCNoaQB0m5EBoIQEbo+FQmgQEmltHPmEQHhmTHZkLQIdkxK8isQECg/DvgjQDFgdBsAAQGWAAE4C3QCMBSCaCHQB4BpC2C6QBqBsIVJGQCGCQCWCGQEKDtDfB4IhOGLQg4E9AADLQAAB0ArBhQibA7kSCEQm7DUjGCkQkjDyhdC7QgkBIgLBKQgGAqAABOQAAAEg2AXQhAAhgoAuQghAlgSA2QgRAxAAAxQAABrCPDAQBFBeC0DKQDGDeEbB/QCCA7CUAiIB2AbQAYAHBYAeQAnAOBCAaQAOAGAdBAIAZA6QAUAuBGC8QBNCxBOA2QD6CuFHBOQBlAYDYAZQC5AVB2AGQFjASERAyQEDAvCHBCQCPBGCGCsQCPC3A6DTQAkCCASBYQAPBFAcCgQAYCQAWBZQADANAVA6QASAyAAANQAAAHgOA0QgNAygMAlQgYBNgZA8QgfBIgZAvQgQAegjA7QglA/g8BLQhNBghCAyQjICXiDA2QicA/jYAAQhyAAh+gSQhEgKiagfQkqg8jSAAQh/AAiUAsQj8BJjMCwQiABuiZC/QhZBvgxBHQg5BWjcFgQjXFLhmBpQlIFpmnDrQmTDfqdDMQlRBmk8BNQpbCTk1AAQlGAAkwhsgEBbyA/UQhqAFhHgNQkDgxAAkdQAAjFCGhiQCDhhEBAAQDTAABvBNQB0BPAACgQAABBgmBsQgiBcgWAdQhIBah+AbQgyAKhlABQAAgHhRADgEiEEA06QhxAAgngFQhbgWgzhAQgohEgSgRQhKhDgcggQgtg0AAg3QAAggAUgcQAcgnAGgRQACgGAHgpQAFgdAQgaQAZgpBDgQQA0gNBiAAQBiAABOAhIA0AWQAZAKAVgBQBagEA6AeQBIAkAABRQAAAYgLAcIgQAkQgJAbAEAgQAGA4AAASQAABMgbAtQghA3heA5QgPAJhyAAIgMAAgECV7Aw7IgZgPQhNgwghgfQgegdhRg6IiChcQhQg4h5g7QiCg/gjgXQhMgxgjhEQgphPAAiDQAAhhAYgwQAVgtBHg3QBJg5BSiKQAiAJAWADQARABAJAEQAEACAlAlQAJAHAKAGIAAgBQAYAJAXABIAwABINaAAIAXgBQAGAAAOATIANAUIAtBJQAUAhAYAiQAWAfAIAIQAKAMBCA7QBCA7AwAmQAdAYAjAxQAwBEAVAXQAPASBJA5QBBA8AAA8QAAApgPAyQA2ASAsAXQDKBoAADTQAABNgMAcQgLAageACIhOgDQg/gBg8AQQhSAIg+AEQhxAIiTAAQpjAAiLjCgEAfQAsXQhOgfgdg0QgRgegCg5QgDg1gLgOQgXgKgVgPQgngegMgzQgHgfAAhNIABhOQAAiSCKgqQAxgPBHgDIBrAAQDGAAA1BkQAVAoAFBEQABARAABHIgBAnIABCJIgEAzQgCATgPAlIgdBGQgYBDhFAbQgvAThIAAQhIAAhEgbgECtoAnsQhIhTAAioQAAgfAEgeQAFggAGgLIgdhmQAcgVBwgMQBLgHAvAAQCxAABWBrQBTBpAADSQgFB5gFAAQgoALhbAQQhgARghAAQitAAhPhagEBGJAiCQhqiQAli+QAkh7AshJQAwhRBJguQCNhaFXAAQGvAAAAFTQAABBgmBEQglBBg3AnQggAWg2AQQgoALgYAgQhKBhhlBAQiBBTiMAAQjSAAhxiagEB53AjjQhmgKg5gcQgPgHgugKQgxgKgYgKQhYglAAhrQAAhfBPhJQAtgqBlg0QCAhSB4gzQB9g1BJAAQBcAAAwA1QAmApAAA6QAAAKgCAOQgDARgDAAQBnADA5AyQA2AuAABJQAAArgeBWQgiBhgkAdQgqAhhxANQhGAJhWAAQi0AAhTgIgECcfAUWQiGhOhnh8QhPhghbilQn3jsoDAAQhbAAiOAMQh1ALg+AJQjBAfhZANQhmAOgoAAQhTAAhxghQhfgbgggWQh2hQgxgsQg6g0AAgjQAAgNAHgJIAtgzQAngqBbhAIBag9QA7gwDOg+QDRg+BiACQAKgxAvg0QAmgrAegQQCBhDDAiCQCOhgBZhEIATjXQA8hoB/g5QBdgrBEAAQB+AABCBQQCTgbDfgMQCOgHCeAAQEwAAEiArQEBAmGeBkQArA3A+BxQA9BtAYBCIA4CkIAWBUQAFAbAWARQALAJAKADQCbBMBgCWQBXCLAACHQAAA4gYBWQgVBJgRAgQFjAaCqA0QCtA1AABXQAAA1gdAqQggAwhpBdQgWATgeAUIgaARQgdAUgjAMQgSAHgrALQgrAMhEAHQguAFgSAAIgfgBIADAIQAHAYAAAOQAAAqjFAyQhvAdhnAQQi+AgiAALQh5AKidAAQpqAAkyiwgAORV5Qhbg/AAh6QAAhXBKg4QBYgzAZgeQALgOAPggQAPggAMgOQApgyB0AAQARAAGTAdQBVAFAiAdQBYBLAdAoQAhAuAAA4QAABOhUBOQhIBDimBeQgZAOiJADQgwABi6AAQi4AAhdhAgEhsxARaQhQgDgfgYQgcgQgegvQgdgxgJgMQgVgegEgTQgCgNgChJQAAgIgRhCQgRhAAAgQQAAiSClgrQBBgRCtAAQCGAABPAtQA9AiBcBrQALAMA1AsQAwA1AABKQAAA3gpAxQgeAkgfANQgKAFgXAVQgbAbgVAOQgTANheAJQhgAIgMACIg0APQgmAKghgBQgaACgZAAIghgBgADMMRQgYgGiFg6Qg7gQgsgmQgqglgGgoIgSgwQgQgmAAgxQAAhLAqgjQAagWBOgaIB/gCQBjAABXAOQB3ATAwAoQArAkAUBUQAOA7AABAQAABqg/AsQgsAghRAAQiLAAgigIgAq0JAQgmgJhFgVQhLgYjFALQjpANiEgfQhjgYg4g1QhUguhYg3Qiththah0QiTi7gihOQgghJAAiNQAAmVBHk2QANg4AUgwIgZAAQhtgFhAgWQiEgthEhFQhRhSAAh7QAAhKA0hYQAzhZA+ggQAqgXBFgKQBKgLB6AAQFIAACeBTQAihBBGgyQAqgdAWgLQAcgNAngFQAkgEEQAAQEHAAAjAEQAcAEAcALIBHAfQA4AXAsBEQAyBOAABcQAACGhXBlQhKBXheAUIgdAFQBLAlBaBJQBuBaAOAHQCeBQBIBiQA4BNAABUQAACugvBlQghBHhGAzIg3AmQgfAWgRATQgvAzAABaQAACYA8C/IAoCDQATBDAAArQAABEg5AmQgvAfg8AAQgrAAg5gNgEBsngG5QhSh1AAjcQAAh4AVgeIgoiTQCoglA5gKQA/gKA/AAQEUAAB4C3QBdCOAAEAQAACrgTAgQgHANgOAAQgRgBgJACIizAkQhEAMg8AAQkDAAhribgEBStgO7QhSh2AAjbQAAgfACgZQAEhIAPgWIgniTQBygkB8gOQA+gHAzAAQEVAAB3C3QAhAyAWBBQAmB2AAClQAACrgTAgQgHANgOAAQgRgBgKACQikAigOACQhEAMg8AAQkCAAhtibgECtQgTRIgngIQlAhBi+ggIhMgHQg5gFgIgEQgIgEgIgUIgNglQgkhuAAh8QgCgpACghQADg9ASgaIgniTQBygkB8gOQBAgHAyAAQD+AAB5CbQBxCQAAEaQAAC1gNAVQgFABgKAAQgPAAgYgDgAG42lQiUgQgegJQgegJgfgwQgagugCgCQgdgggMglQgJggAAgzQAAg9AMggIAqhSQAFgnAXggQArg+BgAAQBKAABaAlQB4AxAPBSIAkgBQBeAADjBJIAmAQQAZAKAPAPQAqApAABpQAAA/gMAiQgOAlgiATQg6AfjQAAQiiAAjAgVgEB6/gcnQilgUjXgtQoEhtnji0Qnwi4nAj8QiLhPhQg/QhxhYg9hkQhHh1AFiGQAFiPBbhVQAwgtBEgWQAbgJAdgFQBokOBUkWQATg8ANgxIAThIQAXhjAJhUQAHhPgChtIgGi9QgGjnAtiJQAZhNBBh1QAthRAagzQAdADAWAAQEhAAEBhSQEShXD2i3QleqnAAmdQAAmdE5jMQE5jMJ4AAQJgAAK6E6QEcCANmF+QNzGEGrDAQD6BwOLGQQMuFsCZBbQDbCDBgEjQA7CzAMD3IAKAAQiQKplRGOQiACXjOBbQjXBfjpAAQlkAAm1i9Qhugwh9hDIi/hpQjChrhnAAQhZAAhGAnQhBAjh7BwIAcA/Qk5JSm7ErQmOEMn0AcQg6ADg6AAQhMAAhHgEQgiBThvBNQiZBpjBA5QiyA1jLAKQguACgvAAQiKAAiZgSgEhlMgmaQgdgOgngfIgrgkQgsgjgvgfQiWhii8hAQh7gqkXhYQjjhHhugpQlHh7hvieQi5gjiKgWQhagPgegDIhIgKQgdgEgcg+QgyhqgBgEQgghiiMi/QiPjEhqhVQCEiWDsirQDzimBEgyQBEgyDMh7QCyhsAvgYQC5hhD+htIG4i4IDDhPQDShRBsgaQDpg4BphcQBdhSAAh3IgCgaMBDtgMDIH4hbQF/hFEfg7QN7i2JEjKQG0iYBdgmIDChQQDshbDEgyQDXg2CWAAQFSAAE4DEQCDBSCrCPQBNBAECDkQC0CfBHAjIBAAcQAuATA1AgQCIBQBSBkQBmB9AACJQAABbgwBqQg2B7heBNQgzArhGAzQhGA0gYAMQg0AahQAdQhOAZgTAIQhEAdiuAhQjGAmhoAiQmLCAjpFvQiLDchHB5QgtBNhkCCQieDPiZCGQk6ETkoByQjdBWiqAjQikAhjBAAQi7AAiygjQi5glichHQihhKiAhcQiShwhkhIQgegVhjhUQhbhMhFgvQjeiVkggtQgCA7gkBOQgpBXhJBTQi3DRkyBgQirA2iEAjQhzAdgrAMQhwAgkmCLQkDB6lYD7QiuB/iPB1QlHDwiPBKQi1Bci7AAQhtAAjigkQjjgkgUAAQgHAAgYAGQgYAFgJAAQiggFhAADQhlADhoAnQgbAKg3AiIhpBBQiOBUhXAAQhAAAg6gegEhAoiLFIAApmIMOAAIAAJmgEiBGiLFIAApmIMOAAIAAJmgEhpBiPsIAApmIMOAAIAAJmgEiuciW3IAApmIMOAAIAAJmgEidAijCIAApmIMOAAIAAJmgEBsvinYIAApnIQwAAIAAJngEiHPinYIAApnIMOAAIAAJngEjoliurQiDiCAAi4QAAi4CDiCQCCiCC4AAQC4AACCCCQCCCCAAC4QAAC4iCCCQiCCDi4AAQi4AAiCiDgEgLwiuCIAApnIMMAAIAAJngEhpBiuCIAApnIMOAAIAAIcQgyAcglAvgEi6qi3pIAApmIMOAAIAAJmgEA7pjAwIAApmIMOAAIAAJmgEAMYjQEIAApnIMOAAIAAJngEjkujUnQiCiCAAi4QAAi4CCiDQCCiCC4AAQC4AACDCCQCCCDAAC4QAAC4iCCCQiDCCi4AAQi4AAiCiCgEg3VjTkIAAovMAgSAAAIAAIvgEh5JjTkIAApnIMOAAIAAJngEBvDjb+IAApnIQwAAIAAJngEgyNjllIAApmIMOAAIAAJmgEDNEkNlQiZg3gfgJIhQgYQg2gShHgdQhXgjg9hJQg6hGAAg7QAAhcA1iKQA9ifBmiCIkAAAIAAtrIR3AAIAABmIF0ABQAHAAAIAGQALAIAqAJQAPAEAqApQAwAwAYAuQAmBJAxBXIA1BcQBOCJArBAQAcAoB7CmQBxCZAzBkQBICPAAB/QAADMkPAAQhrAAirhSQiWhSgFAAIhmAoIhGAdQhnAshHAsQgbARg8ArQhPA6hJAbQhNAchWAAQhwAAihgzgEi6qkM4IAApnIMOAAIAAJngEAVekPGIAAmHIYGAAIAAGHgEjY3kbgIAApnIMOAAIAAJngED7zkdYIAAtqIR3AAIAANqgEi/NkrCIAApnIMOAAIAAJngEETzktCIAAtrIR3AAIAANrgEAkek0pIAAtAIchAAIAANAgEhWAlRIIAAqVIchAAIAAKVgEAjjlkQIAAmHIYGAAIAAGHgEgkHl2dIAAqUIchAAIAAKUgEiy/l4WIAAmQIMgAAIAAGQgEiT/mErQiGgDiDgNQhsgLglg3QgegrAAhrQAAjwDhh2QDGhnGsghQEXgVKggBQMWgCGdgQIcKAAQNIAgIOBeQLaCCAADlQAACykPA9QixAomgAAQh2AAlOgGQlOgHnJAAQoBAAvcAFIygAHIzuAEQlLAAhOgBg");
	this.shape_2.setTransform(1501.7,2564.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.3,0,3796.1,5128.6);


(lib.arbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbol4();
	this.instance.setTransform(-105.1,-229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-229.2,225,248);


(lib.arbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbol2();
	this.instance.setTransform(-119.2,-349.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.2,-349.7,292,405);


(lib.arbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arbol3();
	this.instance.setTransform(-141.3,-306.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.3,-306.9,276,355);


(lib.unenlagia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.setTransform(0.4,0.1,1,1,0,0,0,26.9,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:1.3,skewY:0.5},23,cjs.Ease.get(-1)).to({regY:-9.2,skewX:2.9,skewY:1.2,y:0},23,cjs.Ease.get(1)).to({regY:-9.1,skewX:0,skewY:0,y:0.1},47,cjs.Ease.get(1)).to({scaleX:1.01,skewX:-0.8,x:0.5},26,cjs.Ease.get(-1)).to({scaleX:1.02,skewX:-1.7,x:0.4},22,cjs.Ease.get(1)).to({scaleX:1.01,skewX:-0.8},32,cjs.Ease.get(-1)).to({scaleX:1,skewX:0},31,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.sombra();
	this.instance_1.setTransform(124.6,-46.3,1.041,1.117,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(205));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.6,-148.8,286.2,163.9);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(4.1,5.7,1,1,0,0,0,2.9,106.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.8,scaleX:1.03,scaleY:1,skewX:-0.8,skewY:0.8},23,cjs.Ease.get(-1)).to({scaleX:1.04,skewX:-1,skewY:1.2,x:4,y:5.6},21,cjs.Ease.get(0.99)).to({regX:2.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:5.7},44,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(-14.9,1.8,1,1,0,0,0,0,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.4,-218.5,291.8,247.8);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol70();
	this.instance.setTransform(-92.5,-25.4,1,1,0,0,0,-92.5,-25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1},18).to({scaleX:1,scaleY:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-435,490,429);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol67();
	this.instance.setTransform(8,-12,1,1,0,0,0,8,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-1.3},12,cjs.Ease.get(-1)).to({skewX:-3},13,cjs.Ease.get(0.97)).wait(36).to({scaleY:1,skewX:0},0).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-242,293,242);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol66();
	this.instance.setTransform(0,-121,1,1,0,0,0,0,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.sombra();
	this.instance_1.setTransform(151.2,14.2,0.853,0.98,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-242,297.7,260.1);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol63();
	this.instance.setTransform(-97.7,-34.1,1,1,0,0,0,-97.7,-34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:1.5,y:-34},33,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.5,skewY:0.3,y:-34.1},36,cjs.Ease.get(1)).wait(43).to({scaleY:1,skewX:1.5,skewY:0},27,cjs.Ease.get(-1)).to({scaleY:1,skewX:0},23,cjs.Ease.get(0.77)).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.5,-821,765,821);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol64();
	this.instance.setTransform(119.4,-65,1,1,0,0,0,119.4,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3,skewY:1.3},37,cjs.Ease.get(-1)).to({regX:119.5,regY:-64.8,scaleY:1,skewX:7.2,skewY:3.4,x:119.5,y:-64.9},50,cjs.Ease.get(1)).to({skewY:3.4},25).to({regX:119.4,regY:-65,scaleY:1,skewX:0,skewY:0,x:119.4,y:-65},62).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-215,425,215);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol55();
	this.instance.setTransform(4.6,-3.7,1,1,0,0,0,0,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21},39).to({scaleX:1},42).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-5.8,46,5.8);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol57();
	this.instance.setTransform(-9,-2.7,1.666,0.615,0,0,0,-0.1,-7.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.98,scaleY:1.34,x:-19.4,y:11.7,alpha:0.301},24).to({regX:0.1,regY:-7.5,scaleX:6.3,scaleY:2.06,x:-29.4,y:25.9,alpha:0},23).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-25.3,74.3,22.7);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-54.3,-3.5,1,1,0,0,0,-54.3,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-1.8,skewY:-1.3},24,cjs.Ease.get(-1)).to({regX:-54.4,skewX:-4.1,skewY:-3,y:-3.4},26,cjs.Ease.get(0.99)).to({regX:-54.3,scaleX:0.97,skewX:-5.1,skewY:-1.9,x:-54.2},42).to({regX:-54.4,scaleX:1,skewX:-1.8,skewY:-1.3,x:-54.3,y:-3.5},66,cjs.Ease.get(-1)).to({regX:-54.3,skewX:0,skewY:0},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-153,166,153);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol59();
	this.instance.setTransform(-38.5,-12.7,1,1,0,0,0,0,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol56();
	this.instance_1.setTransform(16.1,-89,1,1,0,0,0,0,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol58();
	this.instance_2.setTransform(-32.8,-8.5,1,1,0,0,0,-0.1,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-165.5,169.8,161.8);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 47
	this.instance = new lib.Symbol47();
	this.instance.setTransform(122.7,94.6,1,1,0,0,0,122.7,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3},3).to({scaleY:1,skewX:0},6).to({rotation:0.7},10).to({rotation:0},16).wait(19).to({skewX:-3.3,skewY:-1.7,x:122.8},5,cjs.Ease.get(1)).to({skewX:0,skewY:0,x:122.7},7,cjs.Ease.get(1)).wait(12));

	// sombra.png
	this.instance_1 = new lib.sombra();
	this.instance_1.setTransform(191.9,121.1,0.597,0.696,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.3,191.9,131.1);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 72
	this.instance = new lib.Symbol72();
	this.instance.setTransform(373.4,232.8,1.197,1,0,0,0,290.1,232.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 73
	this.instance_1 = new lib.Symbol73();
	this.instance_1.setTransform(-0.8,278.7,1.197,1,0,0,0,62.1,70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,0.2,795.6,465.2);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree2();
	this.instance.setTransform(-5.5,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({skewX:0.6},2).to({skewX:0},3).wait(22).to({scaleY:1,skewX:-0.3},3).to({scaleY:1,skewX:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-399,282,399);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.setTransform(-110.8,-237.5,1,1,0,0,0,-0.1,-144.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewY:-0.5,x:-110.6,y:-237.7},43).to({scaleX:1,skewY:0,x:-110.8,y:-237.5},42).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.5,-381.9,369.6,288.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.setTransform(-110.7,-34.2,1,1,0,0,0,-109.4,-58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0.5,skewY:2.3,x:-111.4,y:-33.5},20,cjs.Ease.get(1)).to({regX:-109.5,scaleX:1,skewX:0.7,skewY:2.6,x:-111.6,y:-33.4},22).to({regX:-109.4,scaleX:1,skewX:0,skewY:0,x:-110.7,y:-34.2},27,cjs.Ease.get(1)).to({scaleX:1.06,skewX:1,skewY:1.7,x:-109.9,y:-35},25).wait(64).to({scaleX:1,skewX:0,skewY:0,x:-110.7,y:-34.2},21).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-171.3,260.9,196);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.setTransform(41.7,-23.3,1,1,0,0,0,40,-23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-1.6,skewY:-0.8,x:41.8,y:-23.2},31,cjs.Ease.get(1)).to({skewX:0,skewY:0,x:41.7,y:-23.3},36,cjs.Ease.get(1)).wait(38));

	// Layer 2
	this.instance_1 = new lib.sombra();
	this.instance_1.setTransform(199.4,-68.2,1.502,1.798,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.6,-319.5,413,350.2);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.setTransform(0,-23.3,1,1,0,0,0,0,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewY:0.8,x:-11.5},17,cjs.Ease.get(-1)).to({skewY:1.5,x:-23},17,cjs.Ease.get(0.95)).wait(40).to({skewY:0.5,x:-9.6},29,cjs.Ease.get(-1)).to({skewY:0,x:0},24,cjs.Ease.get(1)).wait(31));

	// Layer 2
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(57,-12.7);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(34,-12.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:34},34).wait(40).to({_off:false,x:57},53).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},34).wait(40).to({startPosition:0},0).to({_off:true,x:57},53).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,-223,527,259.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(0.8,-0.5,1,1,0,0,0,0.6,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.5,scaleX:1,scaleY:1,rotation:389.9,x:0.7},1).to({regX:0.6,rotation:420.1,y:-0.4},1).to({scaleX:1,scaleY:1,rotation:450},1).to({regX:0.5,scaleX:1,scaleY:1,rotation:479.9,x:0.8,y:-0.5},1).to({regX:0.6,rotation:510.1,x:0.7},1).to({scaleX:1,scaleY:1,rotation:540},1).to({regX:0.5,scaleX:1,scaleY:1,rotation:569.9,y:-0.4},1).to({regX:0.6,rotation:600.1,y:-0.5},1).to({scaleX:1,scaleY:1,rotation:630},1).to({regX:0.5,scaleX:1,scaleY:1,rotation:659.9},1).to({regX:0.6,rotation:690.1,x:0.8},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.2,-45.1,90.8,77.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{caminando:0,parado:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(-2.5,-50.6,1,1,0,0,0,0,-55);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.setTransform(-12.8,-127.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-127.3,38,131);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"caminando":0,"parado":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(0,-55,1,1,0,0,0,0,-55);

	this.instance_1 = new lib.Bitmap27();
	this.instance_1.setTransform(-15.8,-126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-126.8,49,134);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"caminando":0,"parado":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.setTransform(0,-55,1,1,0,0,0,0,-55);

	this.instance_1 = new lib.Bitmap37();
	this.instance_1.setTransform(-13.6,-126.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-126.1,34,131);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"caminando":0,"parado":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(1.4,-15.2);

	this.instance_1 = new lib.Bitmap20();
	this.instance_1.setTransform(-14.4,-141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-142.7,34,142);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"caminando":0,"parado":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(0,-55,1,1,0,0,0,0,-55);

	this.instance_1 = new lib.Bitmap38();
	this.instance_1.setTransform(-16.2,-129.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-129.5,34,132);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(-58.6,-61.2,1,1,0,0,0,-58.6,-61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2},19,cjs.Ease.get(1)).to({regX:-58.7,rotation:2.5,x:-58.7},18).to({regX:-58.6,rotation:0,x:-58.6},18,cjs.Ease.get(0.99)).wait(23).to({rotation:-2.3},16,cjs.Ease.get(1)).to({rotation:-2.5},9).to({rotation:0},24,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.5,-450,593,450);


(lib.rebb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(0,-330.5,1,1,0,0,0,0,-190.5);

	this.instance_1 = new lib.Symbol35();
	this.instance_1.setTransform(166.4,-333.5,1,1,0,0,0,0,-116.7);

	this.instance_2 = new lib.Symbol34();
	this.instance_2.setTransform(21.5,-139.6,1,1,0,0,0,0,-139.6);

	this.instance_3 = new lib.Symbol32();
	this.instance_3.setTransform(-245.5,-257.7,1,1,0,0,0,0,-139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.5,-522,591,523);


(lib.progreso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#354C5B").ss(2,1,1).p("AhNgXIgUgQQgNgcgNgcIgEgBQgLgVgXgFIgQghIgIAlIgHAHQgMAwASArQABABAAACIAJAHIALAuIADADIAAAFIAXAWQADAyAdAmQAIAJAKAIQAOBtBmACQAwgHAbgqQAWgjAAgoQAqggABgyQAAgIAAgHQAzhQgjhhIgUAbQgnAIgQAmQgOAkgYAfQgLg4AIg9QACgQgDgPIgHgIQAGhDgug0IgJgdIgHgBIgHAfIgIAHIgKAPIgBAFIgHAHQgSApAKAsQACAFABAGQgSBRAYBPQAAACgBACIgIABQgKgRgKgRQgHgLgHgNQgCgFgCgEg");
	this.shape.setTransform(39.4,39.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhZCrQgKgIgIgJQgdgmgDgyIgXgWIAAgFIgDgDIgLguIgJgHIgBgDQgSgrAMgwIAHgHIAIglIAQAhQAXAFALAVIAEABIAaA4IAUAQIABABIAEAJQAHANAHALIAUAiIAIgBQAAAAABgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgYhPAShRIgDgLQgKgsASgpIAHgHIABgFIAKgPIAIgHIAHgfIAHABIAJAdQAuA0gGBDIAHAIQADAPgCAQQgIA9ALA4QAYgfAOgkQAQgmAngIIAUgbQAjBhgzBQIAAAPQgBAygqAgQAAAogWAjQgbAqgwAHQhmgCgOhtg");
	mask.setTransform(39.4,39.8);

	// Layer 4
	this.progBar = new lib.Symbol33();
	this.progBar.setTransform(42.8,70.9,1,0.269);

	this.progBar.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.progBar).to({scaleY:0.75},1).to({scaleY:1.11},1).to({scaleY:1.48,y:71},1).to({scaleY:1.84},1).to({scaleY:2.2},1).to({scaleY:2.57},1).to({scaleY:2.93},1).to({scaleY:3.3,y:71.1},1).to({scaleY:3.66},1).to({scaleY:4.03},1).to({scaleY:4.39},1).to({scaleY:4.75,y:71.2},1).to({scaleY:5.12},1).to({scaleY:5.48,y:71.1},1).wait(1));

	// Layer 2
	this.instance = new lib.Bitmap4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.popup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// ok
	this.ok = new lib.Symbol42();
	this.ok.setTransform(1550.8,442.2,0.889,0.889,0,0,0,59,52.4);

	this.timeline.addTween(cjs.Tween.get(this.ok).wait(12).to({regX:58.9,scaleX:1.76,scaleY:1.76,x:132.8,y:443.4},0).to({regX:59,regY:52.5,scaleX:0.83,scaleY:0.83,x:133},3).to({regY:52.4,scaleX:0.89,scaleY:0.89},2).wait(7));

	// Symbol 46
	this.instance = new lib.Symbol46();
	this.instance.setTransform(79.8,175.1,0.889,0.889,0,0,180,67.3,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoOUJIgogyQgogygqgvQgqgugtgsQgsgrgugqQgagXgegRQgOgIgRgDQgZgGgagCQgNAAgLAIQgaAUgTAZQgSAYgZATQg7AwhCAiQgeARgdANQgpAVgsAOQgyAOgwAKQgdAHgcALQgyAUgyAQQg7AVhBABQhBACg8AVIgHAEIgjgDQgfgDgfgGQg9gIg8gOQgfgGgdgIQhXgWhSgdQhzgohfhMIhFg0QgpggglglQh+iBhdiYQhQiEgmiUQgbhngHhoQgKiOAWiLQAdi4BUimQBxjdDAicQByhdCFg+QBFgfBJgPIBWgVQBVgTBYgKQAjgEAjAAIAAgFIBRAAIAFgJIAHgJIAIgJIAJgJIAJgFIAMgHIAOgHIAQgIIAAgLQAAgMADgMQADgOAFgNQAGgPAIgPQALgUAPgVIKmAAIAGADIAKADIALACIAUAAQBIABBOgCQAvgDAsAQQAoAPASAkQAPAegOAeIAPACQAHABAGADIAOAEIAMAHQANAHALAKQAJAKAIALIAGAKMA36AACMAAAAlPg");
	mask.setTransform(323.3,167.7);

	// Piatnitzkyaurus copia 2
	this.caras = new lib.dinos();
	this.caras.setTransform(-543,244.8,1,1,0,0,0,294.5,260.5);

	this.caras.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.caras).to({x:-71.5},4).to({rotation:0.4,x:-69.2},2).to({rotation:0,x:-71.5},3).wait(15));

	// textoDino
	this.mensajeDino = new cjs.Text("I am Mosasaurus. I am a swimming reptil, not a dinosaur! I was found in Antarctica...can you imagine how was living in this frozen continent? Neither I, when I was there Antarctica was far away from the southern pole, so the weather was much warmer.", "60px 'Supersonic Rocketship'");
	this.mensajeDino.name = "mensajeDino";
	this.mensajeDino.textAlign = "center";
	this.mensajeDino.lineHeight = 104;
	this.mensajeDino.lineWidth = 1250;
	this.mensajeDino.setTransform(723.8,101.4,0.436,0.452,0,-1.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.mensajeDino).wait(24));

	// globo
	this.instance_1 = new lib.Symbol45();
	this.instance_1.setTransform(672.4,232.5,1.289,1.289,0,0,0,297.5,172.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:297.4,scaleX:1,scaleY:1,x:672.3},3).to({scaleX:0.96,scaleY:0.96},2).to({scaleX:1,scaleY:1},2).wait(10));

	// circulo
	this.instance_2 = new lib.Symbol46copy();
	this.instance_2.setTransform(199.5,175.1,0.889,0.889,0,0,0,67.3,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// rojofondo
	this.instance_3 = new lib.Boton3();
	this.instance_3.setTransform(37.7,72.9,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// nombreDino
	this.nombreDino = new cjs.Text("PIATNITZYSAURUS", "41px 'STENCILED PERSONAL USE'", "#FFFFFF");
	this.nombreDino.name = "nombreDino";
	this.nombreDino.textAlign = "center";
	this.nombreDino.lineHeight = 41;
	this.nombreDino.lineWidth = 634;
	this.nombreDino.setTransform(575.4,581.1);

	this.timeline.addTween(cjs.Tween.get(this.nombreDino).wait(24));

	// Symbol 43
	this.instance_4 = new lib.Symbol43();
	this.instance_4.setTransform(570,559,1.588,0.724,0,0,0,359.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

	// Bitmap 8
	this.instance_5 = new lib.Bitmap8();
	this.instance_5.setTransform(-26.6,-100.1,1.649,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-100.1,1661.2,845.6);


(lib.muss_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol51();
	this.instance.setTransform(3.9,-15.3,1,1,0,0,0,3.9,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1,x:4},32,cjs.Ease.get(-1)).to({scaleX:1.01,scaleY:1,skewX:-0.3,x:3.9},32,cjs.Ease.get(1)).to({regX:4,scaleX:1.01,scaleY:1,skewX:0,x:4},36,cjs.Ease.get(-1)).to({regX:3.9,scaleX:1,scaleY:1,x:3.9},31,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-197,423,197);


(lib.mapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.puntito = new lib.puntito();
	this.puntito.setTransform(39.4,78.9);

	this.timeline.addTween(cjs.Tween.get(this.puntito).wait(1));

	// Layer 1
	this.mapaObj = new lib.Symbol74();
	this.mapaObj.setTransform(0.7,0.3,1,1,0,0,0,-46.6,-69.9);

	this.timeline.addTween(cjs.Tween.get(this.mapaObj).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,97,144);


(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol21();
	this.instance.setTransform(320.2,590.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{n:0,no:1,o:2,so:3,s:4,se:5,e:6,ne:7});

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.setTransform(0,-55,1,1,0,0,0,0,-55);

	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-2.5,-41.2,1,1,0,0,0,0,-55);

	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(1,-2.5,1,1,0,0,180);

	this.instance_3 = new lib.Symbol15();
	this.instance_3.setTransform(1.5,-3,1,1,0,0,180);

	this.instance_4 = new lib.Symbol14();
	this.instance_4.setTransform(-4.7,-58,1,1,0,0,0,0,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{skewY:0,x:-2.5,y:-41.2}}]},1).to({state:[{t:this.instance_2,p:{skewY:180,x:1,y:-2.5}}]},1).to({state:[{t:this.instance_3,p:{skewY:180,x:1.5,y:-3}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3,p:{skewY:0,x:-2.5,y:-1.5}}]},1).to({state:[{t:this.instance_2,p:{skewY:0,x:-1.4,y:-0.5}}]},1).to({state:[{t:this.instance_1,p:{skewY:180,x:2.5,y:-39.7}}]},1).wait(1));

	// Layer 5
	this.instance_5 = new lib.Symbol40();
	this.instance_5.setTransform(1.5,3.1,1,1.202,0,0,0,0,-12.7);
	this.instance_5.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-129.5,63,147.9);


(lib.herrera_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// herrera.png
	this.instance = new lib.Symbol27();
	this.instance.setTransform(-1,-0.8,1,1,0,0,0,-26.9,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-26.8,regY:-7.7,scaleX:0.99,scaleY:1.02,skewX:0.7,x:-0.9,y:-1},13).to({regX:-26.9,regY:-7.5,scaleX:1,scaleY:1,skewX:0,x:-1,y:-0.8},11).wait(9).to({skewX:2.2,skewY:0.9},4,cjs.Ease.get(1)).to({skewX:0,skewY:0},5,cjs.Ease.get(1)).to({regX:-26.8,regY:-7.7,scaleX:0.99,scaleY:1.02,skewX:0.7,x:-0.9,y:-1},13).to({regX:-26.9,regY:-7.5,scaleX:1,scaleY:1,skewX:0,x:-1,y:-0.8},11).wait(1).to({skewX:-0.8},3).to({scaleY:1,skewX:-5.2,skewY:-2.7},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,skewY:0},5,cjs.Ease.get(1)).wait(8));

	// sombra.png
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(43,0.1,1,1,0,0,0,0,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-141.7,296.6,169.3);


(lib.ganaste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.progreso("single",14);
	this.instance.setTransform(508,233.1,1.5,1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIAAgKIgEgIIgDABIgEAAQgCADAAACIABAGQACACADABIAHADIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAhBiDQABABAAAAQAAAAABABQAAAAABAAQAAAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQAAABABAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQgBABABAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDgAhdiAg");
	this.shape.setTransform(989.1,93.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjYFBIhIAAIgBACIgCAAIgVAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAIgIAAIgEgDQgEAAgBgCQgCgCAAgDQgCgCgBgDQAAgCgDgCIAAgEIAAgFIAAgGIANgOQADAAACgCIAEgDQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMgMQAAgFADgCQADgBADgEIAAgIIACgDIAAgJIAEgEIACgEIABgEIAAgGIACgDIAAgUIAEgEIAAgeIgDgDIAAgJIADgCIgDgEIAAgkIACgCIAAgCIABgBIAAgMIgGgKQgBgDABgFIABgCIACgCIAAgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQACgBgCgEQABAAgBAAIgBgCIAAgUIACgDIAAgBIABgBIAAgOIgGgGIAAgHIgCgEQgCgBACgEIACgCIAAgGIADgCQAAgDgCgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQACgJAEgCIAAgCIACAAQADACACgDIAFgCIABAAIABABIABANIAEAEIAGAAIACgEQAAgCgBgDQgCgCgBgCIADgCIACgDIAPAAQACgDAAgCIgBgFIgDgEIAAgFIAAgCIgDgBIAAgQIADgBIAAgNIgFgIIgDgIIgDgEQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQgDgCAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgDAAgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBIAAgRIgDgFIgCgEIgCgEIgDgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgDgCAAgDIAAgEIgDgDIgDgEIgFgLIgBgDIABgDIgYgWIgHAAIgVgLIgLgLIAAgNIACgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIgKIAFgDQADgBACgDIAzAAQAFACAEAEQAEADACAGIACAAIADgCIAIgEIAFAAIAFAAIAAAAIABABQACADADgBQADAAADACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAEgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAPAAIAFAEIAFACIACAAIADAAIAEAAQACgEADABQAEABABgEIARAAIACADIAMAAQACgDADAAQADAAABgDIALAAIAEACIAFADIAIAHIAIAJIACAEIACADIADAEIADAFIAHAIIADAEIACAHIAAAEIAAABQACADAAACIACAEQACACAAADQAAACADACIAAAJQAFAGADAHQACAIAFAGQgBAFACADQADADgCADIAEAEIAAAIIABACIACABIAAAGIAAAGIACACIABABIABADIACADIAAAEIABACQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAAAOQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAEAEIACAEQAAAAAAABQAAAAABABQAAAAABABQAAAAABABIAAAOIABACIADAAIACgDIAAgEIAIgHIAJAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQADgCAAgEQAAgEACgCIAAgDIAJgJIAAgGIADgDIAAgMQACgCADABQADABADgBIAEAEIADAFIAIAAIAAAAIABABIAAAPQACACABADQABADADACIANAAIACACIACADIAAAJIAEACIAEAAIACgDIABgCIAAgJIgBgBIgCgBIgBAAIgBgBIAAgYQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgCACgCIgCgFIgDgFIAAgSIAEgCIABgCIAAgIIADgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDABIAAgOIgCgEIAAgaIgCgCIgBgBIAAgaIADgEIAAgUIADgEQAAAAABgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIAGAAIABAAIAJgEQAEgCADgDIAnAAIADADQADAAADgDIADADIAXAAIADADIAEgDIAFAAIAEgDIA5AAIAAgBIACgBIAWAAIAAABIABABIAqAAIAIAFQAEACACAFIADAEQABADgCAEIgEAEIgDAEIgDAEIgDAEIgIAIIgKAEIgCACIgCACIAAAGIgJAHQAAAFgCACQgCADACAFIACACIAAAVIgBABIAAABIgBABIAAAjIgEAEIgDABIAAATIADADIAAAJIgCADIAAABIgBABIAAAWIADACIAAAQIgDADIAAARIAGAKIAAAgIADADIAAAVIgDAFQgBADgCACQACABABADIADAEIAAATIgDACIAAAHIgDADIAAAGIADADIAAAYIgDACIAAAMIADADIAAAYIgDADIAAAQIADACIAAASIgBABIgBABIgBABIAAABIAAARIADADIAAASIgCABIgBACIAAASIADACIAAASIgGALIABABIAAACIAEAEQACABAEAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIACAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIAFACIAFABIAGACIAIAFIAAAKIADADIAAAEQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAABQAAAAAAABQgBAAABABQAAAAAAABIgKAFIgLACIgKAGIg8AAIgBgBIgCgBIgSAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIgDACIgPAAIgBgCIgBAAIgQAAIgBABIgBABIgbAAIgDgDIgSAAIgDADIgGAAIgBgBIgCgBIgVAAIgBAAIgCACIgVAAIgXABQgDAAgDgDIgCgBIgEAAIgOgPIgBgCIgCgCIAAgPQACgCADgBIAEgDIAEgDIAEgDIAEgDQADgDACACQAEACACgCQADgDADgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgBIAOgPIAAAAIABgBIAAgBIAAgdIAGgFQACgDgBgDIgEgEQACgEgDgCQgCgCAAgDIADgDIAAgMQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAIACgFIgCgEIgDgEIAAiPIADgFIAAgIIADgBIgCgGQgCgDABgEQgDgCAAgCIAAgGIAAgFIADgFIAAgGQAAgDgDgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgYIAGgGIAAgDIgCAAIgCgBQgCgCAAgDQAAgDgDgCIAAgNIgEgDIgFgDIgOAAIgDAHIABABIABABIgCACQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCAGIgCAHIAAACIgFAGIABADIAAAVIgEAIQgCAFACAFIgDADIAAAHIgCABIgCABIgCADIgBACIgBABIgBAEIAAAIIgBAJQgCABAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAACgCACIAAAOIgFAIQgBAFgIgBIAFAEIAAAGIgBAFQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgCACACADQgDACgCAEIgDAGIgBAEIAAAFIgFAKIgFANIAAANIgDAEIAAAGIgGAEQAAAFgCAEQgDAEACAGIgCABIgDADIgHAAQAAABgBAAQAAABAAABQAAAAAAAAQAAABAAAAIAAAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIACAAIABAAIAAABIAAAVIAAABIgCABQgBADAAAEQABADgEAEIAAAMIgIARIAAAKIgDAEIAAAGIgFAFIgBABIAAACIAAAJQAAAEgDAEIgDAKQgBACgFAFIAAAGIgDAGQgBADgEABIgGAAIgBACIgBACIgHgFIgGgFIgEgHIgFgGIAAgFIgDgDIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDIgBgEIgDgJIgBgEIAAgFIAAgHQgCgDAAgCQgBgDgDgCIAAgGIgDgDIAAgVIgCgEQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgEIgCgCIgEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgEgDIAAgTIgFgFIAAgEIAAgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgFIAAgDIgBAAQgCgDABgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgCgFQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgVIADgEIAAgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEgFIgDgGIgEgGIgCgJQgBgDgCgCIgFgFIgDgFIgEgFIgFgEIgIAAIgDgCIgCgDIAAgFIgJgIIgEAAQgCADAAACIABAGIADAEQAEAAAAADQABABgDAEIAAAPQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBACIAAAIQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABABQAAAAABABIABAAIAAABIAAABIAAABIAAARIgBACIgBAAIgBAFIABAFIgDAEIAAAmIACADIAAASIADADIAAAGIgCADIAAAVIABABIABACIAAAUQADAFAAAEIAEAEIACAEIACAEIAEADQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACAAADIADADQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAHAHIAIAIQADgBACADQAAAAAAABQABAAAAABQABAAABAAQAAAAABgBIAIAIIAAAGIADADIAAAOIgCACIgBACIgBADIgCABIgHADQgDACgDAEIgYAAIgEACIgFABgADiEBIgCABIABACIACACIAAAHIAIAAIACAAIABgBIAAgEIgBgEIgFAAIgEgDIgCAAgAClD2QgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAHAEIALAAIAAAIQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIALAAIABgBQACgHgCgEIgKAAIgCgDIgFAAIAAgIIgCgBIgCgCIgKAAIgDADgACSEGIAAAHIAJAAIABAAIACgBIAAgEIgBgEIgFAAIgBAAIgFACgADODvIgDALIAGAEIAKAAIABgBIAAgKIgBgCIgDgCIgFAAIgFAAgADmDjIAEAEIAFgFIgGgBIgBAAIgCACgADADlQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIADAAIABgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgDgBIAAADgAC7C0QgDACAAACIAEAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgDgDIgFAEgADqC1IAAAAIgBAEIABABIADAAQAEgCgEgEIgDABgAD4CdIAAAKIACACQAAACAAgCIAEgDIAEgCIgGgIIgDAAIgBABgACqCgIAAAFIABADQABAAAAABQABAAABAAQAAAAAAAAQABgBAAAAIAEgFIgDgDIgCgBIgEABgADmCMIAAAGIAFAEIACAAIACgCIAAgEQABgDgCgDIgEAAIgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgADUB6QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgEgCQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABgACFBJIgDAFIgCAEIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQACACABAEIACADQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAEAEIAEAEIAGAAQACgDABgEIABgHIAKgDIAKgBQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIABADQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABIACAEIABABIABAAIABAAIAFgDIABgBIAAgIIgHAAIgIgHIAAgGQADgCAAgCIACgEIAJAAIACgCIAFgCIAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgIgCIgHgDQgCgDgBgDIgDgHIgJAAIgEADIgEAFIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgTAAIABAXIAAAAIgCABIgEAAIgCAAgADOBMIABAEIAEAFIADgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgHgHIgBADgAh4AkQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIABAGQACADADABIAGADQAGACAAAEIACAEIACACIADACIAEACQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBQAAgDABgDQAAgEgCgCIgCgBIgEAAQgFgDgCgEQgCgFgDgDIgLAAIgDACgAiEA9IADgCIAAgGQgEgCgBABIgDAEIgBACIACADIACAAIACAAgADPAjIgCAGQAAACADAEQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIACgFIABgDIgEgEIgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAhTAgIAAANIAAAAIABABIALAAIADgDIACgBIAAgHIgBgBIgBAAIgKAAIgCgCIgBgBIgCABgACEApIAAABQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAglAkQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABIADADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIABgCIADgEIAAgBIAAgBIgBgBIgHAAIgCACgAhjAVIAAAEQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIADAAIAEgBIAAgGIgFgFgAgyAaQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgEIgBgEIgGAAIgDADQgBACABAFIABAAIACAAIADAAgADmASIgBADIADACIACACIAFgFQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAgBgBIgGAAIgBACgADDAXQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgDIgCgCIgDABIgBAGIACAAIACAAgAgSASQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAHAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAgBIgDgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGAFgAjxgHIgBAFQgBACADABIAEAAIAFAAQACgBABgDQAAgCADgDIAFgCQADgCAFAAIAAgOIgEgBIgDgCIgEgBIgDgEIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgNAAIAAAIIgBAFIABAEIAEABQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQACACADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAKIgHAGIgCABIgBAAIgBABgADRgBIAAABIABABIADgBIABgBIgDgCIgCACgADEgOQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgKQgDgCgDAAIgFABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAEIAAAHQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIADgBIAEABgAkBgVQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIADABIACgBIABgEIgCgBIgCACgADQgoQgBAAAAABQABAAAAABQAAAAAAAAQABABABAAIACgBIACgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDAFgAhOgrQgBABAAAAQAAABABAAQAAABAAABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBIADgEIAAgCIgCgCIgIAAIABAEgAhzgsIgCABIAAADQADADADgDIAAgCIgBgCIgCAAIgBAAgAhdg4QADABADgCIABgGQAAgDgCgCIgFAAQgCgBgDACIgBALIAEAAIACAAgAjgg9IABADIABACIADAAIADgFIgBAAIgBAAIgBgBIgCgBIgBgBQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAgAg5g/IABACIAAABIADgBIACgCQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDACgAhPhKIAJAAIACgCIACgCIAAgGQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgDgDIgGAAIgDgCIgEAAIAAgFIgCgBIAAgBQgCgDABgDQABgCgCgDIgGAAIgHAHIAGAHIAGAAIADADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABIAAALIAAABIAAgBIACABgAh1hUIgCABIAEAIQAGgFABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgGAAIgCACgADVhNIADAAIABgBIABgDQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDAAQgCACACADgADnhrIgBACIAAAGIAEAEIAGgIIgGgHIgDADgAhPiCIgBAAIgBABIAAABIAAAGIABAGIAHAAIACgDQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgFgFIgDgEIgCABgAD7h8IgBAEQAAAAAAAAQAAABABAAQAAAAAAAAQABABABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIgCgBIgDABgAAwh+IgBAEQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAKAAQgEgCgBgCIgBgEIgDAAIgCABgAh4h7QAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIADgCQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAgBQgCgEgEgCQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDACIAAAAIgBAAIABAAIgBADgAhhiXIgDAGQgCADACAFQACACADgBIAFAAIACAAIABAAIAAgBIAAgKIgDgCIgCgBIgDgBIgCAAIAAAAgAiJiQIAAABIACABIADgBIAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAABAAAAgAhzilIgBABIAAADQACADADgDIAAgEIgBgBIgDABgACAjNQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIABAAIAAgBIABgBIgBgDIgBgBIgCADgADjjnIAAAHIAEABIADADIAEgEIAAgHIgIgBIgDABgAC4jpIAAAGIAFAEIALAAIAAgIQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgDgCIgDAAIgDAAIgCABgACwjvQADADADgDIAAgQIgFAAIgCAAQgCACgDABQgCAAgCACIgBADIAAACIAEAEIAEAAIADACgADLj5IABADIACACIAAAEIAHAAQAEAAAEgCIAAgGIgFgFIgNAAIAAAEgAh0j5IAAACIAAADIABAAIABgBIAAgCIgBgCIAAAAIgBAAgAC5kNIAAAFQgBADACADIAMAAIABgBIABAAIAAgHIgFgFIgFABIgBAAIgEABgACSBWIgDgDIABgCIAAgCIALAAQACAEgCACIgFADQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(923.6,94.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgFJIgDgDIgLAAIgHgIIgHgHIAAgEIgEgFIADgHIADgIIACgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIADgCQACgCACgBIAEgCIADgDIADgEIAHgGIABgBIAEAAIgBgCIABgDIAAgCIACgDIAAgIIAAgmIAEgHQABgEAFgCIgHgGIAAgDIgCgHIgBgIIABgGIgBgHIAHAAIAHAAIACgCIACgDQgDgDgCgBQgDgBgCgDIgEAEIgDACQgBgCAAgDIAAgEIgCgEIAAgEIgCgFIgDgEIgCgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQgBgBAAAAIAAgqIgDgDIAAgJIACgDIAAgSIgBAAIAAgBIgCgCIAAgUIAHgLIgDgEIgEgGIABgHIAAgKQADgCgBgDQgBgEAFgCIAAgJIgDgEIAAgRIAFgIQABgDgBgGIABgCIACgCIgDgDIABgdIgEgFQAAgCgDgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgCgDgDIAAgWIACgCIAAgBIgDgCIAAg1IgDgDIAAgSQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgEIgCgEQgCgEgFgDQgEgDgGgCIgFgCQgCgDgDAAIgFgFQgDgBAAgEIgDgEQgBgDgDgDIAJgQQAEgHALgEQADgCAEACQAEABADgEIBTAAIADADIAGAAIAEgDIACADIALAAIAIgEIAGgFIASAAIADADIACgDIAOAAIAAgDIABAAIAGAAIAEACIAJAAIADAEIAGAAIADgDIAGAAQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAIASAAIABABIABABIANAAIABAAIABgCIAGAAIAEAAIAEADIAFAEIADADIAFADIAFAFIAAANIgGAFQgDADgBAEIgFAGQgDADgEABIgDACIgDADIgTAUIgBAIIgDAFIAAAFQgDADgDABQgDABgDAFIAAACIABACIADAAIAFAEIAAAFQAAACADACIAAAGIADAEIAAApIACACIAAADIAAA5IgBACIgBABIAAATIABAVIgCAFQgCACAAADIAAAFQAAACgDADIAAACIAAADIgEAEIgFADIAAADQAHABACAFQABAGAFADQABAEgBAEQAAAEACAEIAAAWIgCAFIAAAFIACADIAAA+IgCADQgBAIADAFIAHAMIAAAXIgDADIAAAAIAAAAIABAAIABAEIAAALQACABABADIABAFIgDAEIAAAXIABABIACACIAAAJIADADIAAAIIAEAFIADADIADABIAEADIAIAIIAJAEIAHAGIAAAQIgGAGIAAADIgCAAIgCABIgGAGIgMAAIgDADIgGAAIgDADIgDACIgCABIgBAAIgDADIgJAAIgCgEIgDgDIgDADIgCADIADACIgIAHIgRAAIgBAAIgDgDIgFAAIgGgEIAAgKIgHAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIgEADIgPAAIgIgDQgEgBABgGQgEgCgEACIgFAFIgZAAIgCgCIgOAOIgZAAIgDADgAAeEcIgFADIgDABIAAACIABACIAAABIACADIACADIAFgBQADABACgCIAAgOgAAwEWQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgHAAIgBAEQgBACADADIACgBIABABgABBDPIAAACIADAEIABgBIABAAIAAgDIgBgBIgBgBIgCAAIgBAAgAApC9IAJAIIAGgEIgBgFQABgDgCgCIgHAAgAgfC7QACAEADgEIgDgCIgCACgAgRCiIgDACIADADIAAAFIAEACIADgEIACgEIgCgCIgDgDIgEABgAg1CjIAAAHQABAAABAAQABABAAAAQABAAAAgBQAAAAABAAIADgCIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBAAIgDACgAglCQIgBABIAAAFIABAGIAHAAIAGADQABgBAAgBQAAAAAAgBQABAAAAgBQgBAAAAAAIgDgDIAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgJAAIAAABgAAsCRIgBAEQAAABAAAAQAAABAAAAQABAAAAABQAAAAABABIAGAAIABgEQABgDgDgCIgDAAIgBgBIgCACgAAaB/IAAAFQAFgBAAgBIgBgEIgDAAIgBABgAAFBkIAAAMIAFAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgFQAAgDgBgCIgEgBIgBAAIgDABgAArBlIAAAEQAAAAAAAAQAAAAAAABQABAAAAABQABAAAAABIAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIAAgJQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFABgAAAA7IAAAPIABACIACACIAKAAIAEAHIADAGIACACIACADIAMAAIACgEIACgFIADgDIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgDIACAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgCIgCgCIAAgHIgBgFQgEACgBgDQgCgCgEAAQgEgDgCgEQgBgEgEgDIgFgBQgDAAgCACIAAAFQAAACgDACQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBABIgEAAIgEABIgDgBIgBAAIgCACgAgUBMQgBAFACADIADAGQADAAADACQADACAFgBIAAgPIAAgBIgCgCIgMAAIgEgFQAAgDgCgEIgDgGIgFAAIgFAEQgDACAAAFIACACIADACIADABIADACIAEAAIABAAIACABgAgQArIgBAAIAAAGQAAADACACIALAAIABAAIABgBIgDgGQgBgDAAgEIgBAAIgFAAIgEADgAgMAEQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIABAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgCgCIgBAAIgBACgAAbhQQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAEAFAFgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgEAAIgDADgAAJh9IAKALIAAACQACACADABIAFACIALAAIAAANIADACQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAFABQABAAAAAAQABAAAAgBQABAAABAAQAAAAABgBIAAgMQgDgEgEgBQgEgBgEgDIAAgLIAFgFIANAAIAAgHQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgHQgFAAgDgDIgFgFIAAgGQAAgBABAAQABAAAAgBQAAAAABAAQAAgBAAAAIACgEIAEAAIADgBIgBgNIgEgDIgDgDQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBABQgCAAgDgBIAAgKQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgBgEIgOAAIAAADIgBADIgDAEIgDAFIgHAAIgCgDIgCgCIAAgGQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABgBAFAEIABgDIACgCIgDgDIAAgJIgMgBIgBABIAAAFQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIgDACQAAAAAAAAQgBABAAAAQAAAAgBgBQAAAAAAAAIgFgEQAAgEgBgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIAAgNIgEgBIgFAAIgFgEIAAALIgFAFIgFAAQgCABgDgBIgDgFIAAgJIAEgEIAGAAQADABACgCIgDgEIAAgGIgEgDQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgHAJIAAAEIgEAFIgHAAQgEgBgDACIAAANIADACQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIADACIAAAPQgFABgCADIgFAFIAAAJIAMAMIAAABIAAAIQgDAEgGACIAAAMIAEADIADACIAEABIADACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACAEIAAADIAAAEIAGADIAEABIAFACIAGACIADAHQABAEAEADIACAAQAGgCABgEQAAgEAEgCgAAJhnIgBABIgBADQAAAAAAABQAAAAAAAAQABABAAAAQAAABABABIAFAAIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABgAhMhkIAAAFIAFAAIADgBIgCgDIgEgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAgABAifIABADIAAABIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABgBAAgAAsjfQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIACADIACAEIADgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBIgBgCIgCgDIAAAAIgEADgAAaj1IAAAGQADADADgDIAAgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIgDgBIgCACgAAEkJQgCABAAAEIADADQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIADgCIABgEQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgEgCIgDADgAhGkDQABABAFgCIgBgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEAAQAAAGABAAgAg0kVQAFgDgFgCQgCACACADgAAcivIgFgBIAAgIIACgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAGAAIAEAEQABAEgCABIgCAEIgGAAg");
	this.shape_2.setTransform(867.3,93.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbE8IgEgDIgFAAIgDgCIgJAAIgBAAIgBACIgWAAQgDgEgDABQgEABgCgDIgEACQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAIgaAAIAAgDIgCgEQgEAFgEgBQgEgCgDAFIgPAAQgCgDgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgFIgFAAIgEAEIgdAAIgEgEIgFADQgDACgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCACIgFAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAIgLAAIgDgFIgYAAIgPgKQgDgEgGgJIAJgOIABgCIAEgDIADgEQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEgDQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAEgBQADAAACgDQADgDADgCQAEgBACgEIACgBIADgBIAAgFIACgDIACgBIAAgMIAAgBIACgBIAAgBIABgBIAAgRIgDgCIAAgCIgBgGIABgFQADgCgBgDQAAgCACgDQABgCAAgDQAAgDADgCIAAgJIgCgEIAAgLIACgDIAAgSIgBgBIgBgBIAAgWIABgBIABgBIAAgNIADgDIgDgCIAAgPIADgEIAAhuIACgDIABgBIAAgBIAAgZIgBgBIgBgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAgnIgDgDIAAhWQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIACgCIAAgpQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgCIgBAAIgBgBIAAgBIAAgDIAAgYQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgEIAIAAIADgDQAEACADgDQADgCADAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADgBIAFAAIALAAIAEADQAAAAAAAAQABABAAAAQAAAAABgBQAAAAABAAIABgBIABgDIABgBIASAAIAPAHIADABIAFAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAEgDIAVAAIADADIAOAAIAEgDIAOAAIADADIAIgCIANgGIAMAAQADABACAEQACAFABAGIAIAHIAAANIAAACIgCABIAAALIgDADIABACIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgDADIAAEtIgCADIAAAQIgDACIAAAQIAAAAIACACIAAABIABABIAAATIgDADIAAAeIgCACIgBAAQgCADABADQAAABABAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAABgBAAQAAABAAAAQAAABgBAAIAEAEIAAAYIgDADIAAAQIACABQACAHgBAGIAAAMQAGAFAGACQAGADADAGIAGABIAGADQACAAACACIAEAEQADACABADQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIAAALIgFALQgDAGgFACIgFABQgDgBgCADQgDACgDgBQAAgBgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgDACgDAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAABAAAAgAAVEEIAMAMIAIAAQABgFADgFQADgFAFgDIAFAAIACgCIACgCIAAgJQgFgCgDgDIgHgHIAAgOIABgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAEgEIAAgEQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgEAAIgDAEIgEAEIgNAAIgNgNIgBgBIgOAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgCgCIAAgDIgCgEQgBgBgEABIAAAHQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAABAAAAQAAAAAAABIACABIADABIAAADIACABIgDAFQgBAEgBACIgKAAIgJgJIgHAAIgFAFIAAAOIgBABIAAAAIgDgDIgPAAIgFAJQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAABIgHADQgDABgEAAIgBAEIgCAEQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIADADIABgBIACgBIAEAEIAAAGIAFAEIADADIACAAIAJgHIAHgHQADgCADADQACACADgBIAEAEIABAEIACACIACACIAJAAQACgCABgEQAAgDAEgDgAAhC1IgEAEIABADIAAAEQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgEIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgBIgCABgAAOClIAEgCIgEACIgDgCIADACgAhJB2IAAANIAEAEIAGAAQADADACADIADAHIABABIAAABIAJAAIAFgDIAAgPIgEgEIgFgEIAAgJIAIAAIACgDIACgCIgDgDIAAgGIgFgFIgFAAIgFAFIAAAKIgDACIgCACIgIAAgAhXCLIgEADQACADADAAIAFgDIgBgBIgBgCIgCgBIgCABgAgiB3QAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAJAAIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgEAAIgEABgAAdBlQAAABgBAAQAAAAABABQAAAAAAABQAAAAABABQADACACgCIAEgEIgBgCIgBgCIgJAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAgAAMBVIAEAAIACgBIgBgDIgBgCIgEAAQgCADACADgAgDA9IABAAIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgCgDIgBAAQgCAEACACgAgNAMIAAAIIAIAIIAFAAIAGAEIAAAKIAEADIAHAAIACgDIACgFQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAIAAQAEADACAAQABAAADgDIAFALQABACAFACQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgDACgCQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBAAIgIgHIAAgIQACgFAFgCIAIgGIAAgNQgEgCgBgEQgBgDgDgCIAGgGIAAgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIACAAIACgBIAAgKIgCgDIAAgHIgKgIIAAgJIAEgDIAFgDIAAgMIgFgEIgFgCIgEgDQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgCgDgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgCIgBgBIgJAAIgEgDIgEAAIgDgFQgBgDABgCIgJgJQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIAAAEQgDABgBACQgCACgBABIgFAAIgEgIIAAgIQACgDACAAIAEgDIABgEQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgHAAIgEAFQgCAEgDACIgGAAQgBgDgDgBIgGgDIAAgDIgEgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgEAAIgEADIgBANIAJAJIAAAGIgEACIAAADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIADADIAAAPQADAEADABIAAAKQgCACgCABIgFADIAAAMQADACAAACIAAAFIAHAGIACABIADABIAAAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABIgCACIAAAMQAEAFAFACQAFABAEAFIAAAGIACACIACACIAGAAIADADIADgDgAgxASIAAAAIACACQABABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIABgDIgBgCIgDgBIgCACgABBgdIAAAHQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAADACACIAEgEIAAgEIgBgBIgEAAIgCgEQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIAAgBIAAABgAhAgpQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAIABgDIgBgEIgCAEgABFg4IAFgEIgDgDIgCgCQgDAFADAEgAhChSIAAABQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgBIgDgBIgCABgAAzh+IgBAFQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIADAAQADgEgDgEIgDAAIgBABgAAhiPIAAABIAAACIAAAAIAHAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAgAgdikIgDACIADADQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIABgEIgBgDIgDABgAA3jNIABgDIgBgCIABACIgBADgAAdjmIADAEIACAEIAEgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgDQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgMAAgAAvj4IAAAJIACABIACAAIAEgBIAEgDIAAgEQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAgAAMjzIAFgBIAAgGIgDABIgCAAQgBADABADgAAHAcQgCgCABgDQABgDgCgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIADgCIAGAAIABABIACAFIAAAEQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgBACgADshWQgCgCgCgBQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgEgFIgEgDIgBgGIABgGIAAgKIABgBIAAgBIAAgCIgBgBQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgCgDQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIgDgEIgBgEIABgBIgBgBQgDgDABgCQAAgDgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgDgDIAAgVIgEgEIgDgGIgDgGQgCgDABgDQgCgCgBgDIgBgGIgBgGIgFgFIABgLIABgCIADgCQgEgCgDAAIgHABIgHgEQgEgCAAgFIgBgBIgBAAIgCgBIgDgDQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgCgEIgDgCIgEgEQAAgFAEgFQADgFgBgGIAEgEIAEgDQADgBACgCIADgCQAEgBACgCIAEgEIARAAQAEAEACgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADADQADgDADAAQAEABABgEIATAAIADADIAGAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIAMAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAABABIADABIAFAEIAFAFIADAJIAABSIgCABIAAAQIACADIAAAOIgBACIAAABIgBABIAAABIAAAKIAAACIACAAIAAACIAAABIAAAZIgBACIgBAAQgCADABAEQABADgDADIgBAFIAAAIIgCACIgEACIAAAEIgJAEQgEACgEAEgAj2heIgFgFIgDgBQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBIgEgEQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIAAgJQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgCgCIAAgGIgDgDIAAgPIABAAIABgCIAAgBIABgCIAAgPIgCgDIAAgYIAAgCIACgBIAAgJIACgCQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIABgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgDQAFgCABACIADACQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIADgDIAAgEIgBAAIgBgBIgMAAIAAgBIgBAAIAAgJIAAgIIgJgQIAAgOIAFgLQACgFAGgEIAOAAIAFgDIAGgDIAQAAIACABIACACIAEAAIAJgEIAJgEIATAAIACgDIACAAIAOAAQACACADAAQADABACADIADAGQACACgCAFIAEACIACACQACADgCACIgCACIAAAGIgCACIgBACQgCAKgDACQgCADgJAEIgLALQgFAFgHADIAAAGIgDADIABAEIgBACQgDADgBAEQgBAEgEADQACAFgDADQgDADABAFIgDAFQgCAEgDACIAAAWIgHANIAAALIAAAFIAAABQgDACABADQAAADgDADIAAABIgCADIgEAFIAAAGIgEAEIgDADIgBAAIgCABgAjUkMIAAAEIADAAIACgBIgCgDQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_3.setTransform(820.6,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABFLIgDgDQgDgBgCgDIgPAAIgDgDIghAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgBAAIgFACIg0AAIgBgBQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgxAAIgCAAIgBACQgCABgDAAQgDgBgCAEIgVAAIgCgBIgBgBIgYgBIgIgEIgFgGIgDgHIgEgHIADgFIADgGQADgGAEgDQADgEAFgCIABAAIAAgBIAGgBIAEgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIAEgDIADgCIAEgCIADgBIAEgDIAAgVIADgDIAAgNIgEgCIgCgCIAAgYQACgDABgCIACgFIgBgBIgBgBQgCgDABgEQABgDgDgCIgBgHQAAgEADgDQACgDgBgDQgCgEAFgBIgCgEIgEgEIgBgGIgCgGIgBgGQABgDACgDQAAgEABgCIADgGIgDgEIAAgaIADgFQABgDACgDIgDgEIAAgUIAEgIIAFgIIAAgJIgCgBIAAgBIgDgJQgBgCAAgGIACgCIAEgCIAAgTIgDgDIAAggIgDgEIAAgGIgBgBIgCgBIAAgFIAAgFIABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgVIgBgCIgBgEQgBgDABgDQAAgDACgEIAAgIIADgDIAAgGIgDgDIAAgYQADgFAAgFIAAgKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgBIAAgRIABAAIACgCIAAgRQgCgCAAgDQgBgCgDgCIAAgJIgDgEIAAgGIgBAAIgDAAIgBgBIgFgFIgGgDIgDgFIgFgCQgDgBgCgDQgCgCgDAAIgEgDIgBgEIAAgBIgDgCIAAgJIADgDIABgCQADgEAEgDIAHgIIARAAIABAAIACgCIAYAAIACACIAQAAIABgBIABgBIASAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABIAPAAIABgBIABgCIACAAIAJAAIAKAAIABABIACABIACABIABAAIAMAAIADgDIASAAIADACIASAAIACgCIAbAAIACABIACACIAJAAIABACIACABQAEAAABAFIAEAIIADAHIABACIABACIAAADIAAAEQgEADABAEQABAEgDACIAAABIgBABIAAAJIADACIAAAYIgDADIAAAQIADACIAAACIAAAVQgDADAAAEQAAAEADABIAAAYIgDAFIgDAFIAAAOIABACIABABIAAABIABABIAAAKQgFAGABAGIABAKIAGALQACAFgFAIIAAAHIgDAEIADADIAAAGIADADIAAAPIgEAGIgCAGQgBADABADQACACABADIADAFIAAAMIgCABQgBADAAACQABADgCADIAAABIgCACIAAAEQABACACADIAAASIgBACIgCAAIAAAWIADADIAAAHQABAFgEADIAAAtIgBAAIgBABIgBAIIABAIIABADIAAASIAAABIgBACIAAAUIAAADIABAEQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAFIAAAeIACADIAAAJIgCADQAAAEACACQACACgCADIADADIABADIANAAIADADIASAAQABACAIAAIAGAHIAFAHQABADgCAFIgDAEQgBABAAAAQgBABAAAAQgBAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgFADIgCADIgFAEIgPAAIgBABIAAACQgEABgEgBQgEgBgCAFgAiJEbQAAAAAAAAQAAABAAAAQAAABABABQAAAAABABIACAAIACgBIAAgFIgGACgAhYEEIADABQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIACAEQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAJAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAAgGIAFgEIANAAIAAgLIAAgGIABgFIAHAAIAHgGIAAgGIgFgDIgEgEQAAgEgCgFQgCgEADgGQABgCADgBQADgBADgDIAAgJIgMgGIAAgSIAFgEIADAAIAEgCIAAgFIAAgFQgDgCgDgBQgDgCgDgDIAAgTIAAgBIABgBIADgBIAEAAIAEgDIABgCIgNgMIAAgUQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIACgCIAEAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAgFIAAgFIgHgCIgFgBIAAAIIgDAFIAAABIgHAAQgDgDgCgEQgBgDgDgCIgPAAIgCACIgCADIAAAFIAGAGIAGAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgGABQgCAAgDgCIgBgEIgEgDIgMAAIgCAGIgBABIgBADIAGAEQAEABACACIADADIAAAGIgDADIgEADIgHAAIgCgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgEgCgCQgCgBgDABIgGAHQADAEAFACQAFACAEAEIAAAQIAFADIAIAAIAFAFIAAAGIgHAIIgGAAIgIgIIAAgNIgDAAIgCABIgDABIgBAAIgDAAIgDABIAAAGIABAHIABABIADABIACADIAGgBIACACIADACIAAAFQABADgCACIgEADIgPAAIgEgJQgCgEgFgDQgBAEgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAALIAAABIABABQADABACACIACAEQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDADIgDgCIgEgCQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgDIgDAAIgDACIgCAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIAAALQAFgBADADIAEAFIAAAMQgDADgDACQgDABgDADIAAAJIAIAHIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAPQADACADAAQADgBACADIACAAIABgBIABAAIABgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIADACIAAAIIABADIACACIAMAAIACgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgCIAEgBQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACADgAidEFIgCACQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIACADIAHAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgFQABgDgEAAIgDAAIgCABgAiJB6IACADIAEACIADgCIgBgEIgEAAIgEABgAg5AlIgDACIAAAJIADACQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAHAAIAIgGIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgCIgBgBIgJAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAgAgjhAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADgDgDgDIgCAAIgCABgAgwhMQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQABgDgCgCIgGAAIgFABIAAAGIACACIACADIABAAIADAAgAgrhvIACAAIAAAEQAAABAAAAQAAABAAAAQAAAAABABQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEAAIAIgHIAAgCIgDgEIgCgBIgEgBIgEgFIgDgFQgCgDACgCQgCgEgDgBIgGgDIgFAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgCgGIgDgFIgJABIgDADQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAEAFIAGAAIAIAHIAAAGIgEAEIgDAEIgFAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIAAAGIAHAIIAHAAIAFgGIABgCIACgEIAJAAIAEgDIACABgAhXhyQAAAAAAAAQABAAAAAAQABgBABAAQAAAAABgBIAAgEIAAgGQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAIgIAIIAIAHIABAAIACABgAhzi5IAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACgCIAAAAIgCgBIgCABgAhnjWIACACIAAAGIAIAHIADgCIADgCIABgEIABgGIACgCIABgCIASAAIABAAIABgBIgBgFIADgEIAAgGQACgCADAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIACACIAEACQAEgCACgEIADgHIgCgCIgCgCIAAgGIAGgDQAEgBADgCIACgDIgHgHIgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIAAAEIgEAEQgFACgEgCIgFgFQAAgEgEgCIgMAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgCADIAAAEIgDAFIgBABIgGAAQgBAAgDADIgFgDQgDgBgBgEIgDgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgBgBIgBAAIAAgBIgJAAIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgCADIgDADIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgDIgFAEIAAAJQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIADAEQADAAADABIAFADQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIADACIAAAJIAHAFQADABAGgCIACADgAiIjSIgBAEQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIADAAIADgEQACgBgCgFIgEAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAgAg1jPIABADIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgBAEgAgpjpIABACQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFABQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAgDIAAgEIgCAAIgEgCIgDgBIgCABgAiZjeIADAAIABgBIAAgIQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDADIgBAAIABAAgAiekJIAGAFIABAAIABgBIABgBIAAgGIgFABIgBAAIgDACgAgzkWQADAAADgCIgCgFIgCgDQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAHIACAAIADABgAhyD8IgEAAIAAgIQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBAFIgDABIAAAAgAheDAIgHgIIAAgFIAEgFQAEgCADADQADACADABIABAFIgBAFIgEAEgAguC9IgFAAIgCgDIAAgEIADgDIAEgCIAFAEIAAAHIgEACIgBgBgAhNCnIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAIgCAFIAAAAIgEgCgACFByIgDgCIgDgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgEgCgCgDIgDgJIAAgJIgDgEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgDgDQgCgCAAgEIgCgCIgEgDIAAgFIgHgJIgJgIIgIgHIgEgDQgCgBgCgDIgFgFIgFgEIABgCIgBgDIgBgDIgBgCIgEgFIAAgMIADgEIAAgMQADgCABgCQAAgDADgCQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABgBIACgEIAEgBIACgBIAAgDIAFgFQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIACgBIADgCIADgEIAAgJIAHgIQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgCADgCIAAgGIAAgGQAAgDADgCQgBgEACgCQACgDAAgEQADgCABgCIAAgEIAEgEIADgEQAAABABAAQAAAAABgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIADAAQADgEADAAIAGAEQAFACADADIAFAGIADAFQACADgCADIADADIAAAnIgBABIgBABIgBABIAAABIAAA+IADABIAAAPIgDACIAAADIAAAEIADADIAAALIACADIAAAJIgCADIAAASIACACIAAABIAAABIAAAUIgFAFIAAAJIgDADIgEAFIgWAGIgDgEgABsgEIAAAGIABABIABACIABAAIADgDIAEgCIAAgCQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgEAAIgEABgAgtBqIgDAAIgDgCIgCgDIAFgDIAGAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAADIgDACIgBAAgADfiFIgCgCIgBgBQgDAAgCgCQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgJgIIgDgFIgBgGIgBgCIgCgDIgCgEIgBgDQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIgCgDIAAgEIgIgOIgDgFQAAgDgDgBIgDgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgDgCIgEgEIgEgCIgEgDIgDgEIgDgDIAAgDIgDgBIgCAAQgDgEgEgCQgDgBgDgDQgCgDgDgBQgDgBgCgDQgDAAgCgDQgCgCgDACIgHgDQgEgCgCgEIgNAAQgKgDgFgHQgGgIgEgJIAAgQIADgEQAAAAAAgBQABAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAzAAIADgDIACgEIAGAAIAEgDIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABIAcAAIAMAGIAeAAIACgCQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAUAAQACADADABIAFAEIAEAGQACADAAADIACAEQABACAAADIAAAGIAAAEIAAALIgDACIAAARIgDAGQgBADgEADIgFAAQgDACADAEIAAABIABABIABABQgBAEADADQACADgBAFQgFAGgBAFIgBACIAAACQACACADABIAEAEQACACABADIADAEIABAGIgBAGIADADIAAAOIgEAHIgFAJIAAAGQgCACgDABQgDABgCADgAhgjaQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAgHQACgCADAAIAFABIABACIAAADIgDACIgFAEIgBgBgAh0jyIgEgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBIADgDIAGAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIAAAEIgFAEIgBAAIgDgBg");
	this.shape_4.setTransform(728.3,93.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguFJIgCgDIgGAAIgEgEIgJAAIgFgDQgDgBgCgDIgEgEIgEgDIgEACIgEADQgCACgDgCQgBAAAAAAQgBAAAAAAQgBABAAABQAAABgBABQgCABgEgEIgJAAIgFgGIgKAAIgEgDIgFgBIgEgEIgEAAIAAgFQgCgBgDAAQgDABgCgEIgGAAIgEgFQgDgBgBgEQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBAAgBAAQgFgCgDgFIgIgIIAAgJIgFgDIAAgGIgCgDQACgEgBgDIgEgFIgFgFIgGgHQgDAAgCgBIgDgEIgEgDQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIgMgNQABgDgBgDIgFgHIgIgKIgHgMIgFgKQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgCIAAgYIgDgDIAAgGIgDgDIAAgJIgDgCIAAgLIgFgJIgFgJIAAgLIgCgDIAAgFIgCgDQgCgCAAgDIABgFQAEgCgBgEQgCgFAEgDIAAgSIADgCIAAgBIAAgeIAEgDIAAgIIADgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgDIAAgMIABgCIABgBIADgKQACgEgBgGIgCgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIAAgFQAAgCADgDIAEgIQABgEACgDIABgEIAAgEIAFgDIAEgBIAEgBQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAgBQAAAAABAAIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgCIALAAIAGgFIAAgIIABgEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgGIAAgXIAIgRIAAgIIACgCQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgEQABgDAEgCIADgDQAAgFACgDQACgDAAgFIAGgGQADgDADAAIAFgCIADgCQACgEADgBQADgBACgDQADAAADgCIAFgGQABgEADgDIAFgFIAUgLIAFABIADgCIAKAAQADgFAEgBQAEgCACgEIAKAAIADgDIAHAAIABgBIABgCIADgBIADAAIAGAEQADAAACADIAAAHIgEAEIAFADIABABQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCADIADADIgDAEIAAAFIgFAGIgFAFIgFAEQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAIgIgCIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABIAAA0IADADIAAAjQAEADgBAEIAAAHIgDAEIAAAFQgBADgCACIAAALIACACIABABIAAAjIADAEIAAAGIADACIAAAPIgBABIgBACIAAABIgBABIAAANIABACIACABIAAAZIgBAAIgBABIgBABIAAAAIACACIABADIAAAJQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQACABgCAEIgCACIAAAIIgFAFQgDADAAAFIACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIADAEIAAAMIADAEIAAAOQADACAAACQAAADADACIAAALQgCADgBADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgJAIIAAAKIgBABIgCABIAAAGIgCAFIgBACIgBACIAAAWIAHAGIAGAHQgBADACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIAAAEIABABIABACIABAEIAAADQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAADIAAACIgDADIAAAJIgDACIAAAQIADADIAAAHIADAGQACAEADACIAFAAIADADIABgCIACAAQAEACACAFQACAEAEADIAJAAQACACgBADQAAACAEADIAAAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgDAEIgJAAIgCAEgAgvE1IgBADQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIACgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgCIgBAAIAAgBgAitCSIABACIABACIADAAIABgBIAAgCIgCgCIgBAAIgDABgAhVCSIAAABIACABIADgBIAAgCIgDgBIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAi+CCQADABADgCIAAgGIgEgFIgJAAIABAGQgBADADADIACgBIACABgAjWBmIgDAFIAEAEIAGAAIAEADIACAAIACgBIAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHAAQgDACgBADgAiBBiIgDADQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAEAEIADgEQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgCgCIgDgCgAiwBiIAAAKIALAAIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIgCgCIgDgCIgEgBIgBAAIgFACgAiSBcQACACAEgBIAAAAIABAAIgBAAQAAgEgCgCQgCgEACgEQgEABgFgEIgFgBIAAABIgBAAQgCAGADACQACAEABADIADgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABgAi9BPIgCACQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAADIACAEIADAAIADABIAEACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgDgDIAAgKIgEAAIgEAAgAisA7IgCAEIgCAFIACACIAGAAIADACQABAAAAABQABAAAAAAQABAAAAgBQABAAABAAIAAgMIgBgBIgBAAIgFgBIgBAAIgEABgAiCBEIADAAIACgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgCADACADgAiWAsIgBACQAEADAEgDIgCgCIgBgDIgEADgAioAaIADAAIABgBIgBgDIgDgCQgCADACADgAj4AVIgFADIABAAIABABIAEAAIAAgCIABgCgAiXgCIAAABIAAAJIAEgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABIABgBIAAgBIABgCIAAgBIgDAAIgDgCIgBAAIgCAAgAisgQIAAADIAEACIADACIAFgEIAAgDIgCgEIgGAAgAiDgRQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAEABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCIgCACgAiRgdQADAAACgCIABgGQAAgEgCgDIgFgBQgDAAgDADIAAANIAEAAIADAAgAiJg/IAAAEIABABIADAGIADAFIAFgDIADgBIAAgKIgEgEgAjohMQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAIACAAIACgBIgBgEIgDgBIAAgBQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAgAiUhOIAAACQACAEADgEIgCgCIgBgBIgBgBIgBACgAisiPQgDACgBAEIACACIADACIAFAAIAFADIAAgBIABgBIAAgLIgIgEIgEAEgAiXikQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAAIADgDQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAIgEgCQgCABgCACgAiHi9IgCABIAAADIADACIAAAEQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAGAAIAFgEQgCgFgEgBIgHgEIgBABgAiXjOIAAAKIAHAAIADADIABgBIAAgDIgBgBIgBgCIAAgBIgBgDIAAgDIgCAAIgDgBIAAAAIgDACgAAvFGQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCgDIgEgFIAAgBIACgBIgJgJIAAgMIADgEIACgEIAHgIQAEgCACgFIAEgHIAMgLIABgDIAAgBIADgDIACgEIAEgFIAFgEIACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgEIAAgGIgDgEIAAgUIADgEIgGgFIAAgTIADgIIADgDIADgDQAAgEgCgBIgEgDIAAgBIAAgJIAAgHIAFgMQAEgFAAgGIgDgDIAAgGIgEgEIgDgCQACgDgCgDIgCgFIAAgKIgCgBIAAgBIAAghIACgDIAAgeIADgHQABgDAFgDIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABIgIgJIAAgEIgBgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAgNIAIgHIAFAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAACQAEACABgBIAEgEQgEgBgCgDIgGgFIAAgHIAAgHIACgDQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQgFgEgDgFIgGgKIgBgDIAAgEQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCgEIAAgLIACgDIABgBIABgCIACgDIAAgVIgDgDIAAgGIAAgHIAAgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgFgDgBIAAgbIgFgKQgDgFgEgEIgEgDIgBgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGgGIgEgFIgEgGQgBgDgEgDIAAgVQAFgEAGgCIAKgEIAEgDIACAAIAEACIAKACQACAAAGAFIACAAIALAAIADADIAIAAIABACIABAAQADACACgBIAGAAIACgDQADABADACQACACAEgCIAFAGIAGAAIAEADIAGAAIADAEIAGAAIAGAFQACAEAFACIAGADIAFAAIAEAEQACADADAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIAEACQADADAEACIAHAFIARASIACAAIACABIABABIABAEIACACIACACIABADIACADIACACIADADQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIADACQgCAFABADIAFAGIACAEIACAEQAAADABACIACAEIABAGIgBAGQABAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAACADACIAEADIADAEIAAAFIACADIADADIAFAEQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAEACACQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAOQABAAAAABQABAAAAABQABAAAAAAQAAABAAABIACAEIACAEIgBAEIABADQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACADIACAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIABAEIACACIAAAKQgDACAAADIABAHQACADAAACIAAAEIADACIAAAtIADABIAAAMIgDADIAAAdQgDAFgFAEIgHAHIgDAGIgDAGIAAACIAAADIgFADQgCABgBADIAAADIADABIACACIADACIAAAGIADADIAAAJIgDADIAAAEQAAACgDACIAAAWQgEACACAGIgFAFIgDAHIgEAGQgCADABADIgEAFIgFAEIgCAEQgBADgCADIAAAIIgFAEQgCACAAAEIgFAJQgCAFgEADQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgDACQgDAAgBADIgEAEQgCAFgDACIgGAEIgGAEIgFAEIgHAHQgDADgFACQgEADgDADQgCAFgFACQgDAEgDABQgDABgEAAIgEAEQgCACgDAAIgEAEQgCACgEAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAIgEABIgGACQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABQgCADgDAAIgFACQgCACgDAAIgFAAIgDADIgCAAIgEAAIgDABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAgACbC5QAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQACgGgEAAIgDADgAB4C2IgDABIAAADQADAEADgEIAAgCIgBgCIgCgBIAAABgADFCOIgDACQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIALgBIAAgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFAAIgDACgACuCAIABABIABABIAHAAIACAAIABgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgDgCgCIgKAAgADWB1IgCABIACABIABABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIADAAIADgBIAAgEIgDgDIgCgEIgDABgADABiIAAABIAAAMIABACIADACIAGAAIAGAAIABgBIABAAIAAgGIgEgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgMAAgACZBnIAAAFIACACIADACIAKAAIAAgDIgBgCIgBgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgEAAIgBAAQgDAAgCADgACxBOIAAAJIABACIAEABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAgFIgDgFIgCgBIgEABgACIBQIAAAIQAAAAABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABIgBAAIgCACgADaBTIgDACIADACIACgBIACgCIgBgCIgBAAIgCABgADHBCQABAAAAAAQAAABABgBQABAAAAAAQABAAAAgBQACgDgCgCIgEgDIgDADQgCABACAFIACAAIABAAgACZA+QAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAKAAQAAgJgGAAQgFAEgBABgAB4A9IgCAAIAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIADgCIAAgBIgBgBIgCAAgACwAmIgBABIgBABIgBAAIADAGIACACIAJAAQgCgEABgCQAAgDgBgDIgHAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAgACJAlIgBAAIgBAGQAAACACADIADAAIADgDQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAgBIgGgEIgCABgADGAXIAAADIABABIADAAIACgBIAAgDIgDgCIgDACgAB3AYIADgBIABAAIgBgDIgDgCQgEADAEADgACIAAIAAAGIABAAIACABIACgDIAEgDIAAgBIgBAAIAAAAIgFgBIAAAAIgDABgAB2iNIAAABIACABIACgBIABAAIAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_5.setTransform(667.9,93.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AC4FHIgEgDIgvAAIgEgDIgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgHgEIgIgFIgHgEQgEgBgDgDIgGgEIgEgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgDgFIgFgDIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIgBgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgEQgGgFAAgJIgEgFIgDgFQgCgDAAgDIABgFIAAgKIAAgKQgDgCAAgCIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABAAIAAgBIAAgBIABgBIAAgFIADgEIAAgSIgCgBIAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAAgFIgBgBIgCAAIgBgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIACgBIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgRIADgEIAAgSIgGgGIgBgGIgEgHIgGgHIgIgIIgFgGQgCgDgGgBIgFgHQgEgDgCgIIAAgQQAEgCACgFQABgDACgEIAPAAIAJgKIAAgDIAKgFQAFgCADgFIgCgEIAAgEIgDgEIAAgJIADgCIAAgnQADgCABgEIACgGIACgGQABgEgBgFIAAgIIAAgHIgCgDIAAgJIgDgDIAAgIIgDgEIAAgRIADgDIAAgVIgCgDIgBgCIgCgIQgDgDACgEIgEgHQgBgEgFgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCgEIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDgCIgGgDIgDgDQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBAAAAAAIgNgLQgDAAgEgCQgDgDgFAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgBIgCgDIgDAAIgDAAQgCAFAAADIADAHIABAGIgBAGIgCAFIgDAGIAABzIgDACIAAAHQABADgCADQgCACAAACIgBAFIgIAIQgCADgBACQAAABAAAAQAAABgBAAQAAABgBAAQgBABAAAAIADAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIACADIADADIACAFQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAIAAAKIADADIACAEIAAAuIgBABIgBABIAAALIgEADQgBACACADIgFAGIAAADIgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAABABIAAADIADAFQAAACADACIAAAHIAAAHIgBAJQAAAEADAFQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBADIADAEIAAAqIADADIAAAvIgCABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAAJIgDADIAAAdIgCADIgBAAIAAAPIACAEIACADIACAEIADABIAAAEIAEAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACIAEACIAHADIAAAGQAAABAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIADADIAAAUIgDAGQgBADgDACIgDAAIgDABIgDABIgDADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCADIgJAAIgDgDIgGAAIgDgCIgDACIgZAAIgSgHIgDgBIgCABIgIgIIAAgGIgOgOIAAgKIgFgDIgMAAIgBAFIAAAHQACAEADABIAHADIABAAIADAAIACABIAAACIAAAKQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgKAJIgGAAIgFACIgFAAIgDgCIgSAAIgCACIgQAAIgCgCIgWAAIgCACIgVAAIgDgCIgPAAIgEACIgPgFIgHgFIgIgMIAAgFIgBgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgEIACgEQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgDADgCIAFgDQADgBADABQADgDAEgBIAGgDIAAgEIAEgDIAFgEQAAgGADgFQADgFgFgFIAAgTQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABgBIAAgVIgDgBIAAgCIgBgBIAAgOIABAAIACgCIAAgWIgBgCIABgDIAAgSIAEgDIAAgIIgDgEIAAgJQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgDIAAgNIABgOIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAhbIADgDIgDgCIAAgcIADgCIAAgNIgDgCIAAgZQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIAAgDIADgDIADgDIAAgYIADgDIAAgRIgDgFQAAgDgDgCIAAgkIgCgBIAAgCIgBgBIAAgNQADgDABgEQAAgEgDgDIgFgKQgCgFgFgDIgHgHQgEgEgEgCIgDgDIgCgDIgBgBQgBgDgDgCQgDgCAAgDIgBgCIgBgCIAAgIIAEgHIAEgFIAAgBIAEgBIAFgDIAFgDQAEACACgCQACgCADgBIADAAIADAAIADACIAQAAIACgCIAPAAIAEADIAFAAIAEADIALAAIADgDIACAAIANAAIACABIABACIApAAIADABIAAABIAiAAIABgBIACgBIAjAAIAEADQABACADAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAEAAABAEIADAFIARAAIAEgEIADgFIAIgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIAnAAIAEACIApAAIADADIAJAAIADADIAOAAIAGACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAGAEQAEABACADQACADAEACIAGADIAJALIAKAAIADADIAHAAIAFACIAEADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQACAAADACQACAAACADQADACACgCIAJAKIAJAIIAFAHQACAEAAAEQABADACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIABADQADACgBADIABAGQgEADAAADIABAHQgBADgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgGACIgHADIAAACQADADAAACIADAGIAAAXIAAABIgBABQgEAEAHACIAEAHIADAHIAAAgIgDADIgDAKIgGAHIgFAGIgBADIAAABIgCADIAAAEIgHAFQgDAEgFAAIgEAFQgCACAAADIgFAGQgCACgEABIgEACIgEABIgDAEIgFAFQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAAIgIAIIAAAQIALALIALALIAIABIAHAEIAGAEIAHADIAGAHIAGAGIAAAJIAEADIACAEIACADIABACQAAAFACACQADADgCAFIABADIABABQABADAAADQAAACADADIAAARIgBACIgCACIAAAMIgDACIABABIABAAIAAABIABAAIAAAGQABADADACIAAAKIAEAJIAEAIIAAALIADADIgGAGIAAAEIACAAIABABQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBIAFgBIAFgCIAFAAIAGAAIAMAAIABABIABABIABgBIAAgDIABgBIABAAIAGAAQAEgBADACIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAGIgCAEIAAAJIgCACIgBABIAAACIAAAKQgFACgCAFIgFAIIAAAEIgOAPIgDAAIgFAFIgFAFIgEAEIgFAEIgFADIgEAFQgCACgDABIgGAEIgIAAIgDACIgHAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgCABgCACIgXAAIgDADIgDABIgBAAgACqEGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABABABAEIAAACIAEAFIANAAIAAgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAEgDIAIAAIACgBIAAAAIAGADIAAAGIAEAFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgDIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgFgBgCgDQgDgEAAgFIgCgEIgDgEQgFABgCgCIgGgEIAAgIIgCgCIgCgGIgGAAQgEACgBgCQgCgDgDAAIgCgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgDgCgCIgEgDIgBgBIgBAAIgBgBQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAFQgEAHgGACQgGACgFAFIAAAGQADADAEABIAIAEIAAAPIgEAEIgEABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAKIADABIAEAAQADgCABgEQABgEADgDIAIAAIAEABIAAAAIACABgAiBD7IAAADQgBABAAAAQAAAAAAABQAAAAABABQAAAAABAAIAFgCIAFgDIAAgBIABgBIgFgFQgBAFgBAAIgCAAIgDABgAB8DzIgDADQgDADADADIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgIIgDAAIgBAAgAjND8QAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABgADeDkIgCABIAFAGIABgEIgBgDIgDAAgAjVDQQAAADABACIAKAAIAFgEIAAgEIgCgDIgOAAIAAAGgAikDJIgBAFIAAAEQADgDADgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAgAiYCzIgBABIAAACQADACAAADIABAGQADgCACABQADABADgCIAAgHIgFgDIgFAAIgDgDIgBAAIAAABgAhsC2IAAAGIAEAEIADAAIACgBIAAgLIgFAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAi/C5IAEAHIAFAAIADgCIADgBIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgNAAgAjgC5QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABgDIgCgDIgDAAIgBABgAjGCvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABgBIAAgDIgCgEIgBgDIAAgEIgKAAIgCABIgCAEIAAAIIAFACIAFgBIAEABgAiACeIgBACIAAACIAAADIAFAFIACAFIAGgBIABgBIABgGIAAgGIACgCIABgCIAOAAIAAgBIABgBIAAgQIgBgCIAAgBIgHAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgGIgBgEIgCgCIgBgBIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIAAAFIgBAEIACAEIAEABIADACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAUIgQAAIgBAAIAAABgAitCeIAAAHIADACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIANAAIAAgMIAAgCIgBAAIgLAAIgDgDIgBAAIgBABgAB4CkQgBAAAAABQAAAAAAABQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIAAgDIgGgEIgDAEgAiTCQIAAAEIAFAHQACgDACAAIADgDIAAABIAAgBIgBgEIgEgDIgEAAIgDACgAi/CSIAAAFIABACIAMAAIABAAIABgBIgCgFIgDgFIgHAAgACNCRIgBACIABADQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDAAgAioB6QAAABAAAAQAAAAAAABQAAAAAAABQABABAAABIADAAIACgCIAAgEQgFAAgBABgAhlBzIAFgBIAAgQIgJgDIgGgFIAAgMIACgCIACgDIAHAAIAEgEIAAgJIgEgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCgDIgCgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgDgBgCIgNAAIgBABIAAABIAAALIACADIACAAIAKAGIAAANIgDADIgGAAIgDADIgCACIAAAJQAEADAEACQAFADAFAAIAAAPIADADIABACIADAAIADAAgAi7BkQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgBAFQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIADAAIACABIAGgFIAAgFQAAgDgCgDIgFAAIgEADgAiSBoIAAABIACACIADgCIAAgBIgDgBIgCABgACRBnIABgDIgBgDIABADIgBADgAimBQIgEAFIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAHAAIADgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgDQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAgACgBQIgCABIAAAIIAGgCQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIgEgFIgDABgAiQBAIAGABIACgCIgDgBIgFACgABVAsQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBABIgBADIACACIACAAIABAAgABfARIAAAHQgBACACADIAGAAIAFgEIAAgIIgGAAIgGAAgAhvAPQgCAEADADIACAFQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAADgCIAAgKQgDACgCgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgDABgAiPATIgBADQAAABAAAAQAAAAAAABQAAAAABABQAAAAABAAIADAAIABAAIAAgGQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiDgEIgBABIAAACIADABIAAAGIAFAFIAJAAIAAgBQACgEgCgDIgCgEIgIgDIgCgBIgEABgABTACIgDADIAAABIAAABIABAAQAAAAAAAAQAAAAABAAQAAABAAgBQAAAAABAAIAAgBIAEgDIgBgCIAAgBIgDACgAB5AAIgFADIAEADIADABIAEgCIACgCIgBgCIgBgBgAiLgLIADADIABgBIAAgDIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAgCIgEABIgBABIAAAHIACgBIACABgAhogQIgBABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIAAAAIABgBIgBAAIgCgBIgCABgABjgTIAAADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEAAIgBgGIgBAAIgDABgAh8goIgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQADACACgCIADgEIgFgEIgCAAIAAAAgABQgmQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADABIABgBIgDgGQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAgACJhDIABAEIACABIgBADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAEAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgJIAFgEIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIAFgDIAEgEIAAgFIABgEIACgCIACgDIAFAAIAFgDIADgEIgCgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIgHgIIgDgFQgCgDABgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgCgCIgJAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgFIgBgFIgEgDIgHAAIgBANIAAAAIAAAAIABAAIABABIAEAAIADABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAQIgBACIgBABIgIAAIgIAIIAAAIIAGAGQACACAEABIAAAGIgBAGIAAABIgDADIgGAAIgCABgAh+hUIAAAGQgBADADACIADAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIAAgMQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgBAAIgDABgAB+hSIgDABIgBAEIABAEIAEgBIAEgBQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgCgCgDQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAgAjNhMIADgBIABgBIgEgEQgDADADADgAhvhmIAAACIACADIABAEIABABIAEAAIAHgEIAAgGIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgAh9h3IgBADQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACAAIAEgEIgDgFIgCAAIgCACgACziQIAAAGQgBADACACIADAAIAEgIIgEgEIgDAAIgBABgACeilIAAAGQgBADACACIAGAAIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIgFgDIgDgBIgBAAIgCABgABmjeIADAAIADgBIgGgFQgBABABAFgABOj3IAAABIABADIACAEIAFgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIABgFQAAgCgCgDIgHAAgAjSj5IAAADIAEADIABAEIAEgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAgABzj0IADABQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAEABIABgDIgFgGgAioj3IAAADQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIABAAIADgDIAAgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgABdkGIAAAEQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAOAAIABAAIABgCIAAgFIgDgEIgKAAgAi+kIQgCACACAEIAHAAIAHgEIgFgEIgFAAIgEACg");
	this.shape_6.setTransform(569.5,95.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIAAAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAiUhjIABAGQACACADABIAHADIAAgKIgEgIIgDABIgEAAQgCADAAACgAhBiDQABABAAAAQAAAAABABQAAAAABAAQAAAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQABABAAAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDg");
	this.shape_7.setTransform(506.5,93.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AC4FHIgEgDIgvAAIgEgDIgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgHgEIgIgFIgHgEQgEgBgDgDIgGgEIgEgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgDgFIgFgDIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIgBgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgEQgGgFAAgJIgEgFIgDgFQgCgDAAgDIABgFIAAgKIAAgKQgDgCAAgCIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABAAIAAgBIAAgBIABgBIAAgFIADgEIAAgSIgCgBIAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAAgFIgBgBIgCAAIgBgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIACgBIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgRIADgEIAAgSIgGgGIgBgGIgEgHIgGgHIgIgIIgFgGQgCgDgGgBIgFgHQgEgDgCgIIAAgQQAEgCACgFQABgDACgEIAPAAIAJgKIAAgDIAKgFQAFgCADgFIgCgEIAAgEIgDgEIAAgJIADgCIAAgnQADgCABgEIACgGIACgGQABgEgBgFIAAgIIAAgHIgCgDIAAgJIgDgDIAAgIIgDgEIAAgRIADgDIAAgVIgCgDIgBgCIgCgIQgDgDACgEIgEgHQgBgEgFgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCgEIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDgCIgGgDIgDgDQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBAAAAAAIgNgLQgDAAgEgCQgDgDgFAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgBIgCgDIgDAAIgDAAQgCAFAAADIADAHIABAGIgBAGIgCAFIgDAGIAABzIgDACIAAAHQABADgCADQgCACAAACIgBAFIgIAIQgCADgBACQAAABAAAAQAAABgBAAQAAABgBAAQgBABAAAAIADAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIACADIADADIACAFQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAIAAAKIADADIACAEIAAAuIgBABIgBABIAAALIgEADQgBACACADIgFAGIAAADIgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAABABIAAADIADAFQAAACADACIAAAHIAAAHIgBAJQAAAEADAFQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBADIADAEIAAAqIADADIAAAvIgCABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAAJIgDADIAAAdIgCADIgBAAIAAAPIACAEIACADIACAEIADABIAAAEIAEAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACIAEACIAHADIAAAGQAAABAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIADADIAAAUIgDAGQgBADgDACIgDAAIgDABIgDABIgDADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCADIgJAAIgDgDIgGAAIgDgCIgDACIgZAAIgSgHIgDgBIgCABIgIgIIAAgGIgOgOIAAgKIgFgDIgMAAIgBAFIAAAHQACAEADABIAHADIABAAIADAAIACABIAAACIAAAKQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgKAJIgGAAIgFACIgFAAIgDgCIgSAAIgCACIgQAAIgCgCIgWAAIgCACIgVAAIgDgCIgPAAIgEACIgPgFIgHgFIgIgMIAAgFIgBgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgEIACgEQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgDADgCIAFgDQADgBADABQADgDAEgBIAGgDIAAgEIAEgDIAFgEQAAgGADgFQADgFgFgFIAAgTQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABgBIAAgVIgDgBIAAgCIgBgBIAAgOIABAAIACgCIAAgWIgBgCIABgDIAAgSIAEgDIAAgIIgDgEIAAgJQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgDIAAgNIABgOIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAhbIADgDIgDgCIAAgcIADgCIAAgNIgDgCIAAgZQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIAAgDIADgDIADgDIAAgYIADgDIAAgRIgDgFQAAgDgDgCIAAgkIgCgBIAAgCIgBgBIAAgNQADgDABgEQAAgEgDgDIgFgKQgCgFgFgDIgHgHQgEgEgEgCIgDgDIgCgDIgBgBQgBgDgDgCQgDgCAAgDIgBgCIgBgCIAAgIIAEgHIAEgFIAAgBIAEgBIAFgDIAFgDQAEACACgCQACgCADgBIADAAIADAAIADACIAQAAIACgCIAPAAIAEADIAFAAIAEADIALAAIADgDIACAAIANAAIACABIABACIApAAIADABIAAABIAiAAIABgBIACgBIAjAAIAEADQABACADAAQADABABACQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAEAAABAEIADAFIARAAIAEgEIADgFIAIgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIAnAAIAEACIApAAIADADIAJAAIADADIAOAAIAGACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAGAEQAEABACADQACADAEACIAGADIAJALIAKAAIADADIAHAAIAFACIAEADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQACAAADACQACAAACADQADACACgCIAJAKIAJAIIAFAHQACAEAAAEQABADACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIABADQADACgBADIABAGQgEADAAADIABAHQgBADgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgGACIgHADIAAACQADADAAACIADAGIAAAXIAAABIgBABQgEAEAHACIAEAHIADAHIAAAgIgDADIgDAKIgGAHIgFAGIgBADIAAABIgCADIAAAEIgHAFQgDAEgFAAIgEAFQgCACAAADIgFAGQgCACgEABIgEACIgEABIgDAEIgFAFQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAAIgIAIIAAAQIALALIALALIAIABIAHAEIAGAEIAHADIAGAHIAGAGIAAAJIAEADIACAEIACADIABACQAAAFACACQADADgCAFIABADIABABQABADAAADQAAACADADIAAARIgBACIgCACIAAAMIgDACIABABIABAAIAAABIABAAIAAAGQABADADACIAAAKIAEAJIAEAIIAAALIADADIgGAGIAAAEIACAAIABABQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBIAFgBIAFgCIAFAAIAGAAIAMAAIABABIABABIABgBIAAgDIABgBIABAAIAGAAQAEgBADACIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAGIgCAEIAAAJIgCACIgBABIAAACIAAAKQgFACgCAFIgFAIIAAAEIgOAPIgDAAIgFAFIgFAFIgEAEIgFAEIgFADIgEAFQgCACgDABIgGAEIgIAAIgDACIgHAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgCABgCACIgXAAIgDADIgDABIgBAAgACqEGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABABABAEIAAACIAEAFIANAAIAAgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAEgDIAIAAIACgBIAAAAIAGADIAAAGIAEAFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgDIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgFgBgCgDQgDgEAAgFIgCgEIgDgEQgFABgCgCIgGgEIAAgIIgCgCIgCgGIgGAAQgEACgBgCQgCgDgDAAIgCgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgDgCgCIgEgDIgBgBIgBAAIgBgBQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAFQgEAHgGACQgGACgFAFIAAAGQADADAEABIAIAEIAAAPIgEAEIgEABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAKIADABIAEAAQADgCABgEQABgEADgDIAIAAIAEABIAAAAIACABgAiBD7IAAADQgBABAAAAQAAAAAAABQAAAAABABQAAAAABAAIAFgCIAFgDIAAgBIABgBIgFgFQgBAFgBAAIgCAAIgDABgAB8DzIgDADQgDADADADIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgIIgDAAIgBAAgAjND8QAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABgADeDkIgCABIAFAGIABgEIgBgDIgDAAgAjVDQQAAADABACIAKAAIAFgEIAAgEIgCgDIgOAAIAAAGgAikDJIgBAFIAAAEQADgDADgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAgAiYCzIgBABIAAACQADACAAADIABAGQADgCACABQADABADgCIAAgHIgFgDIgFAAIgDgDIgBAAIAAABgAhsC2IAAAGIAEAEIADAAIACgBIAAgLIgFAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAi/C5IAEAHIAFAAIADgCIADgBIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgNAAgAjgC5QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABgDIgCgDIgDAAIgBABgAjGCvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABgBIAAgDIgCgEIgBgDIAAgEIgKAAIgCABIgCAEIAAAIIAFACIAFgBIAEABgAiACeIgBACIAAACIAAADIAFAFIACAFIAGgBIABgBIABgGIAAgGIACgCIABgCIAOAAIAAgBIABgBIAAgQIgBgCIAAgBIgHAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgGIgBgEIgCgCIgBgBIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIAAAFIgBAEIACAEIAEABIADACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAUIgQAAIgBAAIAAABgAitCeIAAAHIADACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIANAAIAAgMIAAgCIgBAAIgLAAIgDgDIgBAAIgBABgAB4CkQgBAAAAABQAAAAAAABQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIAAgDIgGgEIgDAEgAiTCQIAAAEIAFAHQACgDACAAIADgDIAAABIAAgBIgBgEIgEgDIgEAAIgDACgAi/CSIAAAFIABACIAMAAIABAAIABgBIgCgFIgDgFIgHAAgACNCRIgBACIABADQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDAAgAioB6QAAABAAAAQAAAAAAABQAAAAAAABQABABAAABIADAAIACgCIAAgEQgFAAgBABgAhlBzIAFgBIAAgQIgJgDIgGgFIAAgMIACgCIACgDIAHAAIAEgEIAAgJIgEgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCgDIgCgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgDgBgCIgNAAIgBABIAAABIAAALIACADIACAAIAKAGIAAANIgDADIgGAAIgDADIgCACIAAAJQAEADAEACQAFADAFAAIAAAPIADADIABACIADAAIADAAgAi7BkQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgBAFQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIADAAIACABIAGgFIAAgFQAAgDgCgDIgFAAIgEADgAiSBoIAAABIACACIADgCIAAgBIgDgBIgCABgACRBnIABgDIgBgDIABADIgBADgAimBQIgEAFIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAHAAIADgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgDQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAgACgBQIgCABIAAAIIAGgCQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIgEgFIgDABgAiQBAIAGABIACgCIgDgBIgFACgABVAsQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBABIgBADIACACIACAAIABAAgABfARIAAAHQgBACACADIAGAAIAFgEIAAgIIgGAAIgGAAgAhvAPQgCAEADADIACAFQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAADgCIAAgKQgDACgCgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgDABgAiPATIgBADQAAABAAAAQAAAAAAABQAAAAABABQAAAAABAAIADAAIABAAIAAgGQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiDgEIgBABIAAACIADABIAAAGIAFAFIAJAAIAAgBQACgEgCgDIgCgEIgIgDIgCgBIgEABgABTACIgDADIAAABIAAABIABAAQAAAAAAAAQAAAAABAAQAAABAAgBQAAAAABAAIAAgBIAEgDIgBgCIAAgBIgDACgAB5AAIgFADIAEADIADABIAEgCIACgCIgBgCIgBgBgAiLgLIADADIABgBIAAgDIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAgCIgEABIgBABIAAAHIACgBIACABgAhogQIgBABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIAAAAIABgBIgBAAIgCgBIgCABgABjgTIAAADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEAAIgBgGIgBAAIgDABgAh8goIgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABABQABAAAAAAQABAAAAAAQABgBABAAIADgEIgFgEIgCAAIAAAAgABQgmQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADABIABgBIgDgGQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAgACJhDIABAEIACABIgBADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAEAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgJIAFgEIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIAFgDIAEgEIAAgFIABgEIACgCIACgDIAFAAIAFgDIADgEIgCgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIgHgIIgDgFQgCgDABgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgCgCIgJAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgFIgBgFIgEgDIgHAAIgBANIAAAAIAAAAIABAAIABABIAEAAIADABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAQIgBACIgBABIgIAAIgIAIIAAAIIAGAGQACACAEABIAAAGIgBAGIAAABIgDADIgGAAIgCABgAh+hUIAAAGQgBADADACIADAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIAAgMQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgBAAIgDABgAB+hSIgDABIgBAEIABAEIAEgBIAEgBQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgCgCgDQgCACgCABgAjNhMIADgBIABgBIgEgEQgDADADADgAhvhmIAAACIACADIABAEIABABIAEAAIAHgEIAAgGIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgAh9h3IgBADQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACAAIAEgEIgDgFIgCAAIgCACgACziQIAAAGQgBADACACIADAAIAEgIIgEgEIgDAAIgBABgACeilIAAAGQgBADACACIAGAAIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIgFgDIgDgBIgBAAIgCABgABmjeIADAAIADgBIgGgFQgBABABAFgABOj3IAAABIABADIACAEIAFgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIABgFQAAgCgCgDIgHAAgAjSj5IAAADIAEADIABAEIAEgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAgABzj0IADABQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAEABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIgFgGgAioj3IAAADQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIABAAIADgDIAAgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgABdkGIAAAEQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAOAAIABAAIABgCIAAgFIgDgEIgKAAgAi+kIQgCACACAEIAHAAIAHgEIgFgEIgFAAIgEACg");
	this.shape_8.setTransform(444.7,95.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguFJIgCgDIgGAAIgEgEIgJAAIgFgDQgDgBgCgDIgEgEIgEgDIgEACIgEADQgCACgDgCQgBAAAAAAQgBAAAAAAQgBABAAABQAAABgBABQgCABgEgEIgJAAIgFgGIgKAAIgEgDIgFgBIgEgEIgEAAIAAgFQgCgBgDAAQgDABgCgEIgGAAIgEgFQgDgBgBgEQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBAAgBAAQgFgCgDgFIgIgIIAAgJIgFgDIAAgGIgCgDQACgEgBgDIgEgFIgFgFIgGgHQgDAAgCgBIgDgEIgEgDQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIgMgNQABgDgBgDIgFgHIgIgKIgHgMIgFgKQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgCIAAgYIgDgDIAAgGIgDgDIAAgJIgDgCIAAgLIgFgJIgFgJIAAgLIgCgDIAAgFIgCgDQgCgCAAgDIABgFQAEgCgBgEQgCgFAEgDIAAgSIADgCIAAgBIAAgeIAEgDIAAgIIADgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgDIAAgMIABgCIABgBIADgKQACgEgBgGIgCgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIAAgFQAAgCADgDIAEgIQABgEACgDIABgEIAAgEIAFgDIAEgBIAEgBQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAgBQAAAAABAAIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgCIALAAIAGgFIAAgIIABgEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgGIAAgXIAIgRIAAgIIACgCQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIADgEQABgDAEgCIADgDQAAgFACgDQACgDAAgFIAGgGQADgDADAAIAFgCIADgCQACgEADgBQADgBACgDQADAAADgCIAFgGQABgEADgDIAFgFIAUgLIAFABIADgCIAKAAQADgFAEgBQAEgCACgEIAKAAIADgDIAHAAIABgBIABgCIADgBIADAAIAGAEQADAAACADIAAAHIgEAEIAFADIABABQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCADIADADIgDAEIAAAFIgFAGIgFAFIgFAEQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAIgIgCIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABIAAA0IADADIAAAjQAEADgBAEIAAAHIgDAEIAAAFQgBADgCACIAAALIACACIABABIAAAjIADAEIAAAGIADACIAAAPIgBABIgBACIAAABIgBABIAAANIABACIACABIAAAZIgBAAIgBABIgBABIAAAAIACACIABADIAAAJQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQACABgCAEIgCACIAAAIIgFAFQgDADAAAFIACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIADAEIAAAMIADAEIAAAOQADACAAACQAAADADACIAAALQgCADgBADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgJAIIAAAKIgBABIgCABIAAAGIgCAFIgBACIgBACIAAAWIAHAGIAGAHQgBADACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIAAAEIABABIABACIABAEIAAADQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAADIAAACIgDADIAAAJIgDACIAAAQIADADIAAAHIADAGQACAEADACIAFAAIADADIABgCIACAAQAEACACAFQACAEAEADIAJAAQACACgBADQAAACAEADIAAAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgDAEIgJAAIgCAEgAgvE1IgBADQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIACgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgCIgBAAIAAgBgAitCSIABACIABACIADAAIABgBIAAgCIgCgCIgBAAIgDABgAhVCSIAAABIACABIADgBIAAgCIgDgBIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAi+CCQADABADgCIAAgGIgEgFIgJAAIABAGQgBADADADIACgBIACABgAjWBmIgDAFIAEAEIAGAAIAEADIACAAIACgBIAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHAAQgDACgBADgAiBBiIgDADQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAEAEIADgEQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgCgCIgDgCgAiwBiIAAAKIALAAIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIgCgCIgDgCIgEgBIgBAAIgFACgAiSBcQACACAEgBIAAAAIABAAIgBAAQAAgEgCgCQgCgEACgEQgEABgFgEIgFgBIAAABIgBAAQgCAGADACQACAEABADIADgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABgAi9BPIgCACQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAADIACAEIADAAIADABIAEACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgDgDIAAgKIgEAAIgEAAgAisA7IgCAEIgCAFIACACIAGAAIADACQABAAAAABQABAAAAAAQABAAAAgBQABAAABAAIAAgMIgBgBIgBAAIgFgBIgBAAIgEABgAiCBEIADAAIACgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgCADACADgAiWAsIgBACQAEADAEgDIgCgCIgBgDIgEADgAioAaIADAAIABgBIgBgDIgDgCQgCADACADgAj4AVIgFADIABAAIABABIAEAAIAAgCIABgCgAiXgCIAAABIAAAJIAEgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABIABgBIAAgBIABgCIAAgBIgDAAIgDgCIgBAAIgCAAgAisgQIAAADIAEACIADACIAFgEIAAgDIgCgEIgGAAgAiDgRQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAEABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCIgCACgAiRgdQADAAACgCIABgGQAAgEgCgDIgFgBQgDAAgDADIAAANIAEAAIADAAgAiJg/IAAAEIABABIADAGIADAFIAFgDIADgBIAAgKIgEgEgAjohMQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAIACAAIACgBIgBgEIgDgBIAAgBQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAgAiUhOIAAACQACAEADgEIgCgCIgBgBIgBgBIgBACgAisiPQgDACgBAEIACACIADACIAFAAIAFADIAAgBIABgBIAAgLIgIgEIgEAEgAiXikQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAAIADgDQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAIgEgCQgCABgCACgAiHi9IgCABIAAADIADACIAAAEQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAGAAIAFgEQgCgFgEgBIgHgEIgBABgAiXjOIAAAKIAHAAIADADIABgBIAAgDIgBgBIgBgCIAAgBIgBgDIAAgDIgCAAIgDgBIAAAAIgDACgAAvFGQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCgDIgEgFIAAgBIACgBIgJgJIAAgMIADgEIACgEIAHgIQAEgCACgFIAEgHIAMgLIABgDIAAgBIADgDIACgEIAEgFIAFgEIACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgEIAAgGIgDgEIAAgUIADgEIgGgFIAAgTIADgIIADgDIADgDQAAgEgCgBIgEgDIAAgBIAAgJIAAgHIAFgMQAEgFAAgGIgDgDIAAgGIgEgEIgDgCQACgDgCgDIgCgFIAAgKIgCgBIAAgBIAAghIACgDIAAgeIADgHQABgDAFgDIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABIgIgJIAAgEIgBgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAgNIAIgHIAFAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAACQAEACABgBIAEgEQgEgBgCgDIgGgFIAAgHIAAgHIACgDQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQgFgEgDgFIgGgKIgBgDIAAgEQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCgEIAAgLIACgDIABgBIABgCIACgDIAAgVIgDgDIAAgGIAAgHIAAgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgFgDgBIAAgbIgFgKQgDgFgEgEIgEgDIgBgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGgGIgEgFIgEgGQgBgDgEgDIAAgVQAFgEAGgCIAKgEIAEgDIACAAIAEACIAKACQACAAAGAFIACAAIALAAIADADIAIAAIABACIABAAQADACACgBIAGAAIACgDQADABADACQACACAEgCIAFAGIAGAAIAEADIAGAAIADAEIAGAAIAGAFQACAEAFACIAGADIAFAAIAEAEQACADADAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIAEACQADADAEACIAHAFIARASIACAAIACABIABABIABAEIACACIACACIABADIACADIACACIADADQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIADACQgCAFABADIAFAGIACAEIACAEQAAADABACIACAEIABAGIgBAGQABAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAACADACIAEADIADAEIAAAFIACADIADADIAFAEQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAEACACQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAOQABAAAAABQABAAAAABQABAAAAAAQAAABAAABIACAEIACAEIgBAEIABADQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACADIACAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIABAEIACACIAAAKQgDACAAADIABAHQACADAAACIAAAEIADACIAAAtIADABIAAAMIgDADIAAAdQgDAFgFAEIgHAHIgDAGIgDAGIAAACIAAADIgFADQgCABgBADIAAADIADABIACACIADACIAAAGIADADIAAAJIgDADIAAAEQAAACgDACIAAAWQgEACACAGIgFAFIgDAHIgEAGQgCADABADIgEAFIgFAEIgCAEQgBADgCADIAAAIIgFAEQgCACAAAEIgFAJQgCAFgEADQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgDACQgDAAgBADIgEAEQgCAFgDACIgGAEIgGAEIgFAEIgHAHQgDADgFACQgEADgDADQgCAFgFACQgDAEgDABQgDABgEAAIgEAEQgCACgDAAIgEAEQgCACgEAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAIgEABIgGACQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABQgCADgDAAIgFACQgCACgDAAIgFAAIgDADIgCAAIgEAAIgDABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAgACbC5QAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQACgGgEAAIgDADgAB4C2IgDABIAAADQADAEADgEIAAgCIgBgCIgCgBIAAABgADFCOIgDACQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIALgBIAAgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFAAIgDACgACuCAIABABIABABIAHAAIACAAIABgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgDgCgCIgKAAgADWB1IgCABIACABIABABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIADAAIADgBIAAgEIgDgDIgCgEIgDABgADABiIAAABIAAAMIABACIADACIAGAAIAGAAIABgBIABAAIAAgGIgEgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgMAAgACZBnIAAAFIACACIADACIAKAAIAAgDIgBgCIgBgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgEAAIgBAAQgDAAgCADgACxBOIAAAJIABACIAEABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAgFIgDgFIgCgBIgEABgACIBQIAAAIQAAAAABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABIgBAAIgCACgADaBTIgDACIADACIACgBIACgCIgBgCIgBAAIgCABgADHBCQABAAAAAAQAAABABgBQABAAAAAAQABAAAAgBQACgDgCgCIgEgDIgDADQgCABACAFIACAAIABAAgACZA+QAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAKAAQAAgJgGAAQgFAEgBABgAB4A9IgCAAIAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIADgCIAAgBIgBgBIgCAAgACwAmIgBABIgBABIgBAAIADAGIACACIAJAAQgCgEABgCQAAgDgBgDIgHAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAgACJAlIgBAAIgBAGQAAACACADIADAAIADgDQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAgBIgGgEIgCABgADGAXIAAADIABABIADAAIACgBIAAgDIgDgCIgDACgAB3AYIADgBIABAAIgBgDIgDgCQgEADAEADgACIAAIAAAGIABAAIACABIACgDIAEgDIAAgBIgBAAIAAAAIgFgBIAAAAIgDABgAB2iNIAAABIACABIACgBIABAAIAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_9.setTransform(378.1,93.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACGFIIgDgDIgPAAIgCAAIgBABIgBAAIgBACIgVAAIgDgDIgVAAIgJgKIgBgCQAAgDgDgBIgDgFIgCgFIgEgIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAEgEIAAgGIAHgGIAEgCIACgCQADgDACAAQACgBACgCQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAIAEgCIADAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAQAAIAEgEQACgDADAAQACgCADAAIAEgBQADgCABgDQABgEADgCIAGgIIAGgHIAEgEQACgDABgCQABgFADgDIAHgFIAAgGIADgHIADgHIAGgFQADgCABgDIAAgEIAMgYIAAgLIAEgCIAAgGIAMgLIAAgEQADgDAEAAQAEgCAEABIAJAEIAIAIQAAAEACAEQADADgCAEIgDADIAAAbIADAEIAAAFIgDADIAAAbIACADIABAHIgCABIAAAAIgBABIAAACIAABOIAAAFIAAACQgDACAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgDAGIgCAGIgCACIgDABIgIAAIgDAEIggAAIgEgDQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIgFAAIgBABIgBACIgFABQgDAAgDADgAgbFFQgCgEgDAAQgDAAgBgCIgwAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCAEIgSAAQgGgHgGABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgDgDACIgEgFQgCgBgBgDQgBgDgCgDQgCgDgEAAIgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAFIgHADIgGAEQgGgBgFABQgEADgGgBIAAABIgDACIgXAAIgEgCQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGgGIgGgHIgDgDQAAgDgCgCQgDgEADgFQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgFIACgCIABgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIADgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIAEgDQACAAACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAABIAFgGIADgEIAFgKIABgHIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBIgBgCIAAgGIgDgDIAAgQIADgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIABgCIgCgDIAAgIIgDgEIAAgLIADgDIAAgKIAAgBIABgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBAAQgCgEABgDQAAgDgDgDIgBgHQAAgFAEgDIAAgFIABgCIABgCIAAgGIgCgDIAAgGIgDgDIAAgPIADgDIAAgMIAAgNQgBgFACgEQACgEAAgEQADgCAAgDIgBgGIgDgDIAAg5IADgFIADgGIAAgOIgCgDIAAglIgCgCQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIAAgTIADgCIAAgkIADgCIAAgbIAAgBIgCgBIAAgCIgBgCIAAgKIACgBIAAAAIABgCIAAgBIAAgKIAAgCIgDgBQABgDgBgFIgEgKQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAIABgFIgEgDIgFgEIgEAAIgXgXIAAgNIAEgFIABgFIACgEIADgCIAFgEQAEgCADABIADAAIADgDIB0AAIADADIBkAAIAAAAIACgCIABAAIACgBIAMAAIADADIAMAAIADADIALAAQACADACAAIAEACIAEABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIADAEQAAAAABABQAAAAAAABQAAAAAAABQAAABgBABIgBAEIgBAFQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCACIAAAHIgDADIgHAHIgJAAQgCADgDACIgGAEIgKAJIgDAAIgCACIgCADIAAAOIgEAEIAABPIAAACIgBACQgCACAAADQABADAAAEIABABIABABIAAAAIAAACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABIAAASIgCABIAAAPIACABIAAAVIgDADIAAAFIgDAEIAAAVIgMAMQAAAEgDACQgEACABAEIgKAMIAAAFQgBABACACIAFAAIANAMIAAAEIAEAFIAFAHIAAAMQgFAGgBADIAAANIADACIAAASIgCACIgBAAIAAArIgDADIAAA5IADADIAAAUIgBACIgBABIgBABIAAACIAAAMIABABIACACIAAAWIgBAAIgCACIAAAGIAAADIABACIABABIABADIAAADIACACIABADIABACQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAIAAAEQgFAEgBADIgDAJIgCADQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBADIgCADIgGAAIgCAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDAAIgBABIgDADgAilEfQAAAHAGgEIAAgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBgAhWCcIgCACIAAAGIAEAFIAGAAIAFgEIAAgHIgDgCIgCgCIgGAAIgCACgAh5CmIADgCIAAgGIgEgEIgFAEIAAAFQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIACAAIACAAgAhoCKIgCABIAAACQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAHAAQACgFgCgBIgEgCIgCAAgAh/B2IAAACQAAABAAAAQAAABAAAAQAAABABAAQABABAAAAIAHAAIAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgEAAIgEADgAiMBfIgCACIgCADIACABIADgBIAAgEIgBgCgAh+BIIgEADIgBAEQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIALAAIABgHIgCgFgAhwAzIADAEIgBADIACADIAFAAIAFAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgCgCQgDACgCgCIgFgCIAAAAIgBAAIAAgVIgBABIgCACIgDgDIgHAAIgBADIgDABIAAANIAEABIAEADIAJAAIABAAQAAABgBABQAAAAAAABQAAAAAAAAQAAABABAAgAiOA6IAAABQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIADgBIACgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDACgAhUAlIADAAIABgBIgCgCIgCgDQgDADADADgAglAeIgDADIABACIAEgBIABgDIgBgBIgCAAgAgYAMIgBABIgCAAIAAAIIAEAEQACACADgBIABgCIADgDIAAgHQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgDgBIgEABgAhxAaIABAAIAAAAIgBAAgAiCgKIAAAOIAFAFIAJAAIACAEQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAAALIACgCIADgBIAJAAIACgCIABgDIAAgGIgHgGQgFgBgCgFIAAgDIAHgIIAHAAIADAGIAAAFIADAAIACACIAGAAIACgCIADAAIAAgFIgGgHQgDgDgDAAIAAgHIAIgJIAHAAIABAAIACABIAAAFIACADIACADIACgBIAEAAIADgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgEgEIgGgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgBgFQACgDABgDQABgCADgCIAGAAIAHAAIAAADIABAEIAEAFIAGAAIAEgFIAAgDQgFgDgEgEIgIgIIAAgDIgBgDIgEgBQgDgBgCABIgFADQABAGgCADIgEAGIgGAAIgCACIgGAAIgFACIAAAMIgEABIgEABQgDADgDAAIgEAAIgDABIAAAJQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIAAAEQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBIgBAAIgDABgAiJAVIADABIABgBIAAgCIgCgCIgCgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgEAAIAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIABgBIACABgAh2glQACADAFgCQgDgBgBgDIgDgFIgDgBIgBgBIgEAEQgCABACAFIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAgAgahCIAAADIAEAEIAFgHIgDAAIgGAAgAgqhWIgBACIgBAEIACAEIADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAAgHIgDgCIgCgBIgCABgAhqhoIAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACgBIgCgCIgEACgAhmjpQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABIACADIAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIABgDIgCgBIgCABgAhBjrIAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAJAAIAAgEQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgFgBQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAgAg6j8QABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIACACIAFAHQAGABADgBQAFgCADgDIAAgDIABgCQACgDAAgCQABgDAEgDIAFAAIADgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgGQAAgCgCgDIgLAAIgBAAIgBABIAAAGIgEAEIgJAAIgFgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgDIgDgEIgPAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABIgDAEIgEAFQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDgBgBgCIgFgFIAAgCIgBgBIgNAAIgDgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAABIgCAEIgEADIgIAAQgDgDgBgEQgCgEgEgDIgDgBQgBAAAAAAQAAAAgBAAQAAAAgBABQgBAAAAABIAAAJIAAAAIACABIAFAAQAEACABAEQABACACACIAAAHIACACIACABIAOAAIAAgDIABgDQACgEADgBQADgBACgCIABAAIABABIAEACIADAFIACADIADAEIAPAAIABgBIABgDIAAgFgAhTkiIgDAEIAEADIAEAEIADgDQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgEgEIgDgCQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAh/khIACAFIADAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDQgFABAAABgAgrkhIAAAEIABABIAFAAQgBgGgBgBIAAAAIgEACgAhwAvIAAAAg");
	this.shape_10.setTransform(320.4,94.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjeFLQgCgCgDAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgHAAIgHgEIgEgEIAAgaIAEgFIAFgDQAFAAACgDQACgDACABIALgKIAFAAQAEgFAGgCQAHgCADgGIAGAAQACAAABgDIAGAGIAAAHIABADIACACIAKAAIABgBIAAgNQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAgBgBQAAAAgBAAQAAAAAAgBIgEgCIgDAAIAAgKIgGgFIgIAAIgEgEIgGgCIgBgBQACgEgDgCQgDgBgBgEIgDgFIgDgFIAAgSIADgDIAAgLIgDgEIAAgdIADgDQgEgDABgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgDAAgCQAAgDgDgDIAAgbIgCgDIAAgyQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAAgIIAGgGIAAgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBIAAgMQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIACgBIAAgKIADgEIAAgLIgFgFQgCgCgCgBIgEAAIgCgEIgBgDQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgGQgBgDgDgDIAAgEIgDgCIAAgNIACgBIAAgBIABgBIAAgCIAAgQQACAAgCgBIgDgBIAAgnIgCgDIAAgTIACgCIAAgJIAAgCIABgCQABAAABgBQAAAAAAgBQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIACgEIACgEIADgEIADgEQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgEIACgHQACgDgCgFIADgDIAEgCIAAgHQgBAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgDgCIgJAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgDgCQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgEgDQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDAAIgEgCIgFgEIgHgEIgFgFQgEAAgCgBIgDgFIgDgCIgBgFQgDgDADgCIABgFQABgEAFAAIABgBIABgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIADgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAiAAIACgDIBFAAIADgEIAEgCIAEAAIACgCIACgBQAQAFAFADQAFADAFAGIAAAHQABABAAAAQAAABABAAQAAAAABAAQAAAAAAAAIAFABIADADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBIABgCIAAgCIAEgCQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBIAVAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAFgCIAIABIAHAAIAHADQADABACADIAAAMIADADIAAAbIgDADIAAAdIgDAFQAAACgDADIAAAjIADAEQgFADABADIABAIIABACIABABIACAJQACAFAAAFIAABkIAAAJQAAAAABABQAAABAAAAQAAAAABABQAAAAABAAIAAAhIADAEIAAAJIADADIAAAJIgDADIADACQABADgBAFQgBADAEAEIAAAQIgDACIAAAZIABADIACACIAAAeIADADIAAAhQgDACAAADIAAATIABABIABABIAAAPIAEAEIAAACIAAACIAAAGQgBADACADQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAGAOIABACIABAEIACADIAJAEQAFAAAEACQAEACACAEIAKAAIAFAGIAFAGIAAATIgCADIgEADIgEABIgFACQgCADgDABIgFADIgDABIgGAAIgCABIgBACIgtAAIgCACIAAABIgkAAIgEgDIgjAAIgDADIgJAAIgBAAIgBADIgHAAIgHAAIgBgCIAAAAIgBgBIgCAAIgQAAIgGAGIgLAAIgLAAQgFgBgEACIgIACIgCABIAAABgAibEbIAAABIACADIAEgBIAAgFIgEAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABgAgyEBIgBACIgCAEIgBACQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAGAAIAEgCIABgEIAAAAIgDgEIgEgBIgCAAgAhuDyIAAADIAEABIABgBIgDgGIgCADgAidDzIAAACIACAAIACAAIABgBIAAgBIgDgBIgCABgAiqDkQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIABgEIgCgBIgGAAQgDADADADIACAAIACAAgAhsAAIACAAIACgBIgBgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDADADADgAjBgrIAAADIABACIAEgBIAAgGIgEAAIAAAAIgBACgAithDQgCACgBADIABACIAFADIAEgDIADgFIgDgDIgCgEQgCAEgDABgAhchDIgBAEQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIADgBIACgDQgBgBAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAgAiYhWIgDACIACADQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAIABgCIABgDIgBgBIgCgDIgCADgAiFhtQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAABgBQAAAAABAAIAAgEQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgDgCIgDAEgAh0iFIAAAHIADACQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIAAAAIADgDQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgGgEIgDAAIAAAAIgDABgAiCiTQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAFACIACgBIACgBIgEgFIgEABgAhfiTIAAADIABABIAFABIAEgBIAFgEIgHgIgAhuinIgCACIACACIACADIACgBIACgBIAAgIIgGADgAhEiqIgEACIACAFIAHAAIAEgFIgDgDQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDADgAgzi7QAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAGABIADgCIAAgFQgBgDgBgCIgIAAQABAEgBACgAiXjSIAAADIABADIAEgFIgCgCIgDABgAhuj7IAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIADgBIAAgBQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABgAhfkUIAAAGIADAEQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgFIAAgFIgBgCIgFAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAgAA1BAIgCgDIgIgDQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgEQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgDgFIgBgBIAAgBIAAgKIAEgHQABgEADgCIAAgGIAFgGQACgCAEAAIAIgHQADgFAAgGIADgCQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgDIACgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBIAAgQIAEgIQACgDABgFIgDgEIAAgJIgCgBIgCgDIADgFQACgCgBgEQADgDAAgDIAAgHIAAgNIgDgDIAAgSIgDgDIAAgMQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAIgCgBIAAgVIADgCIAAgBQABgJAAgKIgBgUIAHgIIgCgDIgDgCQgDgBgDgCQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgCgFIgDgFQgBgDgFAAIgFgEQgCgCAAgEIgBgBIgEgEQgDABgCgCIgIgDIgGgHIgJgHQgCgBAAgDIgDgFQgCgDABgCIADgFIAAgGIADgDIAEgCIAEgBIAEgEIAEgBIAEgCIAMAAIACACQAFABAGAAIAKgBIAEADIAiAAIAGADQADACADADIgDADIABACIADADIACgGIAMAAIALALIA0AAIADADIAEABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIADAFIAHAFIAKALIAMALIAGAGIAGAGQAEAHABAHIAGAEQABACAAAEIACADIABAFQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAJARIAAARIADAEQABADACADIAAARIgDADIAAAPIACADIABAEIgBAFQgDADABADQABAEgDACIgBABIAAAWIgFAIIgEAIQABAEgCADQgEACACAEIgEAEIgFAEIgBAHQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAFgCADQgCAEgEADQgFADgCAEQgCAFgDACIgNAOIgDACIAAADIgDAFIgEADIgIAAIgFAFIgGAGQgCADgCAAQgDABgCACIgKAAQgDAFgFACQgGABgDAFIgLAAIgFADIgFAAIgEADIgFAAIgEADIgOAAQgDAEgFgBQgEgCgDAFIgUAAIgFACIgEAEgACcAOIAAACIACAAIACgBIABAAIAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAgACrgGQgCACACADIABABIABAAIAIAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgFQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgCgBgEAAIgEACgACegVIACAEIACgEQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABgACahGQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIAEAEIADgDIgDgGIgBAAIgCABgAB+heIACAEIAAAGIAIAHIAKAAIAEgEIAAgFIAHgJIAGAAQADADADAEQACAFAEAEIADgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIgGgGIgDgEQgCgBgBgDIAAgJQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAKAAIADgEIAAgNQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgLAAIgBgFIgCgDQgCgDABgDQABgCgCgDIgFAAQgCgBgCACIgCACIgCACIABAFQgBABAAAAQAAABABAAQAAABAAABQAAAAABABIAFAAIAEAEIAHAAIAAAMIgFAFIgGAAIgDAAIgCAAQgEgDgBgDIgDgHIAAgBIgBgBIgJAAIgDACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIAAAKIAGAEIAFAAIACACIACAAIABABQABAGgBADIgCAHIAAABIgCAAIgBAAQgDACgDgBIgDgBIgEACgAB0hvIgCADQABAFAEABQADABADADIAAgBIABAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgEgDIACgDIgDgEIAAAAIgDAAIgCACgAC9idIAAAKQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABABIACAEIAGAAIAIgGIAAgGIgDgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgMAAIAAgBIAAgKQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIgDgEIgGAAIgHAIIAAAEQgBAAAAABQAAAAABAAQAAABAAABQAAAAABABIAGAAIAEACIAHAAIAAABgADRixIAAAMIADACIADADIADgCIAGgCIABgFIgBgFIgHgEQgFgCgDgDIAAgJIgEgDIgGgBIgGABIgBAAIAAACIgBAFIABAFQADADACABIAGAEQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIABAAIADABgACIioIgBADQAAABAAAAQAAAAAAABQAAABAAAAQABABAAAAIADAAIAEgCIABAAIABgBIgDgFIgCgEgACai1IAGAAIAEgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgEgDIgGAAQgCAGACAGgADpi9IABAEIAEgCIACgCIgBgBIAAgBIgBgBgADRjUIAAAEIAAAEQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAPAAIAAgMIgBgBIgBgBIgJAAIgEgDQgBACAAADgACojYQACACABACIAAAEIAEAGQADgBADAAQACABACgCIAAgJIgEgCIgDgCIgFgBIgFACgACKjVIAAABQAAABABAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIAFAAIAAgGIgBgBIAAgCIgCABgADAjqIAAAJIAEADQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAABgBIAAgJIgEgCIgEgCIgDAAIgBgBIgDACgACZjnIAAAHIAGABQADABACACIACAAIACgCIgBgCIAAgCIgBgBIgBgBIAAgCQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAQgCAAgCABgACwj4QAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIADACQADgDgDgCIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAgABvkTIAAALIAGgDIAFgGIAAgCIgBgBIgEgBIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBABgACBkiQAFAFACgCIAFgDIAAgHIgHAAgAC9ieg");
	this.shape_11.setTransform(262.2,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AieFDIgDgDIgXAAIgCABIgBABIgBAAIgBABIg3AAQgFgEgEgBQgEAAgEgDIgGgGQgEgDgCgFIAAgPIADgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgEIAVgKIABgBIADgBIAEAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAHgEQAEgBAEgDIAEgDIAGgEIADgCQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIACgFQACgCgBgDIAMgMQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBIADgEIAAgIIAEgEQADgCgBgFIAEAAIAHgMIAPgPQgBgEACgDIADgHQADgCABgDIAEgFIACgGQACgDgBgDQADgCABgEQABgDAFgCIAEgCIADgDIAEgEIADgCIAFgCIACACIAJAEQAEABAEAEIAAAIIADAEIAAADIAAADIAAABQgDACAAADQABAEgFACIAAAJIgCADQABAEgCADIgDAGQgFAEgDAFIgFAKIgCAFIgCACIgDAEQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAABIgBAEIAAAEIAAABIgGAGIAAAGIgDADIAAARIAGAGIAFAEQAFABABACIAEAFIACACIAGADIAGADQADACAAADIADAGIAAAMIgHAIIgEADIgEAEIgFADIgFAEIgPAAIgDADgAAnFCIAAgBIgBgBIgBAAIgBAAIgIgBIgJgBIgBAAIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABABIgIABQgDAAgDgCIgBgBIgEAAIgKgLIgEgGQgBgDgDgCQAAgDACgDQADgCgCgDIAGgGIAGgGIADgIIADgFQABgCAAgDQAAgCACgDIAAgBIAAgDIgCgEQgBgCgBgCQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIgEgGIgBgEIgBgFIgCgFIgBgCQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgUQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEAAQgBgFgDgFQgDgFABgGIgEgFIgEgEIgDgEIgBgGIgCgDIgEgDIAAgEIgBgCIgBgBIgDAAIgDgFIAAgJIgFgDIAAgIQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDgCIgEgEIgDgCIAAgLIgBgDIgCgCIgDgGQgBgEgDgDIgCgEIgCgEIgBgCIAAgGIgBgBIgCgDIAAgFIgDgDIgDgDIAAgJIgDgDIAAgHQgEgCgCgFIgFgHQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBIgCgEIgDgDIgDgDIgFgLQgCgFAAgGIgFgGQABgDgDgCQgDgBACgEIgDgDIgBgDIgCgHQgBgDgCgBIgEgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgCgDQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgCgBgBgDQAAgDgCgCQgEgDgBgEIgEgIIAAgBIAAgDIgJgJQgEgEgDgFIAAgMIgCgFQAAgCgDgCIAAgJIgBgBIgCgCIAAgOIgCgCIgDAAIgEgGIgGgHIAAgBIADgDIAAgJQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgFAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgEQgDgGgEgGQgDgFgGgFIgtgtIAAgRIAOgPQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIAJAAIADACIAIAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABABIAUAAIAGAEQAEABACAEIASAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADAAACgDIAIABQADABADgCIAHgCQADgBACABIAEgEIASAAQACADADAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIAQAAIADgDIAVAAIACADIAJAAQAEAAADgDIAEAAIAEAAIAEgDIAUAAQACgCADAAQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIARAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAIAEABIACADIAEAEIAGACQACACABADIACAFIAAAIIgCADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgEADIgHAFQgDADgCAEIgFAIIgFAFQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgCADIgBADIAAAFIACAEIAAAJIACABIADADQAAADACAFQABAEACACIAEABIABACIACADQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIACAGIACAFIADAGQABADADACQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIACAFIAAAEIALALIADAEIADAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABABAAQAAABAAAAIAEABIADADIAJAAIAFAFIAAAOIgFAGQgCACgFABIAAAEIAEAAIAEgCIAEAFIAAASQACACAAACQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIAEADIABAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACACABACIAAADIAAAGQAAACACADIADAEIADAEIACAEIABAEQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFAEIABAEIACAEIADACIABAFIADAEIADAEIADAGQABADAEADQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIACAEIAAAHIACAFIADAEIACADQABACACACIABAEIABAFQAEACgBADQAAADACACQACACAAACIACAEQAAADACACQACACgBADQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQADABAAAHIAAABIABAAQACADABADIACAFIAAAFIAAAEIADAFQAAACADACIADAFQAAADACACQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIAHAHIAGAHIAGALQACAGAFAFQACACgBADQgCADADACQACADAAADQAAACADADQgBADACACIAEAFQgBADACADQACADAAAEIABABIABABIAHAIQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQACACgBADIACACIACAEIACACIACADIAYAZIAAACIAFADIAAAKIgFAIIgEAHQgFAGgBAAIgFACQgCACgDAAIgCgBIgCgBIgDAEIhOAAIgCgCIgBAAIgpAAIgDACgACrEBIAEAEIACAEIACAEIADADIAJAAIADgCIACgDIAAgGQgDgDgCgBIgFgCIgDgDIgGgFIAAgKQgCgCgEgBIgHgBQgDgDAAgDIgEgGQADgCABgCIADgFIAFAAIADgBIAAgJIgCgDIgCgCIgHAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBgBIgCgBIAAgCIgBgHIgDgFIgBAAQgGgCgCgEIgFgJIAAgLIAAgBQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAEAAIADgBIADgDQAAgBAAAAQABAAAAgBQAAAAAAgBQgBgBAAgBIgBgBIgEgCIgCgBIgEACIAAAGIgFAFIgBAAIgFgFIgDgGQACgDAEgBQADgCACgDIAAgJIgDgEQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFAAIgFgEIgBgBIABgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAgBIgBAAQgDABgDgCIgGgEIgEgEIgCgFQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgLAAIgBABIgBABIAAAQIgPAAQgGgDgDgFQgDgFgBgGIgOAAIAAAFIgBACIgDAFIgEAEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgMIABgBIADgBIADAAIAGgEIgDgGQgCgDAAgDIgDgDIgCAAIgMgKIAAgKIgEAAIgDgDIgEAAIgCgEIgDgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEQAEgCADACIACgBIABgBIAAgIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQABgDgCgCQgDABgDgCQAAgCgFAAIAAgOIADgCIACgCIAGAAIADgCIADADIABABQACADgBAEQgBADACADIANAAQACgGgBgGIgIgEIgHgEIAAgHIAAgBIgBgCIAAgBIAJgGIAHgEIAAgKIgBgEIgGAAIgDgCIgEgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIAAgHQgCgCgDgBIgGgDIgCgBIgFAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgBgDIAAgDIgBgBIgBgBIgGAAIgFgEQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIAAAJIgEAEIgMAAIgDgDIgBgDIgBgDIgEgCIgLAAIgDgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAAMQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABADACACQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABIAEAFIAAAHIgEAFIgEAAIgEgCIAAgLQgDgCgDAAIgEABIgFADIAAAHIAFACQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAFABIADAEIAAAGIABADQACADAAACQgBACACADIAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAANIgEADIgDABIgDgCIgCgCIAAgFIgDgFIgBgBIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAAGQACAFAGACIAAAEIADACIADACIAAANQADADADABQAEABACADIAAAMIgIAIQAAAAABABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIABABIABAAIALAKIAAAJQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIACADIAGADIAAAPIAFAEIAEAAIACABIADACIABACIAAAPIgGACIAAADIAAAEQAFAAACgBIADgHIAHAAQACgBADADIAGADQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAGIAFABIAFACIAFABQADgBACACIABACIAAABIAAADIAAABIACAFIADAFIAFACQADADADgCIAFAEIAAAFIAAACQACACABACQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIADACIAEAAIAJAHIAAAJIAEAFIAEAAIACAAIAGADIAFAEIgBAFQAAADACACQAEABAEACIAIAFIAAAQIAOAAIAEAFIAAAPIgBAAIgCABIgDAAIgFAEIAAAHIAEAEIAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgFACgDIAEgGIAFAAIAIAHIAAAKIgEAEIgEAAIgEABIAAAHIAFAEIAGAAIADgEQABgBAAAAQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBgABlDfIAIAIIADgEIABgEQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGAAIgEAAgAC1DhQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQABgBABAAIABgBIACgDIgDgBIgFABgAA+DcIAAACIACACIADAAIAAgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgBACgABJDNIAGAEIAFADIAAABIABgBIABgBIACAAIACgBIABgBIABgGQAAgCgCgDIgGAAgABDCxIABABIgHADIAAAEIACADIAGAAIABgBIABgGQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIABAAgAAtCfQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIABAAIAAgCIABgBIgBgCIAAAAIgBAAgAAVCLIgBADIACADIAGAAIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDAAIgEACgAACB3QAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIACgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBgCQgCADAAACgAA7A5IAAALIAGAAQADABACgCIAAgHIgBgDIgDgBIgDgBIAAAAIgEACgAApAjIgEAFIACACIAEAAIADgCIAEgBIgCgEIgDgCIAAABIgCgBQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAABgAAOAaIAKgBIAEgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgGgEIgEAAIgCgBIgDgBgAA8ARQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIACABIABABIAFgEIgDgCIgBgCIgEABgAAmgCIABACIAAABIAFAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgCQAAAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAmgpQAAADABADIAEAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgFIgCgEIgHAAIAAAEgAAUhlQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIADABIAEAAIAAgBIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCADgAhihlQADgEgDgDQgEADAEAEgAgph9IgCACIADADIAAAEIABAAQACAAADACQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQAAgBAAAAQABgBAAAAQgBgBAAAAIgCgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIgHAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAgAhSh/IAAAGIACAEIACADQACgDACAAIAEgDIAAgBIgDgCIgBgFIgEAAIgBAAIgDABgAh4h7IAAAAIADACIACgCIAAgBIgDgCQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABgAgRiPQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIABAAIABgCIgBgBIAAgCIgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABgAhkiSQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACABIABgCIAAgCIgCgBIgBAAgAh4ihQAAAAABABQAAAAABgBQAAAAABAAQABAAABgBIAAgDIgBgCIgFAAIABAGgAhli4IACACIABAAIACgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAIgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAAAABgAgmjPIAAACIABACIACAAIACABIABgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgCgCgAiQjjIgBAFIABACIADAAIAEAAQADgBABgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgDgBIgBgDIgHAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAgAh7j5IAAADIABACIAGAAQADgDgDgDIgEAAIAAAAIgDABgAi2kNIgBACIABACIAEgBIAAgGIgDABIAAAAIgBACgACPDRIgCgEIgCgBQAAgEADgCQADgBABgDIALAAIAAALIgCABIgCADgAB5C5IAAgEIADgDQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIADACIAAAHQgDACgDgBQgDgBgCACIgBgEgAAnBuIgEgDIAAgKIAEgEIAEgDQAEAAACACIAEAFIAAAHIgIAHgABTBqIgEgCIAAgHIAEgFQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIADACIACAAIAHAHQgBADgCACIgFAEIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBgAgSADIgBAAIAAgBIAAgBIgBgEQAAgDACgDIACgBIAFAAIADAIIAAAEIgEABIgGAAgAAGg7IgFAAQgBgDABgDIADgEIADAEQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIAAAGIgEABIgBAAgABqh3QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDgCIgEgBIgDgEIgEgDIgFgCIAAgSQADgDABgCIACgFIAAgDIAAgEIADgFIABgEIALgMIAAgGIACgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIALgPIAAgBIADgDIAAgaIgHgIIgDgEIgCgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgEIgJgBIgRgSIAAgCIgEgDIgFgFIABAAIAAgBQADgDABgDQABgDADgCIABgFQACgCADgBIACgBIACgCIAJAAIADgDIBrAAIADAEIAJAAIADABIAEADIADADIACABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABgEIABgBIABAAIAPAAIAKALIAAAIIgEAFQgDADgFAAIAAACIgBACIgJAKIgDAAIgCABQgFACgCAEIgFAHIgBADIgDAEQgEAAgBACIgEAFIgDADIgCADIgGAHIgEAEIgDAAIgBABIAAABIgEAHIgEAIIgKALIAAAFIgDAEIAAADIgMAMIAAAEIgBACIgDAIIgEAGIgEAFIgFAGIgCAFIgEAFIgIAHIgJAJQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_12.setTransform(200.5,94.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAAAgBQgBAAAAgBQAAAAAAgBQgBAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIAAgKIgEgIIgDABIgEAAQgCADAAACIABAGQACACADABIAHADIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAhBiDQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQAAABABAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQgBABABAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDg");
	this.shape_13.setTransform(140.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeDxQgEgEgHgZQgIgfAAgSQAAgTAJgEQAQgHAhgCQAfAAAGAPQADAJAAAQQAAAmgSAbQgEAGgKACIgVACQgUAAgGgFgAgvjqIBhgLIgTFmIhBABg");
	this.shape_14.setTransform(868.7,555.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgLGOICTAAIAABgIjpAPg");
	this.shape_15.setTransform(849.3,554.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgMGOICVAAIgBBgIjpAPg");
	this.shape_16.setTransform(822.4,554.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA+CdIiAAAIgWBNIhZgSICenQIA6AJICLHSIhhAXgAgmBDIBNgDIghiJg");
	this.shape_17.setTransform(790.7,556.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AicD2IgQnHIBOgZIBeD2IBgkLIBNAKIgUHYIhMALIAAjrIg4CmIgrABIg1iOIAADkg");
	this.shape_18.setTransform(740.2,555.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBXIiXAAIAABgIBvADIAABWIhvAHIAAA1ICYAHIAGBWIj9AKg");
	this.shape_19.setTransform(707.3,556.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3BGIAhieIBOAZIg+CYg");
	this.shape_20.setTransform(686.7,536.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB3QgJDYgSA3QgWBFjHARgAgdiDIAAEGIApgPQAZgDAHi5QAFgogTgKQgPgJgbAAIgRAAg");
	this.shape_21.setTransform(665.6,555.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_22.setTransform(634.4,555.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhQDjQgrgKgJg/QgPh1AXkWIBfAHQgWD8AIBPQAFAkASAIQATAHAOgEQAZgGAGgfQAOhagcjgIBdgMQAWDSgICdQgDBGhQAUQgQAEgUAAQgnAAg7gPg");
	this.shape_23.setTransform(603.3,556.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_24.setTransform(573.2,555.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiEjyIEJAAIgKBiIiaAKIAABPIBzAAIgHBaIhsAQIAAC8IhZAEg");
	this.shape_25.setTransform(542.8,555.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBXIiXAAIAABgIBvADIAABWIhvAHIAAA1ICYAHIAGBWIj9AKg");
	this.shape_26.setTransform(486.7,556.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiyjVIBsgWIBAFVIBFlmIB0AUIiTHaIhXALg");
	this.shape_27.setTransform(454.7,555);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA+CdIiAAAIgWBNIhZgSICdnQIA7AJICLHSIhgAXgAgmBDIBNgDIgiiJg");
	this.shape_28.setTransform(417.9,556.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAmBLIhLAIIAACTIhSgJIgNnPIBfgJIAADnIBLAFIAAjYIBfAGIgNHXIhSAGg");
	this.shape_29.setTransform(384.6,555.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhQDjQgrgKgJg/QgPh1AXkWIBfAHQgWD8AIBPQAFAkASAIQATAHAOgEQAZgGAGgfQAOhagcjgIBdgMQAWDSgICdQgDBGhQAUQgQAEgUAAQgnAAg7gPg");
	this.shape_30.setTransform(341.1,556.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_31.setTransform(311,555.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxAXIh0j5IBsgOIA2CXIA7ikIBuANIh6EGIAADPIhlAYg");
	this.shape_32.setTransform(278.2,555.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeDxQgEgEgHgZQgIgfAAgSQAAgTAJgEQAQgHAhgCQAfAAAGAPQADAJAAAQQAAAmgSAbQgEAGgKACIgVACQgUAAgGgFgAgvjqIBhgLIgTFmIhBABg");
	this.shape_33.setTransform(791.9,472.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhmDeQgegvACgvQACguARgjIBMAKQgYAoARAhQAIAOAeAAQAfAAAIgGQAQgGABgNQAIgygzgTQiKg+gChQQgBhfAZgRQAsgiBQgGQBUgBAQBBQAIAogHBNIhHACQgBgXgCgQQgFgngigEQgrAAgIAlQgIAdBIAiQCpA+hRC4QgKAYggAJQgfAJgyAAQhHgDgOgUg");
	this.shape_34.setTransform(772.1,472.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_35.setTransform(741.9,472.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_36.setTransform(710.3,472.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgthgIBdgMIAAFcIhNAXgAgliLIgKh7IBdAFIgHB6g");
	this.shape_37.setTransform(688.6,471.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBhfIEfgQIgDBvIhYAAIgGFpIhYAKg");
	this.shape_38.setTransform(666.9,472.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AA+CdIiAAAIgWBMIhZgRICenRIA6AKICLHSIhgAXgAgmBDIBNgEIghiIg");
	this.shape_39.setTransform(633.1,473.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ah6jzIBsgLIgLGOICUAAIgBBgIjpAPg");
	this.shape_40.setTransform(601.6,471.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhQDjQgrgKgJg/QgPh1AXkWIBfAHQgWD8AIBPQAFAkASAIQATAHAOgEQAZgGAGgfQAOhagcjgIBdgMQAWDSgICdQgDBGhQAUQgQAEgUAAQgnAAg7gPg");
	this.shape_41.setTransform(573.1,473.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBhfIEfgQIgDBvIhYAAIgGFpIhYAKg");
	this.shape_42.setTransform(542.8,472.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AA+CdIiAAAIgWBMIhZgRICenRIA6AKICLHSIhhAXgAgmBDIBNgEIghiIg");
	this.shape_43.setTransform(509,473.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjBIIAACsIhXgHIgQnkQECgYAEBXQADB8gUA3QgKAognAIIgGABIBXCaIg4A3gAgiicIAACEQBJgGADhEQAFgngTgIQgTgLgoAAIgDAAg");
	this.shape_44.setTransform(476.3,472.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiD0QhCgSgRhQQgfi0AQiRQAGgvApgJQBdgXA0AMQBLAWADBHQABAhgBAnIhUAHQgBgSgCgSQgGgjgXgCQghgIgSAJQgRAIgEAlQgIBTATCJQAKAnAwgJQAegFAAglIACg4Ig9AEIADhZICOgBIgGC7QgGBchSAGIgdABQgdAAgRgHg");
	this.shape_45.setTransform(445.9,472.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_46.setTransform(413.9,472.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_47.setTransform(382.3,472.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgiDuQhCgPgQhNQgcisAOhuQAKhFBAgWQA7gWAzAKQBEAPACBEQABAggCAmIhRAJIgDghQgEgagXgCQgRgDgRAKQgSAIgFAkQgIBQASB8QAJAlAlgKQAZgGArgyIA5BFQg2BMgyAIQgSACgOAAQgUAAgOgFg");
	this.shape_48.setTransform(352.4,472.9);

	this.negro = new lib.Symbol44();
	this.negro.setTransform(-52.1,-38.2,0.892,0.977,0,-90,90);
	this.negro.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.negro},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-54.3,1341.3,783.1);


(lib.costa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(307.4,-188.9,7.39,1.535,0,0,0,0,-50.1);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(147.5,-56.7,10.592,1.535,0,0,0,0,-50.1);

	this.instance_2 = new lib.orilla();
	this.instance_2.setTransform(-1085.8,-244.2);

	this.instance_3 = new lib.orilla();
	this.instance_3.setTransform(-1408.6,-110.6);

	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(432.8,-333.3,3.506,1.535,0,0,0,0,-50.1);

	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(-760,72.8,14.073,1.627,0,0,0,-52.1,-27.3);

	this.instance_6 = new lib.orilla();
	this.instance_6.setTransform(244.1,-813.8);

	this.instance_7 = new lib.orilla();
	this.instance_7.setTransform(-81,-677.7);

	this.instance_8 = new lib.orilla();
	this.instance_8.setTransform(-399.9,-545.5);

	this.instance_9 = new lib.orilla();
	this.instance_9.setTransform(-722.7,-412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1408.6,-813.8,2085.8,1115.2);


(lib.tutorial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.progreso();
	this.instance.setTransform(508,233.1,1.5,1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIAAgKIgEgIIgDABIgEAAQgCADAAACIABAGQACACADABIAHADIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAhBiDQABABAAAAQAAAAABABQAAAAABAAQAAAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQAAABABAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQgBABABAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDgAhdiAg");
	this.shape.setTransform(989.1,93.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjYFBIhIAAIgBACIgCAAIgVAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAIgIAAIgEgDQgEAAgBgCQgCgCAAgDQgCgCgBgDQAAgCgDgCIAAgEIAAgFIAAgGIANgOQADAAACgCIAEgDQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIAMgMQAAgFADgCQADgBADgEIAAgIIACgDIAAgJIAEgEIACgEIABgEIAAgGIACgDIAAgUIAEgEIAAgeIgDgDIAAgJIADgCIgDgEIAAgkIACgCIAAgCIABgBIAAgMIgGgKQgBgDABgFIABgCIACgCIAAgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQACgBgCgEQABAAgBAAIgBgCIAAgUIACgDIAAgBIABgBIAAgOIgGgGIAAgHIgCgEQgCgBACgEIACgCIAAgGIADgCQAAgDgCgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgFQACgJAEgCIAAgCIACAAQADACACgDIAFgCIABAAIABABIABANIAEAEIAGAAIACgEQAAgCgBgDQgCgCgBgCIADgCIACgDIAPAAQACgDAAgCIgBgFIgDgEIAAgFIAAgCIgDgBIAAgQIADgBIAAgNIgFgIIgDgIIgDgEQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQgDgCAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgDAAgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBIAAgRIgDgFIgCgEIgCgEIgDgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgDgCAAgDIAAgEIgDgDIgDgEIgFgLIgBgDIABgDIgYgWIgHAAIgVgLIgLgLIAAgNIACgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIgKIAFgDQADgBACgDIAzAAQAFACAEAEQAEADACAGIACAAIADgCIAIgEIAFAAIAFAAIAAAAIABABQACADADgBQADAAADACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIAEgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAPAAIAFAEIAFACIACAAIADAAIAEAAQACgEADABQAEABABgEIARAAIACADIAMAAQACgDADAAQADAAABgDIALAAIAEACIAFADIAIAHIAIAJIACAEIACADIADAEIADAFIAHAIIADAEIACAHIAAAEIAAABQACADAAACIACAEQACACAAADQAAACADACIAAAJQAFAGADAHQACAIAFAGQgBAFACADQADADgCADIAEAEIAAAIIABACIACABIAAAGIAAAGIACACIABABIABADIACADIAAAEIABACQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAAAOQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAEAEIACAEQAAAAAAABQAAAAABABQAAAAABABQAAAAABABIAAAOIABACIADAAIACgDIAAgEIAIgHIAJAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQADgCAAgEQAAgEACgCIAAgDIAJgJIAAgGIADgDIAAgMQACgCADABQADABADgBIAEAEIADAFIAIAAIAAAAIABABIAAAPQACACABADQABADADACIANAAIACACIACADIAAAJIAEACIAEAAIACgDIABgCIAAgJIgBgBIgCgBIgBAAIgBgBIAAgYQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgCACgCIgCgFIgDgFIAAgSIAEgCIABgCIAAgIIADgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDABIAAgOIgCgEIAAgaIgCgCIgBgBIAAgaIADgEIAAgUIADgEQAAAAABgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIAGAAIABAAIAJgEQAEgCADgDIAnAAIADADQADAAADgDIADADIAXAAIADADIAEgDIAFAAIAEgDIA5AAIAAgBIACgBIAWAAIAAABIABABIAqAAIAIAFQAEACACAFIADAEQABADgCAEIgEAEIgDAEIgDAEIgDAEIgIAIIgKAEIgCACIgCACIAAAGIgJAHQAAAFgCACQgCADACAFIACACIAAAVIgBABIAAABIgBABIAAAjIgEAEIgDABIAAATIADADIAAAJIgCADIAAABIgBABIAAAWIADACIAAAQIgDADIAAARIAGAKIAAAgIADADIAAAVIgDAFQgBADgCACQACABABADIADAEIAAATIgDACIAAAHIgDADIAAAGIADADIAAAYIgDACIAAAMIADADIAAAYIgDADIAAAQIADACIAAASIgBABIgBABIgBABIAAABIAAARIADADIAAASIgCABIgBACIAAASIADACIAAASIgGALIABABIAAACIAEAEQACABAEAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABAEIACAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIAFACIAFABIAGACIAIAFIAAAKIADADIAAAEQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAABQAAAAAAABQgBAAABABQAAAAAAABIgKAFIgLACIgKAGIg8AAIgBgBIgCgBIgSAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIgDACIgPAAIgBgCIgBAAIgQAAIgBABIgBABIgbAAIgDgDIgSAAIgDADIgGAAIgBgBIgCgBIgVAAIgBAAIgCACIgVAAIgXABQgDAAgDgDIgCgBIgEAAIgOgPIgBgCIgCgCIAAgPQACgCADgBIAEgDIAEgDIAEgDIAEgDQADgDACACQAEACACgCQADgDADgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgBIAOgPIAAAAIABgBIAAgBIAAgdIAGgFQACgDgBgDIgEgEQACgEgDgCQgCgCAAgDIADgDIAAgMQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAIACgFIgCgEIgDgEIAAiPIADgFIAAgIIADgBIgCgGQgCgDABgEQgDgCAAgCIAAgGIAAgFIADgFIAAgGQAAgDgDgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgYIAGgGIAAgDIgCAAIgCgBQgCgCAAgDQAAgDgDgCIAAgNIgEgDIgFgDIgOAAIgDAHIABABIABABIgCACQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCAGIgCAHIAAACIgFAGIABADIAAAVIgEAIQgCAFACAFIgDADIAAAHIgCABIgCABIgCADIgBACIgBABIgBAEIAAAIIgBAJQgCABAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAACgCACIAAAOIgFAIQgBAFgIgBIAFAEIAAAGIgBAFQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgCACACADQgDACgCAEIgDAGIgBAEIAAAFIgFAKIgFANIAAANIgDAEIAAAGIgGAEQAAAFgCAEQgDAEACAGIgCABIgDADIgHAAQAAABgBAAQAAABAAABQAAAAAAAAQAAABAAAAIAAAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIACAAIABAAIAAABIAAAVIAAABIgCABQgBADAAAEQABADgEAEIAAAMIgIARIAAAKIgDAEIAAAGIgFAFIgBABIAAACIAAAJQAAAEgDAEIgDAKQgBACgFAFIAAAGIgDAGQgBADgEABIgGAAIgBACIgBACIgHgFIgGgFIgEgHIgFgGIAAgFIgDgDIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDIgBgEIgDgJIgBgEIAAgFIAAgHQgCgDAAgCQgBgDgDgCIAAgGIgDgDIAAgVIgCgEQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgEIgCgCIgEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgEgDIAAgTIgFgFIAAgEIAAgDQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgFIAAgDIgBAAQgCgDABgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgCgFQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAgVIADgEIAAgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIgEgFIgDgGIgEgGIgCgJQgBgDgCgCIgFgFIgDgFIgEgFIgFgEIgIAAIgDgCIgCgDIAAgFIgJgIIgEAAQgCADAAACIABAGIADAEQAEAAAAADQABABgDAEIAAAPQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBACIAAAIQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABABQAAAAABABIABAAIAAABIAAABIAAABIAAARIgBACIgBAAIgBAFIABAFIgDAEIAAAmIACADIAAASIADADIAAAGIgCADIAAAVIABABIABACIAAAUQADAFAAAEIAEAEIACAEIACAEIAEADQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACACAAADIADADQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAHAHIAIAIQADgBACADQAAAAAAABQABAAAAABQABAAABAAQAAAAABgBIAIAIIAAAGIADADIAAAOIgCACIgBACIgBADIgCABIgHADQgDACgDAEIgYAAIgEACIgFABgADiEBIgCABIABACIACACIAAAHIAIAAIACAAIABgBIAAgEIgBgEIgFAAIgEgDIgCAAgAClD2QgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAHAEIALAAIAAAIQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIALAAIABgBQACgHgCgEIgKAAIgCgDIgFAAIAAgIIgCgBIgCgCIgKAAIgDADgACSEGIAAAHIAJAAIABAAIACgBIAAgEIgBgEIgFAAIgBAAIgFACgADODvIgDALIAGAEIAKAAIABgBIAAgKIgBgCIgDgCIgFAAIgFAAgADmDjIAEAEIAFgFIgGgBIgBAAIgCACgADADlQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIADAAIABgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgDgBIAAADgAC7C0QgDACAAACIAEAEQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgDgDIgFAEgADqC1IAAAAIgBAEIABABIADAAQAEgCgEgEIgDABgAD4CdIAAAKIACACQAAACAAgCIAEgDIAEgCIgGgIIgDAAIgBABgACqCgIAAAFIABADQABAAAAABQABAAABAAQAAAAAAAAQABgBAAAAIAEgFIgDgDIgCgBIgEABgADmCMIAAAGIAFAEIACAAIACgCIAAgEQABgDgCgDIgEAAIgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgADUB6QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgEgCQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABgACFBJIgDAFIgCAEIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAQACACABAEIACADQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAEAEIAEAEIAGAAQACgDABgEIABgHIAKgDIAKgBQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIABADQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABIACAEIABABIABAAIABAAIAFgDIABgBIAAgIIgHAAIgIgHIAAgGQADgCAAgCIACgEIAJAAIACgCIAFgCIAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgIgCIgHgDQgCgDgBgDIgDgHIgJAAIgEADIgEAFIAAADQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgTAAIABAXIAAAAIgCABIgEAAIgCAAgADOBMIABAEIAEAFIADgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgHgHIgBADgAh4AkQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIABAGQACADADABIAGADQAGACAAAEIACAEIACACIADACIAEACQAAgBAAgBQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAgBQAAgDABgDQAAgEgCgCIgCgBIgEAAQgFgDgCgEQgCgFgDgDIgLAAIgDACgAiEA9IADgCIAAgGQgEgCgBABIgDAEIgBACIACADIACAAIACAAgADPAjIgCAGQAAACADAEQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIACgFIABgDIgEgEIgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAhTAgIAAANIAAAAIABABIALAAIADgDIACgBIAAgHIgBgBIgBAAIgKAAIgCgCIgBgBIgCABgACEApIAAABQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAglAkQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABIADADQAAAAABAAQAAABABAAQAAAAABAAQABAAABAAIABgCIADgEIAAgBIAAgBIgBgBIgHAAIgCACgAhjAVIAAAEQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIADAAIAEgBIAAgGIgFgFgAgyAaQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgEIgBgEIgGAAIgDADQgBACABAFIABAAIACAAIADAAgADmASIgBADIADACIACACIAFgFQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAgBgBIgGAAIgBACgADDAXQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIABgDIgCgCIgDABIgBAGIACAAIACAAgAgSASQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAHAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAgBIgDgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGAFgAjxgHIgBAFQgBACADABIAEAAIAFAAQACgBABgDQAAgCADgDIAFgCQADgCAFAAIAAgOIgEgBIgDgCIgEgBIgDgEIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgNAAIAAAIIgBAFIABAEIAEABQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQACACADAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAKIgHAGIgCABIgBAAIgBABgADRgBIAAABIABABIADgBIABgBIgDgCIgCACgADEgOQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgKQgDgCgDAAIgFABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAEIAAAHQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIADgBIAEABgAkBgVQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIADABIACgBIABgEIgCgBIgCACgADQgoQgBAAAAABQABAAAAABQAAAAAAAAQABABABAAIACgBIACgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgDAFgAhOgrQgBABAAAAQAAABABAAQAAABAAABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBIADgEIAAgCIgCgCIgIAAIABAEgAhzgsIgCABIAAADQADADADgDIAAgCIgBgCIgCAAIgBAAgAhdg4QADABADgCIABgGQAAgDgCgCIgFAAQgCgBgDACIgBALIAEAAIACAAgAjgg9IABADIABACIADAAIADgFIgBAAIgBAAIgBgBIgCgBIgBgBQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAgAg5g/IABACIAAABIADgBIACgCQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDACgAhPhKIAJAAIACgCIACgCIAAgGQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgDgDIgGAAIgDgCIgEAAIAAgFIgCgBIAAgBQgCgDABgDQABgCgCgDIgGAAIgHAHIAGAHIAGAAIADADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABIAAALIAAABIAAgBIACABgAh1hUIgCABIAEAIQAGgFABgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgGAAIgCACgADVhNIADAAIABgBIABgDQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDAAQgCACACADgADnhrIgBACIAAAGIAEAEIAGgIIgGgHIgDADgAhPiCIgBAAIgBABIAAABIAAAGIABAGIAHAAIACgDQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgFgFIgDgEIgCABgAD7h8IgBAEQAAAAAAAAQAAABABAAQAAAAAAAAQABABABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBIgCgBIgDABgAAwh+IgBAEQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAKAAQgEgCgBgCIgBgEIgDAAIgCABgAh4h7QAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAGABIADgCQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAgBQgCgEgEgCQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDACIAAAAIgBAAIABAAIgBADgAhhiXIgDAGQgCADACAFQACACADgBIAFAAIACAAIABAAIAAgBIAAgKIgDgCIgCgBIgDgBIgCAAIAAAAgAiJiQIAAABIACABIADgBIAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAABAAAAgAhzilIgBABIAAADQACADADgDIAAgEIgBgBIgDABgACAjNQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIABAAIAAgBIABgBIgBgDIgBgBIgCADgADjjnIAAAHIAEABIADADIAEgEIAAgHIgIgBIgDABgAC4jpIAAAGIAFAEIALAAIAAgIQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgDgCIgDAAIgDAAIgCABgACwjvQADADADgDIAAgQIgFAAIgCAAQgCACgDABQgCAAgCACIgBADIAAACIAEAEIAEAAIADACgADLj5IABADIACACIAAAEIAHAAQAEAAAEgCIAAgGIgFgFIgNAAIAAAEgAh0j5IAAACIAAADIABAAIABgBIAAgCIgBgCIAAAAIgBAAgAC5kNIAAAFQgBADACADIAMAAIABgBIABAAIAAgHIgFgFIgFABIgBAAIgEABgACSBWIgDgDIABgCIAAgCIALAAQACAEgCACIgFADQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1.setTransform(923.6,94.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgFJIgDgDIgLAAIgHgIIgHgHIAAgEIgEgFIADgHIADgIIACgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIADgCQACgCACgBIAEgCIADgDIADgEIAHgGIABgBIAEAAIgBgCIABgDIAAgCIACgDIAAgIIAAgmIAEgHQABgEAFgCIgHgGIAAgDIgCgHIgBgIIABgGIgBgHIAHAAIAHAAIACgCIACgDQgDgDgCgBQgDgBgCgDIgEAEIgDACQgBgCAAgDIAAgEIgCgEIAAgEIgCgFIgDgEIgCgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQgBgBAAAAIAAgqIgDgDIAAgJIACgDIAAgSIgBAAIAAgBIgCgCIAAgUIAHgLIgDgEIgEgGIABgHIAAgKQADgCgBgDQgBgEAFgCIAAgJIgDgEIAAgRIAFgIQABgDgBgGIABgCIACgCIgDgDIABgdIgEgFQAAgCgDgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgCgDgDIAAgWIACgCIAAgBIgDgCIAAg1IgDgDIAAgSQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgEIgCgEQgCgEgFgDQgEgDgGgCIgFgCQgCgDgDAAIgFgFQgDgBAAgEIgDgEQgBgDgDgDIAJgQQAEgHALgEQADgCAEACQAEABADgEIBTAAIADADIAGAAIAEgDIACADIALAAIAIgEIAGgFIASAAIADADIACgDIAOAAIAAgDIABAAIAGAAIAEACIAJAAIADAEIAGAAIADgDIAGAAQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAIASAAIABABIABABIANAAIABAAIABgCIAGAAIAEAAIAEADIAFAEIADADIAFADIAFAFIAAANIgGAFQgDADgBAEIgFAGQgDADgEABIgDACIgDADIgTAUIgBAIIgDAFIAAAFQgDADgDABQgDABgDAFIAAACIABACIADAAIAFAEIAAAFQAAACADACIAAAGIADAEIAAApIACACIAAADIAAA5IgBACIgBABIAAATIABAVIgCAFQgCACAAADIAAAFQAAACgDADIAAACIAAADIgEAEIgFADIAAADQAHABACAFQABAGAFADQABAEgBAEQAAAEACAEIAAAWIgCAFIAAAFIACADIAAA+IgCADQgBAIADAFIAHAMIAAAXIgDADIAAAAIAAAAIABAAIABAEIAAALQACABABADIABAFIgDAEIAAAXIABABIACACIAAAJIADADIAAAIIAEAFIADADIADABIAEADIAIAIIAJAEIAHAGIAAAQIgGAGIAAADIgCAAIgCABIgGAGIgMAAIgDADIgGAAIgDADIgDACIgCABIgBAAIgDADIgJAAIgCgEIgDgDIgDADIgCADIADACIgIAHIgRAAIgBAAIgDgDIgFAAIgGgEIAAgKIgHAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIgEADIgPAAIgIgDQgEgBABgGQgEgCgEACIgFAFIgZAAIgCgCIgOAOIgZAAIgDADgAAeEcIgFADIgDABIAAACIABACIAAABIACADIACADIAFgBQADABACgCIAAgOgAAwEWQABAAAAAAQAAAAABAAQAAAAABgBQAAAAAAAAIABgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgHAAIgBAEQgBACADADIACgBIABABgABBDPIAAACIADAEIABgBIABAAIAAgDIgBgBIgBgBIgCAAIgBAAgAApC9IAJAIIAGgEIgBgFQABgDgCgCIgHAAgAgfC7QACAEADgEIgDgCIgCACgAgRCiIgDACIADADIAAAFIAEACIADgEIACgEIgCgCIgDgDIgEABgAg1CjIAAAHQABAAABAAQABABAAAAQABAAAAgBQAAAAABAAIADgCIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBAAIgDACgAglCQIgBABIAAAFIABAGIAHAAIAGADQABgBAAgBQAAAAAAgBQABAAAAgBQgBAAAAAAIgDgDIAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgJAAIAAABgAAsCRIgBAEQAAABAAAAQAAABAAAAQABAAAAABQAAAAABABIAGAAIABgEQABgDgDgCIgDAAIgBgBIgCACgAAaB/IAAAFQAFgBAAgBIgBgEIgDAAIgBABgAAFBkIAAAMIAFAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgFQAAgDgBgCIgEgBIgBAAIgDABgAArBlIAAAEQAAAAAAAAQAAAAAAABQABAAAAABQABAAAAABIAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAIAAgJQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgFABgAAAA7IAAAPIABACIACACIAKAAIAEAHIADAGIACACIACADIAMAAIACgEIACgFIADgDIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgDIACAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgCIgCgCIAAgHIgBgFQgEACgBgDQgCgCgEAAQgEgDgCgEQgBgEgEgDIgFgBQgDAAgCACIAAAFQAAACgDACQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBABIgEAAIgEABIgDgBIgBAAIgCACgAgUBMQgBAFACADIADAGQADAAADACQADACAFgBIAAgPIAAgBIgCgCIgMAAIgEgFQAAgDgCgEIgDgGIgFAAIgFAEQgDACAAAFIACACIADACIADABIADACIAEAAIABAAIACABgAgQArIgBAAIAAAGQAAADACACIALAAIABAAIABgBIgDgGQgBgDAAgEIgBAAIgFAAIgEADgAgMAEQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIABAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgCgCIgBAAIgBACgAAbhQQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAEAFAFgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgEAAIgDADgAAJh9IAKALIAAACQACACADABIAFACIALAAIAAANIADACQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAFABQABAAAAAAQABAAAAgBQABAAABAAQAAAAABgBIAAgMQgDgEgEgBQgEgBgEgDIAAgLIAFgFIANAAIAAgHQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgHQgFAAgDgDIgFgFIAAgGQAAgBABAAQABAAAAgBQAAAAABAAQAAgBAAAAIACgEIAEAAIADgBIgBgNIgEgDIgDgDQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBABQgCAAgDgBIAAgKQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgBgEIgOAAIAAADIgBADIgDAEIgDAFIgHAAIgCgDIgCgCIAAgGQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABgBAFAEIABgDIACgCIgDgDIAAgJIgMgBIgBABIAAAFQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIgDACQAAAAAAAAQgBABAAAAQAAAAgBgBQAAAAAAAAIgFgEQAAgEgBgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIAAgNIgEgBIgFAAIgFgEIAAALIgFAFIgFAAQgCABgDgBIgDgFIAAgJIAEgEIAGAAQADABACgCIgDgEIAAgGIgEgDQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgHAJIAAAEIgEAFIgHAAQgEgBgDACIAAANIADACQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABIADACIAAAPQgFABgCADIgFAFIAAAJIAMAMIAAABIAAAIQgDAEgGACIAAAMIAEADIADACIAEABIADACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACAEIAAADIAAAEIAGADIAEABIAFACIAGACIADAHQABAEAEADIACAAQAGgCABgEQAAgEAEgCgAAJhnIgBABIgBADQAAAAAAABQAAAAAAAAQABABAAAAQAAABABABIAFAAIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABgAhMhkIAAAFIAFAAIADgBIgCgDIgEgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAgABAifIABADIAAABIAEgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABgBAAgAAsjfQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIACADIACAEIADgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBIgBgCIgCgDIAAAAIgEADgAAaj1IAAAGQADADADgDIAAgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIgDgBIgCACgAAEkJQgCABAAAEIADADQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAIADgCIABgEQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgEgCIgDADgAhGkDQABABAFgCIgBgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEAAQAAAGABAAgAg0kVQAFgDgFgCQgCACACADgAAcivIgFgBIAAgIIACgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAGAAIAEAEQABAEgCABIgCAEIgGAAg");
	this.shape_2.setTransform(867.3,93.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbE8IgEgDIgFAAIgDgCIgJAAIgBAAIgBACIgWAAQgDgEgDABQgEABgCgDIgEACQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAIgaAAIAAgDIgCgEQgEAFgEgBQgEgCgDAFIgPAAQgCgDgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgFIgFAAIgEAEIgdAAIgEgEIgFADQgDACgEAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCACIgFAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAIgLAAIgDgFIgYAAIgPgKQgDgEgGgJIAJgOIABgCIAEgDIADgEQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEgDQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAEgBQADAAACgDQADgDADgCQAEgBACgEIACgBIADgBIAAgFIACgDIACgBIAAgMIAAgBIACgBIAAgBIABgBIAAgRIgDgCIAAgCIgBgGIABgFQADgCgBgDQAAgCACgDQABgCAAgDQAAgDADgCIAAgJIgCgEIAAgLIACgDIAAgSIgBgBIgBgBIAAgWIABgBIABgBIAAgNIADgDIgDgCIAAgPIADgEIAAhuIACgDIABgBIAAgBIAAgZIgBgBIgBgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAgnIgDgDIAAhWQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIACgCIAAgpQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgCIgBAAIgBgBIAAgBIAAgDIAAgYQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgEIAIAAIADgDQAEACADgDQADgCADAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIADgBIAFAAIALAAIAEADQAAAAAAAAQABABAAAAQAAAAABgBQAAAAABAAIABgBIABgDIABgBIASAAIAPAHIADABIAFAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAEgDIAVAAIADADIAOAAIAEgDIAOAAIADADIAIgCIANgGIAMAAQADABACAEQACAFABAGIAIAHIAAANIAAACIgCABIAAALIgDADIABACIABADQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgDADIAAEtIgCADIAAAQIgDACIAAAQIAAAAIACACIAAABIABABIAAATIgDADIAAAeIgCACIgBAAQgCADABADQAAABABAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAABgBAAQAAABAAAAQAAABgBAAIAEAEIAAAYIgDADIAAAQIACABQACAHgBAGIAAAMQAGAFAGACQAGADADAGIAGABIAGADQACAAACACIAEAEQADACABADQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIAAALIgFALQgDAGgFACIgFABQgDgBgCADQgDACgDgBQAAgBgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgDACgDAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAABAAAAgAAVEEIAMAMIAIAAQABgFADgFQADgFAFgDIAFAAIACgCIACgCIAAgJQgFgCgDgDIgHgHIAAgOIABgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAEgEIAAgEQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgEAAIgDAEIgEAEIgNAAIgNgNIgBgBIgOAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgCgCIAAgDIgCgEQgBgBgEABIAAAHQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAABAAAAQAAAAAAABIACABIADABIAAADIACABIgDAFQgBAEgBACIgKAAIgJgJIgHAAIgFAFIAAAOIgBABIAAAAIgDgDIgPAAIgFAJQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAABIgHADQgDABgEAAIgBAEIgCAEQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIADADIABgBIACgBIAEAEIAAAGIAFAEIADADIACAAIAJgHIAHgHQADgCADADQACACADgBIAEAEIABAEIACACIACACIAJAAQACgCABgEQAAgDAEgDgAAhC1IgEAEIABADIAAAEQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgEIAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDgBIgCABgAAOClIAEgCIgEACIgDgCIADACgAhJB2IAAANIAEAEIAGAAQADADACADIADAHIABABIAAABIAJAAIAFgDIAAgPIgEgEIgFgEIAAgJIAIAAIACgDIACgCIgDgDIAAgGIgFgFIgFAAIgFAFIAAAKIgDACIgCACIgIAAgAhXCLIgEADQACADADAAIAFgDIgBgBIgBgCIgCgBIgCABgAgiB3QAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAJAAIgBgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgEAAIgEABgAAdBlQAAABgBAAQAAAAABABQAAAAAAABQAAAAABABQADACACgCIAEgEIgBgCIgBgCIgJAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAgAAMBVIAEAAIACgBIgBgDIgBgCIgEAAQgCADACADgAgDA9IABAAIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgCgDIgBAAQgCAEACACgAgNAMIAAAIIAIAIIAFAAIAGAEIAAAKIAEADIAHAAIACgDIACgFQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAIAAQAEADACAAQABAAADgDIAFALQABACAFACQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgDACgCQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBAAIgIgHIAAgIQACgFAFgCIAIgGIAAgNQgEgCgBgEQgBgDgDgCIAGgGIAAgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIACAAIACgBIAAgKIgCgDIAAgHIgKgIIAAgJIAEgDIAFgDIAAgMIgFgEIgFgCIgEgDQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgCgDgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgCIgBgBIgJAAIgEgDIgEAAIgDgFQgBgDABgCIgJgJQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIAAAEQgDABgBACQgCACgBABIgFAAIgEgIIAAgIQACgDACAAIAEgDIABgEQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgHAAIgEAFQgCAEgDACIgGAAQgBgDgDgBIgGgDIAAgDIgEgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgEAAIgEADIgBANIAJAJIAAAGIgEACIAAADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAIADADIAAAPQADAEADABIAAAKQgCACgCABIgFADIAAAMQADACAAACIAAAFIAHAGIACABIADABIAAAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBABIgCACIAAAMQAEAFAFACQAFABAEAFIAAAGIACACIACACIAGAAIADADIADgDgAgxASIAAAAIACACQABABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIABgDIgBgCIgDgBIgCACgABBgdIAAAHQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAADACACIAEgEIAAgEIgBgBIgEAAIgCgEQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIAAgBIAAABgAhAgpQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAIABgDIgBgEIgCAEgABFg4IAFgEIgDgDIgCgCQgDAFADAEgAhChSIAAABQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgBIgDgBIgCABgAAzh+IgBAFQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIADAAQADgEgDgEIgDAAIgBABgAAhiPIAAABIAAACIAAAAIAHAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAgAgdikIgDACIADADQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIABgEIgBgDIgDABgAA3jNIABgDIgBgCIABACIgBADgAAdjmIADAEIACAEIAEgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgDQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgMAAgAAvj4IAAAJIACABIACAAIAEgBIAEgDIAAgEQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAgAAMjzIAFgBIAAgGIgDABIgCAAQgBADABADgAAHAcQgCgCABgDQABgDgCgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIADgCIAGAAIABABIACAFIAAAEQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgBACgADshWQgCgCgCgBQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgEgFIgEgDIgBgGIABgGIAAgKIABgBIAAgBIAAgCIgBgBQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgCgDQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIgDgEIgBgEIABgBIgBgBQgDgDABgCQAAgDgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgDgDIAAgVIgEgEIgDgGIgDgGQgCgDABgDQgCgCgBgDIgBgGIgBgGIgFgFIABgLIABgCIADgCQgEgCgDAAIgHABIgHgEQgEgCAAgFIgBgBIgBAAIgCgBIgDgDQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgCgEIgDgCIgEgEQAAgFAEgFQADgFgBgGIAEgEIAEgDQADgBACgCIADgCQAEgBACgCIAEgEIARAAQAEAEACgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADADQADgDADAAQAEABABgEIATAAIADADIAGAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIAMAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAABABIADABIAFAEIAFAFIADAJIAABSIgCABIAAAQIACADIAAAOIgBACIAAABIgBABIAAABIAAAKIAAACIACAAIAAACIAAABIAAAZIgBACIgBAAQgCADABAEQABADgDADIgBAFIAAAIIgCACIgEACIAAAEIgJAEQgEACgEAEgAj2heIgFgFIgDgBQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBIgEgEQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIAAgJQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIgCgCIAAgGIgDgDIAAgPIABAAIABgCIAAgBIABgCIAAgPIgCgDIAAgYIAAgCIACgBIAAgJIACgCQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIABgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgDQAFgCABACIADACQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIADgDIAAgEIgBAAIgBgBIgMAAIAAgBIgBAAIAAgJIAAgIIgJgQIAAgOIAFgLQACgFAGgEIAOAAIAFgDIAGgDIAQAAIACABIACACIAEAAIAJgEIAJgEIATAAIACgDIACAAIAOAAQACACADAAQADABACADIADAGQACACgCAFIAEACIACACQACADgCACIgCACIAAAGIgCACIgBACQgCAKgDACQgCADgJAEIgLALQgFAFgHADIAAAGIgDADIABAEIgBACQgDADgBAEQgBAEgEADQACAFgDADQgDADABAFIgDAFQgCAEgDACIAAAWIgHANIAAALIAAAFIAAABQgDACABADQAAADgDADIAAABIgCADIgEAFIAAAGIgEAEIgDADIgBAAIgCABgAjUkMIAAAEIADAAIACgBIgCgDQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_3.setTransform(820.6,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABFLIgDgDQgDgBgCgDIgPAAIgDgDIghAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgBAAIgFACIg0AAIgBgBQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgxAAIgCAAIgBACQgCABgDAAQgDgBgCAEIgVAAIgCgBIgBgBIgYgBIgIgEIgFgGIgDgHIgEgHIADgFIADgGQADgGAEgDQADgEAFgCIABAAIAAgBIAGgBIAEgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIAEgDIADgCIAEgCIADgBIAEgDIAAgVIADgDIAAgNIgEgCIgCgCIAAgYQACgDABgCIACgFIgBgBIgBgBQgCgDABgEQABgDgDgCIgBgHQAAgEADgDQACgDgBgDQgCgEAFgBIgCgEIgEgEIgBgGIgCgGIgBgGQABgDACgDQAAgEABgCIADgGIgDgEIAAgaIADgFQABgDACgDIgDgEIAAgUIAEgIIAFgIIAAgJIgCgBIAAgBIgDgJQgBgCAAgGIACgCIAEgCIAAgTIgDgDIAAggIgDgEIAAgGIgBgBIgCgBIAAgFIAAgFIABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgVIgBgCIgBgEQgBgDABgDQAAgDACgEIAAgIIADgDIAAgGIgDgDIAAgYQADgFAAgFIAAgKQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgBIAAgRIABAAIACgCIAAgRQgCgCAAgDQgBgCgDgCIAAgJIgDgEIAAgGIgBAAIgDAAIgBgBIgFgFIgGgDIgDgFIgFgCQgDgBgCgDQgCgCgDAAIgEgDIgBgEIAAgBIgDgCIAAgJIADgDIABgCQADgEAEgDIAHgIIARAAIABAAIACgCIAYAAIACACIAQAAIABgBIABgBIASAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABIAPAAIABgBIABgCIACAAIAJAAIAKAAIABABIACABIACABIABAAIAMAAIADgDIASAAIADACIASAAIACgCIAbAAIACABIACACIAJAAIABACIACABQAEAAABAFIAEAIIADAHIABACIABACIAAADIAAAEQgEADABAEQABAEgDACIAAABIgBABIAAAJIADACIAAAYIgDADIAAAQIADACIAAACIAAAVQgDADAAAEQAAAEADABIAAAYIgDAFIgDAFIAAAOIABACIABABIAAABIABABIAAAKQgFAGABAGIABAKIAGALQACAFgFAIIAAAHIgDAEIADADIAAAGIADADIAAAPIgEAGIgCAGQgBADABADQACACABADIADAFIAAAMIgCABQgBADAAACQABADgCADIAAABIgCACIAAAEQABACACADIAAASIgBACIgCAAIAAAWIADADIAAAHQABAFgEADIAAAtIgBAAIgBABIgBAIIABAIIABADIAAASIAAABIgBACIAAAUIAAADIABAEQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCAFIAAAeIACADIAAAJIgCADQAAAEACACQACACgCADIADADIABADIANAAIADADIASAAQABACAIAAIAGAHIAFAHQABADgCAFIgDAEQgBABAAAAQgBABAAAAQgBAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgFADIgCADIgFAEIgPAAIgBABIAAACQgEABgEgBQgEgBgCAFgAiJEbQAAAAAAAAQAAABAAAAQAAABABABQAAAAABABIACAAIACgBIAAgFIgGACgAhYEEIADABQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIACAEQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAJAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAAgGIAFgEIANAAIAAgLIAAgGIABgFIAHAAIAHgGIAAgGIgFgDIgEgEQAAgEgCgFQgCgEADgGQABgCADgBQADgBADgDIAAgJIgMgGIAAgSIAFgEIADAAIAEgCIAAgFIAAgFQgDgCgDgBQgDgCgDgDIAAgTIAAgBIABgBIADgBIAEAAIAEgDIABgCIgNgMIAAgUQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIACgCIAEAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAgFIAAgFIgHgCIgFgBIAAAIIgDAFIAAABIgHAAQgDgDgCgEQgBgDgDgCIgPAAIgCACIgCADIAAAFIAGAGIAGAEIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgGABQgCAAgDgCIgBgEIgEgDIgMAAIgCAGIgBABIgBADIAGAEQAEABACACIADADIAAAGIgDADIgEADIgHAAIgCgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgEgCgCQgCgBgDABIgGAHQADAEAFACQAFACAEAEIAAAQIAFADIAIAAIAFAFIAAAGIgHAIIgGAAIgIgIIAAgNIgDAAIgCABIgDABIgBAAIgDAAIgDABIAAAGIABAHIABABIADABIACADIAGgBIACACIADACIAAAFQABADgCACIgEADIgPAAIgEgJQgCgEgFgDQgBAEgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAALIAAABIABABQADABACACIACAEQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDADIgDgCIgEgCQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgDIgDAAIgDACIgCAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIAAALQAFgBADADIAEAFIAAAMQgDADgDACQgDABgDADIAAAJIAIAHIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAPQADACADAAQADgBACADIACAAIABgBIABAAIABgBIABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIADACIAAAIIABADIACACIAMAAIACgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgCIAEgBQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACADgAidEFIgCACQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIACADIAHAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgFQABgDgEAAIgDAAIgCABgAiJB6IACADIAEACIADgCIgBgEIgEAAIgEABgAg5AlIgDACIAAAJIADACQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAHAAIAIgGIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgBgCIgBgBIgJAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAgAgjhAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQADgDgDgDIgCAAIgCABgAgwhMQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQABgDgCgCIgGAAIgFABIAAAGIACACIACADIABAAIADAAgAgrhvIACAAIAAAEQAAABAAAAQAAABAAAAQAAAAABABQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEAAIAIgHIAAgCIgDgEIgCgBIgEgBIgEgFIgDgFQgCgDACgCQgCgEgDgBIgGgDIgFAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgCgGIgDgFIgJABIgDADQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAEAFIAGAAIAIAHIAAAGIgEAEIgDAEIgFAAIgDAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIAAAGIAHAIIAHAAIAFgGIABgCIACgEIAJAAIAEgDIACABgAhXhyQAAAAAAAAQABAAAAAAQABgBABAAQAAAAABgBIAAgEIAAgGQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAIgIAIIAIAHIABAAIACABgAhzi5IAAAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIACgCIAAAAIgCgBIgCABgAhnjWIACACIAAAGIAIAHIADgCIADgCIABgEIABgGIACgCIABgCIASAAIABAAIABgBIgBgFIADgEIAAgGQACgCADAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIACACIAEACQAEgCACgEIADgHIgCgCIgCgCIAAgGIAGgDQAEgBADgCIACgDIgHgHIgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIAAAEIgEAEQgFACgEgCIgFgFQAAgEgEgCIgMAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgCADIAAAEIgDAFIgBABIgGAAQgBAAgDADIgFgDQgDgBgBgEIgDgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgBgBIgBAAIAAgBIgJAAIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgCADIgDADIgDADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgDIgFAEIAAAJQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIADAEQADAAADABIAFADQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIADACIAAAJIAHAFQADABAGgCIACADgAiIjSIgBAEQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIADAAIADgEQACgBgCgFIgEAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAgAg1jPIABADIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgBAEgAgpjpIABACQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAFABQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAAgDIAAgEIgCAAIgEgCIgDgBIgCABgAiZjeIADAAIABgBIAAgIQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDADIgBAAIABAAgAiekJIAGAFIABAAIABgBIABgBIAAgGIgFABIgBAAIgDACgAgzkWQADAAADgCIgCgFIgCgDQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAHIACAAIADABgAhyD8IgEAAIAAgIQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBAFIgDABIAAAAgAheDAIgHgIIAAgFIAEgFQAEgCADADQADACADABIABAFIgBAFIgEAEgAguC9IgFAAIgCgDIAAgEIADgDIAEgCIAFAEIAAAHIgEACIgBgBgAhNCnIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAIgCAFIAAAAIgEgCgACFByIgDgCIgDgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgEgCgCgDIgDgJIAAgJIgDgEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgDgDQgCgCAAgEIgCgCIgEgDIAAgFIgHgJIgJgIIgIgHIgEgDQgCgBgCgDIgFgFIgFgEIABgCIgBgDIgBgDIgBgCIgEgFIAAgMIADgEIAAgMQADgCABgCQAAgDADgCQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABgBIACgEIAEgBIACgBIAAgDIAFgFQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIACgBIADgCIADgEIAAgJIAHgIQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgCADgCIAAgGIAAgGQAAgDADgCQgBgEACgCQACgDAAgEQADgCABgCIAAgEIAEgEIADgEQAAABABAAQAAAAABgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIADAAQADgEADAAIAGAEQAFACADADIAFAGIADAFQACADgCADIADADIAAAnIgBABIgBABIgBABIAAABIAAA+IADABIAAAPIgDACIAAADIAAAEIADADIAAALIACADIAAAJIgCADIAAASIACACIAAABIAAABIAAAUIgFAFIAAAJIgDADIgEAFIgWAGIgDgEgABsgEIAAAGIABABIABACIABAAIADgDIAEgCIAAgCQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgEAAIgEABgAgtBqIgDAAIgDgCIgCgDIAFgDIAGAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAADIgDACIgBAAgADfiFIgCgCIgBgBQgDAAgCgCQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgJgIIgDgFIgBgGIgBgCIgCgDIgCgEIgBgDQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIgCgDIAAgEIgIgOIgDgFQAAgDgDgBIgDgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgDgCIgEgEIgEgCIgEgDIgDgEIgDgDIAAgDIgDgBIgCAAQgDgEgEgCQgDgBgDgDQgCgDgDgBQgDgBgCgDQgDAAgCgDQgCgCgDACIgHgDQgEgCgCgEIgNAAQgKgDgFgHQgGgIgEgJIAAgQIADgEQAAAAAAgBQABAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAzAAIADgDIACgEIAGAAIAEgDIAEAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABIAcAAIAMAGIAeAAIACgCQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIAUAAQACADADABIAFAEIAEAGQACADAAADIACAEQABACAAADIAAAGIAAAEIAAALIgDACIAAARIgDAGQgBADgEADIgFAAQgDACADAEIAAABIABABIABABQgBAEADADQACADgBAFQgFAGgBAFIgBACIAAACQACACADABIAEAEQACACABADIADAEIABAGIgBAGIADADIAAAOIgEAHIgFAJIAAAGQgCACgDABQgDABgCADgAhgjaQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAgHQACgCADAAIAFABIABACIAAADIgDACIgFAEIgBgBgAh0jyIgEgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBIADgDIAGAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIAAAEIgFAEIgBAAIgDgBg");
	this.shape_4.setTransform(728.3,93.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguFJIgCgDIgGAAIgEgEIgJAAIgFgDQgDgBgCgDIgEgEIgEgDIgEACIgEADQgCACgDgCQgBAAAAAAQgBAAAAAAQgBABAAABQAAABgBABQgCABgEgEIgJAAIgFgGIgKAAIgEgDIgFgBIgEgEIgEAAIAAgFQgCgBgDAAQgDABgCgEIgGAAIgEgFQgDgBgBgEQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBAAgBAAQgFgCgDgFIgIgIIAAgJIgFgDIAAgGIgCgDQACgEgBgDIgEgFIgFgFIgGgHQgDAAgCgBIgDgEIgEgDQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIgMgNQABgDgBgDIgFgHIgIgKIgHgMIgFgKQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgCIAAgYIgDgDIAAgGIgDgDIAAgJIgDgCIAAgLIgFgJIgFgJIAAgLIgCgDIAAgFIgCgDQgCgCAAgDIABgFQAEgCgBgEQgCgFAEgDIAAgSIADgCIAAgBIAAgeIAEgDIAAgIIADgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgDIAAgMIABgCIABgBIADgKQACgEgBgGIgCgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIAAgFQAAgCADgDIAEgIQABgEACgDIABgEIAAgEIAFgDIAEgBIAEgBQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAgBQAAAAABAAIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgCIALAAIAGgFIAAgIIABgEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgGIAAgXIAIgRIAAgIIACgCQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADgEQABgDAEgCIADgDQAAgFACgDQACgDAAgFIAGgGQADgDADAAIAFgCIADgCQACgEADgBQADgBACgDQADAAADgCIAFgGQABgEADgDIAFgFIAUgLIAFABIADgCIAKAAQADgFAEgBQAEgCACgEIAKAAIADgDIAHAAIABgBIABgCIADgBIADAAIAGAEQADAAACADIAAAHIgEAEIAFADIABABQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCADIADADIgDAEIAAAFIgFAGIgFAFIgFAEQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAIgIgCIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABIAAA0IADADIAAAjQAEADgBAEIAAAHIgDAEIAAAFQgBADgCACIAAALIACACIABABIAAAjIADAEIAAAGIADACIAAAPIgBABIgBACIAAABIgBABIAAANIABACIACABIAAAZIgBAAIgBABIgBABIAAAAIACACIABADIAAAJQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQACABgCAEIgCACIAAAIIgFAFQgDADAAAFIACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIADAEIAAAMIADAEIAAAOQADACAAACQAAADADACIAAALQgCADgBADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgJAIIAAAKIgBABIgCABIAAAGIgCAFIgBACIgBACIAAAWIAHAGIAGAHQgBADACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIAAAEIABABIABACIABAEIAAADQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAADIAAACIgDADIAAAJIgDACIAAAQIADADIAAAHIADAGQACAEADACIAFAAIADADIABgCIACAAQAEACACAFQACAEAEADIAJAAQACACgBADQAAACAEADIAAAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgDAEIgJAAIgCAEgAgvE1IgBADQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIACgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgCIgBAAIAAgBgAitCSIABACIABACIADAAIABgBIAAgCIgCgCIgBAAIgDABgAhVCSIAAABIACABIADgBIAAgCIgDgBIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAi+CCQADABADgCIAAgGIgEgFIgJAAIABAGQgBADADADIACgBIACABgAjWBmIgDAFIAEAEIAGAAIAEADIACAAIACgBIAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHAAQgDACgBADgAiBBiIgDADQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAEAEIADgEQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgCgCIgDgCgAiwBiIAAAKIALAAIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIgCgCIgDgCIgEgBIgBAAIgFACgAiSBcQACACAEgBIAAAAIABAAIgBAAQAAgEgCgCQgCgEACgEQgEABgFgEIgFgBIAAABIgBAAQgCAGADACQACAEABADIADgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABgAi9BPIgCACQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAADIACAEIADAAIADABIAEACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgDgDIAAgKIgEAAIgEAAgAisA7IgCAEIgCAFIACACIAGAAIADACQABAAAAABQABAAAAAAQABAAAAgBQABAAABAAIAAgMIgBgBIgBAAIgFgBIgBAAIgEABgAiCBEIADAAIACgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgCADACADgAiWAsIgBACQAEADAEgDIgCgCIgBgDIgEADgAioAaIADAAIABgBIgBgDIgDgCQgCADACADgAj4AVIgFADIABAAIABABIAEAAIAAgCIABgCgAiXgCIAAABIAAAJIAEgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABIABgBIAAgBIABgCIAAgBIgDAAIgDgCIgBAAIgCAAgAisgQIAAADIAEACIADACIAFgEIAAgDIgCgEIgGAAgAiDgRQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAEABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCIgCACgAiRgdQADAAACgCIABgGQAAgEgCgDIgFgBQgDAAgDADIAAANIAEAAIADAAgAiJg/IAAAEIABABIADAGIADAFIAFgDIADgBIAAgKIgEgEgAjohMQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAIACAAIACgBIgBgEIgDgBIAAgBQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAgAiUhOIAAACQACAEADgEIgCgCIgBgBIgBgBIgBACgAisiPQgDACgBAEIACACIADACIAFAAIAFADIAAgBIABgBIAAgLIgIgEIgEAEgAiXikQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAAIADgDQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAIgEgCQgCABgCACgAiHi9IgCABIAAADIADACIAAAEQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAGAAIAFgEQgCgFgEgBIgHgEIgBABgAiXjOIAAAKIAHAAIADADIABgBIAAgDIgBgBIgBgCIAAgBIgBgDIAAgDIgCAAIgDgBIAAAAIgDACgAAvFGQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCgDIgEgFIAAgBIACgBIgJgJIAAgMIADgEIACgEIAHgIQAEgCACgFIAEgHIAMgLIABgDIAAgBIADgDIACgEIAEgFIAFgEIACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgEIAAgGIgDgEIAAgUIADgEIgGgFIAAgTIADgIIADgDIADgDQAAgEgCgBIgEgDIAAgBIAAgJIAAgHIAFgMQAEgFAAgGIgDgDIAAgGIgEgEIgDgCQACgDgCgDIgCgFIAAgKIgCgBIAAgBIAAghIACgDIAAgeIADgHQABgDAFgDIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABIgIgJIAAgEIgBgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAgNIAIgHIAFAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAACQAEACABgBIAEgEQgEgBgCgDIgGgFIAAgHIAAgHIACgDQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQgFgEgDgFIgGgKIgBgDIAAgEQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCgEIAAgLIACgDIABgBIABgCIACgDIAAgVIgDgDIAAgGIAAgHIAAgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgFgDgBIAAgbIgFgKQgDgFgEgEIgEgDIgBgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGgGIgEgFIgEgGQgBgDgEgDIAAgVQAFgEAGgCIAKgEIAEgDIACAAIAEACIAKACQACAAAGAFIACAAIALAAIADADIAIAAIABACIABAAQADACACgBIAGAAIACgDQADABADACQACACAEgCIAFAGIAGAAIAEADIAGAAIADAEIAGAAIAGAFQACAEAFACIAGADIAFAAIAEAEQACADADAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIAEACQADADAEACIAHAFIARASIACAAIACABIABABIABAEIACACIACACIABADIACADIACACIADADQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIADACQgCAFABADIAFAGIACAEIACAEQAAADABACIACAEIABAGIgBAGQABAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAACADACIAEADIADAEIAAAFIACADIADADIAFAEQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAEACACQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAOQABAAAAABQABAAAAABQABAAAAAAQAAABAAABIACAEIACAEIgBAEIABADQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACADIACAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIABAEIACACIAAAKQgDACAAADIABAHQACADAAACIAAAEIADACIAAAtIADABIAAAMIgDADIAAAdQgDAFgFAEIgHAHIgDAGIgDAGIAAACIAAADIgFADQgCABgBADIAAADIADABIACACIADACIAAAGIADADIAAAJIgDADIAAAEQAAACgDACIAAAWQgEACACAGIgFAFIgDAHIgEAGQgCADABADIgEAFIgFAEIgCAEQgBADgCADIAAAIIgFAEQgCACAAAEIgFAJQgCAFgEADQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgDACQgDAAgBADIgEAEQgCAFgDACIgGAEIgGAEIgFAEIgHAHQgDADgFACQgEADgDADQgCAFgFACQgDAEgDABQgDABgEAAIgEAEQgCACgDAAIgEAEQgCACgEAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAIgEABIgGACQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABQgCADgDAAIgFACQgCACgDAAIgFAAIgDADIgCAAIgEAAIgDABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAgACbC5QAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQACgGgEAAIgDADgAB4C2IgDABIAAADQADAEADgEIAAgCIgBgCIgCgBIAAABgADFCOIgDACQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIALgBIAAgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFAAIgDACgACuCAIABABIABABIAHAAIACAAIABgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgDgCgCIgKAAgADWB1IgCABIACABIABABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIADAAIADgBIAAgEIgDgDIgCgEIgDABgADABiIAAABIAAAMIABACIADACIAGAAIAGAAIABgBIABAAIAAgGIgEgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgMAAgACZBnIAAAFIACACIADACIAKAAIAAgDIgBgCIgBgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgEAAIgBAAQgDAAgCADgACxBOIAAAJIABACIAEABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAgFIgDgFIgCgBIgEABgACIBQIAAAIQAAAAABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABIgBAAIgCACgADaBTIgDACIADACIACgBIACgCIgBgCIgBAAIgCABgADHBCQABAAAAAAQAAABABgBQABAAAAAAQABAAAAgBQACgDgCgCIgEgDIgDADQgCABACAFIACAAIABAAgACZA+QAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAKAAQAAgJgGAAQgFAEgBABgAB4A9IgCAAIAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIADgCIAAgBIgBgBIgCAAgACwAmIgBABIgBABIgBAAIADAGIACACIAJAAQgCgEABgCQAAgDgBgDIgHAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAgACJAlIgBAAIgBAGQAAACACADIADAAIADgDQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAgBIgGgEIgCABgADGAXIAAADIABABIADAAIACgBIAAgDIgDgCIgDACgAB3AYIADgBIABAAIgBgDIgDgCQgEADAEADgACIAAIAAAGIABAAIACABIACgDIAEgDIAAgBIgBAAIAAAAIgFgBIAAAAIgDABgAB2iNIAAABIACABIACgBIABAAIAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_5.setTransform(667.9,93.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AC4FHIgEgDIgvAAIgEgDIgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgHgEIgIgFIgHgEQgEgBgDgDIgGgEIgEgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgDgFIgFgDIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIgBgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgEQgGgFAAgJIgEgFIgDgFQgCgDAAgDIABgFIAAgKIAAgKQgDgCAAgCIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABAAIAAgBIAAgBIABgBIAAgFIADgEIAAgSIgCgBIAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAAgFIgBgBIgCAAIgBgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIACgBIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgRIADgEIAAgSIgGgGIgBgGIgEgHIgGgHIgIgIIgFgGQgCgDgGgBIgFgHQgEgDgCgIIAAgQQAEgCACgFQABgDACgEIAPAAIAJgKIAAgDIAKgFQAFgCADgFIgCgEIAAgEIgDgEIAAgJIADgCIAAgnQADgCABgEIACgGIACgGQABgEgBgFIAAgIIAAgHIgCgDIAAgJIgDgDIAAgIIgDgEIAAgRIADgDIAAgVIgCgDIgBgCIgCgIQgDgDACgEIgEgHQgBgEgFgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCgEIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDgCIgGgDIgDgDQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBAAAAAAIgNgLQgDAAgEgCQgDgDgFAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgBIgCgDIgDAAIgDAAQgCAFAAADIADAHIABAGIgBAGIgCAFIgDAGIAABzIgDACIAAAHQABADgCADQgCACAAACIgBAFIgIAIQgCADgBACQAAABAAAAQAAABgBAAQAAABgBAAQgBABAAAAIADAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIACADIADADIACAFQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAIAAAKIADADIACAEIAAAuIgBABIgBABIAAALIgEADQgBACACADIgFAGIAAADIgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAABABIAAADIADAFQAAACADACIAAAHIAAAHIgBAJQAAAEADAFQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBADIADAEIAAAqIADADIAAAvIgCABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAAJIgDADIAAAdIgCADIgBAAIAAAPIACAEIACADIACAEIADABIAAAEIAEAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACIAEACIAHADIAAAGQAAABAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIADADIAAAUIgDAGQgBADgDACIgDAAIgDABIgDABIgDADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCADIgJAAIgDgDIgGAAIgDgCIgDACIgZAAIgSgHIgDgBIgCABIgIgIIAAgGIgOgOIAAgKIgFgDIgMAAIgBAFIAAAHQACAEADABIAHADIABAAIADAAIACABIAAACIAAAKQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgKAJIgGAAIgFACIgFAAIgDgCIgSAAIgCACIgQAAIgCgCIgWAAIgCACIgVAAIgDgCIgPAAIgEACIgPgFIgHgFIgIgMIAAgFIgBgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgEIACgEQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgDADgCIAFgDQADgBADABQADgDAEgBIAGgDIAAgEIAEgDIAFgEQAAgGADgFQADgFgFgFIAAgTQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABgBIAAgVIgDgBIAAgCIgBgBIAAgOIABAAIACgCIAAgWIgBgCIABgDIAAgSIAEgDIAAgIIgDgEIAAgJQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgDIAAgNIABgOIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAhbIADgDIgDgCIAAgcIADgCIAAgNIgDgCIAAgZQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIAAgDIADgDIADgDIAAgYIADgDIAAgRIgDgFQAAgDgDgCIAAgkIgCgBIAAgCIgBgBIAAgNQADgDABgEQAAgEgDgDIgFgKQgCgFgFgDIgHgHQgEgEgEgCIgDgDIgCgDIgBgBQgBgDgDgCQgDgCAAgDIgBgCIgBgCIAAgIIAEgHIAEgFIAAgBIAEgBIAFgDIAFgDQAEACACgCQACgCADgBIADAAIADAAIADACIAQAAIACgCIAPAAIAEADIAFAAIAEADIALAAIADgDIACAAIANAAIACABIABACIApAAIADABIAAABIAiAAIABgBIACgBIAjAAIAEADQABACADAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAEAAABAEIADAFIARAAIAEgEIADgFIAIgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIAnAAIAEACIApAAIADADIAJAAIADADIAOAAIAGACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAGAEQAEABACADQACADAEACIAGADIAJALIAKAAIADADIAHAAIAFACIAEADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQACAAADACQACAAACADQADACACgCIAJAKIAJAIIAFAHQACAEAAAEQABADACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIABADQADACgBADIABAGQgEADAAADIABAHQgBADgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgGACIgHADIAAACQADADAAACIADAGIAAAXIAAABIgBABQgEAEAHACIAEAHIADAHIAAAgIgDADIgDAKIgGAHIgFAGIgBADIAAABIgCADIAAAEIgHAFQgDAEgFAAIgEAFQgCACAAADIgFAGQgCACgEABIgEACIgEABIgDAEIgFAFQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAAIgIAIIAAAQIALALIALALIAIABIAHAEIAGAEIAHADIAGAHIAGAGIAAAJIAEADIACAEIACADIABACQAAAFACACQADADgCAFIABADIABABQABADAAADQAAACADADIAAARIgBACIgCACIAAAMIgDACIABABIABAAIAAABIABAAIAAAGQABADADACIAAAKIAEAJIAEAIIAAALIADADIgGAGIAAAEIACAAIABABQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBIAFgBIAFgCIAFAAIAGAAIAMAAIABABIABABIABgBIAAgDIABgBIABAAIAGAAQAEgBADACIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAGIgCAEIAAAJIgCACIgBABIAAACIAAAKQgFACgCAFIgFAIIAAAEIgOAPIgDAAIgFAFIgFAFIgEAEIgFAEIgFADIgEAFQgCACgDABIgGAEIgIAAIgDACIgHAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgCABgCACIgXAAIgDADIgDABIgBAAgACqEGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABABABAEIAAACIAEAFIANAAIAAgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAEgDIAIAAIACgBIAAAAIAGADIAAAGIAEAFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgDIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgFgBgCgDQgDgEAAgFIgCgEIgDgEQgFABgCgCIgGgEIAAgIIgCgCIgCgGIgGAAQgEACgBgCQgCgDgDAAIgCgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgDgCgCIgEgDIgBgBIgBAAIgBgBQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAFQgEAHgGACQgGACgFAFIAAAGQADADAEABIAIAEIAAAPIgEAEIgEABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAKIADABIAEAAQADgCABgEQABgEADgDIAIAAIAEABIAAAAIACABgAiBD7IAAADQgBABAAAAQAAAAAAABQAAAAABABQAAAAABAAIAFgCIAFgDIAAgBIABgBIgFgFQgBAFgBAAIgCAAIgDABgAB8DzIgDADQgDADADADIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgIIgDAAIgBAAgAjND8QAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABgADeDkIgCABIAFAGIABgEIgBgDIgDAAgAjVDQQAAADABACIAKAAIAFgEIAAgEIgCgDIgOAAIAAAGgAikDJIgBAFIAAAEQADgDADgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAgAiYCzIgBABIAAACQADACAAADIABAGQADgCACABQADABADgCIAAgHIgFgDIgFAAIgDgDIgBAAIAAABgAhsC2IAAAGIAEAEIADAAIACgBIAAgLIgFAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAi/C5IAEAHIAFAAIADgCIADgBIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgNAAgAjgC5QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABgDIgCgDIgDAAIgBABgAjGCvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABgBIAAgDIgCgEIgBgDIAAgEIgKAAIgCABIgCAEIAAAIIAFACIAFgBIAEABgAiACeIgBACIAAACIAAADIAFAFIACAFIAGgBIABgBIABgGIAAgGIACgCIABgCIAOAAIAAgBIABgBIAAgQIgBgCIAAgBIgHAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgGIgBgEIgCgCIgBgBIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIAAAFIgBAEIACAEIAEABIADACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAUIgQAAIgBAAIAAABgAitCeIAAAHIADACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIANAAIAAgMIAAgCIgBAAIgLAAIgDgDIgBAAIgBABgAB4CkQgBAAAAABQAAAAAAABQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIAAgDIgGgEIgDAEgAiTCQIAAAEIAFAHQACgDACAAIADgDIAAABIAAgBIgBgEIgEgDIgEAAIgDACgAi/CSIAAAFIABACIAMAAIABAAIABgBIgCgFIgDgFIgHAAgACNCRIgBACIABADQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDAAgAioB6QAAABAAAAQAAAAAAABQAAAAAAABQABABAAABIADAAIACgCIAAgEQgFAAgBABgAhlBzIAFgBIAAgQIgJgDIgGgFIAAgMIACgCIACgDIAHAAIAEgEIAAgJIgEgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCgDIgCgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgDgBgCIgNAAIgBABIAAABIAAALIACADIACAAIAKAGIAAANIgDADIgGAAIgDADIgCACIAAAJQAEADAEACQAFADAFAAIAAAPIADADIABACIADAAIADAAgAi7BkQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgBAFQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIADAAIACABIAGgFIAAgFQAAgDgCgDIgFAAIgEADgAiSBoIAAABIACACIADgCIAAgBIgDgBIgCABgACRBnIABgDIgBgDIABADIgBADgAimBQIgEAFIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAHAAIADgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgDQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAgACgBQIgCABIAAAIIAGgCQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIgEgFIgDABgAiQBAIAGABIACgCIgDgBIgFACgABVAsQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBABIgBADIACACIACAAIABAAgABfARIAAAHQgBACACADIAGAAIAFgEIAAgIIgGAAIgGAAgAhvAPQgCAEADADIACAFQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAADgCIAAgKQgDACgCgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgDABgAiPATIgBADQAAABAAAAQAAAAAAABQAAAAABABQAAAAABAAIADAAIABAAIAAgGQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiDgEIgBABIAAACIADABIAAAGIAFAFIAJAAIAAgBQACgEgCgDIgCgEIgIgDIgCgBIgEABgABTACIgDADIAAABIAAABIABAAQAAAAAAAAQAAAAABAAQAAABAAgBQAAAAABAAIAAgBIAEgDIgBgCIAAgBIgDACgAB5AAIgFADIAEADIADABIAEgCIACgCIgBgCIgBgBgAiLgLIADADIABgBIAAgDIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAgCIgEABIgBABIAAAHIACgBIACABgAhogQIgBABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIAAAAIABgBIgBAAIgCgBIgCABgABjgTIAAADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEAAIgBgGIgBAAIgDABgAh8goIgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQADACACgCIADgEIgFgEIgCAAIAAAAgABQgmQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADABIABgBIgDgGQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAgACJhDIABAEIACABIgBADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAEAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgJIAFgEIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIAFgDIAEgEIAAgFIABgEIACgCIACgDIAFAAIAFgDIADgEIgCgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIgHgIIgDgFQgCgDABgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgCgCIgJAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgFIgBgFIgEgDIgHAAIgBANIAAAAIAAAAIABAAIABABIAEAAIADABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAQIgBACIgBABIgIAAIgIAIIAAAIIAGAGQACACAEABIAAAGIgBAGIAAABIgDADIgGAAIgCABgAh+hUIAAAGQgBADADACIADAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIAAgMQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgBAAIgDABgAB+hSIgDABIgBAEIABAEIAEgBIAEgBQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgCgCgDQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAgAjNhMIADgBIABgBIgEgEQgDADADADgAhvhmIAAACIACADIABAEIABABIAEAAIAHgEIAAgGIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgAh9h3IgBADQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACAAIAEgEIgDgFIgCAAIgCACgACziQIAAAGQgBADACACIADAAIAEgIIgEgEIgDAAIgBABgACeilIAAAGQgBADACACIAGAAIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIgFgDIgDgBIgBAAIgCABgABmjeIADAAIADgBIgGgFQgBABABAFgABOj3IAAABIABADIACAEIAFgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIABgFQAAgCgCgDIgHAAgAjSj5IAAADIAEADIABAEIAEgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAgABzj0IADABQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAEABIABgDIgFgGgAioj3IAAADQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIABAAIADgDIAAgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgABdkGIAAAEQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAOAAIABAAIABgCIAAgFIgDgEIgKAAgAi+kIQgCACACAEIAHAAIAHgEIgFgEIgFAAIgEACg");
	this.shape_6.setTransform(569.5,95.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIAAAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAiUhjIABAGQACACADABIAHADIAAgKIgEgIIgDABIgEAAQgCADAAACgAhBiDQABABAAAAQAAAAABABQAAAAABAAQAAAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQABABAAAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDg");
	this.shape_7.setTransform(506.5,93.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AC4FHIgEgDIgvAAIgEgDIgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgHgEIgIgFIgHgEQgEgBgDgDIgGgEIgEgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgDgFIgFgDIgBgEQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIgEgDIgBgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgEQgGgFAAgJIgEgFIgDgFQgCgDAAgDIABgFIAAgKIAAgKQgDgCAAgCIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIABAAIAAgBIAAgBIABgBIAAgFIADgEIAAgSIgCgBIAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBIAAgFIgBgBIgCAAIgBgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIACgBIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgEIAAgRIADgEIAAgSIgGgGIgBgGIgEgHIgGgHIgIgIIgFgGQgCgDgGgBIgFgHQgEgDgCgIIAAgQQAEgCACgFQABgDACgEIAPAAIAJgKIAAgDIAKgFQAFgCADgFIgCgEIAAgEIgDgEIAAgJIADgCIAAgnQADgCABgEIACgGIACgGQABgEgBgFIAAgIIAAgHIgCgDIAAgJIgDgDIAAgIIgDgEIAAgRIADgDIAAgVIgCgDIgBgCIgCgIQgDgDACgEIgEgHQgBgEgFgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgCgEIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDgCIgGgDIgDgDQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBAAAAAAIgNgLQgDAAgEgCQgDgDgFAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgBIgCgDIgDAAIgDAAQgCAFAAADIADAHIABAGIgBAGIgCAFIgDAGIAABzIgDACIAAAHQABADgCADQgCACAAACIgBAFIgIAIQgCADgBACQAAABAAAAQAAABgBAAQAAABgBAAQgBABAAAAIADAEQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIACADIADADIACAFQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAIAAAKIADADIACAEIAAAuIgBABIgBABIAAALIgEADQgBACACADIgFAGIAAADIgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAABABIAAADIADAFQAAACADACIAAAHIAAAHIgBAJQAAAEADAFQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBADIADAEIAAAqIADADIAAAvIgCABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAAJIgDADIAAAdIgCADIgBAAIAAAPIACAEIACADIACAEIADABIAAAEIAEAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACIAEACIAHADIAAAGQAAABAAABQABAAAAAAQABAAAAAAQABAAAAAAIAEgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIADADIAAAUIgDAGQgBADgDACIgDAAIgDABIgDABIgDADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCADIgJAAIgDgDIgGAAIgDgCIgDACIgZAAIgSgHIgDgBIgCABIgIgIIAAgGIgOgOIAAgKIgFgDIgMAAIgBAFIAAAHQACAEADABIAHADIABAAIADAAIACABIAAACIAAAKQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAIgKAJIgGAAIgFACIgFAAIgDgCIgSAAIgCACIgQAAIgCgCIgWAAIgCACIgVAAIgDgCIgPAAIgEACIgPgFIgHgFIgIgMIAAgFIgBgEQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgEIACgEQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAgDADgCIAFgDQADgBADABQADgDAEgBIAGgDIAAgEIAEgDIAFgEQAAgGADgFQADgFgFgFIAAgTQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAABgBIAAgVIgDgBIAAgCIgBgBIAAgOIABAAIACgCIAAgWIgBgCIABgDIAAgSIAEgDIAAgIIgDgEIAAgJQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgDIAAgNIABgOIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAhbIADgDIgDgCIAAgcIADgCIAAgNIgDgCIAAgZQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBIAAgDIADgDIADgDIAAgYIADgDIAAgRIgDgFQAAgDgDgCIAAgkIgCgBIAAgCIgBgBIAAgNQADgDABgEQAAgEgDgDIgFgKQgCgFgFgDIgHgHQgEgEgEgCIgDgDIgCgDIgBgBQgBgDgDgCQgDgCAAgDIgBgCIgBgCIAAgIIAEgHIAEgFIAAgBIAEgBIAFgDIAFgDQAEACACgCQACgCADgBIADAAIADAAIADACIAQAAIACgCIAPAAIAEADIAFAAIAEADIALAAIADgDIACAAIANAAIACABIABACIApAAIADABIAAABIAiAAIABgBIACgBIAjAAIAEADQABACADAAQADABABACQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAEAAABAEIADAFIARAAIAEgEIADgFIAIgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIAnAAIAEACIApAAIADADIAJAAIADADIAOAAIAGACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAGAEQAEABACADQACADAEACIAGADIAJALIAKAAIADADIAHAAIAFACIAEADQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQACAAADACQACAAACADQADACACgCIAJAKIAJAIIAFAHQACAEAAAEQABADACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIADAEIABADQADACgBADIABAGQgEADAAADIABAHQgBADgCACQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgGACIgHADIAAACQADADAAACIADAGIAAAXIAAABIgBABQgEAEAHACIAEAHIADAHIAAAgIgDADIgDAKIgGAHIgFAGIgBADIAAABIgCADIAAAEIgHAFQgDAEgFAAIgEAFQgCACAAADIgFAGQgCACgEABIgEACIgEABIgDAEIgFAFQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAAIgIAIIAAAQIALALIALALIAIABIAHAEIAGAEIAHADIAGAHIAGAGIAAAJIAEADIACAEIACADIABACQAAAFACACQADADgCAFIABADIABABQABADAAADQAAACADADIAAARIgBACIgCACIAAAMIgDACIABABIABAAIAAABIABAAIAAAGQABADADACIAAAKIAEAJIAEAIIAAALIADADIgGAGIAAAEIACAAIABABQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBIAFgBIAFgCIAFAAIAGAAIAMAAIABABIABABIABgBIAAgDIABgBIABAAIAGAAQAEgBADACIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACAEQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAGIgCAEIAAAJIgCACIgBABIAAACIAAAKQgFACgCAFIgFAIIAAAEIgOAPIgDAAIgFAFIgFAFIgEAEIgFAEIgFADIgEAFQgCACgDABIgGAEIgIAAIgDACIgHAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQgCABgCACIgXAAIgDADIgDABIgBAAgACqEGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABABABAEIAAACIAEAFIANAAIAAgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAEgDIAIAAIACgBIAAAAIAGADIAAAGIAEAFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAgDIgBgCQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgFgBgCgDQgDgEAAgFIgCgEIgDgEQgFABgCgCIgGgEIAAgIIgCgCIgCgGIgGAAQgEACgBgCQgCgDgDAAIgCgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgDgCgCIgEgDIgBgBIgBAAIgBgBQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAAFQgEAHgGACQgGACgFAFIAAAGQADADAEABIAIAEIAAAPIgEAEIgEABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAIAAAKIADABIAEAAQADgCABgEQABgEADgDIAIAAIAEABIAAAAIACABgAiBD7IAAADQgBABAAAAQAAAAAAABQAAAAABABQAAAAABAAIAFgCIAFgDIAAgBIABgBIgFgFQgBAFgBAAIgCAAIgDABgAB8DzIgDADQgDADADADIADAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgIIgDAAIgBAAgAjND8QAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABgADeDkIgCABIAFAGIABgEIgBgDIgDAAgAjVDQQAAADABACIAKAAIAFgEIAAgEIgCgDIgOAAIAAAGgAikDJIgBAFIAAAEQADgDADgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAgAiYCzIgBABIAAACQADACAAADIABAGQADgCACABQADABADgCIAAgHIgFgDIgFAAIgDgDIgBAAIAAABgAhsC2IAAAGIAEAEIADAAIACgBIAAgLIgFAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAi/C5IAEAHIAFAAIADgCIADgBIAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgNAAgAjgC5QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIABgDIgCgDIgDAAIgBABgAjGCvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABgBIAAgDIgCgEIgBgDIAAgEIgKAAIgCABIgCAEIAAAIIAFACIAFgBIAEABgAiACeIgBACIAAACIAAADIAFAFIACAFIAGgBIABgBIABgGIAAgGIACgCIABgCIAOAAIAAgBIABgBIAAgQIgBgCIAAgBIgHAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgGIgBgEIgCgCIgBgBIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIAAAFIgBAEIACAEIAEABIADACQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAUIgQAAIgBAAIAAABgAitCeIAAAHIADACIgBAEQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIANAAIAAgMIAAgCIgBAAIgLAAIgDgDIgBAAIgBABgAB4CkQgBAAAAABQAAAAAAABQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIAAgDIgGgEIgDAEgAiTCQIAAAEIAFAHQACgDACAAIADgDIAAABIAAgBIgBgEIgEgDIgEAAIgDACgAi/CSIAAAFIABACIAMAAIABAAIABgBIgCgFIgDgFIgHAAgACNCRIgBACIABADQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDAAgAioB6QAAABAAAAQAAAAAAABQAAAAAAABQABABAAABIADAAIACgCIAAgEQgFAAgBABgAhlBzIAFgBIAAgQIgJgDIgGgFIAAgMIACgCIACgDIAHAAIAEgEIAAgJIgEgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCgDIgCgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgDgBgCIgNAAIgBABIAAABIAAALIACADIACAAIAKAGIAAANIgDADIgGAAIgDADIgCACIAAAJQAEADAEACQAFADAFAAIAAAPIADADIABACIADAAIADAAgAi7BkQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIgBAFQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIADAAIACABIAGgFIAAgFQAAgDgCgDIgFAAIgEADgAiSBoIAAABIACACIADgCIAAgBIgDgBIgCABgACRBnIABgDIgBgDIABADIgBADgAimBQIgEAFIgBACQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAHAAIADgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgDQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAgACgBQIgCABIAAAIIAGgCQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIgEgFIgDABgAiQBAIAGABIACgCIgDgBIgFACgABVAsQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAAgGQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBABIgBADIACACIACAAIABAAgABfARIAAAHQgBACACADIAGAAIAFgEIAAgIIgGAAIgGAAgAhvAPQgCAEADADIACAFQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQADAAADgCIAAgKQgDACgCgDQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgDABgAiPATIgBADQAAABAAAAQAAAAAAABQAAAAABABQAAAAABAAIADAAIABAAIAAgGQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAiDgEIgBABIAAACIADABIAAAGIAFAFIAJAAIAAgBQACgEgCgDIgCgEIgIgDIgCgBIgEABgABTACIgDADIAAABIAAABIABAAQAAAAAAAAQAAAAABAAQAAABAAgBQAAAAABAAIAAgBIAEgDIgBgCIAAgBIgDACgAB5AAIgFADIAEADIADABIAEgCIACgCIgBgCIgBgBgAiLgLIADADIABgBIAAgDIgCgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAgCIgEABIgBABIAAAHIACgBIACABgAhogQIgBABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIAAAAIABgBIgBAAIgCgBIgCABgABjgTIAAADQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEAAIgBgGIgBAAIgDABgAh8goIgCABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABABQABAAAAAAQABAAAAAAQABgBABAAIADgEIgFgEIgCAAIAAAAgABQgmQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADABIABgBIgDgGQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAgACJhDIABAEIACABIgBADQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAEAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgJIAFgEIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAABAAIAFgDIAEgEIAAgFIABgEIACgCIACgDIAFAAIAFgDIADgEIgCgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIgHgIIgDgFQgCgDABgDQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgCgCIgJAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgFIgBgFIgEgDIgHAAIgBANIAAAAIAAAAIABAAIABABIAEAAIADABQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAQIgBACIgBABIgIAAIgIAIIAAAIIAGAGQACACAEABIAAAGIgBAGIAAABIgDADIgGAAIgCABgAh+hUIAAAGQgBADADACIADAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIAAgMQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIgBAAIgDABgAB+hSIgDABIgBAEIABAEIAEgBIAEgBQgBgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgCgCgDQgCACgCABgAjNhMIADgBIABgBIgEgEQgDADADADgAhvhmIAAACIACADIABAEIABABIAEAAIAHgEIAAgGIgEgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABgAh9h3IgBADQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACAAIAEgEIgDgFIgCAAIgCACgACziQIAAAGQgBADACACIADAAIAEgIIgEgEIgDAAIgBABgACeilIAAAGQgBADACACIAGAAIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBIgFgDIgDgBIgBAAIgCABgABmjeIADAAIADgBIgGgFQgBABABAFgABOj3IAAABIABADIACAEIAFgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBIABgFQAAgCgCgDIgHAAgAjSj5IAAADIAEADIABAEIAEgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgBAAAAgABzj0IADABQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAEABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIgFgGgAioj3IAAADQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEAAIABAAIADgDIAAgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABgABdkGIAAAEQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAOAAIABAAIABgCIAAgFIgDgEIgKAAgAi+kIQgCACACAEIAHAAIAHgEIgFgEIgFAAIgEACg");
	this.shape_8.setTransform(444.7,95.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguFJIgCgDIgGAAIgEgEIgJAAIgFgDQgDgBgCgDIgEgEIgEgDIgEACIgEADQgCACgDgCQgBAAAAAAQgBAAAAAAQgBABAAABQAAABgBABQgCABgEgEIgJAAIgFgGIgKAAIgEgDIgFgBIgEgEIgEAAIAAgFQgCgBgDAAQgDABgCgEIgGAAIgEgFQgDgBgBgEQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBAAgBAAQgFgCgDgFIgIgIIAAgJIgFgDIAAgGIgCgDQACgEgBgDIgEgFIgFgFIgGgHQgDAAgCgBIgDgEIgEgDQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIgMgNQABgDgBgDIgFgHIgIgKIgHgMIgFgKQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgCIAAgYIgDgDIAAgGIgDgDIAAgJIgDgCIAAgLIgFgJIgFgJIAAgLIgCgDIAAgFIgCgDQgCgCAAgDIABgFQAEgCgBgEQgCgFAEgDIAAgSIADgCIAAgBIAAgeIAEgDIAAgIIADgEQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgDIAAgMIABgCIABgBIADgKQACgEgBgGIgCgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIAAgFQAAgCADgDIAEgIQABgEACgDIABgEIAAgEIAFgDIAEgBIAEgBQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAgBQAAAAABAAIADgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEgCIALAAIAGgFIAAgIIABgEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAGgGIAAgXIAIgRIAAgIIACgCQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIADgEQABgDAEgCIADgDQAAgFACgDQACgDAAgFIAGgGQADgDADAAIAFgCIADgCQACgEADgBQADgBACgDQADAAADgCIAFgGQABgEADgDIAFgFIAUgLIAFABIADgCIAKAAQADgFAEgBQAEgCACgEIAKAAIADgDIAHAAIABgBIABgCIADgBIADAAIAGAEQADAAACADIAAAHIgEAEIAFADIABABQAAABAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCADIADADIgDAEIAAAFIgFAGIgFAFIgFAEQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAIgIgCIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABIAAA0IADADIAAAjQAEADgBAEIAAAHIgDAEIAAAFQgBADgCACIAAALIACACIABABIAAAjIADAEIAAAGIADACIAAAPIgBABIgBACIAAABIgBABIAAANIABACIACABIAAAZIgBAAIgBABIgBABIAAAAIACACIABADIAAAJQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQACABgCAEIgCACIAAAIIgFAFQgDADAAAFIACABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIADAEIAAAMIADAEIAAAOQADACAAACQAAADADACIAAALQgCADgBADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgJAIIAAAKIgBABIgCABIAAAGIgCAFIgBACIgBACIAAAWIAHAGIAGAHQgBADACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAFIAAAEIABABIABACIABAEIAAADQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAADIAAACIgDADIAAAJIgDACIAAAQIADADIAAAHIADAGQACAEADACIAFAAIADADIABgCIACAAQAEACACAFQACAEAEADIAJAAQACACgBADQAAACAEADIAAAPQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgDAEIgJAAIgCAEgAgvE1IgBADQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIACgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgCIgBAAIAAgBgAitCSIABACIABACIADAAIABgBIAAgCIgCgCIgBAAIgDABgAhVCSIAAABIACABIADgBIAAgCIgDgBIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABgAi+CCQADABADgCIAAgGIgEgFIgJAAIABAGQgBADADADIACgBIACABgAjWBmIgDAFIAEAEIAGAAIAEADIACAAIACgBIAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHAAQgDACgBADgAiBBiIgDADQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAEAEIADgEQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgCgCIgDgCgAiwBiIAAAKIALAAIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIgCgCIgDgCIgEgBIgBAAIgFACgAiSBcQACACAEgBIAAAAIABAAIgBAAQAAgEgCgCQgCgEACgEQgEABgFgEIgFgBIAAABIgBAAQgCAGADACQACAEABADIADgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABgAi9BPIgCACQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIAAADIACAEIADAAIADABIAEACQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIgDgDIAAgKIgEAAIgEAAgAisA7IgCAEIgCAFIACACIAGAAIADACQABAAAAABQABAAAAAAQABAAAAgBQABAAABAAIAAgMIgBgBIgBAAIgFgBIgBAAIgEABgAiCBEIADAAIACgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgCADACADgAiWAsIgBACQAEADAEgDIgCgCIgBgDIgEADgAioAaIADAAIABgBIgBgDIgDgCQgCADACADgAj4AVIgFADIABAAIABABIAEAAIAAgCIABgCgAiXgCIAAABIAAAJIAEgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABIABgBIAAgBIABgCIAAgBIgDAAIgDgCIgBAAIgCAAgAisgQIAAADIAEACIADACIAFgEIAAgDIgCgEIgGAAgAiDgRQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIAEABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCIgCACgAiRgdQADAAACgCIABgGQAAgEgCgDIgFgBQgDAAgDADIAAANIAEAAIADAAgAiJg/IAAAEIABABIADAGIADAFIAFgDIADgBIAAgKIgEgEgAjohMQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAIACAAIACgBIgBgEIgDgBIAAgBQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAgAiUhOIAAACQACAEADgEIgCgCIgBgBIgBgBIgBACgAisiPQgDACgBAEIACACIADACIAFAAIAFADIAAgBIABgBIAAgLIgIgEIgEAEgAiXikQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAAIADgDQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAIgEgCQgCABgCACgAiHi9IgCABIAAADIADACIAAAEQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIAGAAIAFgEQgCgFgEgBIgHgEIgBABgAiXjOIAAAKIAHAAIADADIABgBIAAgDIgBgBIgBgCIAAgBIgBgDIAAgDIgCAAIgDgBIAAAAIgDACgAAvFGQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCgDIgEgFIAAgBIACgBIgJgJIAAgMIADgEIACgEIAHgIQAEgCACgFIAEgHIAMgLIABgDIAAgBIADgDIACgEIAEgFIAFgEIACgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgEIAAgGIgDgEIAAgUIADgEIgGgFIAAgTIADgIIADgDIADgDQAAgEgCgBIgEgDIAAgBIAAgJIAAgHIAFgMQAEgFAAgGIgDgDIAAgGIgEgEIgDgCQACgDgCgDIgCgFIAAgKIgCgBIAAgBIAAghIACgDIAAgeIADgHQABgDAFgDIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABIgIgJIAAgEIgBgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAIAAgNIAIgHIAFAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAACQAEACABgBIAEgEQgEgBgCgDIgGgFIAAgHIAAgHIACgDQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQgFgEgDgFIgGgKIgBgDIAAgEQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgBQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCgEIAAgLIACgDIABgBIABgCIACgDIAAgVIgDgDIAAgGIAAgHIAAgEQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIgCgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgFgDgBIAAgbIgFgKQgDgFgEgEIgEgDIgBgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgGgGIgEgFIgEgGQgBgDgEgDIAAgVQAFgEAGgCIAKgEIAEgDIACAAIAEACIAKACQACAAAGAFIACAAIALAAIADADIAIAAIABACIABAAQADACACgBIAGAAIACgDQADABADACQACACAEgCIAFAGIAGAAIAEADIAGAAIADAEIAGAAIAGAFQACAEAFACIAGADIAFAAIAEAEQACADADAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIAEACQADADAEACIAHAFIARASIACAAIACABIABABIABAEIACACIACACIABADIACADIACACIADADQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIADACQgCAFABADIAFAGIACAEIACAEQAAADABACIACAEIABAGIgBAGQABAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAACADACIAEADIADAEIAAAFIACADIADADIAFAEQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAEACACQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAOQABAAAAABQABAAAAABQABAAAAAAQAAABAAABIACAEIACAEIgBAEIABADQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIACADIACAEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIABAEIACACIAAAKQgDACAAADIABAHQACADAAACIAAAEIADACIAAAtIADABIAAAMIgDADIAAAdQgDAFgFAEIgHAHIgDAGIgDAGIAAACIAAADIgFADQgCABgBADIAAADIADABIACACIADACIAAAGIADADIAAAJIgDADIAAAEQAAACgDACIAAAWQgEACACAGIgFAFIgDAHIgEAGQgCADABADIgEAFIgFAEIgCAEQgBADgCADIAAAIIgFAEQgCACAAAEIgFAJQgCAFgEADQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgDACQgDAAgBADIgEAEQgCAFgDACIgGAEIgGAEIgFAEIgHAHQgDADgFACQgEADgDADQgCAFgFACQgDAEgDABQgDABgEAAIgEAEQgCACgDAAIgEAEQgCACgEAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAIgEABIgGACQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABQgCADgDAAIgFACQgCACgDAAIgFAAIgDADIgCAAIgEAAIgDABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAgACbC5QAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIADAAQACgGgEAAIgDADgAB4C2IgDABIAAADQADAEADgEIAAgCIgBgCIgCgBIAAABgADFCOIgDACQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIALgBIAAgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFAAIgDACgACuCAIABABIABABIAHAAIACAAIABgCQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgDgCgCIgKAAgADWB1IgCABIACABIABABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIADAAIADgBIAAgEIgDgDIgCgEIgDABgADABiIAAABIAAAMIABACIADACIAGAAIAGAAIABgBIABAAIAAgGIgEgDIABgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgMAAgACZBnIAAAFIACACIADACIAKAAIAAgDIgBgCIgBgBIgBgBIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgEAAIgBAAQgDAAgCADgACxBOIAAAJIABACIAEABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAgFIgDgFIgCgBIgEABgACIBQIAAAIQAAAAABgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEABIgBAAIgCACgADaBTIgDACIADACIACgBIACgCIgBgCIgBAAIgCABgADHBCQABAAAAAAQAAABABgBQABAAAAAAQABAAAAgBQACgDgCgCIgEgDIgDADQgCABACAFIACAAIABAAgACZA+QAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAKAAQAAgJgGAAQgFAEgBABgAB4A9IgCAAIAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIADgCIAAgBIgBgBIgCAAgACwAmIgBABIgBABIgBAAIADAGIACACIAJAAQgCgEABgCQAAgDgBgDIgHAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAgACJAlIgBAAIgBAGQAAACACADIADAAIADgDQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAgBIgGgEIgCABgADGAXIAAADIABABIADAAIACgBIAAgDIgDgCIgDACgAB3AYIADgBIABAAIgBgDIgDgCQgEADAEADgACIAAIAAAGIABAAIACABIACgDIAEgDIAAgBIgBAAIAAAAIgFgBIAAAAIgDABgAB2iNIAAABIACABIACgBIABAAIAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_9.setTransform(378.1,93.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACGFIIgDgDIgPAAIgCAAIgBABIgBAAIgBACIgVAAIgDgDIgVAAIgJgKIgBgCQAAgDgDgBIgDgFIgCgFIgEgIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAEgEIAAgGIAHgGIAEgCIACgCQADgDACAAQACgBACgCQAAAAABAAQABAAAAAAQABAAAAAAQAAgBABAAIAEgCIADAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAQAAIAEgEQACgDADAAQACgCADAAIAEgBQADgCABgDQABgEADgCIAGgIIAGgHIAEgEQACgDABgCQABgFADgDIAHgFIAAgGIADgHIADgHIAGgFQADgCABgDIAAgEIAMgYIAAgLIAEgCIAAgGIAMgLIAAgEQADgDAEAAQAEgCAEABIAJAEIAIAIQAAAEACAEQADADgCAEIgDADIAAAbIADAEIAAAFIgDADIAAAbIACADIABAHIgCABIAAAAIgBABIAAACIAABOIAAAFIAAACQgDACAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgDAGIgCAGIgCACIgDABIgIAAIgDAEIggAAIgEgDQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIgFAAIgBABIgBACIgFABQgDAAgDADgAgbFFQgCgEgDAAQgDAAgBgCIgwAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCAEIgSAAQgGgHgGABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgDgDACIgEgFQgCgBgBgDQgBgDgCgDQgCgDgEAAIgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAIAAAFIgHADIgGAEQgGgBgFABQgEADgGgBIAAABIgDACIgXAAIgEgCQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGgGIgGgHIgDgDQAAgDgCgCQgDgEADgFQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIABgFIACgCIABgCQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIADgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIAEgDQACAAACgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAABIAFgGIADgEIAFgKIABgHIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBIgBgCIAAgGIgDgDIAAgQIADgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIABgCIgCgDIAAgIIgDgEIAAgLIADgDIAAgKIAAgBIABgBQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBAAQgCgEABgDQAAgDgDgDIgBgHQAAgFAEgDIAAgFIABgCIABgCIAAgGIgCgDIAAgGIgDgDIAAgPIADgDIAAgMIAAgNQgBgFACgEQACgEAAgEQADgCAAgDIgBgGIgDgDIAAg5IADgFIADgGIAAgOIgCgDIAAglIgCgCQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIAAgTIADgCIAAgkIADgCIAAgbIAAgBIgCgBIAAgCIgBgCIAAgKIACgBIAAAAIABgCIAAgBIAAgKIAAgCIgDgBQABgDgBgFIgEgKQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAIABgFIgEgDIgFgEIgEAAIgXgXIAAgNIAEgFIABgFIACgEIADgCIAFgEQAEgCADABIADAAIADgDIB0AAIADADIBkAAIAAAAIACgCIABAAIACgBIAMAAIADADIAMAAIADADIALAAQACADACAAIAEACIAEABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIADAEQAAAAABABQAAAAAAABQAAAAAAABQAAABgBABIgBAEIgBAFQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCACIAAAHIgDADIgHAHIgJAAQgCADgDACIgGAEIgKAJIgDAAIgCACIgCADIAAAOIgEAEIAABPIAAACIgBACQgCACAAADQABADAAAEIABABIABABIAAAAIAAACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABIAAASIgCABIAAAPIACABIAAAVIgDADIAAAFIgDAEIAAAVIgMAMQAAAEgDACQgEACABAEIgKAMIAAAFQgBABACACIAFAAIANAMIAAAEIAEAFIAFAHIAAAMQgFAGgBADIAAANIADACIAAASIgCACIgBAAIAAArIgDADIAAA5IADADIAAAUIgBACIgBABIgBABIAAACIAAAMIABABIACACIAAAWIgBAAIgCACIAAAGIAAADIABACIABABIABADIAAADIACACIABADIABACQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAIAAAEQgFAEgBADIgDAJIgCADQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBADIgCADIgGAAIgCAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDAAIgBABIgDADgAilEfQAAAHAGgEIAAgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBgAhWCcIgCACIAAAGIAEAFIAGAAIAFgEIAAgHIgDgCIgCgCIgGAAIgCACgAh5CmIADgCIAAgGIgEgEIgFAEIAAAFQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIACAAIACAAgAhoCKIgCABIAAACQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAHAAQACgFgCgBIgEgCIgCAAgAh/B2IAAACQAAABAAAAQAAABAAAAQAAABABAAQABABAAAAIAHAAIAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgEAAIgEADgAiMBfIgCACIgCADIACABIADgBIAAgEIgBgCgAh+BIIgEADIgBAEQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIALAAIABgHIgCgFgAhwAzIADAEIgBADIACADIAFAAIAFAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEQgBgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgCgCQgDACgCgCIgFgCIAAAAIgBAAIAAgVIgBABIgCACIgDgDIgHAAIgBADIgDABIAAANIAEABIAEADIAJAAIABAAQAAABgBABQAAAAAAABQAAAAAAAAQAAABABAAgAiOA6IAAABQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIADgBIACgCQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDACgAhUAlIADAAIABgBIgCgCIgCgDQgDADADADgAglAeIgDADIABACIAEgBIABgDIgBgBIgCAAgAgYAMIgBABIgCAAIAAAIIAEAEQACACADgBIABgCIADgDIAAgHQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgDgBIgEABgAhxAaIABAAIAAAAIgBAAgAiCgKIAAAOIAFAFIAJAAIACAEQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAAALIACgCIADgBIAJAAIACgCIABgDIAAgGIgHgGQgFgBgCgFIAAgDIAHgIIAHAAIADAGIAAAFIADAAIACACIAGAAIACgCIADAAIAAgFIgGgHQgDgDgDAAIAAgHIAIgJIAHAAIABAAIACABIAAAFIACADIACADIACgBIAEAAIADgDQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgEgEIgGgFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgBgFQACgDABgDQABgCADgCIAGAAIAHAAIAAADIABAEIAEAFIAGAAIAEgFIAAgDQgFgDgEgEIgIgIIAAgDIgBgDIgEgBQgDgBgCABIgFADQABAGgCADIgEAGIgGAAIgCACIgGAAIgFACIAAAMIgEABIgEABQgDADgDAAIgEAAIgDABIAAAJQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIAAAEQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBIgBAAIgDABgAiJAVIADABIABgBIAAgCIgCgCIgCgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgEAAIAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIABgBIACABgAh2glQACADAFgCQgDgBgBgDIgDgFIgDgBIgBgBIgEAEQgCABACAFIAEgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAgAgahCIAAADIAEAEIAFgHIgDAAIgGAAgAgqhWIgBACIgBAEIACAEIADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAAgHIgDgCIgCgBIgCABgAhqhoIAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACgBIgCgCIgEACgAhmjpQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABIACADIAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIABgDIgCgBIgCABgAhBjrIAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAJAAIAAgEQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgFgBQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAgAg6j8QABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIACACIAFAHQAGABADgBQAFgCADgDIAAgDIABgCQACgDAAgCQABgDAEgDIAFAAIADgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgGQAAgCgCgDIgLAAIgBAAIgBABIAAAGIgEAEIgJAAIgFgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgDIgDgEIgPAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABIgDAEIgEAFQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDgBgBgCIgFgFIAAgCIgBgBIgNAAIgDgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAABIgCAEIgEADIgIAAQgDgDgBgEQgCgEgEgDIgDgBQgBAAAAAAQAAAAgBAAQAAAAgBABQgBAAAAABIAAAJIAAAAIACABIAFAAQAEACABAEQABACACACIAAAHIACACIACABIAOAAIAAgDIABgDQACgEADgBQADgBACgCIABAAIABABIAEACIADAFIACADIADAEIAPAAIABgBIABgDIAAgFgAhTkiIgDAEIAEADIAEAEIADgDQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgEgEIgDgCQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAgAh/khIACAFIADAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDQgFABAAABgAgrkhIAAAEIABABIAFAAQgBgGgBgBIAAAAIgEACgAhwAvIAAAAg");
	this.shape_10.setTransform(320.4,94.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjeFLQgCgCgDAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgHAAIgHgEIgEgEIAAgaIAEgFIAFgDQAFAAACgDQACgDACABIALgKIAFAAQAEgFAGgCQAHgCADgGIAGAAQACAAABgDIAGAGIAAAHIABADIACACIAKAAIABgBIAAgNQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAgBgBQAAAAgBAAQAAAAAAgBIgEgCIgDAAIAAgKIgGgFIgIAAIgEgEIgGgCIgBgBQACgEgDgCQgDgBgBgEIgDgFIgDgFIAAgSIADgDIAAgLIgDgEIAAgdIADgDQgEgDABgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgDAAgCQAAgDgDgDIAAgbIgCgDIAAgyQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAAgIIAGgGIAAgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBIAAgMQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIACgBIAAgKIADgEIAAgLIgFgFQgCgCgCgBIgEAAIgCgEIgBgDQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgGQgBgDgDgDIAAgEIgDgCIAAgNIACgBIAAgBIABgBIAAgCIAAgQQACAAgCgBIgDgBIAAgnIgCgDIAAgTIACgCIAAgJIAAgCIABgCQABAAABgBQAAAAAAgBQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIACgEIACgEIADgEIADgEQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgEIACgHQACgDgCgFIADgDIAEgCIAAgHQgBAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgDgCIgJAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgDgCQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgEgDQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDAAIgEgCIgFgEIgHgEIgFgFQgEAAgCgBIgDgFIgDgCIgBgFQgDgDADgCIABgFQABgEAFAAIABgBIABgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIADgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAiAAIACgDIBFAAIADgEIAEgCIAEAAIACgCIACgBQAQAFAFADQAFADAFAGIAAAHQABABAAAAQAAABABAAQAAAAABAAQAAAAAAAAIAFABIADADQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBIABgCIAAgCIAEgCQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBIAVAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAFgCIAIABIAHAAIAHADQADABACADIAAAMIADADIAAAbIgDADIAAAdIgDAFQAAACgDADIAAAjIADAEQgFADABADIABAIIABACIABABIACAJQACAFAAAFIAABkIAAAJQAAAAABABQAAABAAAAQAAAAABABQAAAAABAAIAAAhIADAEIAAAJIADADIAAAJIgDADIADACQABADgBAFQgBADAEAEIAAAQIgDACIAAAZIABADIACACIAAAeIADADIAAAhQgDACAAADIAAATIABABIABABIAAAPIAEAEIAAACIAAACIAAAGQgBADACADQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAGAOIABACIABAEIACADIAJAEQAFAAAEACQAEACACAEIAKAAIAFAGIAFAGIAAATIgCADIgEADIgEABIgFACQgCADgDABIgFADIgDABIgGAAIgCABIgBACIgtAAIgCACIAAABIgkAAIgEgDIgjAAIgDADIgJAAIgBAAIgBADIgHAAIgHAAIgBgCIAAAAIgBgBIgCAAIgQAAIgGAGIgLAAIgLAAQgFgBgEACIgIACIgCABIAAABgAibEbIAAABIACADIAEgBIAAgFIgEAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABgAgyEBIgBACIgCAEIgBACQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAGAAIAEgCIABgEIAAAAIgDgEIgEgBIgCAAgAhuDyIAAADIAEABIABgBIgDgGIgCADgAidDzIAAACIACAAIACAAIABgBIAAgBIgDgBIgCABgAiqDkQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIABgEIgCgBIgGAAQgDADADADIACAAIACAAgAhsAAIACAAIACgBIgBgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDADADADgAjBgrIAAADIABACIAEgBIAAgGIgEAAIAAAAIgBACgAithDQgCACgBADIABACIAFADIAEgDIADgFIgDgDIgCgEQgCAEgDABgAhchDIgBAEQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIADgBIACgDQgBgBAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAIgCAAgAiYhWIgDACIACADQAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAIABgCIABgDIgBgBIgCgDIgCADgAiFhtQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAIADABQABAAAAAAQABAAAAAAQABAAABgBQAAAAABAAIAAgEQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgDgCIgDAEgAh0iFIAAAHIADACQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIAAAAIADgDQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgGgEIgDAAIAAAAIgDABgAiCiTQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAFACIACgBIACgBIgEgFIgEABgAhfiTIAAADIABABIAFABIAEgBIAFgEIgHgIgAhuinIgCACIACACIACADIACgBIACgBIAAgIIgGADgAhEiqIgEACIACAFIAHAAIAEgFIgDgDQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgDADgAgzi7QAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAGABIADgCIAAgFQgBgDgBgCIgIAAQABAEgBACgAiXjSIAAADIABADIAEgFIgCgCIgDABgAhuj7IAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIADgBIAAgBQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABgAhfkUIAAAGIADAEQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIADgFIAAgFIgBgCIgFAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAgAA1BAIgCgDIgIgDQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgEQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgDgFIgBgBIAAgBIAAgKIAEgHQABgEADgCIAAgGIAFgGQACgCAEAAIAIgHQADgFAAgGIADgCQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgDIACgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBIAAgQIAEgIQACgDABgFIgDgEIAAgJIgCgBIgCgDIADgFQACgCgBgEQADgDAAgDIAAgHIAAgNIgDgDIAAgSIgDgDIAAgMQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAIgCgBIAAgVIADgCIAAgBQABgJAAgKIgBgUIAHgIIgCgDIgDgCQgDgBgDgCQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgCgFIgDgFQgBgDgFAAIgFgEQgCgCAAgEIgBgBIgEgEQgDABgCgCIgIgDIgGgHIgJgHQgCgBAAgDIgDgFQgCgDABgCIADgFIAAgGIADgDIAEgCIAEgBIAEgEIAEgBIAEgCIAMAAIACACQAFABAGAAIAKgBIAEADIAiAAIAGADQADACADADIgDADIABACIADADIACgGIAMAAIALALIA0AAIADADIAEABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIADAFIAHAFIAKALIAMALIAGAGIAGAGQAEAHABAHIAGAEQABACAAAEIACADIABAFQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAJARIAAARIADAEQABADACADIAAARIgDADIAAAPIACADIABAEIgBAFQgDADABADQABAEgDACIgBABIAAAWIgFAIIgEAIQABAEgCADQgEACACAEIgEAEIgFAEIgBAHQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAFgCADQgCAEgEADQgFADgCAEQgCAFgDACIgNAOIgDACIAAADIgDAFIgEADIgIAAIgFAFIgGAGQgCADgCAAQgDABgCACIgKAAQgDAFgFACQgGABgDAFIgLAAIgFADIgFAAIgEADIgFAAIgEADIgOAAQgDAEgFgBQgEgCgDAFIgUAAIgFACIgEAEgACcAOIAAACIACAAIACgBIABAAIAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAgACrgGQgCACACADIABABIABAAIAIAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABgFQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgCgBgEAAIgEACgACegVIACAEIACgEQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABgACahGQAAAAgBABQAAAAAAAAQAAABAAABQAAAAAAABIAEAEIADgDIgDgGIgBAAIgCABgAB+heIACAEIAAAGIAIAHIAKAAIAEgEIAAgFIAHgJIAGAAQADADADAEQACAFAEAEIADgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIgGgGIgDgEQgCgBgBgDIAAgJQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIAKAAIADgEIAAgNQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgLAAIgBgFIgCgDQgCgDABgDQABgCgCgDIgFAAQgCgBgCACIgCACIgCACIABAFQgBABAAAAQAAABABAAQAAABAAABQAAAAABABIAFAAIAEAEIAHAAIAAAMIgFAFIgGAAIgDAAIgCAAQgEgDgBgDIgDgHIAAgBIgBgBIgJAAIgDACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIAAAKIAGAEIAFAAIACACIACAAIABABQABAGgBADIgCAHIAAABIgCAAIgBAAQgDACgDgBIgDgBIgEACgAB0hvIgCADQABAFAEABQADABADADIAAgBIABAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgEgDIACgDIgDgEIAAAAIgDAAIgCACgAC9idIAAAKQAAAAAAABQABAAAAAAQAAAAAAABQAAAAABABIACAEIAGAAIAIgGIAAgGIgDgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgMAAIAAgBIAAgKQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIgDgEIgGAAIgHAIIAAAEQgBAAAAABQAAAAABAAQAAABAAABQAAAAABABIAGAAIAEACIAHAAIAAABgADRixIAAAMIADACIADADIADgCIAGgCIABgFIgBgFIgHgEQgFgCgDgDIAAgJIgEgDIgGgBIgGABIgBAAIAAACIgBAFIABAFQADADACABIAGAEQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIABAAIADABgACIioIgBADQAAABAAAAQAAAAAAABQAAABAAAAQABABAAAAIADAAIAEgCIABAAIABgBIgDgFIgCgEgACai1IAGAAIAEgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgEgDIgGAAQgCAGACAGgADpi9IABAEIAEgCIACgCIgBgBIAAgBIgBgBgADRjUIAAAEIAAAEQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAPAAIAAgMIgBgBIgBgBIgJAAIgEgDQgBACAAADgACojYQACACABACIAAAEIAEAGQADgBADAAQACABACgCIAAgJIgEgCIgDgCIgFgBIgFACgACKjVIAAABQAAABABAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIAFAAIAAgGIgBgBIAAgCIgCABgADAjqIAAAJIAEADQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAABgBIAAgJIgEgCIgEgCIgDAAIgBgBIgDACgACZjnIAAAHIAGABQADABACACIACAAIACgCIgBgCIAAgCIgBgBIgBgBIAAgCQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAQgCAAgCABgACwj4QAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAIADACQADgDgDgCIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAgABvkTIAAALIAGgDIAFgGIAAgCIgBgBIgEgBIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBABgACBkiQAFAFACgCIAFgDIAAgHIgHAAgAC9ieg");
	this.shape_11.setTransform(262.2,93.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AieFDIgDgDIgXAAIgCABIgBABIgBAAIgBABIg3AAQgFgEgEgBQgEAAgEgDIgGgGQgEgDgCgFIAAgPIADgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgEIAVgKIABgBIADgBIAEAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAHgEQAEgBAEgDIAEgDIAGgEIADgCQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIACgFQACgCgBgDIAMgMQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBIADgEIAAgIIAEgEQADgCgBgFIAEAAIAHgMIAPgPQgBgEACgDIADgHQADgCABgDIAEgFIACgGQACgDgBgDQADgCABgEQABgDAFgCIAEgCIADgDIAEgEIADgCIAFgCIACACIAJAEQAEABAEAEIAAAIIADAEIAAADIAAADIAAABQgDACAAADQABAEgFACIAAAJIgCADQABAEgCADIgDAGQgFAEgDAFIgFAKIgCAFIgCACIgDAEQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAABIgBAEIAAAEIAAABIgGAGIAAAGIgDADIAAARIAGAGIAFAEQAFABABACIAEAFIACACIAGADIAGADQADACAAADIADAGIAAAMIgHAIIgEADIgEAEIgFADIgFAEIgPAAIgDADgAAnFCIAAgBIgBgBIgBAAIgBAAIgIgBIgJgBIgBAAIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABABIgIABQgDAAgDgCIgBgBIgEAAIgKgLIgEgGQgBgDgDgCQAAgDACgDQADgCgCgDIAGgGIAGgGIADgIIADgFQABgCAAgDQAAgCACgDIAAgBIAAgDIgCgEQgBgCgBgCQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIgEgGIgBgEIgBgFIgCgFIgBgCQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgUQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEAAQgBgFgDgFQgDgFABgGIgEgFIgEgEIgDgEIgBgGIgCgDIgEgDIAAgEIgBgCIgBgBIgDAAIgDgFIAAgJIgFgDIAAgIQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgDgCIgEgEIgDgCIAAgLIgBgDIgCgCIgDgGQgBgEgDgDIgCgEIgCgEIgBgCIAAgGIgBgBIgCgDIAAgFIgDgDIgDgDIAAgJIgDgDIAAgHQgEgCgCgFIgFgHQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAgBIgCgEIgDgDIgDgDIgFgLQgCgFAAgGIgFgGQABgDgDgCQgDgBACgEIgDgDIgBgDIgCgHQgBgDgCgBIgEgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgCgDQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgCgBgBgDQAAgDgCgCQgEgDgBgEIgEgIIAAgBIAAgDIgJgJQgEgEgDgFIAAgMIgCgFQAAgCgDgCIAAgJIgBgBIgCgCIAAgOIgCgCIgDAAIgEgGIgGgHIAAgBIADgDIAAgJQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgFAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgEQgDgGgEgGQgDgFgGgFIgtgtIAAgRIAOgPQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAIAJAAIADACIAIAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABABIAUAAIAGAEQAEABACAEIASAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQADAAACgDIAIABQADABADgCIAHgCQADgBACABIAEgEIASAAQACADADAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIAQAAIADgDIAVAAIACADIAJAAQAEAAADgDIAEAAIAEAAIAEgDIAUAAQACgCADAAQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIARAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAIAEABIACADIAEAEIAGACQACACABADIACAFIAAAIIgCADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgEADIgHAFQgDADgCAEIgFAIIgFAFQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgCADIgBADIAAAFIACAEIAAAJIACABIADADQAAADACAFQABAEACACIAEABIABACIACADQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIACAGIACAFIADAGQABADADACQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABIACAFIAAAEIALALIADAEIADAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABABAAQAAABAAAAIAEABIADADIAJAAIAFAFIAAAOIgFAGQgCACgFABIAAAEIAEAAIAEgCIAEAFIAAASQACACAAACQAAABAAAAQABABAAAAQAAABAAABQABAAAAABIAEADIABAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACACABACIAAADIAAAGQAAACACADIADAEIADAEIACAEIABAEQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFAEIABAEIACAEIADACIABAFIADAEIADAEIADAGQABADAEADQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIACAEIAAAHIACAFIADAEIACADQABACACACIABAEIABAFQAEACgBADQAAADACACQACACAAACIACAEQAAADACACQACACgBADQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQADABAAAHIAAABIABAAQACADABADIACAFIAAAFIAAAEIADAFQAAACADACIADAFQAAADACACQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIAHAHIAGAHIAGALQACAGAFAFQACACgBADQgCADADACQACADAAADQAAACADADQgBADACACIAEAFQgBADACADQACADAAAEIABABIABABIAHAIQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABQACACgBADIACACIACAEIACACIACADIAYAZIAAACIAFADIAAAKIgFAIIgEAHQgFAGgBAAIgFACQgCACgDAAIgCgBIgCgBIgDAEIhOAAIgCgCIgBAAIgpAAIgDACgACrEBIAEAEIACAEIACAEIADADIAJAAIADgCIACgDIAAgGQgDgDgCgBIgFgCIgDgDIgGgFIAAgKQgCgCgEgBIgHgBQgDgDAAgDIgEgGQADgCABgCIADgFIAFAAIADgBIAAgJIgCgDIgCgCIgHAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgBgBIgCgBIAAgCIgBgHIgDgFIgBAAQgGgCgCgEIgFgJIAAgLIAAgBQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAEAAIADgBIADgDQAAgBAAAAQABAAAAgBQAAAAAAgBQgBgBAAgBIgBgBIgEgCIgCgBIgEACIAAAGIgFAFIgBAAIgFgFIgDgGQACgDAEgBQADgCACgDIAAgJIgDgEQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFAAIgFgEIgBgBIABgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAgBIgBAAQgDABgDgCIgGgEIgEgEIgCgFQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgLAAIgBABIgBABIAAAQIgPAAQgGgDgDgFQgDgFgBgGIgOAAIAAAFIgBACIgDAFIgEAEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgMIABgBIADgBIADAAIAGgEIgDgGQgCgDAAgDIgDgDIgCAAIgMgKIAAgKIgEAAIgDgDIgEAAIgCgEIgDgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEQAEgCADACIACgBIABgBIAAgIQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQABgDgCgCQgDABgDgCQAAgCgFAAIAAgOIADgCIACgCIAGAAIADgCIADADIABABQACADgBAEQgBADACADIANAAQACgGgBgGIgIgEIgHgEIAAgHIAAgBIgBgCIAAgBIAJgGIAHgEIAAgKIgBgEIgGAAIgDgCIgEgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIAAgHQgCgCgDgBIgGgDIgCgBIgFAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgBgDIAAgDIgBgBIgBgBIgGAAIgFgEQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIAAAJIgEAEIgMAAIgDgDIgBgDIgBgDIgEgCIgLAAIgDgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAAMQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQABADACACQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABIAEAFIAAAHIgEAFIgEAAIgEgCIAAgLQgDgCgDAAIgEABIgFADIAAAHIAFACQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAFABIADAEIAAAGIABADQACADAAACQgBACACADIAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAAANIgEADIgDABIgDgCIgCgCIAAgFIgDgFIgBgBIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAAGQACAFAGACIAAAEIADACIADACIAAANQADADADABQAEABACADIAAAMIgIAIQAAAAABABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIABABIABAAIALAKIAAAJQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIACADIAGADIAAAPIAFAEIAEAAIACABIADACIABACIAAAPIgGACIAAADIAAAEQAFAAACgBIADgHIAHAAQACgBADADIAGADQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAGIAFABIAFACIAFABQADgBACACIABACIAAABIAAADIAAABIACAFIADAFIAFACQADADADgCIAFAEIAAAFIAAACQACACABACQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIADACIAEAAIAJAHIAAAJIAEAFIAEAAIACAAIAGADIAFAEIgBAFQAAADACACQAEABAEACIAIAFIAAAQIAOAAIAEAFIAAAPIgBAAIgCABIgDAAIgFAEIAAAHIAEAEIAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgFACgDIAEgGIAFAAIAIAHIAAAKIgEAEIgEAAIgEABIAAAHIAFAEIAGAAIADgEQABgBAAAAQAAAAAAgBQABAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBgABlDfIAIAIIADgEIABgEQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGAAIgEAAgAC1DhQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQABgBABAAIABgBIACgDIgDgBIgFABgAA+DcIAAACIACACIADAAIAAgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgBACgABJDNIAGAEIAFADIAAABIABgBIABgBIACAAIACgBIABgBIABgGQAAgCgCgDIgGAAgABDCxIABABIgHADIAAAEIACADIAGAAIABgBIABgGQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDAAIABAAgAAtCfQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIABAAIAAgCIABgBIgBgCIAAAAIgBAAgAAVCLIgBADIACADIAGAAIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgDAAIgEACgAACB3QAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIACgCQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgBgCQgCADAAACgAA7A5IAAALIAGAAQADABACgCIAAgHIgBgDIgDgBIgDgBIAAAAIgEACgAApAjIgEAFIACACIAEAAIADgCIAEgBIgCgEIgDgCIAAABIgCgBQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAABgAAOAaIAKgBIAEgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgGgEIgEAAIgCgBIgDgBgAA8ARQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIACABIABABIAFgEIgDgCIgBgCIgEABgAAmgCIABACIAAABIAFAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgCQAAAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAgAAmgpQAAADABADIAEAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgFIgCgEIgHAAIAAAEgAAUhlQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIADABIAEAAIAAgBIAAgEQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCADgAhihlQADgEgDgDQgEADAEAEgAgph9IgCACIADADIAAAEIABAAQACAAADACQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQAAgBAAAAQABgBAAAAQgBgBAAAAIgCgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIgHAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAgAhSh/IAAAGIACAEIACADQACgDACAAIAEgDIAAgBIgDgCIgBgFIgEAAIgBAAIgDABgAh4h7IAAAAIADACIACgCIAAgBIgDgCQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABgAgRiPQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIABAAIABgCIgBgBIAAgCIgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABgAhkiSQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIACABIABgCIAAgCIgCgBIgBAAgAh4ihQAAAAABABQAAAAABgBQAAAAABAAQABAAABgBIAAgDIgBgCIgFAAIABAGgAhli4IACACIABAAIACgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAIgBAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAAAABgAgmjPIAAACIABACIACAAIACABIABgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIgCgCgAiQjjIgBAFIABACIADAAIAEAAQADgBABgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgDgBIgBgDIgHAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAgAh7j5IAAADIABACIAGAAQADgDgDgDIgEAAIAAAAIgDABgAi2kNIgBACIABACIAEgBIAAgGIgDABIAAAAIgBACgACPDRIgCgEIgCgBQAAgEADgCQADgBABgDIALAAIAAALIgCABIgCADgAB5C5IAAgEIADgDQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIADACIAAAHQgDACgDgBQgDgBgCACIgBgEgAAnBuIgEgDIAAgKIAEgEIAEgDQAEAAACACIAEAFIAAAHIgIAHgABTBqIgEgCIAAgHIAEgFQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIADACIACAAIAHAHQgBADgCACIgFAEIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBgAgSADIgBAAIAAgBIAAgBIgBgEQAAgDACgDIACgBIAFAAIADAIIAAAEIgEABIgGAAgAAGg7IgFAAQgBgDABgDIADgEIADAEQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIAAAGIgEABIgBAAgABqh3QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDgCIgEgBIgDgEIgEgDIgFgCIAAgSQADgDABgCIACgFIAAgDIAAgEIADgFIABgEIALgMIAAgGIACgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIALgPIAAgBIADgDIAAgaIgHgIIgDgEIgCgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgEIgJgBIgRgSIAAgCIgEgDIgFgFIABAAIAAgBQADgDABgDQABgDADgCIABgFQACgCADgBIACgBIACgCIAJAAIADgDIBrAAIADAEIAJAAIADABIAEADIADADIACABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABgEIABgBIABAAIAPAAIAKALIAAAIIgEAFQgDADgFAAIAAACIgBACIgJAKIgDAAIgCABQgFACgCAEIgFAHIgBADIgDAEQgEAAgBACIgEAFIgDADIgCADIgGAHIgEAEIgDAAIgBABIAAABIgEAHIgEAIIgKALIAAAFIgDAEIAAADIgMAMIAAAEIgBACIgDAIIgEAGIgEAFIgFAGIgCAFIgEAFIgIAHIgJAJQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape_12.setTransform(200.5,94.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEFOIgDgCIgFgCIgFgCIgDAAIgDABIgEACQgCABgCACIgVAAIgCgCQgDgCgEABQgDABgDgBIgBABIgBACIgCAAIgMAAIgKAAIgCgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgSAAQgCADgEAAIgJAAIgBAAIgBgCIgBAAIgdAAIgEgEIgDgDIgDAAIgEgHQgBgEgCgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIACgDIAAgFQAEgGAGgDIAMgHIABAAIAGAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIADgEIACAAIACgBIAAg+IgDgDIAAgSIADgDIAAgVQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQABgDACgCIAAgVIgCgDIAAgSQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAEgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgBABIAAgCIAAgLIADgDIAAgJIACgDIADgDIABgDIAAgEIgMgKIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgDIgCgFIgBgEQABAAAAgBQgBAAAAgBQAAAAAAgBQgBAAgBgBIAAgeIgDgEIAAgUIADgDIAAgnIABgBIABgBIABgBIAAgUIAGgHIAAgjIgGgKIAAgjIADgDIAAgiQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgCgEIAAgPIgFgHQgBgDgDgDIgFgFIgGgGQgBAAAAABQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgDgDACQgDgDgCAAIgEAAIgEgFIgDgGIAAgLIgEgFQAAgDABgCIADgFIABgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgBQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABABQADgBADgCQADgCAFACIAEgDIASAAIABABIACACIARAAIACgCIACgBIABAAIAIgBIAJAAIACAEQAFAAABgDIASAAIACgCIABgCIBfAAIADgCIAAgBIASAAIADADQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQADACADAEIADAJIAAALIgBABIgBABIgBABIAAACIAAAPIADADIAAAPIgDADIAAAjIgBAFIgDAFIAAASIADACIAAAGIABAEIAAAOIgBADIABAFIADAEIAAAVQgDADAAAGIgBAEIABADIAAAFIADADIAAAQQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIAAAEIAAADQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIAAAIIADAEIAAAMQgDACAAACIgBAFIAAAEIAAAEIABAFIADAFIAAAOIgDAFIgBADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAEQABACAAADQAAADACADIABABIAAADIAAALQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIAEALIAAAOIgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAJIgBAEIABACIAAAOQADABAAADIAAAGIgDAEIAAAUIADADIAAASIgDADIAAAGIgBADQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAAIAAAHIABAAIACADIAAAYQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIADADIAAAJIADADIAAAgIACADIAAAbQgCAIgFAGQgDAHgIAFIgNAAIgPAOIgJAAIgEAEQgCADgEAAIgCACIgGABIgDgBgAg/E8IACgDIgCgCIACACIgCADgAh8EhIgCACIAAAEIABABIAGAAQgCgDABgCQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDACgAi/ENIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAgBIAAgBIgDAAIgCAAgAhrDpIADABQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIgCgCIgCgDIgDAAQgEAEAEACgAiPDpIAAAAIABgBIACgCIgCgDIgBAAQgFAEAFACgAiBDSQgBACACADIACAAQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIADgCIgFgFIgEAEgAh7CkIgDACIAAADIABACIACgDQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgBAAgAiGB8QACACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAHAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIABAAIABgBIgEgFIgBgDIgFAAIgFABgAiXBpIgCABIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAKAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIACgCIgEgGIgHAAIgCACgAimBbQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAIABgDIgCgCIgDAAQgBgBAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAGIADgBIACABgAhUBVIAAABIAAAAIACACIADgCIAAgBIgDgBQAAAAgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAgAhDA9QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIACAGIAFgBIAEAAQgCgDABgDQABgDgCgDIgHAAIgBAEgAg9AlIAEADQADABACADIAAAEIACADIAHAAIADgBIADgCIAAgHQgDgEgEgCQgGgCgCgFIAAgIIAPgOIAAgBIAAgCIgCgDIgEgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgBgEQAAgDgDgDIAAgIQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAFAAIAIgHIAAgDIAAgEQgHgCgDgEQgDgFgCgFIAAgCIAPgOIAAgJIgDgCQgCAAgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgFAAIAAgQIADgDIABgBIAEAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAAgFIAAgEQgIgCgEACIAAAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBABIgPAAIgFgFIAAgGIgBgBIgDAAIgDgDIgNAAIgIgPIgEAAIgFADIgCABIAAAGIAGAFIANAAIAAAIIgIAHIgHAAIgFgEIgBAAIAAgHQgDgCgDABQgDAAgCgDQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAgDACIAAAOIABAAIABABIAEABIADAAQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAABIACABIAAANIgCABIgDACIgKAAIAAgKIgEgIIgDABIgEAAQgCADAAACIABAGQACACADABIAHADIABADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIAAAGIAIAIIAGAAIAFgFIAAgIIADgEIAAgCIAGABQAAgBABAAQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAIIAHAHIAFAAIAIAIIAAAJQgCADgEABQgDABgDAEIAAAHIAIAEQAFADADAFIAAAKIACAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAJAAIgBABQACACADAAIAAAGIgCACIgCABIgHAAIgCgDIgEgEIgCgCIgFAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBADIgBAFIAMAGIAAAEIAAAFIAAAFIAAAEQgDAFgEABIgIADIAAAFIAGAFIAFAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgEAGgEgAhthBIAAAPIAHgBQADABADgCIAAgMIgBAAIgBgCIgFAAIgBgBIgFACgAhBiDQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABIAEgBIAAgJIgCgEIgHAAIAAABIgDAEIAAAEQAAABABAAQAAAAABAAQAAABAAAAQABAAAAAAIACAAgAhYifIADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAIAEgFIgGgBIgEACgAjAi3QAAAAAAAAQAAABAAAAQAAABABAAQAAABABABIACAAIABgBIAAgFQgEABgBABgAifjBIACgCIAAgDIAAgDIgBgBIgCgEIgEAAIgGAEIgBAAIAAAJIAIAAIADgBIABABgAiDjIIAEABQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgDIgDAAQgDAEADACgAiOjTQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIAAgFIAAgGIgFgEIgFAFQgCACgBAFIAEACIADACIABgBIABABgAhYjyQACACAHgCQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgACBFJQgDgCgCABIgGAAIgCABIgBACIgVAAQgGgEgGgCIgHgCIgGgFIgEgDIgDgDIAAgGIgFgEIAAgBIgBgBIAAgDQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIACgCIABgDIAHAAIAAgCIACgBQAEAAADgCQAEgBADgCIAGgEQAEgBAEAAIAKgFIAHgGQAFgDAFgBIADgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIADgDIACgCIAEgEIAFgDQACgCACAAIAGgBIAAgEIAIgIQADgEAGgCIAAgDIAAgDQAEgFADgGQACgFAGgEIAAgGIADgDIAAgJQAEgFACgEIAEgKIAAgCIABgCIAAgBIABgEIAAgDIAGgGIAGgEIAGgFIAEgEIAGAAIAEAEIAGACIAFAFIAEAFIAAAMIgCAEIAAAFIgDADIAAAqIACADIAAAEQAAAAABABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAEQADAEgDAEIgCAEIAAADIgCAEQAAAAAAAAQgBABABAAQAAABAAAAQAAABAAABIACACIAAAMIADADIAAAGIgDAEIAAAjQgDADgBACQgCACgEAAQgDADgDAAQgCAAgDADIgMAAIgFAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgBIgEAAIgDADIgyAAIgEADIgGAAIgGABgAC2ENIgBACIAAABIAAABIAHgDIgDgBIgBgBIgCABgACDB/IgFgEQgFgCgCgDIgGgFIAAgFIgDgGIgDgFQgBgCAAgDIgEgGQgCgCABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgDgDgCQAAgDgDgDIgFgGIgGgHIgCgEIgCgCQgHgCgEgFIgIgIIgDgGIgDgEIgDgFIgCgFIgBgBIgBgBIAAgLQADgDACgEQACgEAFgDIAAgGIAHgIQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAGgGIADgIIAEgFIAGgFQADgDABgFIAAgIIAHgMIAFgNIACgEIACgFIAHgHIAIgIQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIALAAIAMALIADAHQABAEADADIAAAVIgDADIAAAJIADADIAAABIAAARIgCADIAAASIABABIAAABIABABIAAAVIgBABIgCABIAAANIADADIAAAVIgDADIAAAFQAEAEAAAEQgBAEABAEQADACgBAEIAAAHQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAABIAAAEIAAAdIgIAJQAAAFgDACQgDABgBADIgHAAIgCACIgIgEgABxAAIAAADQgBACADACIAEAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAAgHQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBgBIgDABgABigOIADADIACABIACgCIABgCQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBgCgAhEgbIgDgDIgCgDQABgDACgBIADgEIACgBIABAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIACACIAAAHIgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABgADch9QAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgEgDIgEgBIgGgHIgEgDIgEgDQADgEgCgEIgCgJQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAIgDgFIgCgFQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBgBAAIAAgDIgDgEQgEgDgCgEIgFgKQAAgEgCgCQgCgDAAgEIgUgUIgFgDIgEgDIgIgGIgEgDIgEgBIgTgKIgVABIgCgDIgGAAIgHgGIgCgBIgEgDIgGgGQABgFgDgDQgCgDABgFIABgBIACgBIAAgJIADgDIAAgJIAHgIIARAAIABAAIABgCIACAAIABgBIAWAAIACACIABABIACAAIAQAAIADgDIAVAAIABABQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABIAIAAIABgBIACAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAABQADAAACgDIAIAAQAEgBAEAEIAJAAIAAgBIABgBQADgBADAAQACABADAAIADgDIAFAAIAEADQADAAACACIAEAEIAIAIIACAEQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAAAPQABAAgBABIgCABIAAAJIgDADIADADIAAAYIgDADIAAAMQABADAEAGIAAARIAAACIgCACIAAAMIACACIAAACIAAAXIAAABIgCACIAAAaIgFAFIgFAFIgFADIgFAEQgDAAgBgDg");
	this.shape_13.setTransform(140.6,93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhmDeQgegvACgvQACguARgjIBMAKQgYApARAgQAIAPAegBQAfAAAIgGQAQgGABgNQAIgygzgTQiKg+gChQQgBhgAZgQQAsgiBQgGQBUAAAQBAQAIAogHBNIhHACQgBgXgCgQQgFgngigEQgrAAgIAlQgIAcBIAjQCpA+hRC4QgKAYggAJQgfAJgyAAQhHgDgOgUg");
	this.shape_14.setTransform(1075.8,560.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjBIIAACsIhXgHIgQnkQECgYAEBXQADB8gUA3QgKAognAIIgGABIBXCaIg4A3gAgiicIAACEQBJgGADhEQAFgngTgIQgTgLgoAAIgDAAg");
	this.shape_15.setTransform(1047.6,560.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhQDjQgrgKgJg/QgPh1AXkWIBfAHQgWD8AIBPQAFAkASAIQATAHAOgEQAZgGAGgfQAOhagcjgIBdgMQAWDSgICdQgDBGhQAUQgQAEgUAAQgnAAg7gPg");
	this.shape_16.setTransform(1017.4,560.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9CdIh/AAIgWBMIhZgRICdnRIA7ALICLHSIhgAWgAgmBDIBNgEIgiiIg");
	this.shape_17.setTransform(984.6,560.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhmDeQgegvACgvQACguARgjIBMAKQgYApARAgQAIAPAegBQAfAAAIgGQAQgGABgNQAIgygzgTQiKg+gChQQgBhgAZgQQAsgiBQgGQBUAAAQBAQAIAogHBNIhHACQgBgXgCgQQgFgngigEQgrAAgIAlQgIAcBIAjQCpA+hRC4QgKAYggAJQgfAJgyAAQhHgDgOgUg");
	this.shape_18.setTransform(952.6,560.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_19.setTransform(923.6,559.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_20.setTransform(891.1,559.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgthgIBcgMIAAFcIhLAXgAgliLIgJh7IBcAFIgHB6g");
	this.shape_21.setTransform(869.1,559);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB3QgJDXgSA4QgWBEjHASgAgdiCIAAEFIApgOQAZgFAHi5QAFgngTgJQgPgKgbAAIgRABg");
	this.shape_22.setTransform(848.7,559.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBYIiXAAIAABfIBvAEIAABUIhvAIIAAA0ICYAIIAGBWIj9AKg");
	this.shape_23.setTransform(806,560.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAmBLIhLAIIAACTIhSgJIgNnPIBfgJIAADnIBLAFIAAjYIBfAGIgNHXIhSAGg");
	this.shape_24.setTransform(777.1,559.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBhfIEfgQIgDBvIhYAAIgGFoIhYALg");
	this.shape_25.setTransform(746.8,559.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgMGOICUAAIAABgIjpAPg");
	this.shape_26.setTransform(703.8,558.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah6jzIBsgLIgMGOICVAAIgBBgIjpAPg");
	this.shape_27.setTransform(676.8,558.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA+CdIiAAAIgWBMIhZgRICdnRIA7ALICLHSIhgAWgAgmBDIBNgEIgiiIg");
	this.shape_28.setTransform(645.1,560.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB3QgJDXgSA4QgWBEjHASgAgdiCIAAEFIApgOQAYgFAIi5QAEgngRgJQgQgKgbAAIgRABg");
	this.shape_29.setTransform(598.8,559.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_30.setTransform(567.6,559.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgthgIBcgMIAAFcIhMAXgAgliLIgKh7IBdAFIgHB6g");
	this.shape_31.setTransform(545.6,559);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiEjyIEJAAIgKBiIiaAKIAABPIBzAAIgHBZIhsARIAAC8IhZAEg");
	this.shape_32.setTransform(525.1,559.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB3QgJDXgSA4QgVBEjIASgAgdiCIgBEFIAqgOQAZgFAHi5QAFgngTgJQgPgKgbAAIgRABg");
	this.shape_33.setTransform(482.8,559.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_34.setTransform(451.6,559.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA9CdIh/AAIgWBMIhZgRICdnRIA7ALICLHSIhgAWgAgmBDIBNgEIgiiIg");
	this.shape_35.setTransform(417.2,560.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB3QgJDXgSA4QgWBEjHASgAgdiCIAAEFIApgOQAZgFAHi5QAEgngRgJQgQgKgbAAIgRABg");
	this.shape_36.setTransform(370.9,559.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_37.setTransform(339.7,559.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhQDjQgrgKgJg/QgPh1AXkWIBfAHQgWD8AIBPQAFAkASAIQATAHAOgEQAZgGAGgfQAOhagcjgIBdgMQAWDSgICdQgDBGhQAUQgQAEgUAAQgnAAg7gPg");
	this.shape_38.setTransform(308.6,560.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_39.setTransform(278.5,559.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgjBIIAACsIhXgHIgQnkQECgYAEBXQADB8gUA3QgKAognAIIgGABIBXCaIg4A3gAgiicIAACEQBJgGADhEQAFgngTgIQgTgLgoAAIgDAAg");
	this.shape_40.setTransform(248.1,560.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA9CdIh/AAIgWBMIhZgRICdnRIA7ALICLHSIhgAWgAgmBDIBNgEIgiiIg");
	this.shape_41.setTransform(214.6,560.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ah5DuIgSnhIBmgDIAACtIBhiWIBMAYIhvDIIBzDUIhXAWIhaiTIAAABIAACeg");
	this.shape_42.setTransform(167.3,560.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgMGOICVAAIgBBgIjpAPg");
	this.shape_43.setTransform(138.5,558.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA9CdIh/AAIgWBMIhZgRICenRIA6ALICLHSIhhAWgAgmBDIBNgEIghiIg");
	this.shape_44.setTransform(106.8,560.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AiJD2IhGnUIBpgOIAbEcIBLkQIBLEbIAck4IBpARIhJHPIhiALIgliRIg2Chg");
	this.shape_45.setTransform(67.3,559.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgeAzQgEgEgHgYQgHgeAAgRQgBgTAJgEQARgIAhgBQAeAAAGAPQADAJAAAQQAAAkgRAbQgFAGgJACIgVACQgUAAgHgGg");
	this.shape_46.setTransform(976.8,495.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ah+jvIB4ABQCFACAAB4QgJDWgSA4QgWBFjHARgAgdiDIAAEGIApgOQAYgEAIi5QAEgogRgKQgQgJgbAAIgRAAg");
	this.shape_47.setTransform(956.6,476.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgMGOICVAAIgBBgIjpAPg");
	this.shape_48.setTransform(928.6,475.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgjBIIAACsIhXgHIgQnkQECgYAEBXQADB8gUA3QgKAognAIIgGABIBXCaIg4A3gAgiicIAACEQBJgGADhEQAFgngTgIQgTgLgoAAIgDAAg");
	this.shape_49.setTransform(900.5,476.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_50.setTransform(869.8,476.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiJD2IhGnUIBpgOIAbEcIBLkQIBLEbIAck4IBpARIhJHPIhiALIgliRIg2Chg");
	this.shape_51.setTransform(832.5,476.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBXIiXAAIAABgIBvADIAABWIhvAHIAAA0ICYAIIAGBWIj9AKg");
	this.shape_52.setTransform(782.8,476.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgiD0QhCgSgRhQQgfi0AQiRQAGgvApgJQBdgXA0AMQBLAWADBHQABAhgBAnIhUAHQgBgSgCgSQgGgjgXgCQghgIgSAJQgRAIgEAlQgIBTATCJQAKAnAwgJQAegFAAglIACg4Ig9AEIADhZICOgBIgGC7QgGBchSAGIgdABQgdAAgRgHg");
	this.shape_53.setTransform(754,476.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AA+D+IhykLIgEDtIhPAFIgSnRIBZgRIB0ENIgGjxIBsgGIgQHlg");
	this.shape_54.setTransform(722,476.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AA9CdIh/AAIgWBNIhZgSICdnQIA7AKICLHSIhgAVgAgmBDIBNgDIgiiJg");
	this.shape_55.setTransform(687.7,477.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgjBIIAACsIhXgHIgQnkQECgYAEBXQADB8gUA3QgKAognAIIgGABIBXCaIg4A3gAgiicIAACEQBJgGADhEQAFgngTgIQgTgLgoAAIgDAAg");
	this.shape_56.setTransform(655,476.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBheIEfgQIgDBuIhYAAIgGFoIhYAMg");
	this.shape_57.setTransform(624.1,476.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhmDdQgeguACguQACgwARghIBMAJQgYApARAgQAIAOAeAAQAfAAAIgFQAQgHABgNQAIgygzgTQiKg+gChQQgBhgAZgQQAsgiBQgHQBUAAAQBBQAIAogHBMIhHADQgBgXgCgRQgFglgigGQgrABgIAlQgIAdBIAiQCpA+hRC4QgKAYggAJQgfAKgyAAQhHgEgOgVg");
	this.shape_58.setTransform(594.6,476.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhmDdQgeguACguQACgwARghIBMAJQgYApARAgQAIAOAeAAQAfAAAIgFQAQgHABgNQAIgygzgTQiKg+gChQQgBhgAZgQQAsgiBQgHQBUAAAQBBQAIAogHBMIhHADQgBgXgCgRQgFglgigGQgrABgIAlQgIAdBIAiQCpA+hRC4QgKAYggAJQgfAKgyAAQhHgEgOgVg");
	this.shape_59.setTransform(553.2,476.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgthhIBdgKIAAFcIhNAVgAgliLIgKh6IBdADIgHB7g");
	this.shape_60.setTransform(533.8,475.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAmBLIhLAIIAACTIhSgJIgNnPIBfgJIAADnIBLAFIAAjYIBfAGIgNHXIhSAGg");
	this.shape_61.setTransform(512.5,476.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBheIEfgQIgDBuIhYAAIgGFoIhYAMg");
	this.shape_62.setTransform(482.2,476.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_63.setTransform(437.2,476.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AguiCIhgAAIgBheIEfgQIgDBuIhYAAIgGFoIhYAMg");
	this.shape_64.setTransform(405.7,476.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBXIiXAAIAABgIBvADIAABWIhvAHIAAA0ICYAIIAGBWIj9AKg");
	this.shape_65.setTransform(361.9,476.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AicD2IgQnHIBOgZIBeD2IBgkLIBNAKIgUHYIhMALIAAjrIg4CmIgrABIg1iOIAADkg");
	this.shape_66.setTransform(329.7,475.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ah7DSQgbgRABhTQAAhMAYiIQAThqAOgRQATgZA8ABQAwAEATAFQAdALANAWQA2B2AACnQAABEgJAoQgSBBhdAAQhngIgyghgAgfiFQgGAKgMBNQgVCbAQAQQAXAYAvgFQAmgFAGggQAEgYAAgoQAAhhgWhFQgFgNgMgGQgHgDgSgDQgYAAgHAPg");
	this.shape_67.setTransform(295.7,476.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgiDuQhCgPgQhNQgcisAOhuQAKhFBAgWQA7gWAzAKQBEAPACBEQABAggCAmIhRAJIgDghQgEgagXgCQgRgDgRAKQgSAIgFAkQgIBQASB8QAJAlAlgKQAZgGArgyIA5BFQg2BMgyAIQgSACgOAAQgUAAgOgFg");
	this.shape_68.setTransform(265.7,476.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ah5jzIBrgLIgMGOICVAAIgBBgIjpAPg");
	this.shape_69.setTransform(237.5,475.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhxjhIDnAQIACBXIiXAAIAABgIBvADIAABWIhvAHIAAA0ICYAIIAGBWIj9AKg");
	this.shape_70.setTransform(209.7,476.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AiJD2IhGnUIBpgOIAbEcIBLkQIBLEbIAck4IBpARIhJHPIhiALIgliRIg2Chg");
	this.shape_71.setTransform(174.6,476.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.negro = new lib.Symbol44();
	this.negro.setTransform(-69.5,-48.7,0.891,0.972,0,-90,90);
	this.negro.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.negro).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-64.7,1334.3,782.1);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol59();
	this.instance.setTransform(131.6,-64.2,3.208,1.362,0,0,0,0,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol61();
	this.instance_1.setTransform(0,-107.5,1,1,0,0,0,0,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol58();
	this.instance_2.setTransform(132.5,-46.9,2.361,1.623);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-215,430.7,215);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.setTransform(143.5,108.2,1,1,0,0,0,143.5,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.9,131.1);


(lib.mapita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mapa = new lib.mapa();
	this.mapa.setTransform(1015.5,481.6);

	this.timeline.addTween(cjs.Tween.get(this.mapa).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1015,481.1,97,144);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.setTransform(0.1,-65.6,1,1,0,0,0,96,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({x:29,y:-63.3},5,cjs.Ease.get(0.22)).wait(25).to({x:42,y:-48.1},5).wait(30).to({x:29,y:-65.6},6).wait(24).to({x:0.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-131.1,191.9,131.1);


(lib.objetos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(2087.8,2952.9,1,1,0,0,180);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(1899.7,3101.6);

	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(3005.2,3108.4);

	this.instance_3 = new lib.tree2();
	this.instance_3.setTransform(3148.1,2987.3);

	this.instance_4 = new lib.Symbol20();
	this.instance_4.setTransform(883.8,3698.2);

	this.instance_5 = new lib.tree2();
	this.instance_5.setTransform(1794,4063.6,1,1,0,0,180);

	this.instance_6 = new lib.Symbol20();
	this.instance_6.setTransform(1622.4,3975);

	this.instance_7 = new lib.Symbol20();
	this.instance_7.setTransform(1767.4,3756.7);

	this.instance_8 = new lib.Symbol20();
	this.instance_8.setTransform(2053.5,3896.5,1,1,0,0,180);

	this.instance_9 = new lib.Symbol17();
	this.instance_9.setTransform(1975.3,3774.1);

	this.instance_10 = new lib.Symbol20();
	this.instance_10.setTransform(2087.8,3579.5);

	this.instance_11 = new lib.tree2();
	this.instance_11.setTransform(1474.6,3879.4);

	this.instance_12 = new lib.arbol3_1();
	this.instance_12.setTransform(1242.1,3757.4,1,1,0,0,180);

	this.instance_13 = new lib.Symbol12();
	this.instance_13.setTransform(1075.3,2352.1);

	this.instance_14 = new lib.Symbol12();
	this.instance_14.setTransform(727.4,3448.5);

	this.futa = new lib.Symbol62();
	this.futa.setTransform(1361.7,3664.8,1,1,0,0,0,-127.1,-48.9);

	this.instance_15 = new lib.Symbol20();
	this.instance_15.setTransform(2007.6,2756.6);

	this.instance_16 = new lib.Symbol6();
	this.instance_16.setTransform(1330.7,2564.6,1,1,0,0,180);

	this.instance_17 = new lib.Symbol13();
	this.instance_17.setTransform(1263,2501.2);

	this.instance_18 = new lib.tree2();
	this.instance_18.setTransform(646.9,2885.5);

	this.instance_19 = new lib.Symbol52();
	this.instance_19.setTransform(3.7,2992.2,1,1,0,0,180,28.7,-59.6);

	this.instance_20 = new lib.arbol3_1();
	this.instance_20.setTransform(236,2804);

	this.instance_21 = new lib.arbol3_1();
	this.instance_21.setTransform(808.5,2667.5);

	this.instance_22 = new lib.Symbol13();
	this.instance_22.setTransform(950.3,2419.1);

	this.instance_23 = new lib.Symbol12();
	this.instance_23.setTransform(664.3,2470.6);

	this.instance_24 = new lib.Symbol13();
	this.instance_24.setTransform(718.7,2414.6);

	this.instance_25 = new lib.Symbol12();
	this.instance_25.setTransform(752.5,2361.6);

	this.instance_26 = new lib.arbol3_1();
	this.instance_26.setTransform(665.6,2366.2);

	this.instance_27 = new lib.Symbol52();
	this.instance_27.setTransform(383,2713.9,1,1,0,0,0,28.7,-59.6);

	this.instance_28 = new lib.tree2();
	this.instance_28.setTransform(436.3,2310);

	this.instance_29 = new lib.tree2();
	this.instance_29.setTransform(1616,3108.5);

	this.instance_30 = new lib.arbol3_1();
	this.instance_30.setTransform(1701.9,2829.3);

	this.instance_31 = new lib.arbol3_1();
	this.instance_31.setTransform(1645.5,2702.9);

	this.instance_32 = new lib.arbol1_1();
	this.instance_32.setTransform(1517.7,2638);

	this.instance_33 = new lib.tree2();
	this.instance_33.setTransform(1566,2486.5);

	this.instance_34 = new lib.Symbol6();
	this.instance_34.setTransform(1366.5,2503.5);

	this.instance_35 = new lib.Symbol12();
	this.instance_35.setTransform(1329.2,2433.5);

	this.giganoto = new lib.Symbol68();
	this.giganoto.setTransform(1381.7,2442.6,1,1,0,0,180,-107.5,-15);

	this.instance_36 = new lib.Symbol13();
	this.instance_36.setTransform(1429.7,2343.1);

	this.instance_37 = new lib.Symbol12();
	this.instance_37.setTransform(1310.3,2375.1);

	this.instance_38 = new lib.Symbol12();
	this.instance_38.setTransform(1204,2268.1,1,1,0,0,180);

	this.instance_39 = new lib.Symbol52();
	this.instance_39.setTransform(898.4,2312.3,1,1,0,0,0,38.7,-84);

	this.instance_40 = new lib.arbol3_1();
	this.instance_40.setTransform(2301.9,2771.2);

	this.mosa = new lib.Symbol60();
	this.mosa.setTransform(3042.4,4806.1,1,1,0,0,0,0,-107.5);

	this.instance_41 = new lib.Symbol12();
	this.instance_41.setTransform(2197.7,3946.2);

	this.instance_42 = new lib.arbol4_1();
	this.instance_42.setTransform(2253.5,3927.9);

	this.instance_43 = new lib.arbol1_1();
	this.instance_43.setTransform(97.6,2500.8);

	this.instance_44 = new lib.tree2();
	this.instance_44.setTransform(53.9,1440.3);

	this.instance_45 = new lib.arbol1_1();
	this.instance_45.setTransform(59.8,1142.9);

	this.instance_46 = new lib.tree2();
	this.instance_46.setTransform(2248,1484.3);

	this.instance_47 = new lib.tree2();
	this.instance_47.setTransform(2260.1,1147.9);

	this.buitre = new lib.Symbol71();
	this.buitre.setTransform(2171.1,1422,1,1,0,0,180);

	this.eoraptor = new lib.Symbol65();
	this.eoraptor.setTransform(2351,1105.1,1,1,0,0,0,1.9,-9.5);

	this.plesio = new lib.Symbol54();
	this.plesio.setTransform(2535.1,4968.8,1,1,0,0,0,-30.4,-31.4);

	this.instance_48 = new lib.Symbol8();
	this.instance_48.setTransform(519.5,4875.2,1,1,0,0,180);

	this.instance_49 = new lib.arbol1_1();
	this.instance_49.setTransform(999.3,5162.7);

	this.instance_50 = new lib.arbol3_1();
	this.instance_50.setTransform(63.4,4990.6,1,1,0,0,180);

	this.instance_51 = new lib.arbol1_1();
	this.instance_51.setTransform(458.1,4775.5);

	this.instance_52 = new lib.arbol3_1();
	this.instance_52.setTransform(1251.3,4428.2);

	this.instance_53 = new lib.arbol1_1();
	this.instance_53.setTransform(83.8,4758.1);

	this.megaraptor = new lib.Symbol25();
	this.megaraptor.setTransform(488.3,4695.7,1,1,0,0,0,6.4,-10.8);

	this.instance_54 = new lib.Symbol12();
	this.instance_54.setTransform(47.4,4530.8);

	this.instance_55 = new lib.Symbol13();
	this.instance_55.setTransform(1093.2,4426.2);

	this.instance_56 = new lib.Symbol12();
	this.instance_56.setTransform(748.3,4599.4);

	this.instance_57 = new lib.Symbol13();
	this.instance_57.setTransform(342.7,4619.5);

	this.instance_58 = new lib.arbol1_1();
	this.instance_58.setTransform(912.5,4700.3);

	this.instance_59 = new lib.Symbol52();
	this.instance_59.setTransform(270.9,4614.6,1,1,0,0,0,17.5,-61.1);

	this.instance_60 = new lib.Symbol52();
	this.instance_60.setTransform(685,4591.6,1,1,0,0,0,28.7,-59.6);

	this.instance_61 = new lib.Symbol52();
	this.instance_61.setTransform(1045.2,4420.7,1,1,0,0,180,-9.5,-62.8);

	this.instance_62 = new lib.arbol3_1();
	this.instance_62.setTransform(1360.9,4255.8);

	this.instance_63 = new lib.arbol3_1();
	this.instance_63.setTransform(874.4,4202.2);

	this.instance_64 = new lib.arbol3_1();
	this.instance_64.setTransform(706.2,4304.9);

	this.instance_65 = new lib.arbol3_1();
	this.instance_65.setTransform(420,4349.5);

	this.instance_66 = new lib.arbol3_1();
	this.instance_66.setTransform(218.2,4304.9);

	this.instance_67 = new lib.Symbol8();
	this.instance_67.setTransform(1591.3,5044.4,1,1,0,0,180);

	this.instance_68 = new lib.Symbol6();
	this.instance_68.setTransform(1729.2,5032.6);

	this.instance_69 = new lib.Symbol8();
	this.instance_69.setTransform(1438.7,4994.2,1,1,0,0,180);

	this.instance_70 = new lib.Symbol8();
	this.instance_70.setTransform(1584,4940.5,1,1,0,0,180);

	this.instance_71 = new lib.Symbol3();
	this.instance_71.setTransform(1373.5,4919.4,1,1,0,0,180);

	this.instance_72 = new lib.Symbol3();
	this.instance_72.setTransform(1496.2,4909.9);

	this.instance_73 = new lib.Symbol3();
	this.instance_73.setTransform(1775.7,4971.5);

	this.instance_74 = new lib.Symbol6();
	this.instance_74.setTransform(1428.1,4808.6,1,1,0,0,180);

	this.instance_75 = new lib.Symbol6();
	this.instance_75.setTransform(1686.7,4818.8);

	this.instance_76 = new lib.Symbol6();
	this.instance_76.setTransform(1569.5,4784.1);

	this.instance_77 = new lib.Symbol7();
	this.instance_77.setTransform(1681.2,4738.1);

	this.muss = new lib.muss_1();
	this.muss.setTransform(1606.7,4736.8);

	this.instance_78 = new lib.Symbol7();
	this.instance_78.setTransform(1870.2,4538.1);

	this.instance_79 = new lib.Symbol8();
	this.instance_79.setTransform(1260.5,4670.8,1,1,0,0,180);

	this.instance_80 = new lib.Symbol3();
	this.instance_80.setTransform(1391.3,4642.6,1,1,0,0,180);

	this.instance_81 = new lib.Symbol6();
	this.instance_81.setTransform(2519.4,2885.6);

	this.instance_82 = new lib.Symbol17();
	this.instance_82.setTransform(2857.5,4140.8);

	this.instance_83 = new lib.Symbol20();
	this.instance_83.setTransform(2627,4042.6);

	this.instance_84 = new lib.Symbol17();
	this.instance_84.setTransform(3167.4,3963.3);

	this.instance_85 = new lib.Symbol8();
	this.instance_85.setTransform(3271.2,3837);

	this.instance_86 = new lib.Symbol20();
	this.instance_86.setTransform(2947.3,4029.2);

	this.instance_87 = new lib.Symbol17();
	this.instance_87.setTransform(2769.2,3850.1);

	this.instance_88 = new lib.Symbol20();
	this.instance_88.setTransform(3340.3,3633.6);

	this.instance_89 = new lib.Symbol20();
	this.instance_89.setTransform(3231.5,3785.8);

	this.instance_90 = new lib.Symbol20();
	this.instance_90.setTransform(3087.1,3633.6);

	this.instance_91 = new lib.Symbol17();
	this.instance_91.setTransform(2798.2,3623.9);

	this.instance_92 = new lib.Symbol13();
	this.instance_92.setTransform(2544.9,3908.5);

	this.instance_93 = new lib.arbol4_1();
	this.instance_93.setTransform(2513.4,3899.7);

	this.instance_94 = new lib.Symbol12();
	this.instance_94.setTransform(2584.2,3879.7);

	this.instance_95 = new lib.Symbol13();
	this.instance_95.setTransform(2586.9,3842.5);

	this.instance_96 = new lib.arbol4_1();
	this.instance_96.setTransform(2415,3842.2);

	this.instance_97 = new lib.Symbol13();
	this.instance_97.setTransform(2266.5,3912.6);

	this.unenlagia = new lib.unenlagia_1();
	this.unenlagia.setTransform(2472.1,3698.6);

	this.instance_98 = new lib.Symbol13();
	this.instance_98.setTransform(2405,3821.1);

	this.instance_99 = new lib.Symbol12();
	this.instance_99.setTransform(2468.9,3888.1);

	this.instance_100 = new lib.Symbol8();
	this.instance_100.setTransform(2311.2,3635.8);

	this.instance_101 = new lib.Symbol20();
	this.instance_101.setTransform(2563.6,3628.5);

	this.instance_102 = new lib.arbol3_1();
	this.instance_102.setTransform(2410.5,3616);

	this.instance_103 = new lib.Symbol20();
	this.instance_103.setTransform(2914.7,3731.3);

	this.instance_104 = new lib.Symbol17();
	this.instance_104.setTransform(2955.7,3623.9);

	this.instance_105 = new lib.Symbol6();
	this.instance_105.setTransform(2434.9,2833.1);

	this.instance_106 = new lib.Symbol13();
	this.instance_106.setTransform(2439.6,2788.7);

	this.instance_107 = new lib.Symbol13();
	this.instance_107.setTransform(2642.3,2839.5);

	this.instance_108 = new lib.Symbol12();
	this.instance_108.setTransform(2681.6,2810.7);

	this.instance_109 = new lib.arbol3_1();
	this.instance_109.setTransform(2577.5,2764.4);

	this.instance_110 = new lib.Symbol13();
	this.instance_110.setTransform(2684.2,2773.5);

	this.instance_111 = new lib.Symbol13();
	this.instance_111.setTransform(2502.4,2752.1);

	this.instance_112 = new lib.Symbol12();
	this.instance_112.setTransform(2405.5,2743.7);

	this.instance_113 = new lib.Symbol12();
	this.instance_113.setTransform(2364.4,2698.5);

	this.instance_114 = new lib.Symbol8();
	this.instance_114.setTransform(2603.2,2693.7);

	this.piat = new lib.Symbol29();
	this.piat.setTransform(2475.1,2622,1,1,0,0,0,36.1,-26.8);

	this.instance_115 = new lib.Symbol13();
	this.instance_115.setTransform(2250.1,2658.2);

	this.instance_116 = new lib.Symbol8();
	this.instance_116.setTransform(2336,2606.5);

	this.instance_117 = new lib.tree2();
	this.instance_117.setTransform(2409.8,2535.9);

	this.instance_118 = new lib.Symbol8();
	this.instance_118.setTransform(2548.1,2486.9,1,1,0,0,180);

	this.instance_119 = new lib.arbol3_1();
	this.instance_119.setTransform(2221.8,2506.3);

	this.instance_120 = new lib.arbol1_1();
	this.instance_120.setTransform(2065.2,2452.5);

	this.instance_121 = new lib.arbol3_1();
	this.instance_121.setTransform(2558.9,2419.2);

	this.instance_122 = new lib.arbol1_1();
	this.instance_122.setTransform(2415.6,2398);

	this.instance_123 = new lib.arbol3_1();
	this.instance_123.setTransform(2070.8,2320.8);

	this.instance_124 = new lib.arbol1_1();
	this.instance_124.setTransform(1897,1988.1);

	this.carno = new lib.Symbol4();
	this.carno.setTransform(2339.9,2284.6,1,1,0,0,0,-95.3,-68.5);

	this.instance_125 = new lib.arbol1_1();
	this.instance_125.setTransform(2426.7,2188.6);

	this.instance_126 = new lib.tree2();
	this.instance_126.setTransform(2283.9,2113.4);

	this.instance_127 = new lib.arbol1_1();
	this.instance_127.setTransform(2702.7,2138.2);

	this.instance_128 = new lib.arbol1_1();
	this.instance_128.setTransform(2272,1958.3);

	this.instance_129 = new lib.Symbol8();
	this.instance_129.setTransform(2869.1,805.2,1,1,0,0,180);

	this.instance_130 = new lib.tree2();
	this.instance_130.setTransform(2800.1,729.8);

	this.instance_131 = new lib.tree2();
	this.instance_131.setTransform(3168.2,694.7);

	this.gasparini = new lib.Symbol50();
	this.gasparini.setTransform(3080.3,484.7,1,1,0,0,0,33.6,-27.2);

	this.instance_132 = new lib.tree2();
	this.instance_132.setTransform(3330.6,613);

	this.instance_133 = new lib.arbol1_1();
	this.instance_133.setTransform(422.3,1585.7);

	this.rebbcuerpo = new lib.Symbol36();
	this.rebbcuerpo.setTransform(640.1,1572.1,1,1,0,0,0,-143.8,35);

	this.rebbcara = new lib.Symbol35();
	this.rebbcara.setTransform(806.8,1565.2,1,1,0,0,0,-143.5,167.8);

	this.rebbpatas = new lib.Symbol34();
	this.rebbpatas.setTransform(726.5,1648.5,1,1,0,0,0,-78.9,-28.7);

	this.rebbpata = new lib.Symbol32();
	this.rebbpata.setTransform(538.4,1517.2);

	this.instance_134 = new lib.arbol1_1();
	this.instance_134.setTransform(1470.3,1435.4);

	this.herrera = new lib.herrera_1();
	this.herrera.setTransform(1558.7,1413.4);

	this.instance_135 = new lib.Symbol52();
	this.instance_135.setTransform(141,2269.7,1,1,0,0,180,28.7,-59.6);

	this.instance_136 = new lib.arbol3_1();
	this.instance_136.setTransform(1547,3775.8);

	this.instance_137 = new lib.arbol1_1();
	this.instance_137.setTransform(1890.3,3589.4,1,1,0,0,180);

	this.sombraGiganoto = new lib.Symbol69();
	this.sombraGiganoto.setTransform(1433.2,2432.7,1,1,0,0,180,-66.7,-54.1);
	this.sombraGiganoto.alpha = 0.629;

	this.instance_138 = new lib.arbol1_1();
	this.instance_138.setTransform(1451.5,2219.7);

	this.instance_139 = new lib.Symbol52();
	this.instance_139.setTransform(1617.6,2076.5,1,1,0,0,0,28.7,-59.6);

	this.instance_140 = new lib.arbol3_1();
	this.instance_140.setTransform(1617.9,3533.9);

	this.instance_141 = new lib.tree2();
	this.instance_141.setTransform(2158.9,3392.2);

	this.instance_142 = new lib.arbol3_1();
	this.instance_142.setTransform(1166.4,3632.2);

	this.instance_143 = new lib.Symbol8();
	this.instance_143.setTransform(1013,3447.4,1,1,0,0,180);

	this.instance_144 = new lib.Symbol8();
	this.instance_144.setTransform(1234.8,1190,1,1,0,0,180);

	this.instance_145 = new lib.tree2();
	this.instance_145.setTransform(836.2,1440.3);

	this.instance_146 = new lib.Symbol39();
	this.instance_146.setTransform(787.7,1645.5,1,1,0,0,0,-6.6,-75.2);

	this.instance_147 = new lib.Symbol52();
	this.instance_147.setTransform(1192.4,2208.2,1,1,0,0,0,28.7,-59.6);

	this.instance_148 = new lib.Symbol38();
	this.instance_148.setTransform(1123.7,1663.2,1,1,0,0,0,0,-34);

	this.instance_149 = new lib.arbol1_1();
	this.instance_149.setTransform(764.1,1193.5);

	this.instance_150 = new lib.tree2();
	this.instance_150.setTransform(1228.1,1104.3);

	this.instance_151 = new lib.arbol1_1();
	this.instance_151.setTransform(1917.1,1312.4);

	this.instance_152 = new lib.tree2();
	this.instance_152.setTransform(1616,1228.4);

	this.piedra1 = new lib.Symbol8();
	this.piedra1.setTransform(1060.8,387.8);

	this.instance_153 = new lib.Symbol3();
	this.instance_153.setTransform(636.6,3430.8);

	this.instance_154 = new lib.Symbol3();
	this.instance_154.setTransform(873.9,3443.9);

	this.instance_155 = new lib.Symbol13();
	this.instance_155.setTransform(778,3399.9);

	this.instance_156 = new lib.Symbol8();
	this.instance_156.setTransform(1467.6,4577.8,1,1,0,0,180);

	this.instance_157 = new lib.Symbol3();
	this.instance_157.setTransform(1757.5,4497);

	this.instance_158 = new lib.Symbol8();
	this.instance_158.setTransform(1938.2,4480.8,1,1,0,0,180);

	this.instance_159 = new lib.Symbol7();
	this.instance_159.setTransform(1807,280.3);

	this.instance_160 = new lib.Symbol8();
	this.instance_160.setTransform(1068.4,3214.6);

	this.instance_161 = new lib.Symbol7();
	this.instance_161.setTransform(1723.7,824.7);

	this.instance_162 = new lib.Symbol8();
	this.instance_162.setTransform(1823.1,563.6);

	this.instance_163 = new lib.Symbol8();
	this.instance_163.setTransform(616.9,3727.5,1,1,0,0,180);

	this.instance_164 = new lib.Symbol8();
	this.instance_164.setTransform(715.5,3233.2);

	this.instance_165 = new lib.arbol3_1();
	this.instance_165.setTransform(332,831.4);

	this.instance_166 = new lib.arbol1_1();
	this.instance_166.setTransform(324,628.9);

	this.instance_167 = new lib.arbol1_1();
	this.instance_167.setTransform(390.1,145.3);

	this.instance_168 = new lib.arbol1_1();
	this.instance_168.setTransform(166.1,750.1);

	this.instance_169 = new lib.Symbol3();
	this.instance_169.setTransform(809.5,106.1,1,1,0,0,180);

	this.instance_170 = new lib.Symbol8();
	this.instance_170.setTransform(1370.2,150.2);

	this.instance_171 = new lib.Symbol7();
	this.instance_171.setTransform(1047,100.1);

	this.instance_172 = new lib.Symbol6();
	this.instance_172.setTransform(927.3,53.1);

	this.instance_173 = new lib.Symbol3();
	this.instance_173.setTransform(1080.5,79.2);

	this.instance_174 = new lib.Symbol3();
	this.instance_174.setTransform(577.6,89.9);

	this.instance_175 = new lib.Symbol7();
	this.instance_175.setTransform(711.2,64.1);

	this.instance_176 = new lib.Symbol7();
	this.instance_176.setTransform(423,79.2);

	this.instance_177 = new lib.arbol3_1();
	this.instance_177.setTransform(-40.3,600.9);

	this.instance_178 = new lib.arbol1_1();
	this.instance_178.setTransform(26.9,370.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.piedra1},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.sombraGiganoto},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.herrera},{t:this.instance_134},{t:this.rebbpata},{t:this.rebbpatas},{t:this.rebbcara},{t:this.rebbcuerpo},{t:this.instance_133},{t:this.instance_132},{t:this.gasparini},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.carno},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.piat},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.unenlagia},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.muss},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.megaraptor},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.plesio},{t:this.eoraptor},{t:this.buitre},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.mosa},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.giganoto},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.futa},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.6,-161.6,3779.7,5372.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// camianble
	this.caminable = new lib.caminable();
	this.caminable.setTransform(2020.6,1400.1,1,1,0,0,0,2020.6,1400.1);
	this.caminable.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.caminable).wait(1));

	// objetos
	this.objetos = new lib.objetos();

	this.timeline.addTween(cjs.Tween.get(this.objetos).wait(1));

	// agregados del piso
	this.instance = new lib.costa();
	this.instance.setTransform(2897.5,4640.7,1,1,0,0,0,0,-406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// piso
	this.piso = new lib.piso();

	this.timeline.addTween(cjs.Tween.get(this.piso).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.3,-161.6,3970.9,5510.6);


(lib.nivel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// textos dummy
	this.mensajeDino = new cjs.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ", "60px 'STENCILED PERSONAL USE'");
	this.mensajeDino.name = "mensajeDino";
	this.mensajeDino.textAlign = "center";
	this.mensajeDino.lineHeight = 75;
	this.mensajeDino.lineWidth = 1181;
	this.mensajeDino.setTransform(1858.9,-785.3);

	this.mensajeDino_1 = new cjs.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ", "60px 'Supersonic Rocketship'");
	this.mensajeDino_1.name = "mensajeDino_1";
	this.mensajeDino_1.textAlign = "center";
	this.mensajeDino_1.lineHeight = 104;
	this.mensajeDino_1.lineWidth = 1181;
	this.mensajeDino_1.setTransform(418.1,-780,0.436,0.452,0,-1.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mensajeDino_1},{t:this.mensajeDino}]}).wait(1));

	// escenario
	this.escenario = new lib.Symbol1();

	this.timeline.addTween(cjs.Tween.get(this.escenario).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.3,-785.3,3970.9,6134.3);


// stage content:
(lib.laberintoDinos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.mapita();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 16
	this.ganaste = new lib.ganaste();

	this.timeline.addTween(cjs.Tween.get(this.ganaste).wait(1));

	// ok
	this.instance_1 = new lib.popup();
	this.instance_1.setTransform(263.9,590.5,1,1,0,0,0,263.9,590.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.progreso = new lib.progreso();
	this.progreso.setTransform(533.6,30);

	this.volver = new lib.volver();
	this.volver.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.volver},{t:this.progreso}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115,219.9,2087.6,845.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;