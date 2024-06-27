document.getElementById("btn").addEventListener("click",

function ()
{
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(username=="abcd" && password=="1234")
    {
        window.location.href = "main-index.html";
        document.getElementById("username").innerHTML="";
        document.getElementById("password").innerHTML="";
    }
    else
    {
        alert("Invalid username or password. Please try again.");
        document.getElementById("username").innerHTML="";
        document.getElementById("password").innerHTML="";
    }
});