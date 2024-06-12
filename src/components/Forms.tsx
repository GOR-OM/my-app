import React from 'react';
import { useFormStore } from '../store/store';

const Form: React.FC = () => {
  const { form, setForm, clearForm, postForm, saveDraft } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">User Information Form</h1>
      <form className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
          <input 
            type="text" 
            id="age" 
            name="age" 
            value={form.age} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
          <input 
            type="text" 
            id="gender" 
            name="gender" 
            value={form.gender} 
            onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex space-x-4 mt-6">
          <button 
            type="button" 
            onClick={clearForm} 
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Clear
          </button>
          <button 
            type="button" 
            onClick={postForm} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Post
          </button>
          <button 
            type="button" 
            onClick={saveDraft} 
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            Save as Draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
