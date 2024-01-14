let themecolor = 0;
function themeColor(x = 0) {
    var box = document.getElementsByClassName('setting-box-01');
    var mb = document.getElementById('cmore');
    var cs = document.getElementsByClassName('cspan');
    if (x == themecolor) {
        return;
    }
    else {
        if (x < 7) {
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
        else {
            box[0].style.height = '200px';
            mb.style.opacity = 0.7;
            cs[themecolor].style.border = 'none';
            themecolor = x;
        }
        var root = document.querySelector(":root");
        switch (x) {
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
            case 7:
                break;
        }
    }
}




let darkmod = false;
function darkMod() {
    var bg = document.getElementsByClassName('dkmod-bt');
    var dot = document.getElementById('dkmod-bt-dot');
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