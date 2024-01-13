let flag = false;
function moreColorShow(){
    var box = document.getElementsByClassName('setting-box-01');
    var bttext = document.getElementById('cmore')
    if (flag == false) {
        flag = true;
        box[0].style.height = '200px';
        bttext.innerText = '收起';
    }
    else{
        flag = false;
        box[0].style.height = '78px';
        bttext.innerText = '更多';
    }
}