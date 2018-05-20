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

//access the process/arguments that are passed in the command line 
const argv = yargs.argv
const command = argv._[0]
const title = argv.title
const body = argv.body

//command add, list, remove and read calling their functions from notes module
if (command === 'add'){
    notes.addNote(title,body)
} else if (command === 'list') {
    notes.listNote()
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else if (command === 'read'){
    notes.readNote(argv.title)
} else {
    console.log('Command is not recognized')
}

