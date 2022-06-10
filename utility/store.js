import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "user_setting", // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export const bearCounter = () => {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
};

export const allControls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
};
