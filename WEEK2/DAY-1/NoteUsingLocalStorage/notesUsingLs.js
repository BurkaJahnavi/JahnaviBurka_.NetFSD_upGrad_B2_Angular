function saveNote(){
    let note=document.getElementById("note").value;
    localStorage.setItem("myNote",note);
}
function loadNote(){
    let savedNote=localStorage.getItem("myNote");
    if(savedNote!==null){
        document.getElementById("note").value=savedNote;
    }
}
