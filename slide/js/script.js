function getNodeindex( elm ){//get tg.index()
    for(c = elm.parentNode.children, i = 0; i < c.length; i++ )
        if( c[i] == elm ) return i;
}
function Slider (option, callback){
	/* options */
	this.canvas= null;// canvas
	this.ctx= null;// ctx
	this.Auto= null;// auto slide
	this.Autotime= null;// auto slide time
	this.Slidetime= 2000;// sliding time // default= 2s
	this.plus_value= 1;// cnt plus value // default= +1 
	this.pageBtn= null;// page btn list
	this.PrevArrowBtn= null;// prev btn
	this.NextArrowBtn= null;// next btn
	this.src= [];// slide image src
	this.S= 150;// clip short
	this.L= 300;// clip long
	/* //options */

	this.FPS= 60;// frame
	this.images;// slide iamge list
	this.W;// canvas width
	this.H;// canvas height
	this.isAnimated= false;// is animate
	this.len= 0;// image length
	this.idx= 0;// show image index
	this.cnt= [0, 0, 0];//image slide index
	this.timeline=[// x location list
		0.00000,
       -0.00004,
       -0.00018,
       -0.00046,
       -0.00086,
       -0.00136,
       -0.00200,
       -0.00275,
       -0.00368,
       -0.00471,
       -0.00589,
       -0.00725,
       -0.00875,
       -0.01046,
       -0.01232,
       -0.01436,
       -0.01664,
       -0.01911,
       -0.02179,
       -0.02471,
       -0.02789,
       -0.03132,
       -0.03504,
       -0.03904,
       -0.04339,
       -0.04807,
       -0.05314,
       -0.05857,
       -0.06446,
       -0.07082,
       -0.07764,
       -0.08507,
       -0.09307,
       -0.10171,
       -0.11111,
       -0.12132,
       -0.13243,
       -0.14450,
       -0.15775,
       -0.17225,
       -0.18821,
       -0.20582,
       -0.22529,
       -0.24689,
       -0.27089,
       -0.29757,
       -0.32707,
       -0.35939,
       -0.39425,
       -0.43086,
       -0.46814,
       -0.50486,
       -0.53993,
       -0.57271,
       -0.60289,
       -0.63050,
       -0.65571,
       -0.67871,
       -0.69975,
       -0.71904,
       -0.73679,
       -0.75318,
       -0.76832,
       -0.78239,
       -0.79546,
       -0.80768,
       -0.81907,
       -0.82979,
       -0.83982,
       -0.84925,
       -0.85814,
       -0.86650,
       -0.87439,
       -0.88186,
       -0.88893,
       -0.89561,
       -0.90193,
       -0.90793,
       -0.91361,
       -0.91900,
       -0.92411,
       -0.92896,
       -0.93357,
       -0.93793,
       -0.94207,
       -0.94604,
       -0.94975,
       -0.95332,
       -0.95668,
       -0.95986,
       -0.96289,
       -0.96575,
       -0.96846,
       -0.97104,
       -0.97343,
       -0.97571,
       -0.97789,
       -0.97993,
       -0.98182,
       -0.98361,
       -0.98529,
       -0.98686,
       -0.98832,
       -0.98971,
       -0.99096,
       -0.99214,
       -0.99321,
       -0.99421,
       -0.99511,
       -0.99593,
       -0.99664,
       -0.99732,
       -0.99789,
       -0.99839,
       -0.99882,
       -0.99918,
       -0.99946,
       -0.99971,
       -0.99986,
       -0.99996,
       -1.00000
	];

	this.callback= {
		onInit: function (){},//slide ready
		onSlideStart: function (){},//slide change start
		onSlideChanged: function (){},//slide change end
	}

	this.Init(option, callback);
	this.eventInit();
}
Slider.prototype.Init= function (option, callback){
	/* option */
	this.canvas= option.Canvas? document.querySelector(option.Canvas): null;// canvas
	this.ctx= option.Canvas? this.canvas.getContext('2d'): null;// ctx
	this.Auto= typeof option.Auto === "boolean" && option.Auto;// auto slide
	this.Autotime= typeof option.Autotime === "number"? option.Autotime: 3000;// auto slide time
	if(typeof option.Slidetime === 'number'){
		this.Slidetime= option.Slidetime;// sliding time
		this.plus_value= 2000/this.Slidetime;// cnt plus value
	}
	this.pageBtn= option.pageBtn != undefined? document.querySelectorAll(option.pageBtn): false;// page btn list
	this.PrevArrowBtn= option.PrevArrowBtn != undefined? document.querySelector( option.PrevArrowBtn): null;
	this.NextArrowBtn= option.NextArrowBtn != undefined? document.querySelector( option.NextArrowBtn): null;
	this.src= option.src != undefined? option.src: [];// image src list
	this.S= option.S? option.S: this.S;// clip short 
	this.L= option.L? option.L: this.L;// clip long
	/* //option */

	/* callback */
    if (callback.onInit instanceof Function) {
        this.callback.onInit= callback.onInit;
    }
    if (callback.onSlideStart instanceof Function) {
        this.callback.onSlideStart= callback.onSlideStart;
    }
	if (callback.onSlideChanged instanceof Function) {
        this.callback.onSlideChanged= callback.onSlideChanged;
    }
	/* //callback */

	/* image loading */
	var nb= 0;
	var loaded= 0;
	var imgs= [];
	var self= this;
	for(var i in this.src){
		nb++;
		imgs[i]= new Image();
		imgs[i].src= this.src[i];
		imgs[i].onload= function (){
			if(++loaded == nb){//all images onload
				self.images=imgs;//images
				self.W= self.canvas.width;//canvas Width
				self.H= self.canvas.height;//canvas Height
				self.len= self.src.length;//slide image length
				self.thumbnail();//show first image
				self.callback.onInit();//callback onInit
				if(self.Auto){//if option.auto== true
					setInterval(function (){
						self.NextArrowBtn.click();
					}, self.Autotime+ self.Slidetime);//autoslide
				}
			}
		}
	}
};
Slider.prototype.eventInit= function (){
	var self= this;
	this.PrevArrowBtn.addEventListener("click", function (){
		if(self.isAnimated)
			return false;
		self.isAnimated= true;
		var prev= self.idx > 0 ? self.idx - 1 : self.len -1;
		self.callback.onSlideStart();//slide start callback
		self.PrevImage(prev, 0, 0, 0);
	});
	this.NextArrowBtn.addEventListener("click", function (){
		if(self.isAnimated)
			return false;
		self.isAnimated= true;
		var next= self.idx < self.len - 1 ? self.idx + 1 : 0
		self.callback.onSlideStart();//slide start callback;
		self.NextImage(next, 0, 0, 0);
	});
	for(var Btn of this.pageBtn){
		Btn.addEventListener("click", function (){
			if(self.isAnimated)
				return false;
			self.isAnimated= true;
			var tg= getNodeindex(this);
			self.callback.onSlideStart();//slide start callback
			self.MoveImage(tg, 0, 0, 0);
		})
	}
};
Slider.prototype.PrevImage= function (prev_idx ,count1= 0, count2= 0, count3= 0){
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		this.ctx.save();
	    this.ctx.beginPath();
	    switch(j){
	    	case 0:
			    this.ctx.moveTo(0, 0);
			    this.ctx.lineTo(this.W, 0);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(0, this.L);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count1]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(this.timeline[count1]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    	case 1:
	    		this.ctx.moveTo(0, this.L);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(0, this.H - this.S);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count2]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(this.timeline[count2]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		this.ctx.moveTo(0, this.H - this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(this.W, this.H);
			    this.ctx.lineTo(0, this.H);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count3]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,//image의 위치
			    	(this.timeline[count3]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    }
	    
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){// 120번 돌아가면 2초고 딱 한바퀴 // 0 ~ 120 = 1slide
		//slidetime=2000 == +1
		// slidetime/1000
		// plas_value= 
		//slidetime=1000 == +2
		setTimeout(function (){
			self.PrevImage(
				prev_idx, 
				count1<120? count1 + self.plus_value: count1, 
				count1>12&&count2<120? count2 + self.plus_value: count2, 
				count1>24? count3 + self.plus_value: count3
			);
		}, 1000/this.FPS);//1초당 60번 돌아감
	}else{
		this.isAnimated= false;
		this.idx= prev_idx;
    	this.callback.onSlideChanged();//changed callback 
	}
}
Slider.prototype.NextImage= function (next_idx, count1= 0, count2= 0, count3= 0){
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		this.ctx.save();
	    this.ctx.beginPath();
	    switch(j){
	    	case 0:
			    this.ctx.moveTo(0, 0);
			    this.ctx.lineTo(this.W, 0);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(0, this.L);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count1]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,//image의 위치
			    	(this.timeline[count1]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    	case 1:
	    		this.ctx.moveTo(0, this.L);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(0, this.H - this.S);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count2]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,//image의 위치
			    	(this.timeline[count2]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		this.ctx.moveTo(0, this.H - this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(this.W, this.H);
			    this.ctx.lineTo(0, this.H);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	(this.timeline[count3]*this.W), 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,//image의 위치
			    	(this.timeline[count3]*this.W)+this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    }
	    
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){
		setTimeout(function (){
			self.PrevImage(
				next_idx, 
				count1<120? count1 + self.plus_value: count1, 
				count1>12&&count2<120? count2 + self.plus_value: count2, 
				count1>24? count3 + self.plus_value: count3
			);
		}, 1000/this.FPS);
	}else{
		this.isAnimated= false;
		this.idx= next_idx;
		this.callback.onSlideChanged();//changed callback 
	}
}
Slider.prototype.MoveImage = function(tg, count1= 0, count2= 0, count3= 0) {
	console.log(`${this.idx} ~ ${tg}`);
	if(this.idx==tg)
		return this.isAnimated=false;
	var back= this.idx>tg;// direction
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		this.ctx.save();
	    this.ctx.beginPath();
	    switch(j){
	    	case 0:
			    this.ctx.moveTo(0, 0);
			    this.ctx.lineTo(this.W, 0);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(0, this.L);
			    this.ctx.closePath();
			    this.ctx.clip();
			    var x= (this.timeline[count1]*this.W);
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	back? -x :x, 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,//image의 위치
			    	back? -x - this.W :x + this.W, 0, this.W, this.H,//canvas의 위치
			    );

	    		break;
	    	case 1:
	    		this.ctx.moveTo(0, this.L);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(0, this.H - this.S);
			    this.ctx.closePath();
			    this.ctx.clip();
			    var x= (this.timeline[count2]*this.W);
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	back? -x: x, 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,//image의 위치
			    	back? -x - this.W: x + this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    	case 2:
	    		this.ctx.moveTo(0, this.H - this.S);
			    this.ctx.lineTo(this.W, this.H - this.L);
			    this.ctx.lineTo(this.W, this.H);
			    this.ctx.lineTo(0, this.H);
			    this.ctx.closePath();
			    this.ctx.clip();
			    var x= (this.timeline[count3]*this.W);
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,//image의 위치
			    	back? -x: x, 0, this.W, this.H,//canvas의 위치
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,//image의 위치
			    	back? -x - this.W: x + this.W, 0, this.W, this.H,//canvas의 위치
			    );
	    		break;
	    }
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){
		setTimeout(function (){
			self.MoveImage(
				tg, 
				count1<120? count1 + self.plus_value: count1, 
				count1>12&&count2<120? count2 + self.plus_value: count2, 
				count1>24? count3 + self.plus_value: count3
			);
		}, 1000/this.FPS);
	}else{
		this.isAnimated= false;
		this.idx= tg;
		this.callback.onSlideChanged();//changed callback 
	}
};
Slider.prototype.thumbnail= function (){//draw first image
	console.log(this.ctx);
	this.ctx.drawImage(
    	this.images[0], 
    	0, 0, this.images[0].width, this.images[0].height,//image의 위치
    	this.timeline[0]*this.W, 0, 1200, 857,
    );
}