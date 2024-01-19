var root = document.querySelector(":root");     //获取root
let ThColor03 = getComputedStyle(root).getPropertyValue("--theme-color-03")//获取root下主题色[03]

let listshader = document.getElementById('list-shader');            //获取歌单面板
let settingshader = document.getElementById('setting-shader');      //获取设置面板
let hbtnshader = document.getElementsByClassName('button-shader');  //获取head按钮遮罩

let curve1 = document.getElementById('volumn-curve1');      //获取音量图标路径1
let curve2 = document.getElementById('volumn-curve2');      //获取音量图标路径2
let curve3 = document.getElementById('volumn-curve3');      //获取音量图标路径'静音'

let dock = document.getElementsByClassName('music-dock');       //获取dock
let bar = document.getElementsByClassName('volumn-line-bar');   //获取音量滑块线box
let vbtnshader = document.getElementById('volumn-button');      //获取音量（静音）按钮

var sound = true;       //定义当前是否静音模式

function volumnShow() {     //显示音量滑块
    dock[0].style['grid-template-columns'] = '162px auto 162px';
    bar[0].style.padding = '17px 17px 17px 52px';
    vbtnshader.style['box-shadow'] = '1px 3px 10px ' + ThColor03;
}

function volumnHide() {     //隐藏音量滑块
    dock[0].style['grid-template-columns'] = '162px auto 54px';
    bar[0].style['padding'] = '17px 17px 17px 21px';
    vbtnshader.style['box-shadow'] = 'none';
}

function soundOff() {       //静音模式
    if (sound == true) {
        curve1.style.display = 'none';
        curve2.style.display = 'none';
        curve3.style.display = 'block';
        sound = false;
    }
    else {
        curve1.style.display = 'block';
        curve2.style.display = 'block';
        curve3.style.display = 'none';
        sound = true;
    }
}

function settingShow() {        //切换为设置面板
    listshader.style.display = 'none';
    settingshader.style.display = 'block';
    hbtnshader[0].style.left = '51.5px';
}

function listShow() {          //切换为歌单面板
    listshader.style.display = 'block';
    settingshader.style.display = 'none';
    hbtnshader[0].style.left = '12.5px';
}