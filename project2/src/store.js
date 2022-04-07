import create from 'zustand';

const [useStore] = create((set) => ({
  regions: [],

  setRegions: (regions) => set((state) => ({regions})),
}));

export default useStore;
