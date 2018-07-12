var canvas= document.getElementById("canvas");
var ctx= canvas.getContext('2d');
var img= document.querySelector("#logo");

ctx.drawImage(img,100,100);
canvas.translate();
ctx.save();
    ctx.rotateX(0);
    ctx.rotateY(0);
    ctx.rotateZ(20);

    ctx.getMatrix(ctxm);
var mask=document.querySelector('.mask');
var logo=document.querySelector('.mask>#starting_logo');
var play=document.querySelector('.mask>#play');
document.onreadystatechange= function () {
    console.log(document.readyState);
    switch (document.readyState) {
        case "interactive":

            break;
        case "complete":
            mask.style.filter= 'blur(0)';
            setTimeout(function (){
                play.style.visibility= 'unset';
            }, 600);
            break;
        default:
    }
};
