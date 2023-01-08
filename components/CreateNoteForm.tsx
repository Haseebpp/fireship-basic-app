'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setTitle('');
    setContent('');

    router.refresh();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <div className="mb-4">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <button
          className="w-full py-2 px-4 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
