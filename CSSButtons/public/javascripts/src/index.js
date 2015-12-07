/* jshint browser:true,devel:true */

function addLoadEvent(newFunc) {
    var func = window.onload;

    if ( typeof func !== 'function' ) {
        window.onload = newFunc;
    } else {
        window.onload = function() {
            func();
            newFunc();
        };
    }
}


/*
function onmouseoverAnimation(anchors) {
    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onmouseover = function() {
            var flag = 1;
            var This = this;  //避免闭包中的 this 指针访问问题，我被坑了...
            clearInterval(This.time); //在 onmouseout 动画结束之前就 onmouseover 必须清除掉之前的 动画

            This.time = setInterval(function() {  //间歇调用的代码是在全局作用域中执行的，函数中的 this 的值在非严格模式下指向 window 对象，在严格模式下是 undefined
                This.style.width = This.offsetWidth + 10 + "px"; //typeof This.offsetWidth === 'number'
                if ( flag ) {
                    This.style.textAlign = "center"; //实现字体居中并随长度增长而移动的效果
                    flag = 0;
                }

                if ( This.offsetWidth >= 200 ) {
                    clearInterval(This.time);
                }
            }, 55);
        };
    }
}


function onmouseoutAnimation(anchors) {
    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onmouseout = function() {
            var This = this;
            clearInterval(This.time); //在 onmouseover 动画结束之前就 onmouseout 必须清除掉之前的 动画

            This.time = setInterval(function() {
                This.style.width = This.offsetWidth - 10 + "px";
                
                if ( This.offsetWidth <= 150 ) {
                    clearInterval(This.time);

                    This.style.width = "150px";
                    This.style.textAlign = "";
                }
            }, 55);
        };
    }
}
*/


function onmouseoverAnimation(anchors) {
    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onmouseover = function() {
            var flag = 1;
            var This = this; //解决闭包问题
            clearTimeout(This.timeoutId);

            var changeWidth = function() {
                This.style.width = This.offsetWidth + 10 + "px";

                if ( flag ) {
                    This.style.textAlign = "center";

                    flag = 0;
                }

                if ( This.offsetWidth < 200 ) {
                    This.timeoutId = setTimeout(changeWidth, 55);
                } else {
                    This.style.width = "200px";
                }
            };

            This.timeoutId = setTimeout(changeWidth, 55);
        };
    }
}

function onmouseoutAnimation(anchors) {
    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onmouseout = function() {
            var This = this; //解决闭包问题
            clearTimeout(This.timeoutId);
            
            var changeWidth = function() {
                This.style.width = This.offsetWidth - 10 + "px";

                if ( This.offsetWidth > 150 ) {
                    This.timoutId = setTimeout(changeWidth, 55);
                } else {
                    This.style.width = "150px";
                    This.style.textAlign = "";
                }
            };

            if ( This.offsetWidth > 150 ) {
                This.timeoutId = setTimeout(changeWidth, 55);
            }
        };
    }
}


function displayNone(buttons, exceptElement) {
    for ( var i=0; i<buttons.length; i++ ) {
        if ( buttons[i] !== exceptElement ) {
            buttons[i].style.display = "none";
        }
    }
}

function loadButton(anchors) {
    var welcome = document.getElementById("welcome");
    var orange = document.getElementById("orange");
    var green = document.getElementById("green");
    var red = document.getElementById("red");

    var buttons = [welcome, orange, green, red];

    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onclick = function(event) {
            if ( event && event.preventDefault ) { //阻止浏览器默认行为
                event.preventDefault();
            } else {
                window.event.returnValue = false;
            }

            var idAttribute = this.getAttribute("id");

            switch(idAttribute) {
                case "home":
                    displayNone(buttons, welcome);
                    welcome.style.display = "inline-block";
                    break;
                case "submit":
                    displayNone(buttons, orange);
                    orange.style.display = "inline-block";
                    break;
                case "right":
                    displayNone(buttons, green);
                    green.style.display = "inline-block";
                    break;
                case "fault":
                    displayNone(buttons, red);
                    red.style.display = "inline-block";
                    break;
            }
        };
    }
}


function menuAnimation() {
    var index = document.getElementById("indexMenu");
    var anchors = index.getElementsByTagName("a");

    onmouseoverAnimation(anchors);
    onmouseoutAnimation(anchors);

    loadButton(anchors);
}

addLoadEvent(menuAnimation);


