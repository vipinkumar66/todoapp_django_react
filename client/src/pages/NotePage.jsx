import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
    const {id} = useParams()
    const [noteData, setNoteData] = useState(null)

    useEffect(() => {
        const singleNote = async() =>{
            try{
                let response = await fetch(`http://127.0.0.1:8000/home/notes/${id}/`)
                let data = await response.json()
                setNoteData(data)
            }catch(error){
            console.log(error)
            }
        }
        singleNote()
    },[])

  return (
    <div>
      <h2>{noteData? noteData.body : ""}</h2>
      <p>{noteData ? noteData.created : ""}</p>
      <p>{noteData ? noteData.updated: ""}</p>
    </div>
  )
}

export default NotePage
