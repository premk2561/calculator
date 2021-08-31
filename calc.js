let out = document.querySelector("#out"); // getting output div


function number(val)
{
    out.innerHTML += val;      // adding values to out div
}

function clc()
{ 
    out.innerHTML='';                 // clear screen function
}

function equalto()
{                                                   // equal to function
    out.innerHTML = eval(out.innerHTML);
}

function del()
{
    let val = out.innerHTML.length;                        // deleteting value in console one by one
    out.innerHTML=out.innerHTML.slice(0,(val-1));       
}