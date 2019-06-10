var canvas= document.getElementById("root");
var ctx= canvas.getContext('2d');
ctx.lineCap= "round";
ctx.fillStyle= "#212529";
ctx.strokeStyle= "#868e96";
var g=2.4;
var arc_location= [
    {left:16,top:20},
    {left:80,top:34},
    {left:108,top:66},
    {left:142,top:102},
    {left:234,top:129},
    {left:208,top:176},
    {left:134,top:147},
    {left:142,top:102},
];
arc_location.map(v=>{
    return (
        v.left= v.left*g+150,
        v.top= v.top*g
    )
});
arc_location.forEach((v,n) =>{
    ctx.beginPath();
    try{
        ctx.moveTo(arc_location[n-1].left,arc_location[n-1].top);
    }catch(e){}
    ctx.lineTo(v.left,v.top);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    try{
        ctx.arc(arc_location[n-1].left,arc_location[n-1].top, 5 ,0,2*Math.PI);
    }catch(e){}
    ctx.fill();
    ctx.arc(v.left,v.top, 5 ,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
});

// ctx.beginPath();
// canvas.addEventListener("click", function (e){
//     var rect= canvas.getBoundingClientRect();
//     var left= e.offsetX-rect.left;
//     var top=  e.offsetY-rect.top;
//
//     location_array.push({
//         left:left,
//         top:top
//     });
//
//     if(first){
//         first= !first;
//     }else{
//         ctx.lineTo(left,top);
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.arc(location_array[location_num-1].left,location_array[location_num-1].top, 10 ,0,2*Math.PI);
//         ctx.fill();
//         ctx.closePath();
//
//         ctx.beginPath();
//     }
//     ctx.arc(left,top, 10 ,0,2*Math.PI);
//     ctx.fill();
//     ctx.moveTo(left,top);
//
//     location_num++;
// });
