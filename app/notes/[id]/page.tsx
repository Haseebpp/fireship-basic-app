import React from 'react';

import Link from 'next/link';

async function getNote(noteId: string) {
  const note = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
    next: { revalidate: 10 },
  });
  const data = await note.json();
  return data;
}
export default async function page({ params }: any) {
  const note = await getNote(params.id);
  let date = new Date(note.created);
  let readableDate = date.toDateString();
  return (
    <>
      <div className="flex flex-col justify-between items-start bg-yellow-200 p-4 m-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">{note.title}</h3>
        <p className="text-lg font-semibold mb-4">{readableDate}</p>
        <p className="text-lg mb-4">{note.content}</p>
        <Link
          className="inline-block py-2 px-4 bg-yellow-500 rounded-full text-white"
          href={`/notes/${note.id}/edit`}
        >
          Edit Note
        </Link>
      </div>
    </>
  );
}
