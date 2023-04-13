import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai';


const AddButton = () => {
  return (
    <div>
      <Link to='/note/new' className='floating-button'>
        <AiOutlinePlusCircle/>
      </Link>
    </div>
  )
}

export default AddButton
