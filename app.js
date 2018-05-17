/* 
This app will create a file and append the data to the file
Using the built-in file system module of NodeJS
*/

console.log('Starting app.')

//to load in all the contents of the fs modules to variable 
const fs = require('fs')
//to load and store the contents of the lodash module in a variable
const _ = require('lodash')

//to load the contents of the note.js file
const notes = require('./notes.js')

//access the process that are passed in when starting the program
const command = process.argv[2]

if (command === 'add'){
    //add some notes
} else if (command === 'list') {
    //show list of notes
} else if (command === 'delete') {
    //delete some notes
}
