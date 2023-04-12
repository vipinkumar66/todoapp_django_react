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
    <div>
      {notes.map((note, index) => {
        return(
          <div key={note.id}>
            <NoteList key={index} note={note}/>
          </div>
        )
      })}
    </div>
  )
}

export default NotesListPage
