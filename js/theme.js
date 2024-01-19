var root = document.querySelector(":root");     //获取root

let btico = document.getElementsByClassName('music-button-path');//获取dock按钮图标
let bg = document.getElementsByClassName('setting-bt');     //获取设置按钮背景
let dot = document.getElementsByClassName('setting-bt-dot') //获取设置按钮dot
let boxh = document.getElementsByClassName('color-line-shaderh'),
    boxw = document.getElementsByClassName('color-line-shaderw'),
    boxb = document.getElementsByClassName('color-line-shaderb');//获取颜色选择器滑块背景
let bgimg = document.getElementsByClassName('bg-box');      //获取背景图片 

const tip = {           //获取颜色选择器滑块dot
    t1: document.getElementById('cldot1'),
    t2: document.getElementById('cldot2'),
    t3: document.getElementById('cldot3')
}

const inf = {           //获取颜色选择器信息
    i1: document.getElementById('cli1'),
    i2: document.getElementById('cli2'),
    i3: document.getElementById('cli3')
}

var bgblur = true;      //定义当前是否背景模糊
var sdblur = false;     //定义当前是否遮罩模糊
var darkmod = false;    //定义当前是否暗色模式
var boxshadow = true;   //定义当前是否启用阴影
var themecolor = 0;     //定义当前预设颜色[0-6：红-粉]

function settingBt(flag, i) {   //更改设置按钮开关
    if (flag == true) {
        bg[i].style['background-color'] = 'var(--theme-color-08)';
        dot[i].style.left = '18px';
    }
    else {
        bg[i].style['background-color'] = 'var(--theme-gray)';
        dot[i].style.left = '0px';
    }
}

function bgBlur() {             //修改背景模糊
    if (bgblur == true) {
        bgblur = false;
        settingBt(false, 1);
        root.style.setProperty("--img-bg-blur", "0px");
        bgimg[0].style.transform = 'none';
    }
    else {
        bgblur = true;
        settingBt(true, 1);
        root.style.setProperty("--img-bg-blur", "20px");
        bgimg[0].style.transform = 'scale(1.05)';
    }
}

function sdBlur() {     //修改遮罩模糊
    if (sdblur == false) {
        sdblur = true;
        settingBt(true, 2);
        root.style.setProperty("--sd-filter-blur", "blur(10px)");
    }
    else {
        sdblur = false;
        settingBt(false, 2);
        root.style.setProperty("--sd-filter-blur", "none");
    }
}

function btIcoColor(flag) {     //修改dock按钮图标颜色
    if (flag == 'w') {
        for (i = 0; i < 7; i++) {
            btico[i].style.fill = '#fff';
        }
    }
    else {
        for (i = 0; i < 7; i++) {
            btico[i].style.fill = '#00000066';
        }
    }
}

function advFunction() {        //显示建议
    var hwb = {     //获取root内h，w，b
        h: getComputedStyle(root).getPropertyValue('--h'),
        w: getComputedStyle(root).getPropertyValue('--w'),
        b: getComputedStyle(root).getPropertyValue('--b')
    }
    var white = parseInt(hwb.w);
    var black = parseInt(hwb.b);
    var adv = document.getElementById('adv1')
    if (white >= (0.6 * black) && white >= 75 && black <= 35) {
        btIcoColor('b');
        if (darkmod == false) {
            adv.style.color = '#3b3b3b';
        }
        else {
            adv.style.color = 'var(--theme-bg-10)';
        }
    }
    else {
        btIcoColor('w');
        if (darkmod == true && black > 45) {
            adv.style.color = '#fff';
        }
        else {
            adv.style.color = 'var(--theme-bg-10)';
        }
    }
}

function darkMod() {    //修改暗色模式
    if (darkmod == false) {
        darkmod = true;
        settingBt(true, 0);
        document.documentElement.dataset.theme = 'dark';
    }
    else {
        darkmod = false;
        settingBt(false, 0);
        document.documentElement.dataset.theme = null;
    }
    advFunction();
}
function boxShadow() {
    if (boxshadow == true) {
        boxshadow = false;
        settingBt(false, 3);
        root.style.setProperty("--a", "0");
    }
    else {
        boxshadow = true;
        settingBt(true, 3);
        root.style.setProperty("--a", ".4");
    }
}

