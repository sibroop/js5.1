
function calcCircleArea(r){
    return r * r * Math.PI;
}

document.getElementById("circle-area1").innerHTML = calcCircleArea(7,20);
document.getElementById("circle-area2").innerHTML = calcCircleArea(1.5);
document.getElementById("circle-area3").innerHTML = calcCircleArea(20);