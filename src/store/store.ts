import create from 'zustand';
import { persist } from 'zustand/middleware';

interface FormData {
  name: string;
  age: string;
  gender: string;
}

interface FormState {
  form: FormData;
  submitted: FormData[];
  drafts: FormData[];
  setForm: (form: FormData) => void;
  clearForm: () => void;
  postForm: () => void;
  saveDraft: () => void;
}

const initialForm: FormData = {
  name: '',
  age: '',
  gender: ''
};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      form: initialForm,
      submitted: [],
      drafts: [],
      setForm: (form) => set({ form }),
      clearForm: () => set({ form: initialForm }),
      postForm: () =>
        set((state) => ({
          submitted: [...state.submitted, state.form],
          form: initialForm
        })),
      saveDraft: () =>
        set((state) => ({
          drafts: [...state.drafts, state.form],
          form: initialForm
        }))
    }),
    {
      name: 'form-storage' // unique name
    }
  )
);
