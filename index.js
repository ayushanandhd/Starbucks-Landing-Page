function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    document.querySelector('.circle').style.background = color;
}

function toggleMenu(){
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
}
