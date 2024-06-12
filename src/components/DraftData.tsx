"use client";
import React from 'react';
import { useFormStore } from '../store/store';

const DraftsPage: React.FC = () => {
  const { drafts } = useFormStore();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Drafts</h1>
      {drafts.length === 0 ? (
        <p className="text-gray-500">No drafts yet.</p>
      ) : (
        <ul className="space-y-4">
          {drafts.map((data, index) => (
            <li key={index} className="border-b border-gray-200 pb-2">
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Age:</strong> {data.age}</p>
              <p><strong>Gender:</strong> {data.gender}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DraftsPage;
