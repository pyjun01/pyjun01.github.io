var a;
window.onload= function (){
	var btn= document.querySelectorAll(".MenuList>li>a");
	for(var t of btn){
		console.log(t);
		t.onclick= function (e){
			a= t;
			if(this.parentNode.classList.value=="")
				return;
			var focus= document.querySelector(".focus");
			if(focus!=null)
				focus.classList.remove("focus");
			
			this.parentNode==focus? this.parentNode.classList.remove("focus"): this.parentNode.classList.add("focus");
		}
	}
}