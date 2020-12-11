const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')


// console.log(yargs.argv)

// COMMAND FOR ADD NOTES
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption:true
            
        },
        body: {
            describe: 'note body',
            demandOption:true
        }
    },
    handler: function (argv) {
        notes.addnote(argv.title,argv.body)
    }
})

// COMMAND FOR REMOVE NOTES
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: 'FOR REMOVING NOTE',
        demandOption: true
    },
    handler: function (argv) {
        notes.removenote(argv.title)
    }
})

// COMMAND FOR LIST NOTES 
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        console.log('List the notes')
    }
})

// COMMAND FOR READ NOTES 
yargs.command({
    command: 'read',
    describe:'read th note',
    handler: function(){
        console.log('reading the note....')
    }
})



yargs.argv;
