let pswd1El=document.getElementById("pswd1")
let pswd2El=document.getElementById("pswd2")
//let lngEl=document.getElementById("Lng").addEventListener("change")


let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let i=Math.floor(Math.random()*characters.length)

function password(){
pswd1El.textContent=""
pswd2El.textContent=""
for(let i=0;i<12; i++)
{
    let i=Math.floor(Math.random()*characters.length)
    pswd1El.textContent+=characters[i]
    pswd2El.textContent+=characters[i]
}
}