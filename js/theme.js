let flag1 = false;
function moreColorShow(){
    var box = document.getElementsByClassName('setting-box-01');
    if (flag1 == false) {
        flag1 = true;
        box[0].style.height = '200px';
    }
    else{
        flag1 = false;
        box[0].style.height = '78px';
    }
}

let flag2 = false;
function darkMod() {
    var bg = document.getElementsByClassName('dkmod-bt');
    var dot = document.getElementById('dkmod-bt-dot');
    if (flag2 == false) {
        flag2 = true;
        bg[0].style['background-color'] = 'var(--theme-color-08)';
        dot.style.left = '18px';
        document.documentElement.dataset.theme = 'dark';
    }
    else{
        flag2 = false;
        bg[0].style['background-color'] = 'var(--theme-gray)';
        dot.style.left = '0px';
        document.documentElement.dataset.theme = null;
    }
}