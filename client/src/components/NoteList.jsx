import React from 'react'

const NoteList = ({note}) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default NoteList
