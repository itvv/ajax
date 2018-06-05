// ajax封装
function ajax(url, fnSuccess) {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    }
    else {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("SUCCESS!");
                fnSuccess(xhr.responseText);//成功的时候调用这个方法
            } else {
                console.log("FAILED!");
            }
        }
    };
}