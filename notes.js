console.log('Starting note.js')
const fs = require('fs')

const addNote =  (title, body) => {     
    //variable to store notes in an array
    let notes = []
    
    //note object
    let note = {
        title,
        body
    }

    //try to write if file exists and catches the error if it does not
    try {
        //fetching and store the notes array from the file to the variable 
        let notesString = fs.readFileSync('note-data.json')
        //parse to JSON
        notes = JSON.parse(notesString)    
    }
    catch (e){
        console.log('writing file and adding your note')  
            //add note object to the notes array
            notes.push(note)
            //write the notes in String type to the specified file 
            fs.writeFileSync('note-data.json', JSON.stringify(notes))
    }
    //filter note title, store in the object duplicate notes if title exists
    let duplicateNotes = notes.filter((note) => note.title === title)

    //if title does not exist, duplicateNotes array is 0
    if (duplicateNotes.length === 0) {
        // add note object to the notes array
        notes.push(note)
        //write the notes in String type to the specified file 
        fs.writeFileSync('note-data.json', JSON.stringify(notes))
        console.log('Note succesfully added')
    } else {
        console.log('Note cannot be added')
    }
}

const removeNote = (title) => {
    console.log('removing note')
    //try to open the file
    try {
        //fetching and store the notes array from the file to the variable 
        let notesString = fs.readFileSync('note-data.json')
        //parse to JSON
        notes = JSON.parse(notesString)
    }
    catch (e){
        //prompt admin the directory does not exists
    }
    
    //find the title
    for (var i = 0 ; i < notes.length; i++){
        if (notes[i].title === title){
            //delete the object from the array
            delete notes[i].body
            delete notes[i].title
        } 
    } 

}

const readNote = (title) => {
    console.log('Finding note')
    //try to open the file
    try {
        //fetching and store the notes array from the file to the variable 
        let notesString = fs.readFileSync('note-data.json')
        //parse to JSON
        notes = JSON.parse(notesString)
    }
    catch (e){
        //prompt admin the directory does not exists
    }
    
    //find the title
    for (var i = 0 ; i < notes.length; i++){
        if (notes[i].title === title){
            //print the obj.body to the console
            console.log('Note found : \n' + notes[i].body)
        } 
    } 
}

const listNote = () =>{
    console.log('retreiving note')
    try {
        //fetching and store the notes array from the file to the variable 
        let notesString = fs.readFileSync('note-data.json')
        //parse to JSON
        notes = JSON.parse(notesString)
    }
    catch (e){
        //prompt admin the directory does not exists
    }

    notes.forEach(note => {
        console.log(note.title)
    });
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}