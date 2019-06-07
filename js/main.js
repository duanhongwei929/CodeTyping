/*
    js两大功能 1、操作页面 2、ajax
*/


/*
var text = 'body{color:red;}';
var ccc = Prism.highlight(text,Prism.languages.css)
console.log(ccc)

*/

//------------------------------------------
var result = `
    /*
    用代码的形式来写出个人介绍
    */
    #code{
        border:1px dashed #999;
        padding:10px
    }
    *{
       transition:all 0.1s;
    }
    html{
        background:rgba(222,222,222,1);
        font-size:14px;
    }
    /*现在做高亮*/
    .token.selector{
        color:#690;
    }
    .token.selector{
        color:#905;
    }
    .token.function{
        color:#DD4A68;
    }
    /* 加 3D 效果 */
`
var n = 0
var id = setInterval(()=>{
    n += 1

/*

code.innerHTML = result.substring(0,n) // result.slice() 也可以
code.innerHTNL = Prism.highlight(code.innerHTML,Prism.languages.css,'css');
styleTag.innerHTML = result.substring(0,n)

*/

//以下内容必须要有 可以背下来

code.innerHTML = result.substring(0, n)
code.innerHTNL =
    Prism.highlight(code.innerHTML, Prism.languages.css);
    styleTag.innerHTML = result.substring(0, n)
        if(n >= result.length){
            window.clearInterval(id)
        }
},10)


//$(this).attr("class",'line-numbers '+lan_class);













