window.onload = function () {
    onGetNotes();
};

let MY_KEY = '_note';
let multipleNotes = localStorage.getItem(MY_KEY) ?
    JSON.parse(localStorage.getItem(MY_KEY)) : [];

function onAddNote() {
    let myNote = document.getElementById('note').value;
    let userNote = {};
    userNote.value = myNote;
    userNote.date = new Date();
    userNote.id = new Date().getTime(); //id is set as time
    multipleNotes.push(userNote);
    localStorage.setItem(MY_KEY, JSON.stringify(multipleNotes));
    document.getElementById('note').value = '';
    onGetNotes(multipleNotes);
}

function onGetNotes(notes) {

    let MY_KEY = '_note';
    notes = localStorage.getItem(MY_KEY) ?
        JSON.parse(localStorage.getItem(MY_KEY)) : [];
    let my_notes_html = '';
    notes.forEach(function (val, index) {
        if (val) {
            document.getElementById('list').innerText = "Your list";
            my_notes_html = my_notes_html +
                `<div>
            <input type="checkbox" id="isChecked" value="approval" onclick="validate()">
            <p>${val.date}</p>
            <p>${val.value}</p>
             <button id="btnEdit" onclick="onEditNote(` + index + `)">Edit</button> 
            <button id="btnDelete" onclick="onDeleteNote(` + index + `)">Delete</button>
        </div>`
        }
    });
    document.getElementById('print-here').innerHTML = my_notes_html;

}

function onDeleteNote(index) {
    multipleNotes.splice(index, 1)
    localStorage.setItem(MY_KEY, JSON.stringify(multipleNotes));
    onGetNotes(multipleNotes);
}

function onEditNote(index) {
    let saveIndex = document.getElementById('saveIndex');
    let addButton = document.getElementById('btnAdd');
    let saveButton = document.getElementById('btnSave');
    saveIndex.value = index;
    let multipleNotes = localStorage.getItem(MY_KEY);
    let editedNotes = JSON.parse(multipleNotes);
    let textvalue = editedNotes[index];
    document.getElementById('note').value = textvalue.value;
    addButton.style.display = "none";
    saveButton.style.display = "block";
    onGetNotes(editedNotes);
}

function onSaveTask() {
    let MY_KEY = '_note';
    let notes = localStorage.getItem(MY_KEY) ?
        JSON.parse(localStorage.getItem(MY_KEY)) : [];
    let saveButton = document.getElementById('btnSave');
    let editInput = document.getElementById('print-here');
    let myNote = document.getElementById('note');
    let multipleNotes = localStorage.getItem(MY_KEY);
    let editedNotes = JSON.parse(multipleNotes);
    let saveIndex = document.getElementById('saveIndex').value;
    editedNotes[saveIndex].value = myNote.value;
    localStorage.setItem(MY_KEY, JSON.stringify(editedNotes));
    onGetNotes(editedNotes);
}






