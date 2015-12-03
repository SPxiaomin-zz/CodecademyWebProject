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


function onmouseoverAnimation(anchors) {
    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onmouseover = function() {
            var flag = 1;
            var This = this;  //避免闭包中的 this 指针访问问题，我被坑了...
            clearInterval(This.time); //在 onmouseout 动画结束之前就 onmouseover 必须清除掉之前的 动画

            This.time = setInterval(function() {
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
    var buttons = [welcome, orange];

    for ( var i=0; i<anchors.length; i++ ) {
        anchors[i].onclick = function(event) {
            event.preventDefault();

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
