import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
    const {id} = useParams()
  return (
    <div>
      <h2>Single note {id}</h2>
    </div>
  )
}

export default NotePage
