import Link from 'next/link';
import React from 'react'
import PocketBase from 'pocketbase'
import CreateNote from './CreateNote';

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'



const getNotes = async () => {
  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList()

  // const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',{
  //   cache: 'no-store'
  // });
  // const data = await res.json();
  return data?.items as any[];
}

const NotesPage = async () => {
  const notes = await getNotes()

  return (
    <div className="space-y-10">
      <h1 className='text-7xl font-bold text-yellow-600 drop-shadow-lg shadow-blue-500'>Notes</h1>
      <div className='flex flex-wrap gap-7'>
        {notes?.map((note)=>{
          return <Note key={note.id} note={note} />
        })}
      </div>
      <CreateNote />
    </div>
  )
}

export const Note = ({note}: any) => {
  const {id, title, content, created} = note || {}

  return (
    <Link href={`/notes/${id}`}>
      <div className='bg-yellow-500 w-max p-3 rounded-lg text-black space-y-2'>
        <p className='text-yellow-200 text-xs'>{id}</p>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{content}</p>
        <p className='text-yellow-200 text-xs'>{created}</p>
      </div>
    </Link>
  )
}

export default NotesPage