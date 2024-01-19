var root = document.querySelector(":root");     //获取root
let ThColor03 = getComputedStyle(root).getPropertyValue("--theme-color-03")//获取root下主题色[03]

var bodyItem = document.body;       //获取body

let player = document.getElementById('Player');                     //获取播放界面
let pad2 = document.getElementById('pad2');                         //获取边栏界面
let listshader = document.getElementById('list-shader');            //获取歌单面板
let settingshader = document.getElementById('setting-shader');      //获取设置面板
let hbtnshader = document.getElementsByClassName('button-shader');  //获取head按钮遮罩

let curve1 = document.getElementById('volumn-curve1');      //获取音量图标路径1
let curve2 = document.getElementById('volumn-curve2');      //获取音量图标路径2
let curve3 = document.getElementById('volumn-curve3');      //获取音量图标路径'静音'

let dock = document.getElementsByClassName('music-dock');       //获取dock
let bar = document.getElementsByClassName('volumn-line-bar');   //获取音量滑块线box
let vbtnshader = document.getElementById('volumn-button');      //获取音量（静音）按钮

let moreColorBox = document.getElementsByClassName('more-color-box');   //获取自定义颜色grid-box
let colorshowing = document.getElementsByClassName('color-showing');    //获取自定义颜色预览span

var sound = true;       //定义当前是否静音模式
var foldmod = false;    //定义当前是否折叠模式[***窗口宽度较低时***]
var foldmodbt = 'none';  //定义[折叠模式]下按钮切换状态

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

function bodyGrid(x) {              //更改body布局
    if (x == 0) {       //折叠布局[0]
        bodyItem.style['grid-template-columns'] = 'auto 0px';
        foldmod = true;
        hbtnshader[0].style.opacity = '0';
        player.style.opacity = '1';
    }
    else if (x == 1) {  //常规布局[1]
        bodyItem.style['grid-template-columns'] = '70% 30%';
        foldmod = false;
        hbtnshader[0].style.opacity = '1';
        player.style.opacity = '1';
        pad2.style.padding = '0px 10px 10px 0px';
    }
    else {//(x == 2)    //折叠显示列表布局[2]
        bodyItem.style['grid-template-columns'] = '0px auto';
        hbtnshader[0].style.opacity = '1';
        player.style.opacity = '0';
        pad2.style.padding = '0px 10px 10px 10px';
    }
}

function isFoldShow(x) {          //判断[设置][歌单]按钮在折叠模式下点击时的动作
    if (x == 'l' && foldmodbt != 'l') {
        bodyGrid(2);
    }
    else if (x == 's' && foldmodbt != 's') {
        bodyGrid(2);
    }
    else {
        bodyGrid(0);
        foldmodbt = 'none';
        return;
    }
    foldmodbt = x;
}

function settingShow() {        //切换为设置面板
    listshader.style.display = 'none';
    settingshader.style.display = 'block';
    hbtnshader[0].style.left = '51.5px';
    if (foldmod == true) {     //判断是否折叠模式
        isFoldShow('s');
    }
}

function listShow() {          //切换为歌单面板
    listshader.style.display = 'block';
    settingshader.style.display = 'none';
    hbtnshader[0].style.left = '12.5px';
    if (foldmod == true) {     //判断是否折叠模式
        isFoldShow('l');
    }
}

function hideColorShowing(x) {      //[隐藏·显示]自选颜色预览span
    if (x == 0) {
        moreColorBox[0].style['grid-template-columns'] = 'auto 0px';
        colorshowing[0].style.left = '10px';
    }
    else {
        moreColorBox[0].style['grid-template-columns'] = 'auto 88px';
        colorshowing[0].style.left = '0px';
    }
}

function bodyPadding(x) {           //更改body两侧padding
    if (x == 0) {
        bodyItem.style.padding = '0';
    }
    else {
        bodyItem.style.padding = '0px 120px';
    }
}

function checkWindowWidth() {       //自适应浏览器窗口宽度
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth < 1320 && windowWidth >= 980) {
        bodyPadding(0);
        bodyGrid(1);
        if (windowWidth < 1120) {
            hideColorShowing(0);
        }
        else {
            hideColorShowing(1);
        }
    } else if (windowWidth < 980) {
        bodyPadding(0);
        bodyGrid(0);
        hideColorShowing(0);
    }
    else {
        bodyPadding(1);
        bodyGrid(1);
        hideColorShowing(1);
    }
}

checkWindowWidth();  //初始化时调用一次
window.addEventListener('resize', checkWindowWidth);
