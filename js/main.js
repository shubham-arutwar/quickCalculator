var total = 0, val, x = true;
var arr=[];

function calc(val) {
    if (x == true) {
        total = total + val;
    } else {
        total = total - val;
    }
    (x == true) ? arr.push(`+ ${val}`) : arr.push(`- ${val}`); //arr=[`+ ${val}`,...arr]
    display(total);
    history();
}

function clr() {
    total = 0;
    arr = [];
    display(total);
    history();
}

function sw() {
    if (x == true) {
        x = false;
    } else {
        x = true;
    }
    display(x)    
}

function display(num) {
    document.querySelector("#result").innerHTML = num;
}

function history(num) {
    document.querySelector("#history").innerHTML = arr;
    console.log(arr);
}