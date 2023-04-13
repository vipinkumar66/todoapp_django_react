import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const NotePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
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

    const sendDetail = async() =>{
      await fetch(`http://127.0.0.1:8000/home/update/note/${id}`,{
        method:"PUT",
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(noteData)
      })

    }

    const deleteNote = async () =>{
      await fetch(`http://127.0.0.1:8000/home/delete/note/${id}`, {
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
      navigate('/')
    }

    const handleSubmit =() =>{
      sendDetail()
      navigate('/')
    }

  return (
    <div className='note'>
        <div className='note-header'>
          <h3>
            <FaArrowLeft onClick={handleSubmit}/>
          </h3>
          <button onClick={deleteNote}>Delete</button>
        </div>
      <textarea onChange={(e)=> {setNoteData({...noteData, "body": e.target.value})}} defaultValue={noteData?.body}></textarea>
    </div>
  )
}

export default NotePage
