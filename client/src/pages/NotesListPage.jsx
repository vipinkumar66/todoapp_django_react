import React, { useEffect, useState } from 'react'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      try{
        let response = await fetch('http://127.0.0.1:8000/home/notes/')
        let all_notes = await response.json()
        setNotes(all_notes)
        console.log(notes)
      } catch(error){
        console.log(error)
      }
    }
    getData()
  },[])

  return (
    <div>
      <h2>ALL NOTES</h2>
    </div>
  )
}

export default NotesListPage
