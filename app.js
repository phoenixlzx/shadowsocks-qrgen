'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
    var serverAddr = $("#server-address").val();
    var serverPort = $("#server-port").val();
    var password = $("#password").val();
    var encryption = $("#encryption").val();

    if (serverAddr && serverPort && serverPort > 0 && password && encryption) {
        var origstr = encryption + ':' + password + '@' + serverAddr + ':' + serverPort;
        var b64str = utf8_to_b64(origstr);

        qrcode.makeCode('ss://' + b64str);
    } else {
        alert("Please fill all blanks.");
    }
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

$("#generate").click(function(event){
    event.preventDefault();
    manipulate();
});
