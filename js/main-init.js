
// 把 code 写到 #code 和style 标签里
function writeCode(code){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML =
            Prism.highlight(code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = result.substring(0, n)

        if(n >= result.length){
            window.clearInterval(id)
            fn2()
            fn3(result)
        }
    },10)

}
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
    #code{
        transform:rotate(360deg);
    }
    /* 不玩了 我来介绍一下我自己吧 */
    /* 我需要一张白纸 */
    
    
`

/*

code.innerHTML = result.substring(0,n) // result.slice() 也可以
code.innerHTNL = Prism.highlight(code.innerHTML,Prism.languages.css,'css');
styleTag.innerHTML = result.substring(0,n)

*/

//以下内容必须要有 可以背下来


function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult) {
    var result = `
    #paper{
    width:100px;height:100px;
    background:red;
    }
    `
    var n = 0;
    var id = setInterval(()=>{
        n += 1
        //console.log(result.substring(0,n))
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
        styleTag.innerHTML = result.substring(0, n)
        if(n >= result.length){
            window.clearInterval(id)
        }
    },50)

}
