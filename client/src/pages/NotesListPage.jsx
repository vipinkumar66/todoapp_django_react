import React, { useEffect, useState } from 'react'
import NoteList from '../components/NoteList'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      try{
        let response = await fetch('http://127.0.0.1:8000/home/notes/')
        let all_notes = await response.json()
        setNotes(all_notes)
      } catch(error){
        console.log(error)
      }
    }
    getData()
  },[])

  return (
    <div className='notes'>
      <div className='notes-header'>
        <div className='notes-title'>&#9782; Notes</div>
        <div className='notes-count'>{notes.length}</div>
      </div>
      <div className='notes-list'>
        {notes.map((note, index) => {
          return(
            <div key={note.id}>
              <NoteList key={index} note={note}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NotesListPage
