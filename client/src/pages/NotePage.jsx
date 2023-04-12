import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/left-arrow.svg';


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
    <div className='note'>
        <div className='note-header'>
            <ArrowLeft/>
        </div>
      <textarea defaultValue={noteData?.body}></textarea>
    </div>
  )
}

export default NotePage
