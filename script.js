let text=document.getElementById("text");

let textval=localStorage.getItem("textvalue");
if(textval!=="")
{
    text.innerText=localStorage.getItem("textvalue");

}
text.addEventListener('keyup',function()
{
    localStorage.setItem("textvalue",text.value);
    text.innerText=localStorage.getItem("textvalue");
})