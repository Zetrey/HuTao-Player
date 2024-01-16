
var root = document.querySelector(":root")

//显示音量滑块
function volumnShow(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var btnshader = document .getElementById('volumn-button');
    var ThColor03 = getComputedStyle(root).getPropertyValue("--theme-color-03")
    dock[0].style['grid-template-columns'] = '162px auto 162px';
    bar[0].style.padding = '17px 17px 17px 52px';
    btnshader.style['box-shadow'] = '1px 3px 10px ' + ThColor03;
}
//隐藏音量滑块
function volumnHide(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var btnshader = document.getElementById('volumn-button');
    dock[0].style['grid-template-columns'] = '162px auto 54px';
    bar[0].style['padding'] = '17px 17px 17px 21px';
    btnshader.style['box-shadow'] = 'none';
}
//静音
var sound = true;
function soundOff(){
    var curve1 = document.getElementById('volumn-curve1');
    var curve2 = document.getElementById('volumn-curve2');
    if (sound == true) {
        curve1.style.display = 'none';
        curve2.style.display = 'none';
        sound = false;
    }
    else{
        curve1.style.display = 'block';
        curve2.style.display = 'block';
        sound = true;
    }
}
//展示设置面板
function settingShow(){
    var listshader = document.getElementById('list-shader');
    var setshader = document.getElementById('setting-shader');
    var btnshader = document.getElementsByClassName('button-shader');
    listshader.style.display = 'none';
    setshader.style.display = 'block';
    btnshader[0].style.left = '51.5px';
}
//展示歌单面板
function listShow(){
    var listshader = document.getElementById('list-shader');
    var setshader = document.getElementById('setting-shader');
    var btnshader = document.getElementsByClassName('button-shader');
    listshader.style.display = 'block';
    setshader.style.display = 'none';
    btnshader[0].style.left = '12.5px';
}