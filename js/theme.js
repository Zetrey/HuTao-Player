var root = document.querySelector(":root");
var themecolor = 0;     //定义默认颜色
const tip = {
    t1: document.getElementById('cldot1'),
    t2: document.getElementById('cldot2'),
    t3: document.getElementById('cldot3')
}
const inf = {
    i1: document.getElementById('cli1'),
    i2: document.getElementById('cli2'),
    i3: document.getElementById('cli3')
}
function themeColor(x = 0) {
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
        }
        else {      //展开更多颜色
            box[0].style.height = '200px';
            mb.style.opacity = 0.7;
            cs[themecolor].style.border = 'none';
            themecolor = x;
        }
        switch (x) {        //修改主题色
            case 0: root.style.setProperty("--h", "3");
                root.style.setProperty("--w", "25%");
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
function infUpDate() {   //信息更新
    var hwb = {
        h: getComputedStyle(root).getPropertyValue('--h'),
        w: getComputedStyle(root).getPropertyValue('--w'),
        b: getComputedStyle(root).getPropertyValue('--b')
    }
    inf.i1.innerHTML = hwb.h + 'deg';
    inf.i2.innerHTML = hwb.w;
    inf.i3.innerHTML = hwb.b;
}
var darkmod = false;    //定义当前是否为暗色模式
function darkMod() {
    let bg = document.getElementsByClassName('dkmod-bt');
    let dot = document.getElementById('dkmod-bt-dot');
    if (darkmod == false) {
        darkmod = true;
        bg[0].style['background-color'] = 'var(--theme-color-08)';
        dot.style.left = '18px';
        document.documentElement.dataset.theme = 'dark';
    }
    else {
        darkmod = false;
        bg[0].style['background-color'] = 'var(--theme-gray)';
        dot.style.left = '0px';
        document.documentElement.dataset.theme = null;
    }
}
let btico = document.getElementsByClassName('music-button-path');

let boxh = document.getElementsByClassName('color-line-shaderh'),
    boxw = document.getElementsByClassName('color-line-shaderw'),
    boxb = document.getElementsByClassName('color-line-shaderb');

function mousePos(x, element) {
    var rect = element.getBoundingClientRect();
    var rx = x - rect.left;
    return rx;
}
function elementWidth(element) {
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
    var hwb = {
        h: getComputedStyle(root).getPropertyValue('--h'),
        w: getComputedStyle(root).getPropertyValue('--w'),
        b: getComputedStyle(root).getPropertyValue('--b')
    }
    var white = parseInt(hwb.w);
    var black = parseInt(hwb.b);
    var adv = document.getElementById('adv1')//建议
    if (white >= (0.6 * black) && white >= 75 && black <= 35) {
        for (i = 0; i < 6; i++) {
            btico[i].style.fill = '#00000066';
        }
        if (darkmod == false) {
            adv.style.color = '#3b3b3b';
        }
        else {
            adv.style.color = 'var(--theme-bg-10)';
        }
    }
    else {
        for (i = 0; i < 6; i++) {
            btico[i].style.fill = '#fff';
        }
        if (darkmod == true && black > 45) {
            adv.style.color = '#fff';
        }
        else {
            adv.style.color = 'var(--theme-bg-10)';
        }
    }
}
