# Project1 CSS Buttons

## 项目操作步骤

- 安装 express 模块: express morgan ejs

    - 学习 morgan 模块

- 编写 app.js 文件，编写 routes/index.js 文件，编写 views/error.html 文件
- 安装 gulp 插件: gulp gulp-watch gulp-livereload gulp-plumber gulp-less gulp-minify-css gulp-autoprefixer gulp-rename
- 编写 gulpfile.js 文件
- 编写 views/index.html 和 public/stylesheets/src/index.less 文件
    
    - 解决 div 标签的水平居中问题，和其中内容的水平和垂直居中问题

- 突然灵机一动，使用首页创建导航栏，链接到各个按钮页面，改写 views/index.html 文件，创建 views/header.html views/footer.html views/submit.html views/right.html views/fault.html 文件

    - 使用 `<% include header.html %>` 和 `<% include footer.html>` 实现代码的复用
    - 使用 views/index.html 文件链接到 views/submit.html views/right.html views/fault.html

- 灵机又一动，使用首页创建导航，并使用 DOM 操作技术动态修改内容，结合 css3 动画实现酷炫的效果
    
    - 安装 gulp 插件 gulp-jshint gulp-uglify 并改写 gulpfile.js 文件
    - 编写首页导航

        - 使用 DOM `this.style.width = this.offsetWidth [+-] 10 + "px";` 和 `setInterval` `clearInterval` 根据 onmouseover onmouseout 产生动画效果
        
    - 编写 home 页面，通过点击目录的不同链接，使用 dom 操作 `display` 属性并结合 css3 的动画实现不同内容的展现
    - 出现大量代码重复，深入学习 `LESS` ，并对代码进行重构
    - 偶然发现导航的动画可以通过 `transition` 和 `:hover` 达到同样的效果，不过还是不改代码了，因为写目录动画时的 js 代码可以复习相当重要的 js 知识点
    - 改写 `setInterval clearInterval` 为 `setTimeout clearTimeout` ， 原因是如果使用 `setInteravl` 的话，后一个间歇调用可能会在前一个间歇调用结束之前被调用，`更加推荐使用 setTimeout`
    
## 学习总结

- express 插件 morgan 学习总结

    - 作用: HTTP request logger middleware for node.js
    - API:
    
            var logger = require('morgan');
            morgan(format, options);  
            //options 可以省略，
            //format 我使用的是 dev - Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.      
            :method :url :status :response-time ms - :res[content-length]
    
    - 使用:
    
        var logger = require('morgan');
        app.use(logger('dev'));
        
- div 居中问题

    - div 水平居中问题解决方案
    
        - 当 div `display: inline-block` 的时候，要在 `父元素` 使用 `text-align: center` 方可居中
        - 当 div `display: block` 的时候，在 `本身` 使用 `margin: 0 auto` 即可进行居中
        
    - div 内容的水平、垂直居中问题解决方案
    
        - 水平居中: 在 div 设置 `text-align: center`
        - 垂直居中: 设置 div 的 `height` 和 `line-height` 相等
        
- 导航条制作

    - offsetWidth 
        
        - 学习资料:<http://www.cnblogs.com/jilleanwong/archive/2008/09/22/1295783.html>
        - 定义: 指的是当前元素的宽度， `width + padding + border + margin`
        - 返回值类型: `number`
    
    - JavaScript 停止冒泡 和 阻止浏览器默认行为 
    
        - 学习资料: <http://caibaojian.com/javascript-stoppropagation-preventdefault.html>
        - 首先是取得事件（两种方式）:
        
            1. event（传入函数的参数，临时存在的）
            2. window.event（for IE）
            
            由上可知取得事件的代码如下:
            
                var e = event || window.event;
            
        - 取得事件的对象:
        
            1. event.target
            2. window.event.srcElement（for IE）
            
        - 停止冒泡
        
            - 取消方式
            
                1. event.stopPropagation()
                2. window.event.cancelBubble = true; （for IE）
        
            - 代码
            
                    window.event ? (window.event.cancelBubble = true) : event.stopPropagation();
                
        - 阻止浏览器默认行为
        
            - 阻止方式
            
                1. event.preventDefault(); 或者 window.event.returnValue = false;
                2. 在函数中 `return false`
            
            - 代码
            
                    event ? event.preventDefault() : (window.event.returnValue = false);
                
    - setTimeout setInterval 调用的代码是在 `全局环境` 下执行的，因此函数中的 `this` 的值在非严格模式下指向的是 `window` 对象，在严格模式下是　`undefined`　。    

## 结束语

- 项目的学习地址: <https://www.codecademy.com/courses/web-beginner-en-XVV0A/0/1?curriculum_id=50b91eda28c2fb212300039e>
- 通过 codecademy 的东西激发了自己的想法，结合自己最近学习的 ECMAScript 和 DOM 对其进行了完善，真真正正的感受到了每天进步一点点积累起来的强大力量，连我自己都有点感到惊人，加油！！！
