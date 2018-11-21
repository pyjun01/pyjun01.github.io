window.onload= _ =>{
	let Q= document.querySelectorAll(".faq_box h2");
	for(let tag of Q){
		tag.addEventListener("click", function (){
			this.nextElementSibling.classList.toggle("focus");
		});
	}
	let all= document.querySelector(".faq_box>.head>.click");
	all.addEventListener("click", function (){
		let focus= document.querySelectorAll(".focus");
		for(let tag of focus){
			tag.classList.remove("focus");
		}
	});
}