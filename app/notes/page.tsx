import Link from 'next/link';
import React from 'react';

import CreateNoteForm from '@/components/CreateNoteForm';

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page1&perPage=30', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data?.items as any[];
}

export default async function page() {
  const notes = await getNotes();

  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {notes?.map((note) => {
          let date = new Date(note.created);
          let readableDate = date.toDateString();
          return (
            <div
              key={note.id}
              className="flex flex-col justify-between items-start bg-yellow-200 p-4 rounded-lg shadow-md"
            >
              <h3 className="truncate max-w-[90%] text-2xl font-bold mb-4">{note.title}</h3>
              <p className="text-lg mb-4">{readableDate}</p>
              <Link
                className="inline-block py-2 px-4 bg-yellow-500 rounded-full text-white"
                href={`/notes/${note.id}`}
              >
                View Note
              </Link>
            </div>
          );
        })}
        <CreateNoteForm />
      </div>
    </div>
  );
}
