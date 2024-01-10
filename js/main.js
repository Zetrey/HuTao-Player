function volumnAnimationOver(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    dock[0].style['grid-template-columns'] = '162px auto 164px';
    bar[0].style['padding'] = '17px 17px 17px 52px';
    dot.style['display'] = 'block';
}
function volumnAnimationOut(){
    var dock = document.getElementsByClassName('music-dock');
    var bar = document.getElementsByClassName('volumn-line-bar');
    var dot = document.getElementById('volumn-dot');
    dock[0].style['grid-template-columns'] = '162px auto 54px';
    bar[0].style['padding'] = '17px 17px 17px 21px';
    dot.style['display'] = 'none';
}