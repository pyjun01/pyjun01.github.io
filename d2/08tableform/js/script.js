window.onload= function (){
	var input= document.querySelectorAll(".label-clear");
	for(var i=0; i<input.length;i++){
		if(input[i].value != ""){
			input[i].className= "label-clear not_empty";
		}else{
			input[i].className= "label-clear";
		}
		input[i].addEventListener("input", function (e){
			console.log(this.value);
			if(this.value != ""){
				this.className= "label-clear not_empty";
			}else{
				this.className= "label-clear";
			};
		});
		input[i].addEventListener("focus", function (e){
			console.log(this.value);
			if(this.value != ""){
				this.className= "label-clear not_empty";
			}else{
				this.className= "label-clear";
			};
		});
		input[i].addEventListener("blur", function (e){
			console.log(this.value);
			if(this.value != ""){
				this.className= "label-clear not_empty";
			}else{
				this.className= "label-clear";
			};
		});

	};
};