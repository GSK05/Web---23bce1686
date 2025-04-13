function fn()
{
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("c").value);
    let total= (a*10)+(b*5);
    let c="₹";
    c=String.fromCharCode(8377);
    document.getElementById("r").value=c+" "+total;
}