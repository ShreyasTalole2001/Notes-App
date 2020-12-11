const fs = require('fs')


// TO ADD NOTES AND RETRIVE PREVIOUS NOTES
const addnote = function(title,body){
    const notes = loadnotes()
    console.log(notes)
    const duplicateNotes = notes.filter(function(note){
       return note.title === title
    })
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
          })
      
          saveNotes(notes)
          console.log('New note added')
    }else{
        console.log('Note title taken')
    }

}

// TO REMOVE NOTES
const removenote = function(title){
    const notes = loadnotes()
    const notesTokeep = notes.filter(function(note){
       return note.title !== title
    })
    saveNotes(notesTokeep)
}


// TO SAVE NOTES 
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

// TO RETRIVE NOTES
const loadnotes = function(){
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON =databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

// TO EXPORT 
module.exports = {
    addnote: addnote,
    removenote: removenote

}