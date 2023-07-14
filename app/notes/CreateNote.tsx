'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const create = async() => {
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content
      })
    });

    setTitle('')
    setContent('')

    router.refresh()
  }

  return (
    <form className='space-y-5 flex flex-col w-96' onSubmit={create}>
      <h1 className='text-4xl font-bold text-yellow-600 drop-shadow-lg shadow-blue-500'>Create a new Notes</h1>
      <input
        className='text-black'
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <input
        className='text-black'
        type='text'
        placeholder='Content'
        value={content}
        onChange={(e)=>setContent(e.target.value)}
      />
      <button disabled={!title || !content} className="p-3 disabled:bg-gray-400 rounded-full text-black bg-yellow-600 hover:bg-yellow-500">Submit</button>
    </form>
  )
}
