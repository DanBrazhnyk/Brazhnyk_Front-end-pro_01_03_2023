const sum = (a,b)=>
{ if(b!==undefined)
    {return a+b}
    else{
    return function(b)
    {return a+b;}   
}}
export {sum}