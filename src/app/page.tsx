"use client";

import create from "zustand";
import Image from "next/image";
// import Forms from "@/components/Forms";
import Form from "@/components/Forms";
import SubmittedPage from "@/components/SubmittedPage";
import DraftsPage from "@/components/DraftData";

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default function Home() {
  const store = useStore();
  return (
    <>
    <div className="items-center justify-center p-9 ">
      <button className="w-20 rounded-2xl bg-slate-500" onClick={store.inc}>
        +
      </button>
      <Count />
      <button className="w-20 rounded-2xl bg-slate-500" onClick={store.dec}>
        -
      </button>
    </div>

    <Form />
    <SubmittedPage />
    <DraftsPage />
    </>
  );
}

function Count() {
  const store = useStore();
  return <>{store.count}</>;
}
