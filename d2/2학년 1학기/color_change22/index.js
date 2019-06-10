function Hex2rgb(hex){
    var regExp = /[^(0-9a-fA-F)]/gi;
    var t = hex.replace(regExp, "");

    if(t.length===3){
        var r= (parseInt(t[0], 16)*16)+parseInt(t[0], 16);
        var g= (parseInt(t[1], 16)*16)+parseInt(t[1], 16);
        var b= (parseInt(t[2], 16)*16)+parseInt(t[2], 16);
    }else if(t.length===6){
        var r= (parseInt(t[0], 16)*16)+parseInt(t[1], 16);
        var g= (parseInt(t[2], 16)*16)+parseInt(t[3], 16);
        var b= (parseInt(t[4], 16)*16)+parseInt(t[5], 16);
    }
    var rgb= "rgb("+ r +", "+ g +", " +b+ ")";
    return rgb;
}

function rgb2Hex(rgb){
    var regExp= /[^0-9,]/gi;
    var t = rgb.replace(regExp, "").split(',');

    var h1=Number(t[0]).toString(16);
    var h2=Number(t[1]).toString(16);
    var h3=Number(t[2]).toString(16);
    return ("#"+h1+h2+h3);
}
