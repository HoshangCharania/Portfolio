var a = document.getElementById("Soccer");
a.style.display = "none";
var b = document.getElementById("Programming");
b.style.display = "none";
var c = document.getElementById("Gaming");
c.style.display = "none";
/** 
 * getHobby function
 * @param int hobby 
 * @return null
 * 
 * It is used to display or hide the hobby description and image, based on the id provided.
 * 
 * 
*/
function getHobby(hobby){
if(hobby==1){
    var x = document.getElementById("Soccer");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
else if(hobby==2){
    var x = document.getElementById("Programming");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
if(hobby==3){
    var x = document.getElementById("Gaming");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
}