// const body=document.body;
// console.log(body);

// const div=document.querySelector.body.div;
// const div=document.querySelector("div");

// const strong = document.createElement('strong')

// strong.innerText = "Hello"

// div.append(strong)

// div.innerHTML="<strong>suresh adhikari</strong>";
// console.log(div);




//tasks
// const COLOR =["red", "orange", "black", "pink"];

// function clickToChange(){
//     document.querySelector('#s').remove();
//     // console.log(a);
//     setInterval(()=>{
//         let randomNumber = Math.floor(Math.random()*3);
//         // console.log(randomNumber);
//          var colorName = COLOR[randomNumber];
//         document.querySelector("#p").style.backgroundColor =  colorName;
//     }, 3000);

// }


// const a = document.createElement('span');
// const b=document.createTextNode('span element');
// a.appendChild(b);
// console.log(a,b);

//bich maa haleko value with element

// function onMyClick() {
//     const a=document.createElement('span');
// const b=document.createTextNode('software company');
// const div=document.querySelector("div");
// div.append(a,b);
// console.log(a,b, div);
// alert("hello");}



// window.onload=function(){
//     onGetNotes();
// };
// let NOTE_KEY='_note_value';
// let multiple_notes=['']; //declaring array for saving multiple notes
// function onAddNote(){
//     let myNote=document.getElementById('note').value;
//     multiple_notes.push(myNote);
//     localStorage.setItem(NOTE_KEY, multiple_notes);
//     onGetNotes();
// }

// function onGetNotes(){
//    let getdata= localStorage.getItem(NOTE_KEY);
//    document.getElementById('print-here').innerText=getdata;
// }


window.onload=function(){

onGetNotes();


};

let MY_KEY='_note';
let multipleNotes=localStorage.getItem(MY_KEY)?
JSON.parse(localStorage.getItem(MY_KEY)):[];


function onAddNote(){
   let myNote= document.getElementById('note').value;
   console.log(myNote);
    let userNote={};
    userNote.value=myNote;
    userNote.date=new Date();
    userNote.id=new Date().getTime(); //id is set as time
    multipleNotes.push(userNote);
   localStorage.setItem(MY_KEY,JSON.stringify(multipleNotes));
    document.getElementById('note').value='';
    onGetNotes();
    // onAutoReload();
    // onSaveTask();

}

function onGetNotes(){
    let my_notes_html='';
    let Note=multipleNotes;
    Note.forEach(function (val, index){
        // console.log(Note);
        if (val) {
           document.getElementById('list').innerText="Your list";
            my_notes_html = my_notes_html +
                `<div>
            <input type="checkbox" id="isChecked" value="approval" onclick="validate()">
            <p>${val.date}</p>
            <p>${val.value}</p>
            
             <button id="btnEdit" onclick="onEditNote(` +index+ `)">Edit</button> 

            <button id="btnDelete" onclick="onDeleteNote(` +index+ `)">Delete</button> 
            
        </div>`
        }
        //needt to work
        // else if(){
        //
        //     document.getElementById('list').innerText;
        //  }
    });
    document.getElementById('print-here').innerHTML=my_notes_html;

}

function onDeleteNote(index){
    // console.log(index);
    // delete multipleNotes[index];
    multipleNotes.splice(index,1)
    localStorage.setItem(MY_KEY, JSON.stringify(multipleNotes));
    onGetNotes();
}

function onEditNote(index){
    let saveIndex=document.getElementById('saveIndex');
    let addButton=document.getElementById('btnAdd');
    let saveButton=document.getElementById('btnSave');
    saveIndex.value=index;
    let multipleNotes=localStorage.getItem(MY_KEY);
    let editedNotes= JSON.parse(multipleNotes);
    // console.log(editedNotes);
    // let textvalue=document.getElementById('print-here').value;
    // console.log(textvalue.value);
    let textvalue=editedNotes[index];
    // console.log(textvalue);
    document.getElementById('note').value=textvalue.value;
    addButton.style.display="none";
    saveButton.style.display="block";
    onGetNotes();

}

function onSaveTask(){

    // let addButton=document.getElementById('btnAdd');
    let saveButton=document.getElementById('btnSave');
    let editInput=document.getElementById('print-here').value;
    let myNote=document.getElementById('note');
    let multipleNotes=localStorage.getItem(MY_KEY);
    let editedNotes= JSON.parse(multipleNotes);
    let saveIndex=document.getElementById('saveIndex').value;

    editedNotes[saveIndex]=myNote.value;
    // console.log(saveIndex);
    // editedNotes.splice(saveIndex,1, editInput);
    localStorage.setItem(MY_KEY,JSON.stringify(editedNotes));
    // document.getElementById('print-here').innerHTML=editedNotes[saveIndex];
    onGetNotes();

}

// function onAutoReload(){
//     window.setTimeout(function () {
//         window.location.reload();
//     }, 100);
// }

// function validate(){
//     let cb=document.getElementById('isChecked').checked=true;
//
//     if (cb.checked == 1){
//         alert('j');
//
//     } else {
//         alert("You didn't check it");
//     }
// }





