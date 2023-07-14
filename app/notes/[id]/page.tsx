import React from 'react'
import { Note } from '../page';

const getNote = async (noteId: string) => {
  try{

    const res = await fetch(`http://127.0.0.1:809/api/collections/notes/records/${noteId}?page=1&perPage=30`,{
      next: {
        revalidate: 10 // Incremental Static Regeneration: https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
      }
    });
    const data = await res.json();
    return data;
  }catch(err){
    throw new Error(err)
  }
}

const NotePage = async ({params}: any) => {
  const note = await getNote(params.id)
  return (
    <>
      <h1 className='text-7xl font-bold text-yellow-600 drop-shadow-lg shadow-blue-500'>Note {note.id}</h1>
      <Note note={note}/>
    </>
  )
}

export default NotePage