console.log("Hello and welcome to this MAgical note app project");

showNotes();

let addbtn = document.getElementById("addBtn");
addbtn.addEventListener('click' , function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addTxt.value);
    localStorage.setItem("notes" , JSON.stringify(notesobj));
    addTxt  = "";
    console.log(notesobj);
    showNotes();
})

//function to show the notes

function showNotes()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class = "card-Text">${element}</p>
          <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary"> Delete Note</button>
        </div>
      </div> `;   
    });

    let notesElem = document.getElementById("notes");
    if(notesobj.length != 0)
    {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing have to shown . Use add note block to add your note`;
    }
}


//function to delete the node.
function deleteNote(index)
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    
    notesobj.splice(index,1);
    localStorage.setItem("notes" , JSON.stringify(notesobj));
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    inputVal = search.value;
    console.log('input event fired!');
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("p")[0].innerText;
       
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
            }
        else{
                element.style.display = "none";
            }
    })
    
})