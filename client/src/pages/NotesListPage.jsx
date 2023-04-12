import React, { useEffect, useState } from 'react'

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
      <h2>ALL NOTES</h2>
      {notes.map((note) => {
        return(
          <div key={note.id}>
            <h3>
            {note.body}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default NotesListPage
