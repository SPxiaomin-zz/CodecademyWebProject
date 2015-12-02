# Project1 CSS Buttons

## 项目操作步骤

- 安装 express 模块: express morgan ejs
- 编写 app.js 文件，编写 routes/index.js 文件，编写 views/error.html 文件
- 安装 gulp 插件: gulp gulp-watch gulp-livereload gulp-plumber gulp-less gulp-minify-css gulp-rename
- 编写 gulpfile.js 文件

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
        
