var total = 0, val, x = true, arr=[];

function sw() {
    if (x == true) {
        x = false;
        display("#status","-");
    } else {
        x = true;
        display("#status","+");
    }   
}

function calc(val) {
    x ? total = total + val : total = total - val;

    (x == true) ? arr.push(`+ ${val}`) : arr.push(`- ${val}`); //arr=[`+ ${val}`,...arr]
    display("#result",total);
    history();
}

function display(divId,num) {
    document.querySelector(divId).innerHTML = num;
}

function history(num) {
    document.querySelector("#history").innerHTML = arr.join(" ");
}

function clr() {
    total = 0;
    arr = [];
    display("#result"," ");
    history();
}