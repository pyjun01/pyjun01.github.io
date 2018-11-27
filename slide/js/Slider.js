function getNodeindex( elm ){//get tg.index()
    for(c = elm.parentNode.children, i = 0; i < c.length; i++ )
        if( c[i] == elm ) return i;
}
function Slider (option, callback){
	/* options */
	this.wrap= null;// wrap
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

	var self= this;
	this.AutoSlide= function (){
		setInterval(function (){
			self.NextAction();
		}, self.Autotime+ self.Slidetime);//autoslide
	}
	function drawSlideImage (count){
		this.ctx.drawImage(
	    	this.images[this.idx], 
	    	0, 
	    	0, 
	    	this.images[this.idx].width, 
	    	this.images[this.idx].height, 
	    	-(this.timeline[count]*this.W), 
	    	0, 
	    	this.W, 
	    	this.H
	    );
	    this.ctx.drawImage(
	    	this.images[prev_idx], 
	    	0, 
	    	0, 
	    	this.images[prev_idx].width, 
	    	this.images[prev_idx].height, 
	    	-(this.timeline[count]*this.W)-this.W, 
	    	0, 
	    	this.W, 
	    	this.H
	    );
	}
	this.Init(option, callback);
}
Slider.prototype.MakingPageBtn = function(pageBtn) {
	var tags= "";//return tags
	var target= pageBtn[0]=='.'? document.querySelectorAll(this.wrap+pageBtn): document.querySelector(this.wrap+pageBtn);
	tags+="<ul>";
	for(var i=0; i<this.len; i++){
		var c= i==0? "class='"+ this.setSlides.viewClass +"'": "";
		tags+="<li "+c+">";
		tags+="<a href='#'>";
		tags+=i+1;
		tags+="</a>";
		tags+="</li>";
	}
	tags+="</ul>";
	target[0].innerHTML= tags;
	this.pageBtn= document.querySelectorAll(this.wrap+pageBtn+">ul>li");
};
Slider.prototype.Init= function (option, callback){
	/* option */
	this.wrap= option.slideWrap? option.slideWrap+" ": "";
	this.canvas= option.Canvas? document.querySelector(this.wrap+option.Canvas): null;// canvas

	this.ctx= option.Canvas? this.canvas.getContext('2d'): null;// ctx
	this.Auto= typeof option.Auto === "boolean" && option.Auto;// auto slide
	this.Autotime= typeof option.Autotime === "number"? option.Autotime: 3000;// auto slide time
	if(typeof option.Slidetime === 'number'){
		this.Slidetime= option.Slidetime;// sliding time
		this.plus_value= 2000/this.Slidetime;// cnt plus value
	}
	this.PrevArrowBtn= option.PrevArrowBtn != undefined? document.querySelector(this.wrap+ option.PrevArrowBtn): null;
	this.NextArrowBtn= option.NextArrowBtn != undefined? document.querySelector(this.wrap+ option.NextArrowBtn): null;
	this.setSlides= {
		wrap: option.setSlides.wrap? document.querySelector(this.wrap+option.setSlides.wrap): null,
		list: option.setSlides.list? document.querySelectorAll(this.wrap+option.setSlides.list): null,
		viewClass: option.setSlides.viewClass? option.setSlides.viewClass: null,
	};
	// this.src= option.src != undefined? option.src: [];// image src list
	this.S= option.S? option.S: this.S;// clip short 
	this.L= option.L? option.L: this.L;// clip long
	/* //option */
	/* callback */
    if (callback.onSlideStart != null && callback.onSlideStart instanceof Function) {
        this.callback.onSlideStart= callback.onSlideStart;
    }
	if (callback.onSlideChanged instanceof Function) {
        this.callback.onSlideChanged= callback.onSlideChanged;
    }
    if (callback.onInit instanceof Function) {
        this.callback.onInit= callback.onInit;
    }

	/* //callback */
	/* image loading */
	var nb= 0;
	var loaded= 0;
	var imgs= [];
	var self= this;
	for(var i=0;i< this.setSlides.list.length; i++){
		nb++;
		imgs[i]= new Image();
		imgs[i].src= this.setSlides.list[i].getAttribute('data-image');
		imgs[i].onload= function (){
			if(++loaded == nb){//all images onload
				self.images=imgs;//images
				self.W= self.canvas.width;//canvas Width
				self.H= self.canvas.height;//canvas Height
				self.len= self.images.length;//slide image length
				if(option.pageBtn != null)
				self.MakingPageBtn(option.pageBtn);
				self.thumbnail();//show first image

				self.eventInit();// add EventListener

				self.callback.onInit();//callback onInit
				if(self.Auto){//if option.auto== true
					self.AutoSlide= setInterval(function (){
						self.NextAction();
					}, self.Autotime+ self.Slidetime);//autoslide
				}
			}
		}
	}
};
Slider.prototype.eventInit= function (){
	var self= this;
	if(self.Auto){
		document.querySelector(this.wrap).addEventListener("mouseenter", function (){
			clearInterval(self.AutoSlide);
		});
		document.querySelector(this.wrap).addEventListener("mouseleave", function (){
			self.AutoSlide= setInterval(function (){
				self.NextAction();
			}, self.Autotime+ self.Slidetime);//autoslide
		});
	}

	if(this.PrevArrowBtn != null){
		this.PrevArrowBtn.addEventListener("click", function (){
			self.PrevAction();
		});
	}
	
	if(this.NextArrowBtn != null){
		this.NextArrowBtn.addEventListener("click", function (){
			self.NextAction();
		});
	};

	if(this.pageBtn != null){
		for(var i= 0;i<this.pageBtn.length; i++){
			this.pageBtn[i].addEventListener("click", function (e){
				if(self.isAnimated)
					return false;
				e.preventDefault();
				self.isAnimated= true;
				var tg= getNodeindex(this);
				self.callback.onSlideStart();//slide start callback
				self.MoveImage(tg, 0, 0, 0);
			});
		};
	}
};
Slider.prototype.PrevAction= function (){
	if(this.isAnimated)
		return false;
	this.isAnimated= true;
	var prev= this.idx > 0 ? this.idx - 1 : this.len -1;
	this.callback.onSlideStart();//slide start callback
	this.PrevImage(prev, 0, 0, 0);
};
Slider.prototype.NextAction= function (){
	if(this.isAnimated)
		return false;
	this.isAnimated= true;
	var next= this.idx < this.len - 1 ? this.idx + 1 : 0;
	this.callback.onSlideStart();//slide start callback;
	this.NextImage(next, 0, 0, 0);	
};
Slider.prototype.slideEnd = function(tg) {
	this.isAnimated= false;
	this.setSlides.list[this.idx].classList.remove(this.setSlides.viewClass);
	if(this.pageBtn != null){
		this.pageBtn[this.idx].classList.remove(this.setSlides.viewClass);
	}
	this.idx= tg;
	this.setSlides.list[this.idx].classList.add(this.setSlides.viewClass);
	if(this.pageBtn != null){
		this.pageBtn[this.idx].classList.add(this.setSlides.viewClass);
	}
	this.callback.onSlideChanged();//changed callback 
};

