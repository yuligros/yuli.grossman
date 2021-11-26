var imgs = [
        "images/girl.PNG",
        "images/pug.jpg",
        "images/yuli.png"
];
var i = 0;

function stopMotion(){
    setTimeout(function(){
        document.getElementById("rotate_yuli").src = imgs[i];
        i++;
        if(i<imgs.length){
            stopMotion();
        }
        else {
            i = 0;
        }
    }, 2000);
}







