// $(document).ready(function(){
//     $('#page').fadeIn(2000);
// });

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != null && cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != null && cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != null && cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhFsAqNMAAAhUZMCLZAAAMAAABUZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(-446.1,-270,892.2,540.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EhHfAaQMAAAg0fMCO/AAAMAAAA0fg");
	this.shape.setTransform(457.6,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,915.1,336), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
				image = new Image();
				image.src = "images/1_nora.jpg";
				image2 = new Image();
				image2.src = "images/2_paul.jpg";
				image3 = new Image();
				image3.src = "images/3_thijmen.jpg";
				image4 = new Image();
				image4.src = "images/4_carmen.jpg";
				image5 = new Image();
				image5.src = "images/5_rudi.jpg";
				image6 = new Image();
				image6.src = "images/6_niels.jpg";
				image7 = new Image();
				image7.src = "images/7_lukas.jpg";
				image8 = new Image();
				image8.src = "images/8_andre.jpg";
				image9 = new Image();
				image9.src = "images/9_eliza.jpg";
				image10 = new Image();
				image10.src = "images/10_michiel.jpg";
				image11 = new Image();
				image11.src = "images/11_daniel.jpg";
				image12 = new Image();
				image12.src = "images/12_saber.jpg";
				image13 = new Image();
				image13.src = "images/13_daan.jpg";
				image14 = new Image();
				image14.src = "images/14_ies.jpg";
				image15 = new Image();
				image15.src = "images/15_dora.jpg";
				image16 = new Image();
				image16.src = "images/16_rik.jpg";
				image17 = new Image();
				image17.src = "images/17_jan.jpg";
				image18 = new Image();
				image18.src = "images/18_jungeun.jpg";
				image19 = new Image();
				image19.src = "images/19_anna.jpg";
				image20 = new Image();
				image20.src = "images/20_zuzanna.jpg";
				image21 = new Image();
				image21.src = "images/21_andreas.jpg";
				image22 = new Image();
				image22.src = "images/22_kay.jpg";
				image23 = new Image();
				image23.src = "images/23_taiisia.jpg";
				image24 = new Image();
				image24.src = "images/24_rebecca.jpg";
				image25 = new Image();
				image25.src = "images/25_josephine.jpg";
				image26 = new Image();
				image26.src = "images/26_joop.jpg";
				image27 = new Image();
				image27.src = "images/27_marika.jpg";
				image28 = new Image();
				image28.src = "images/28_asya.jpg";
				image29 = new Image();
				image29.src = "images/29_lin.jpg";
				image30 = new Image();
				image30.src = "images/30_natalia.jpg";



				imageall = new Image();
				imageall.onload = handleComplete;
				imageall.src = "images/altogether.jpg";
				/*
				text = new createjs.Text("Loading...", "20px Arial", "#FFF");
				text.set({
					x: stage.canvas.width / stage.scaleX / 2,
					y: stage.canvas.height / stage.scaleY - 40
				});
				text.textAlign = "center";*/


				stage.enableMouseOver();

				function handleComplete() {

				/*	createjs.Touch.enable(stage);
					stage.enableMouseOver();

					stage.addEventListener("stagemousedown", handleMouseDown);
					stage.addEventListener("stagemouseup", handleMouseUp);
					stage.addEventListener("stagemousemove", handleMouseMove);*/

					/*drawingCanvas = new createjs.Shape();*/

				var s = new createjs.Shape();
				s.graphics.f("black").dc(0,0,50);
				stage.addChild(s);
				var offset = new createjs.Point();
				s.on("mousedown", function(e) {
					offset.setValues(s.x - e.stageX/2, s.y-e.stageY/2);
				})
				s.on("pressmove", function(e) {
					s.x = e.stageX/2+offset.x; s.y = e.stageY/2+offset.y;
				});
				s.cursor='pointer';

				var s2 = new createjs.Shape();
				s2.graphics.f("black").dc(0,0,50);
				stage.addChild(s2);
				var offset = new createjs.Point();
				s2.on("mousedown", function(e) {
					offset.setValues(s2.x - e.stageX/2, s2.y-e.stageY/2);
				})
				s2.on("pressmove", function(e) {
					s2.x = e.stageX/2+offset.x; s2.y = e.stageY/2+offset.y;
				});
				s2.cursor='pointer';

				var s3 = new createjs.Shape();
				s3.graphics.f("black").dc(0,0,50);
				stage.addChild(s3);
				var offset = new createjs.Point();
				s3.on("mousedown", function(e) {
					offset.setValues(s3.x - e.stageX/2, s3.y-e.stageY/2);
				})
				s3.on("pressmove", function(e) {
					s3.x = e.stageX/2+offset.x; s3.y = e.stageY/2+offset.y;
				});
				s3.cursor='pointer';

				var s4 = new createjs.Shape();
				s4.graphics.f("black").dc(0,0,50);
				stage.addChild(s4);
				var offset = new createjs.Point();
				s4.on("mousedown", function(e) {
					offset.setValues(s4.x - e.stageX/2, s4.y-e.stageY/2);
				})
				s4.on("pressmove", function(e) {
					s4.x = e.stageX/2+offset.x; s4.y = e.stageY/2+offset.y;
				});
				s4.cursor='pointer';

				var s5 = new createjs.Shape();
				s5.graphics.f("black").dc(0,0,50);
				stage.addChild(s5);
				var offset = new createjs.Point();
				s5.on("mousedown", function(e) {
					offset.setValues(s5.x - e.stageX/2, s5.y-e.stageY/2);
				})
				s5.on("pressmove", function(e) {
					s5.x = e.stageX/2+offset.x; s5.y = e.stageY/2+offset.y;
				});
				s5.cursor='pointer';

				var s6 = new createjs.Shape();
				s6.graphics.f("black").dc(0,0,50);
				stage.addChild(s6);
				var offset = new createjs.Point();
				s6.on("mousedown", function(e) {
					offset.setValues(s6.x - e.stageX/2, s6.y-e.stageY/2);
				})
				s6.on("pressmove", function(e) {
					s6.x = e.stageX/2+offset.x; s6.y = e.stageY/2+offset.y;
				});
				s6.cursor='pointer';

				var s7 = new createjs.Shape();
				s7.graphics.f("black").dc(0,0,50);
				stage.addChild(s7);
				var offset = new createjs.Point();
				s7.on("mousedown", function(e) {
				offset.setValues(s7.x - e.stageX/2, s7.y-e.stageY/2);
				})
				s7.on("pressmove", function(e) {
				s7.x = e.stageX/2+offset.x; s7.y = e.stageY/2+offset.y;
				});
				s7.cursor='pointer';

				var s8 = new createjs.Shape();
				s8.graphics.f("black").dc(0,0,50);
				stage.addChild(s8);
				var offset = new createjs.Point();
				s8.on("mousedown", function(e) {
				offset.setValues(s8.x - e.stageX/2, s8.y-e.stageY/2);
				})
				s8.on("pressmove", function(e) {
				s8.x = e.stageX/2+offset.x; s8.y = e.stageY/2+offset.y;
				});
				s8.cursor='pointer';

				var s9 = new createjs.Shape();
				s9.graphics.f("black").dc(0,0,50);
				stage.addChild(s9);
				var offset = new createjs.Point();
				s9.on("mousedown", function(e) {
					offset.setValues(s9.x - e.stageX/2, s9.y-e.stageY/2);
				})
				s9.on("pressmove", function(e) {
					s9.x = e.stageX/2+offset.x; s9.y = e.stageY/2+offset.y;
				});
				s9.cursor='pointer';

				var s10 = new createjs.Shape();
				s10.graphics.f("black").dc(0,0,50);
				stage.addChild(s10);
				var offset = new createjs.Point();
				s10.on("mousedown", function(e) {
					offset.setValues(s10.x - e.stageX/2, s10.y-e.stageY/2);
				})
				s10.on("pressmove", function(e) {
					s10.x = e.stageX/2+offset.x; s10.y = e.stageY/2+offset.y;
				});
				s10.cursor='pointer';

				var s11 = new createjs.Shape();
				s11.graphics.f("black").dc(0,0,50);
				stage.addChild(s11);
				var offset = new createjs.Point();
				s11.on("mousedown", function(e) {
					offset.setValues(s11.x - e.stageX/2, s11.y-e.stageY/2);
				})
				s11.on("pressmove", function(e) {
					s11.x = e.stageX/2+offset.x; s11.y = e.stageY/2+offset.y;
				});
				s11.cursor='pointer';

				var s12 = new createjs.Shape();
				s12.graphics.f("black").dc(0,0,50);

				stage.addChild(s12);
				var offset = new createjs.Point();
				s12.on("mousedown", function(e) {
					offset.setValues(s12.x - e.stageX/2, s12.y-e.stageY/2);
				})
				s12.on("pressmove", function(e) {
					s12.x = e.stageX/2+offset.x; s12.y = e.stageY/2+offset.y;
				});
				s12.cursor='pointer';

				var s13 = new createjs.Shape();
				s13.graphics.f("black").dc(0,0,50);
				stage.addChild(s13);
				var offset = new createjs.Point();
				s13.on("mousedown", function(e) {
					offset.setValues(s13.x - e.stageX/2, s13.y-e.stageY/2);
				})
				s13.on("pressmove", function(e) {
					s13.x = e.stageX/2+offset.x; s13.y = e.stageY/2+offset.y;
				});
				s13.cursor='pointer';

				var s14 = new createjs.Shape();
				s14.graphics.f("black").dc(0,0,50);
				stage.addChild(s14);
				var offset = new createjs.Point();
				s14.on("mousedown", function(e) {
					offset.setValues(s14.x - e.stageX/2, s14.y-e.stageY/2);
				})
				s14.on("pressmove", function(e) {
					s14.x = e.stageX/2+offset.x; s14.y = e.stageY/2+offset.y;
				});
				s14.cursor='pointer';

				var s15 = new createjs.Shape();
				s15.graphics.f("black").dc(0,0,50);
				stage.addChild(s15);
				var offset = new createjs.Point();
				s15.on("mousedown", function(e) {
					offset.setValues(s15.x - e.stageX/2, s15.y-e.stageY/2);
				})
				s15.on("pressmove", function(e) {
					s15.x = e.stageX/2+offset.x; s15.y = e.stageY/2+offset.y;
				});
				s15.cursor='pointer';

				var s16 = new createjs.Shape();
				s16.graphics.f("black").dc(0,0,50);
				stage.addChild(s16);
				var offset = new createjs.Point();
				s16.on("mousedown", function(e) {
					offset.setValues(s16.x - e.stageX/2, s16.y-e.stageY/2);
				})
				s16.on("pressmove", function(e) {
					s16.x = e.stageX/2+offset.x; s16.y = e.stageY/2+offset.y;
				});
				s16.cursor='pointer';

				var s17 = new createjs.Shape();
				s17.graphics.f("black").dc(0,0,50);
				stage.addChild(s17);
				var offset = new createjs.Point();
				s17.on("mousedown", function(e) {
					offset.setValues(s17.x - e.stageX/2, s17.y-e.stageY/2);
				})
				s17.on("pressmove", function(e) {
					s17.x = e.stageX/2+offset.x; s17.y = e.stageY/2+offset.y;
				});
				s17.cursor='pointer';

				var s18 = new createjs.Shape();
				s18.graphics.f("black").dc(0,0,50);

				stage.addChild(s18);
				var offset = new createjs.Point();
				s18.on("mousedown", function(e) {
					offset.setValues(s18.x - e.stageX/2, s18.y-e.stageY/2);
				})
				s18.on("pressmove", function(e) {
					s18.x = e.stageX/2+offset.x; s18.y = e.stageY/2+offset.y;
				});
				s18.cursor='pointer';

				var s19 = new createjs.Shape();
				s19.graphics.f("black").dc(0,0,50);
				stage.addChild(s19);
				var offset = new createjs.Point();
				s19.on("mousedown", function(e) {
					offset.setValues(s19.x - e.stageX/2, s19.y-e.stageY/2);
				})
				s19.on("pressmove", function(e) {
					s19.x = e.stageX/2+offset.x; s19.y = e.stageY/2+offset.y;
				});
				s19.cursor='pointer';

				var s20 = new createjs.Shape();
				s20.graphics.f("black").dc(0,0,50);
				stage.addChild(s20);
				var offset = new createjs.Point();
				s20.on("mousedown", function(e) {
					offset.setValues(s20.x - e.stageX/2, s20.y-e.stageY/2);
				})
				s20.on("pressmove", function(e) {
					s20.x = e.stageX/2+offset.x; s20.y = e.stageY/2+offset.y;
				});
				s20.cursor='pointer';

				var s21 = new createjs.Shape();
				s21.graphics.f("black").dc(0,0,50);
				stage.addChild(s21);
				var offset = new createjs.Point();
				s21.on("mousedown", function(e) {
					offset.setValues(s21.x - e.stageX/2, s21.y-e.stageY/2);
				})
				s21.on("pressmove", function(e) {
					s21.x = e.stageX/2+offset.x; s21.y = e.stageY/2+offset.y;
				});
				s21.cursor='pointer';

				var s22 = new createjs.Shape();
				s22.graphics.f("black").dc(0,0,50);
				stage.addChild(s22);
				var offset = new createjs.Point();
				s22.on("mousedown", function(e) {
					offset.setValues(s22.x - e.stageX/2, s22.y-e.stageY/2);
				})
				s22.on("pressmove", function(e) {
					s22.x = e.stageX/2+offset.x; s22.y = e.stageY/2+offset.y;
				});
				s22.cursor='pointer';

				var s23 = new createjs.Shape();
				s23.graphics.f("black").dc(0,0,50);
				stage.addChild(s23);
				var offset = new createjs.Point();
				s23.on("mousedown", function(e) {
					offset.setValues(s23.x - e.stageX/2, s23.y-e.stageY/2);
				})
				s23.on("pressmove", function(e) {
					s23.x = e.stageX/2+offset.x; s23.y = e.stageY/2+offset.y;
				});
				s23.cursor='pointer';

				var s24 = new createjs.Shape();
				s24.graphics.f("black").dc(0,0,50);

				stage.addChild(s24);
				var offset = new createjs.Point();
				s24.on("mousedown", function(e) {
					offset.setValues(s24.x - e.stageX/2, s24.y-e.stageY/2);
				})
				s24.on("pressmove", function(e) {
					s24.x = e.stageX/2+offset.x; s24.y = e.stageY/2+offset.y;
				});
				s24.cursor='pointer';

				var s25 = new createjs.Shape();
				s25.graphics.f("black").dc(0,0,50);
				stage.addChild(s25);
				var offset = new createjs.Point();
				s25.on("mousedown", function(e) {
					offset.setValues(s25.x - e.stageX/2, s25.y-e.stageY/2);
				})
				s25.on("pressmove", function(e) {
					s25.x = e.stageX/2+offset.x; s25.y = e.stageY/2+offset.y;
				});
				s25.cursor='pointer';

				var s26 = new createjs.Shape();
				s26.graphics.f("black").dc(0,0,50);
				stage.addChild(s26);
				var offset = new createjs.Point();
				s26.on("mousedown", function(e) {
					offset.setValues(s26.x - e.stageX/2, s26.y-e.stageY/2);
				})
				s26.on("pressmove", function(e) {
					s26.x = e.stageX/2+offset.x; s26.y = e.stageY/2+offset.y;
				});
				s26.cursor='pointer';

				var s27 = new createjs.Shape();
				s27.graphics.f("black").dc(0,0,50);
				stage.addChild(s27);
				var offset = new createjs.Point();
				s27.on("mousedown", function(e) {
					offset.setValues(s27.x - e.stageX/2, s27.y-e.stageY/2);
				})
				s27.on("pressmove", function(e) {
					s27.x = e.stageX/2+offset.x; s27.y = e.stageY/2+offset.y;
				});
				s27.cursor='pointer';

				var s28 = new createjs.Shape();
				s28.graphics.f("black").dc(0,0,50);
				stage.addChild(s28);
				var offset = new createjs.Point();
				s28.on("mousedown", function(e) {
					offset.setValues(s28.x - e.stageX/2, s28.y-e.stageY/2);
				})
				s28.on("pressmove", function(e) {
					s28.x = e.stageX/2+offset.x; s28.y = e.stageY/2+offset.y;
				});
				s28.cursor='pointer';

				var s29 = new createjs.Shape();
				s29.graphics.f("black").dc(0,0,50);
				stage.addChild(s29);
				var offset = new createjs.Point();
				s29.on("mousedown", function(e) {
					offset.setValues(s29.x - e.stageX/2,s29.y-e.stageY/2);
				})
				s29.on("pressmove", function(e) {
					s29.x = e.stageX/2+offset.x; s29.y =e.stageY/2+offset.y;
				});
				s29.cursor='pointer';

				var s30 = new createjs.Shape();
				s30.graphics.f("black").dc(0,0,50);

				stage.addChild(s30);
				var offset = new createjs.Point();
				s30.on("mousedown", function(e) {
					offset.setValues(s30.x - e.stageX/2, s30.y-e.stageY/2);
				})
				s30.on("pressmove", function(e) {
					s30.x = e.stageX/2+offset.x; s30.y = e.stageY/2+offset.y;
				});
				s30.cursor='pointer';


				bitmap = new createjs.Bitmap(image);
				bitmap2 = new createjs.Bitmap(image2);
				bitmap3 = new createjs.Bitmap(image3);
				bitmap4 = new createjs.Bitmap(image4);
				bitmap5 = new createjs.Bitmap(image5);
				bitmap6 = new createjs.Bitmap(image6);
				bitmap7 = new createjs.Bitmap(image7);
				bitmap8 = new createjs.Bitmap(image8);
				bitmap9 = new createjs.Bitmap(image9);
				bitmap10 = new createjs.Bitmap(image10);
				bitmap11 = new createjs.Bitmap(image11);
				bitmap12 = new createjs.Bitmap(image12);
				bitmap13 = new createjs.Bitmap(image13);
				bitmap14 = new createjs.Bitmap(image14);
				bitmap15 = new createjs.Bitmap(image15);
				bitmap16 = new createjs.Bitmap(image16);
				bitmap17 = new createjs.Bitmap(image17);
				bitmap18 = new createjs.Bitmap(image18);
				bitmap19 = new createjs.Bitmap(image19);
				bitmap20 = new createjs.Bitmap(image20);
				bitmap21 = new createjs.Bitmap(image21);
				bitmap22 = new createjs.Bitmap(image22);
				bitmap23 = new createjs.Bitmap(image23);
				bitmap24 = new createjs.Bitmap(image24);
				bitmap25 = new createjs.Bitmap(image25);
				bitmap26 = new createjs.Bitmap(image26);
				bitmap27 = new createjs.Bitmap(image27);
				bitmap28 = new createjs.Bitmap(image28);
				bitmap29 = new createjs.Bitmap(image29);
				bitmap30 = new createjs.Bitmap(image30);

				bitmapall = new createjs.Bitmap(imageall);


				stage.addChild (bitmapall, bitmap, bitmap2, bitmap3, bitmap4, bitmap5, bitmap6, bitmap7, bitmap8, bitmap9, bitmap10, bitmap11, bitmap12, bitmap13, bitmap14,  bitmap15, bitmap16, bitmap17, bitmap18, bitmap19, bitmap20,  bitmap21, bitmap22, bitmap23, bitmap24, bitmap25, bitmap26, bitmap27, bitmap28, bitmap29, bitmap30);

				bitmap.mask = s;
				s.y = 600;
				s.x = 630;

				bitmap2.mask = s2;
				s2.y = 540;
				s2.x = 320;

				bitmap3.mask = s3;
				s3.y = 330;
				s3.x = 890;

				bitmap4.mask = s4;
				s4.y = 380;
				s4.x = 810;

				bitmap5.mask = s5;
				s5.y = 160;
				s5.x = 1190;

				bitmap6.mask = s6;
				s6.y = 230;
				s6.x = 840;

				bitmap7.mask = s7;
				s7.y = 360;
				s7.x = 620;

				bitmap8.mask = s8;
				s8.y = 570;
				s8.x = 770;

				bitmap9.mask = s9;
				s9.y = 624;
				s9.x = 419;

				bitmap10.mask = s10;
				s10.y = 310;
				s10.x = 380;

				bitmap11.mask = s11;
				s11.y = 296;
				s11.x = 1210;

				bitmap12.mask = s12;
				s12.y = 640;
				s12.x = 1201;

				bitmap13.mask = s13;
				s13.y = 290;
				s13.x = 495;

				bitmap14.mask = s14;
				s14.y = 480;
				s14.x = 1164;

				bitmap15.mask = s15;
				s15.y = 581;
				s15.x = 575;

				bitmap16.mask = s16;
				s16.y = 621;
				s16.x = 1011;

				bitmap17.mask = s17;
				s17.y = 483;
				s17.x = 435;

				bitmap18.mask = s18;
				s18.y = 420;
				s18.x =679;

				bitmap19.mask = s19;
				s19.y = 651;
				s19.x = 695;

				bitmap20.mask = s20;
				s20.y = 523;
				s20.x = 945;

				bitmap21.mask = s21;
				s21.y = 404;
				s21.x = 121;

				bitmap22.mask = s22;
				s22.y = 630;
				s22.x = 245;

				bitmap23.mask = s23;
				s23.y = 246;
				s23.x = 994;

				bitmap24.mask = s24;
				s24.y = 210;
				s24.x = 1057;

				bitmap25.mask = s25;
				s25.y = 411;
				s25.x = 255;

				bitmap26.mask = s26;
				s26.y = 529;
				s26.x = 705;

				bitmap27.mask = s27;
				s27.y = 264;
				s27.x = 216;

				bitmap28.mask = s28;
				s28.y = 350;
				s28.x = 448;

				bitmap29.mask = s29;
				s29.y = 515;
				s29.x = 144;

				bitmap30.mask = s30;
				s30.y = 361;
				s30.x = 1097;


					canvas = document.getElementById("canvas");

					var g = new createjs.Graphics().beginFill('#000000').drawRect(190,50,900,600);
					var square = new createjs.Shape(g);
					square.alpha = 0;
					stage.addChild(square);
					//
					// container = new createjs.Container();
					// stage.addChild(container);
					// container.alpha = 1;
					// container.x = 180;
					// container.y = 65;
					//
					//
					// var ab1 = new createjs.DOMElement(abstract);
					// var ab2 = new createjs.DOMElement(abstract2);
					// var ab3 = new createjs.DOMElement(abstract3);
					// var ab4 = new createjs.DOMElement(abstract4);
					// var ab5 = new createjs.DOMElement(abstract5);
					// var ab6 = new createjs.DOMElement(abstract6);
					// var ab7 = new createjs.DOMElement(abstract7);
					// var ab8 = new createjs.DOMElement(abstract8);
					// var ab9 = new createjs.DOMElement(abstract9);
					// var ab10 = new createjs.DOMElement(abstract10);
					// var ab11 = new createjs.DOMElement(abstract11);
					// var ab12 = new createjs.DOMElement(abstract12);
					// var ab13 = new createjs.DOMElement(abstract13);
					// var ab14 = new createjs.DOMElement(abstract14);
					// var ab15 = new createjs.DOMElement(abstract15);
					// var ab16 = new createjs.DOMElement(abstract16);
					// var ab17 = new createjs.DOMElement(abstract17);
					// var ab18 = new createjs.DOMElement(abstract18);
					// var ab19 = new createjs.DOMElement(abstract19);
					// var ab20 = new createjs.DOMElement(abstract20);
					// var ab21 = new createjs.DOMElement(abstract21);
					// var ab22 = new createjs.DOMElement(abstract22);
					// var ab23 = new createjs.DOMElement(abstract23);
					// var ab24 = new createjs.DOMElement(abstract24);
					// var ab25 = new createjs.DOMElement(abstract25);
					// var ab26 = new createjs.DOMElement(abstract26);
					// var ab27 = new createjs.DOMElement(abstract27);
					// var ab28 = new createjs.DOMElement(abstract28);
					// var ab29 = new createjs.DOMElement(abstract29);
					// var ab30 = new createjs.DOMElement(abstract30);
					//
					//
					// container.addChild(ab1);
					// container.addChild(ab2);
					// container.addChild(ab3);
					// container.addChild(ab4);
					// container.addChild(ab5);
					// container.addChild(ab6);
					// container.addChild(ab7);
					// container.addChild(ab8);
					// container.addChild(ab9);
					// container.addChild(ab10);
					// container.addChild(ab11);
					// container.addChild(ab12);
					// container.addChild(ab13);
					// container.addChild(ab14);
					// container.addChild(ab15);
					// container.addChild(ab16);
					// container.addChild(ab17);
					// container.addChild(ab18);
					// container.addChild(ab19);
					// container.addChild(ab20);
					// container.addChild(ab21);
					// container.addChild(ab22);
					// container.addChild(ab23);
					// container.addChild(ab24);
					// container.addChild(ab25);
					// container.addChild(ab26);
					// container.addChild(ab27);
					// container.addChild(ab28);
					// container.addChild(ab29);
					// container.addChild(ab30);


						// var offset = new createjs.Point();
						// container.on("mousedown", function(e) {
						// 	offset.setValues(container.x - e.stageX/2, container.y-e.stageY/2);
						// })
						// container.on("pressmove", function(e) {
						// 	container.x = e.stageX/2+offset.x; container.y = e.stageY/2+offset.y;
						// });
						// container.cursor='pointer';



						var div = document.getElementById('abstract');
						var div2 = document.getElementById('abstract2');
						var div3 = document.getElementById('abstract3');
						var div4 = document.getElementById('abstract4');
						var div5 = document.getElementById('abstract5');
						var div6 = document.getElementById('abstract6');
						var div7 = document.getElementById('abstract7');
						var div8 = document.getElementById('abstract8');
						var div9 = document.getElementById('abstract9');
						var div10 = document.getElementById('abstract10');
						var div11 = document.getElementById('abstract11');
						var div12 = document.getElementById('abstract12');
						var div13 = document.getElementById('abstract13');
						var div14 = document.getElementById('abstract14');
						var div15 = document.getElementById('abstract15');
						var div16 = document.getElementById('abstract16');
						var div17 = document.getElementById('abstract17');
						var div18 = document.getElementById('abstract18');
						var div19 = document.getElementById('abstract19');
						var div20 = document.getElementById('abstract20');
						var div21 = document.getElementById('abstract21');
						var div22 = document.getElementById('abstract22');
						var div23 = document.getElementById('abstract23');
						var div24 = document.getElementById('abstract24');
						var div25 = document.getElementById('abstract25');
						var div26 = document.getElementById('abstract26');
						var div27 = document.getElementById('abstract27');
						var div28 = document.getElementById('abstract28');
						var div29 = document.getElementById('abstract29');
						var div30 = document.getElementById('abstract30');
						div.style.display = 'none';
						div2.style.display = 'none';
						div3.style.display = 'none';
						div4.style.display = 'none';
						div5.style.display = 'none';
						div6.style.display = 'none';
						div7.style.display = 'none';
						div8.style.display = 'none';
						div9.style.display = 'none';
						div10.style.display = 'none';
						div11.style.display = 'none';
						div12.style.display = 'none';
						div13.style.display = 'none';
						div14.style.display = 'none';
						div15.style.display = 'none';
						div16.style.display = 'none';
						div17.style.display = 'none';
						div18.style.display = 'none';
						div19.style.display = 'none';
						div20.style.display = 'none';
						div21.style.display = 'none';
						div22.style.display = 'none';
						div23.style.display = 'none';
						div24.style.display = 'none';
						div25.style.display = 'none';
						div26.style.display = 'none';
						div27.style.display = 'none';
						div28.style.display = 'none';
						div29.style.display = 'none';
						div30.style.display = 'none';
						// square.addEventListener('click',function(e) {
						// div.style.display = 'none';

				// });

						s.addEventListener('dblclick', function (e) {
						div.style.display = 'block';
						imageFull1 = new createjs.Bitmap(image);
						stage.addChild(imageFull1);
						});
						div.addEventListener('click',function(e) {
						div.style.display = 'none';
						stage.removeChild(imageFull1);
						});


						s2.addEventListener('dblclick', function (e) {
					// alert('ouch');
						// createjs.Tween.get(square).to({alpha:1},1000,
						div2.style.display = 'block';
						imageFull2 = new createjs.Bitmap(image2);
						stage.addChild(imageFull2);
						});
						div2.addEventListener('click',function(e) {
						div2.style.display = 'none';
						stage.removeChild(imageFull2);
						});

					s3.addEventListener('dblclick', function (e) {
						div3.style.display = 'block';
						imageFull3 = new createjs.Bitmap(image3);
						stage.addChild(imageFull3);
						});
						div3.addEventListener('click',function(e) {
						div3.style.display = 'none';
						stage.removeChild(imageFull3);
						});

						s4.addEventListener('dblclick', function (e) {
						div4.style.display = 'block';
						imageFull4 = new createjs.Bitmap(image4);
						stage.addChild(imageFull4);
						});
						div4.addEventListener('click',function(e) {
						div4.style.display = 'none';
						stage.removeChild(imageFull4);
						});

						s5.addEventListener('dblclick', function (e) {
						div5.style.display = 'block';
						imageFull5 = new createjs.Bitmap(image5);
						stage.addChild(imageFull5);
						});
						div5.addEventListener('click',function(e) {
						div5.style.display = 'none';
						stage.removeChild(imageFull5);
						});

						s6.addEventListener('dblclick', function (e) {
						div6.style.display = 'block';
						imageFull6 = new createjs.Bitmap(image6);
						stage.addChild(imageFull6);
						});
						div6.addEventListener('click',function(e) {
						div6.style.display = 'none';
						stage.removeChild(imageFull6);
						});

						s7.addEventListener('dblclick', function (e) {
						div7.style.display = 'block';
						imageFull7 = new createjs.Bitmap(image7);
						stage.addChild(imageFull7);
						});
						div7.addEventListener('click',function(e) {
						div7.style.display = 'none';
						stage.removeChild(imageFull7);
						});

						s8.addEventListener('dblclick', function (e) {
						div8.style.display = 'block';
						imageFull8 = new createjs.Bitmap(image8);
						stage.addChild(imageFull8);
						});
						div8.addEventListener('click',function(e) {
						div8.style.display = 'none';
						stage.removeChild(imageFull8);
						});

						s9.addEventListener('dblclick', function (e) {
						div9.style.display = 'block';
						imageFull9 = new createjs.Bitmap(image9);
						stage.addChild(imageFull9);
						});
						div9.addEventListener('click',function(e) {
						div9.style.display = 'none';
						stage.removeChild(imageFull9);
						});

					  s10.addEventListener('dblclick', function (e) {
						div10.style.display = 'block';
						imageFull10 = new createjs.Bitmap(image10);
						stage.addChild(imageFull10);
						});
						div10.addEventListener('click',function(e) {
						div10.style.display = 'none';
						stage.removeChild(imageFull10);
						});

						s11.addEventListener('dblclick', function (e) {
						div11.style.display = 'block';
						imageFull11 = new createjs.Bitmap(image11);
						stage.addChild(imageFull11);
						});
						div11.addEventListener('click',function(e) {
						div11.style.display = 'none';
						stage.removeChild(imageFull11);
						});

						s12.addEventListener('dblclick', function (e) {
						div12.style.display = 'block';
						imageFull12 = new createjs.Bitmap(image12);
						stage.addChild(imageFull12);
						});
						div12.addEventListener('click',function(e) {
						div12.style.display = 'none';
						stage.removeChild(imageFull12);
						});

						s13.addEventListener('dblclick', function (e) {
						div13.style.display = 'block';
						imageFull13 = new createjs.Bitmap(image13);
						stage.addChild(imageFull13);
						});
						div13.addEventListener('click',function(e) {
						div13.style.display = 'none';
						stage.removeChild(imageFull13);
						});

						s14.addEventListener('dblclick', function (e) {
						div14.style.display = 'block';
						imageFull14 = new createjs.Bitmap(image14);
						stage.addChild(imageFull14);
						});
						div14.addEventListener('click',function(e) {
						div14.style.display = 'none';
						stage.removeChild(imageFull14);
						});

					  s15.addEventListener('dblclick', function (e) {
						div15.style.display = 'block';
						imageFull15 = new createjs.Bitmap(image15);
						stage.addChild(imageFull15);
						});
						div15.addEventListener('click',function(e) {
						div15.style.display = 'none';
						stage.removeChild(imageFull15);
						});

						s16.addEventListener('dblclick', function (e) {
						div16.style.display = 'block';
						imageFull16 = new createjs.Bitmap(image16);
						stage.addChild(imageFull16);
						});
						div16.addEventListener('click',function(e) {
						div16.style.display = 'none';
						stage.removeChild(imageFull16);
						});

						s17.addEventListener('dblclick', function (e) {
						div17.style.display = 'block';
						imageFull17 = new createjs.Bitmap(image17);
						stage.addChild(imageFull17);
						});
						div17.addEventListener('click',function(e) {
						div17.style.display = 'none';
						stage.removeChild(imageFull17);
						});

						s18.addEventListener('dblclick', function (e) {
						div18.style.display = 'block';
						imageFull18 = new createjs.Bitmap(image18);
						stage.addChild(imageFull18);
						});
						div18.addEventListener('click',function(e) {
						div18.style.display = 'none';
						stage.removeChild(imageFull18);
						});

						s19.addEventListener('dblclick', function (e) {
						div19.style.display = 'block';
						imageFull19 = new createjs.Bitmap(image19);
						stage.addChild(imageFull19);
						});
						div19.addEventListener('click',function(e) {
						div19.style.display = 'none';
						stage.removeChild(imageFull19);
						});

						s20.addEventListener('dblclick', function (e) {
						div20.style.display = 'block';
						imageFull20 = new createjs.Bitmap(image20);
						stage.addChild(imageFull20);
						});
						div20.addEventListener('click',function(e) {
						div20.style.display = 'none';
						stage.removeChild(imageFull20);
						});

						s21.addEventListener('dblclick', function (e) {
						div21.style.display = 'block';
						imageFull21 = new createjs.Bitmap(image21);
						stage.addChild(imageFull21);
						});
						div21.addEventListener('click',function(e) {
						div21.style.display = 'none';
						stage.removeChild(imageFull21);
						});

						s22.addEventListener('dblclick', function (e) {
						div22.style.display = 'block';
						imageFull22 = new createjs.Bitmap(image22);
						stage.addChild(imageFull22);
						});
						div22.addEventListener('click',function(e) {
						div22.style.display = 'none';
						stage.removeChild(imageFull22);
						});

						s23.addEventListener('dblclick', function (e) {
						div23.style.display = 'block';
						imageFull23 = new createjs.Bitmap(image23);
						stage.addChild(imageFull23);
						});
						div23.addEventListener('click',function(e) {
						div23.style.display = 'none';
						stage.removeChild(imageFull23);
						});

						s24.addEventListener('dblclick', function (e) {
						div24.style.display = 'block';
						imageFull24 = new createjs.Bitmap(image24);
						stage.addChild(imageFull24);
						});
						div24.addEventListener('click',function(e) {
						div24.style.display = 'none';
						stage.removeChild(imageFull24);
						});

						s25.addEventListener('dblclick', function (e) {
						div25.style.display = 'block';
						imageFull25 = new createjs.Bitmap(image25);
						stage.addChild(imageFull25);
						});
						div25.addEventListener('click',function(e) {
						div25.style.display = 'none';
						stage.removeChild(imageFull25);
						});


						s26.addEventListener('dblclick', function (e) {
						div26.style.display = 'block';
						imageFull26 = new createjs.Bitmap(image26);
						stage.addChild(imageFull26);
						});
						div26.addEventListener('click',function(e) {
						div26.style.display = 'none';
						stage.removeChild(imageFull26);
						});

						s27.addEventListener('dblclick', function (e) {
						div27.style.display = 'block';
						imageFull27 = new createjs.Bitmap(image27);
						stage.addChild(imageFull27);
						});
						div27.addEventListener('click',function(e) {
						div27.style.display = 'none';
						stage.removeChild(imageFull27);
						});

						s28.addEventListener('dblclick', function (e) {
						div28.style.display = 'block';
						imageFull28 = new createjs.Bitmap(image28);
						stage.addChild(imageFull28);
						});
						div28.addEventListener('click',function(e) {
						div28.style.display = 'none';
						stage.removeChild(imageFull28);
						});

						s29.addEventListener('dblclick', function (e) {
						div29.style.display = 'block';
						imageFull29 = new createjs.Bitmap(image29);
						stage.addChild(imageFull29);
						});
						div29.addEventListener('click',function(e) {
						div29.style.display = 'none';
						stage.removeChild(imageFull29);
						});

						s30.addEventListener('dblclick', function (e) {
						div30.style.display = 'block';
						imageFull30 = new createjs.Bitmap(image30);
						stage.addChild(imageFull30);
						});
						div30.addEventListener('click',function(e) {
						div30.style.display = 'none';
						stage.removeChild(imageFull30);
						});



				/*	var screen = new createjs.Shape();
					screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, .6));
					screen.graphics.drawRect(0, 0, stage.canvas.width/3, stage.canvas.height/3);
					stage.addChild(screen);*/





				/*	updateCacheImage(false);

					cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, cw));
					cursor.cursor = "none";

					stage.addChild(cursor);*/


				/*function handleMouseDown(event) {
					oldPt = new createjs.Point(stage.mouseX / stage.scaleX, stage.mouseY / stage.scaleY);
					oldMidPt = oldPt;
					isDrawing = true;
				}*/
				/*
				function handleMouseMove(event) {
					cursor.x = stage.mouseX / stage.scaleX;
					cursor.y = stage.mouseY / stage.scaleY;

					if (!isDrawing) {
						stage.update();
						return;
					}

					var midPoint = new createjs.Point(oldPt.x + stage.mouseX / stage.scaleX >> 1, oldPt.y + stage.mouseY / stage.scaleY >> 1);

					drawingCanvas.graphics.setStrokeStyle(cw * 2, "round", "round")
						.beginStroke("rgba(0,0,0,1)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

					oldPt.x = stage.mouseX / stage.scaleX;
					oldPt.y = stage.mouseY / stage.scaleY;

					oldMidPt.x = midPoint.x;
					oldMidPt.y = midPoint.y;

					updateCacheImage(true);
				}*/

				/*function handleMouseUp(event) {
					updateCacheImage(true);
					isDrawing = false;
				}*/
				}
				function updateCacheImage(update) {
					/*if (update) {
						drawingCanvas.updateCache();
					} else {
						drawingCanvas.cache(0, 0, image.width, image.height);
					}*/

					/*maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
					bitmap.filters = [maskFilter];*/

					/*if (update) {
						bitmap.updateCache(0, 0, image.width, image.height);
					} else {
						bitmap.cache(0, 0, image.width, image.height);
					}*/

					stage.update();
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.back = new lib.back();
	this.back.parent = this;
	this.back.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(833.9,450,892.2,540.1);
// library properties:
lib.properties = {
	id: '58430D653A3B48DAA9ECC5704794E70D',
	width: 1280,
	height: 720,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['58430D653A3B48DAA9ECC5704794E70D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
