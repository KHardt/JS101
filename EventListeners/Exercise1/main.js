//button1:
function handlerFunction () {
    document.getElementById("flight").className = "enabled"
}
document.querySelector("#activate-flight").addEventListener("click", handlerFunction)

//button2:
function handlerFunction2 () {
    document.getElementById("mindreading").className = "enabled"
}
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunction2)

//button3:
function handlerFunction3 () {
    document.getElementById("xray").className = "enabled"
}
document.querySelector("#activate-xray").addEventListener("click", handlerFunction3)

//all buttons enabled:
nodeList = document.querySelectorAll(".power")
function enableAll () {
//document.querySelectorAll(".power").className = "enabled"
    for (let i = 0; i < nodeList.length; i ++) {
        let item = nodeList[i];
    if (item.className = "disabled") {
        item.className = "enabled"
    }
}
}
document.querySelector("#activate-all").addEventListener("click", enableAll)

//disable all:
function disableAll () {
    //document.querySelectorAll(".power").className = "enabled"
        for (let i = 0; i < nodeList.length; i ++) {
            let item = nodeList[i];
        if (item.className = "enabled") {
            item.className = "disabled"
        }
    }
    }
document.querySelector("#deactivate-all").addEventListener("click", disableAll)



