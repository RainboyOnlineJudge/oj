/*============================================================================
* express 网站编写
*
*=============================================================================*/

var express = require('express');
var favicon = require('serve-favicon');

var app = express();


/* == 插件 */

app.use(favicon(__dirname+'/public/favicon.ico'));

/* == 插件  end*/


var router = express.Router();

router.get('/',function(req,res,next){
    res.end('Hello world! express!');
});

app.use('/',router);


app.listen(3000,function(err){
    if(err)
        console.log(err);
    else
        console.log('app is listening at port 3000');
})

