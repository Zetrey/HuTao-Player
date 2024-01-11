
function volumnAnimationOver(fn){

    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    /*var box = document.getElementsByClassName('volumn-box');
    var width = box.offsetWidth;
    var x = 54;
    function raf(){
        if (width == 162){*/
            dock[0].style['grid-template-columns'] = '162px auto 162px';
            bar[0].style.padding = '17px 17px 17px 52px';
            dot.style.display = 'block';
            /*return;
        }
        dock[0].style['grid-template-columns'] = '162px auto '+`${x}px`;
        x+=2;
        window.requestAnimationFrame(raf);
    }
    window.requestAnimationFrame(raf);*/

}
function volumnAnimationOut(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    dock[0].style['grid-template-columns'] = '162px auto 54px';
    bar[0].style['padding'] = '17px 17px 17px 21px';
    dot.style['display'] = 'none';
}

function settingshow(){
    var listshader = document.getElementById('list-shader');
    var setshader = document.getElementById('setting-shader');
    var btshader = document.getElementsByClassName('button-shader');
    listshader.style.display = 'none';
    setshader.style.display = 'block';
    btshader[0].style.left = '51.5px';
}

function listshow(){
    var listshader = document.getElementById('list-shader');
    var setshader = document.getElementById('setting-shader');
    var btshader = document.getElementsByClassName('button-shader');
    listshader.style.display = 'block';
    setshader.style.display = 'none';
    btshader[0].style.left = '12.5px';
}