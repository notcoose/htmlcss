const paragraph = document.getElementById("test");
const button = document.getElementById("editButton");

button.addEventListener("click",
    function hideText(){
        paragraph.contentEditable = true;
        paragraph.style.backgroundColor = "#dddbdb";
});

//doesn't work ^