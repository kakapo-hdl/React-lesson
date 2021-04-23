import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService  from "./components/NoteRequest"
import './index.css'
//npx json-server --port 3001 --watch db.json
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
    
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    noteService.create(noteObject).then(
      returnNote=>{
        setNotes(notes.concat(returnNote));
        setNewNote("");
      }
    )
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
  const iconStyle= {
    height:"20px",
    width:"20px",
    'background-color':'green',
    position:'relative',
    left:'100px'
  }
  return (
    <div>
      
      <h1 className="App-header">Notes</h1>
      <div className="App-logo" style={iconStyle}></div>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}
export default App;