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

        - 使用 DOM `this.style.width = this.offsetWidth [+-] 10 + "px";` 和 setInterval clearInterval 产生动画效果
        
    - 编写 home 页面
    
    


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

    - 学习资料 <http://www.cnblogs.com/jilleanwong/archive/2008/09/22/1295783.html>
    
