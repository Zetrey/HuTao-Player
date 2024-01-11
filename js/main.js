const root = document.querySelector(":root");
const ThColor03 = getComputedStyle(root).getPropertyValue("--theme-color-03")

//显示音量滑块
function volumnShow(){

    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    var btnshader = document .getElementById('volumn-button');
    /*var box = document.getElementsByClassName('volumn-box');
    var width = box.offsetWidth;
    var x = 54;
    function raf(){
        if (width == 162){*/
            dock[0].style['grid-template-columns'] = '162px auto 162px';
            bar[0].style.padding = '17px 17px 17px 52px';
            dot.style.display = 'block';
            btnshader.style['box-shadow'] = '1px 3px 10px ' + ThColor03;
            /*return;
        }
        dock[0].style['grid-template-columns'] = '162px auto '+`${x}px`;
        x+=2;
        window.requestAnimationFrame(raf);
    }
    window.requestAnimationFrame(raf);*/
}
//隐藏音量滑块
function volumnHide(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    var btnshader = document.getElementById('volumn-button');
    dock[0].style['grid-template-columns'] = '162px auto 54px';
    bar[0].style['padding'] = '17px 17px 17px 21px';
    dot.style['display'] = 'none';
    btnshader.style['box-shadow'] = 'none';
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