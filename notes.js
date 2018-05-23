console.log('Starting note.js')
const fs = require('fs')

const fetchNotes = () => {
    //try to write if file exists and catches the error if it does not
    try {
        //fetching and store the notes array from the file to the variable 
        let notesString = fs.readFileSync('note-data.json')
        //parse to JSON
        return notes = JSON.parse(notesString)    
    }
    catch (e){
        console.log('writing file and adding your note')  
        //add note object to the notes array
        notes.push(note)
        //write the notes in String type to the specified file 
        fs.writeFileSync('note-data.json', JSON.stringify(notes))
        return notes = JSON.parse(notesString) 
    }

}

const saveNotes = (notes) => {
     //write the notes in String type to the specified file 
     fs.writeFileSync('note-data.json', JSON.stringify(notes))
}

const addNote =  (title, body) => {     
    //variable to store notes in an array
    let notes = fetchNotes()
    
    //note object
    let note = {
        title,
        body
    }
    
    //filter note title, store in the object duplicate notes if title exists
    let duplicateNotes = notes.filter((note) => note.title === title)

    //if title does not exist, duplicateNotes array is 0
    if (duplicateNotes.length === 0) {
        // add note object to the notes array
        notes.push(note)
        saveNotes(notes)
        console.log('Note succesfully added')
    } else {
        console.log('Note cannot be added')
    }
}

const removeNote = (title) => {
    console.log('removing note')
    let notes = fetchNotes()
    //store all notes, except the title passed in the parameter above
    let filteredNotes = notes.filter((note) => note.title !== title)
    //saving the new filtered notes
    saveNotes(filteredNotes)

}

const readNote = (title) => {
    console.log('Finding note')
    //try to open the file
    notes = fetchNotes()
    
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
    notes = fetchNotes()

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