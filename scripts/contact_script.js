var comment_count=5;
/*
* validation function checks if the input values are valid and passes it to the add comment function.
* 
* 
* */
function validation(){
    comment_name=document.getElementById("comment-name").value;
    comment=document.getElementById("comment").value;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    if (name == null || name == "") {
        alert("Please Enter a valid Name");
        return;
    }
    if (email == null || email == "") {
        alert("Please Enter a valid Email");
        return;
    }
    if(comment_name == null || comment_name=="") {
        alert("Please Enter a valid Commenter's name.");
        return;
    }
    if(comment == null || comment== ""){
        alert("Please Enter a valid comment");
        return;
    }
    addcomment();

}
/*
* addcomment function creates the div element and inserts each comment decrementing as we keep 
* adding a comment. 
* 
* 
* */
   function addcomment(){
    var theButton= document.getElementById("remove");
    theButton.classList.remove("disabled");
    theButton.classList.add("enabled");
    theButton.innerHTML="Delete Comments";
    document.getElementById('remove').disabled=false;
    if(comment_count==0){
        alert("Only 5 comments allowed");
        return;
    }
    var d = new Date();
    var n = d.toDateString();
    var theDiv = document.getElementById("Comments");
    var currentdiv = document.createElement("div");
    var comment_name_element=document.createElement("H4");
    var comment_element=document.createElement("P");
    var date_element= document.createElement("P");
    var line_break=document.createElement("BR");
    var comment_name = document.createTextNode(document.getElementById("comment-name").value);
    var comment= document.createTextNode(document.getElementById("comment").value);
    var date= document.createTextNode(n);
    currentdiv.classList.add("row");
    date_element.classList.add("text-right");
    if(comment_count%2==1)
    {
    currentdiv.classList.remove("white");
    currentdiv.classList.add("black");
    }
    else{
    currentdiv.classList.remove("black");
    currentdiv.classList.add("white");
    }
    comment_name_element.appendChild(comment_name);
    date_element.appendChild(date);
    comment_element.appendChild(comment);
    theDiv.appendChild(comment_name_element);
    theDiv.appendChild(date_element);
    theDiv.appendChild(comment_element);
    theDiv.appendChild(line_break);
    theDiv.appendChild(currentdiv);
       console.log(document.getElementById("name").value);
       console.log(n)
    comment_count=comment_count-1;
   }

   /**
    * 
    * removecomments will remove all the comments which were enetered uptil now.
    * 
    * 
   */
  function removecomments(){
    comment_count=5;
    var theButton= document.getElementById("remove");
    theButton.classList.remove("disabled");
    document.getElementById("Comments").innerHTML = "";
    document.getElementById('remove').disabled=true;
  }