Slider.prototype.PrevImage= function (prev_idx ,count1, count2, count3){
    var image= this.images[this.idx];
    var iW= image.width;
    var iH= image.height;
	for(var i=0; i<9; i++){// cliping, drawing
		var j= i%3;
		
		this.ctx.save();
	    this.ctx.beginPath();
	    switch(j){
	    	case 0:
	    		var x= 
			    this.ctx.moveTo(0, 0);
			    this.ctx.lineTo(this.W, 0);
			    this.ctx.lineTo(this.W, this.S);
			    this.ctx.lineTo(0, this.L);
			    this.ctx.closePath();
			    this.ctx.clip();
			    this.ctx.drawImage(
			    	this.images[this.idx], 
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height, -(this.timeline[count1]*this.W), 0, this.W, this.H);
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height, -(this.timeline[count1]*this.W)-this.W, 0, this.W, this.H);
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	-(this.timeline[count2]*this.W), 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,
			    	-(this.timeline[count2]*this.W)-this.W, 0, this.W, this.H
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	-(this.timeline[count3]*this.W), 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[prev_idx], 
			    	0, 0, this.images[prev_idx].width, this.images[prev_idx].height,
			    	-(this.timeline[count3]*this.W)-this.W, 0, this.W, this.H
			    );
	    		break;
	    }
	    
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){
		setTimeout(function (){
			self.PrevImage(
				prev_idx, 
				count1<120? count1 + self.plus_value: count1, 
				count1>12&&count2<120? count2 + self.plus_value: count2, 
				count1>24? count3 + self.plus_value: count3
			);
		}, 1000/this.FPS);//1초당 60번 돌아감
	}else{
		this.slideEnd(prev_idx)
	}
}
Slider.prototype.NextImage= function (next_idx, count1, count2, count3){
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	(this.timeline[count1]*this.W), 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,
			    	(this.timeline[count1]*this.W)+this.W, 0, this.W, this.H
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	(this.timeline[count2]*this.W), 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,
			    	(this.timeline[count2]*this.W)+this.W, 0, this.W, this.H
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	(this.timeline[count3]*this.W), 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[next_idx], 
			    	0, 0, this.images[next_idx].width, this.images[next_idx].height,
			    	(this.timeline[count3]*this.W)+this.W, 0, this.W, this.H
			    );
	    		break;
	    }
	    
	    this.ctx.restore();
	}
	var self= this;
	if(count3<120){
		setTimeout(function (){
			self.NextImage(
				next_idx, 
				count1<120? count1 + self.plus_value: count1, 
				count1>12&&count2<120? count2 + self.plus_value: count2, 
				count1>24? count3 + self.plus_value: count3
			);
		}, 1000/this.FPS);
	}else{
		this.slideEnd(next_idx)
	}
}
Slider.prototype.MoveImage = function(tg, count1, count2, count3) {
	
	if(this.idx==tg)
		return this.isAnimated=false;
	var back= this.idx>tg;
	for(var i=0; i<9; i++){
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	back? -x :x, 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,
			    	back? -x - this.W :x + this.W, 0, this.W, this.H
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	back? -x: x, 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,
			    	back? -x - this.W: x + this.W, 0, this.W, this.H
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
			    	0, 0, this.images[this.idx].width, this.images[this.idx].height,
			    	back? -x: x, 0, this.W, this.H
			    );
			    this.ctx.drawImage(
			    	this.images[tg], 
			    	0, 0, this.images[tg].width, this.images[tg].height,
			    	back? -x - this.W: x + this.W, 0, this.W, this.H
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
		this.slideEnd(tg);
	}
};
Slider.prototype.thumbnail= function (){//draw first image
	this.ctx.drawImage(
    	this.images[0], 
    	0, 0, this.images[0].width, this.images[0].height,//image의 위치
    	this.timeline[0]*this.W, 0, this.W, this.H
    );
}