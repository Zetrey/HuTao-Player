var root = document.querySelector(":root");
var themecolor = 0;     //定义默认颜色
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
                let h = getComputedStyle(root).getPropertyValue('--h');
                let per1 = h / 3.6,
                    per2 = getComputedStyle(root).getPropertyValue('--w'),
                    per3 = getComputedStyle(root).getPropertyValue('--b');
                document.getElementById('cldot1').style.left = `${per1}` + '%';
                document.getElementById('cldot2').style.left = `${per2}`;
                document.getElementById('cldot3').style.right = `${per3}`;
                document.getElementById('cli1').innerHTML = h + 'deg';
                document.getElementById('cli2').innerHTML = per2;
                document.getElementById('cli3').innerHTML = per3;
                break;
        }
    }
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
    else{
        darkmod = false;
        bg[0].style['background-color'] = 'var(--theme-gray)';
        dot.style.left = '0px';
        document.documentElement.dataset.theme = null;
    }
}
let boxh = document.getElementsByClassName('color-line-shaderh'),
    boxw = document.getElementsByClassName('color-line-shaderw'),
    boxb = document.getElementsByClassName('color-line-shaderb');

function mousePos(x, element){
    var rect = element.getBoundingClientRect();
    var rx = x - rect.left;
    return rx;

}
function slideDot(hwb){
    var x = event.clientX,
        y = event.clientY;
    if(hwb=='h') {
        var px = mousePos(x, boxh[0]);
        document.getElementById('cldot1').style.left = px + 'px';
        movingDot();
    }
}
function movingDot(){
    document.getElementsByClassName('color-line-shaderh')[0].addEventListener('mousedown',function(){
        function handleMouseMove(x) {
            var px = mousePos(x, boxh[0]);
            document.getElementById('cldot1').style.left = mousePos(px) + 'px';
        }
        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove(event.clientX));
        }
        document.addEventListener('mousemove', handleMouseMove(event.clientX));
        document.addEventListener('mouseup', handleMouseUp());
    })
}