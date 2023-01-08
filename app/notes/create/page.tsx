import React from 'react';

import CreateNoteForm from '@/components/CreateNoteForm';

export default function page() {
  return (
    <div className="p-4 m-4 rounded-lg bg-yellow-500 text-black">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Create note!</h1>
        <CreateNoteForm />
      </div>
    </div>
  );
}