function infUpDate() {   //颜色选择器信息更新
    var hwb = {
        h: getComputedStyle(root).getPropertyValue('--h'),
        w: getComputedStyle(root).getPropertyValue('--w'),
        b: getComputedStyle(root).getPropertyValue('--b')
    }
    inf.i1.innerHTML = hwb.h + 'deg';
    inf.i2.innerHTML = hwb.w;
    inf.i3.innerHTML = hwb.b;
}

function themeColor(x = 0) {    //预设颜色选择器
    let box = document.getElementsByClassName('setting-box-01'),
        mb = document.getElementById('cmore'),
        cs = document.getElementsByClassName('cspan');
    if (x == themecolor) {      //判断是否重复点击
        return;
    }
    else {
        if (x < 7) {    //颜色边框
            cs[x].style.border = '3px solid var(--theme-negative-04)';
            if (themecolor != 7) {
                cs[themecolor].style.border = 'none';
            }
            else {
                box[0].style.height = '78px';
                mb.style.opacity = 1;
            }
            themecolor = x;
            var adv = document.getElementById('adv1')//建议
            adv.style.color = 'var(--theme-bg-10)';
            btIcoColor('w');
        }
        else {      //展开更多颜色
            box[0].style.height = '200px';
            mb.style.opacity = 0.7;
            cs[themecolor].style.border = 'none';
            themecolor = x;
        }
        switch (x) {        //修改主题色
            case 0: root.style.setProperty("--h", "3");
                root.style.setProperty("--w", "35%");
                root.style.setProperty("--b", "5%");
                break;
            case 1: root.style.setProperty("--h", "24");
                root.style.setProperty("--w", "28%");
                root.style.setProperty("--b", "0%");
                break;
            case 2: root.style.setProperty("--h", "48");
                root.style.setProperty("--w", "25%");
                root.style.setProperty("--b", "0%");
                break;
            case 3: root.style.setProperty("--h", "118");
                root.style.setProperty("--w", "27%");
                root.style.setProperty("--b", "12%");
                break;
            case 4: root.style.setProperty("--h", "228");
                root.style.setProperty("--w", "38%");
                root.style.setProperty("--b", "0%");
                break;
            case 5: root.style.setProperty("--h", "275");
                root.style.setProperty("--w", "33%");
                root.style.setProperty("--b", "3%");
                break;
            case 6: root.style.setProperty("--h", "337");
                root.style.setProperty("--w", "40%");
                root.style.setProperty("--b", "0%");
                break;
            case 7:     //点击更多颜色时修改滑块位置为当前主题色
                var hwb = {
                    h: getComputedStyle(root).getPropertyValue('--h'),
                    w: getComputedStyle(root).getPropertyValue('--w'),
                    b: getComputedStyle(root).getPropertyValue('--b')
                }
                let per1 = hwb.h / 3.6;
                tip.t1.style.left = `${per1}` + '%';
                tip.t2.style.left = `${hwb.w}`;
                tip.t3.style.right = `${hwb.b}`;
                infUpDate();
                break;
        }
    }
}

function mousePos(x, element) {         //返回鼠标与元素left的相对X坐标
    var rect = element.getBoundingClientRect();
    var rx = x - rect.left;
    return rx;
}

function elementWidth(element) {        //返回元素宽度
    var rect = element.getBoundingClientRect();
    var w = rect.width;
    return w;
}

function slideDot(hwb) {
    var x = event.clientX;
    var w = elementWidth(boxh[0]);
    if (hwb == 'h') {
        var px = mousePos(x, boxh[0]) - 2;
        tip.t1.style.left = px + 'px';
        var h1 = 360 * px / w;
        root.style.setProperty("--h", parseInt(h1));
        infUpDate();
    }
    else if (hwb == 'w') {
        var px = mousePos(x, boxw[0]) - 2;
        tip.t2.style.left = px + 'px';
        var w1 = px / w * 100;
        root.style.setProperty("--w", parseInt(w1) + '%');
        infUpDate();
    }
    else {
        var px = mousePos(x, boxb[0]) - 2;
        document.getElementById('cldot3').style.left = px + 'px';
        var b1 = (w - px) / w * 100;
        root.style.setProperty("--b", parseInt(b1) + '%');
        infUpDate();
    }
    advFunction();
}