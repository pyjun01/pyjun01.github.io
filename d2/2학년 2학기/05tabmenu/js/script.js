<<<<<<< HEAD
window.onload= function (){
	var btn= document.querySelectorAll(".MenuList>li");
	for(var t of btn){
		t.onclick= function (e){
			if(e.target.classList.value=="")
=======
var a;
window.onload= function (){
	var btn= document.querySelectorAll(".MenuList>li>a");
	for(var t of btn){
		console.log(t);
		t.onclick= function (e){
			a= t;
			if(this.parentNode.classList.value=="")
>>>>>>> 441709f7582881377a1a40eaec502264cdf3e496
				return;
			var focus= document.querySelector(".focus");
			if(focus!=null)
				focus.classList.remove("focus");
			
<<<<<<< HEAD
			this==focus? this.classList.remove("focus"): this.classList.add("focus");
=======
			this.parentNode==focus? this.parentNode.classList.remove("focus"): this.parentNode.classList.add("focus");
>>>>>>> 441709f7582881377a1a40eaec502264cdf3e496
		}
	}
}