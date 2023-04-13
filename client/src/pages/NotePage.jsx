import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

const NotePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [noteData, setNoteData] = useState(null)

    useEffect(() => {
      if (id === 'new') return
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

    const sendDetail = async () =>{
      await fetch(`http://127.0.0.1:8000/home/update/note/${id}/`,{
        method:"PUT",
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(noteData)
      })

    }

    const createNote = async () => {
      await fetch(`http://127.0.0.1:8000/home/create/note/`, {
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(noteData)
    })
      navigate('/')
    }

    const deleteNote = async () =>{
       await fetch(`http://127.0.0.1:8000/home/delete/note/${id}/`, {
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
      navigate('/')
    }

    const handleSubmit =() =>{
      if (id !== 'new' && !noteData.body){
        deleteNote()
      }else if (id !== 'new'){
        sendDetail()
      }else if (id === 'new' && noteData !== null){
        createNote()
      }

        navigate('/')
      }

  return (
    <div className='note'>
        <div className='note-header'>
          <h3>
            <FaArrowLeft onClick={handleSubmit}/>
          </h3>

          {id !== "new" ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}

        </div>
      <textarea onChange={(e)=> {setNoteData({...noteData, "body": e.target.value})}} value={noteData?.body}></textarea>
    </div>
  )
}

export default NotePage
