/* 
This app will create a file and append the data to the file
Using the built-in file system module of NodeJS
*/

console.log('Starting app.')

//to load in all the contents of the fs, lodash, and yargs modules to variable 
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

//to load the contents of the note.js file
const notes = require('./notes.js')

//title and body args that has to be passed in
const titleArgs = {
    describe: 'The title of your note',
        demand: true,
        alias: 't'
}

const bodyArgs = {
    describe: 'The body of your note',
        demand: true,
        alias: 'b'
}

//access the process/arguments that are passed in the command line 
const argv = yargs
//to require arguments to be passed 
.command('add', 'Add a new note', {
    title: titleArgs,
    body:bodyArgs
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleArgs
})
.command('remove', 'Remove a note', {
    title: titleArgs
})
.help()
.argv
const command = argv._[0]
const title = argv.title
const body = argv.body

//command add, list, remove and read calling their functions from notes module
if (command === 'add'){
    notes.addNote(title,body)
} else if (command === 'list') {
    notes.listNote()
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title)
    //print message to the console
    let message = noteRemoved ? 'Note has been removed' : 'Note not found'
    console.log(message)
} else if (command === 'read'){
    notes.readNote(argv.title)
} else {
    console.log('Command is not recognized')
}

