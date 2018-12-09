window.onload= function (){
	var btn= document.querySelectorAll(".MenuList>li");
	for(var t of btn){
		t.onclick= function (e){
			if(e.target.classList.value=="")
				return;
			var focus= document.querySelector(".focus");
			if(focus!=null)
				focus.classList.remove("focus");
			
			this==focus? this.classList.remove("focus"): this.classList.add("focus");
		}
	}
}