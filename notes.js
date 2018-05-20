console.log('Starting note.js')
const fs = require('fs')

const addNote =  (title, body) => {
    console.log('adding your note')      
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
        //add note object to the notes array
        notes.push(note)
        //write the notes in String type to the specified file 
        fs.writeFileSync('note-data.json', JSON.stringify(notes))
        
    }
    catch (e){
        console.log("File does not exists.")
    }
    console.log('note added')
}

const removeNote = (title) => {
    console.log('removing note')
}

const readNote = (title) => {
    console.log('reading note')
}

const listNote = () =>{
    console.log('retreiving note')
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}