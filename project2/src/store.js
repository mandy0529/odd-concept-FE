import create from 'zustand';

const [useStore] = create((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  imageWidth: 100,
  imageHeight: 100,

  setSize: ({width, height}) => set({width, height}),

  setImageSize: (size) =>
    set(() => ({imageWidth: size.width, imageHeight: size.height})),
  scale: 1,
  setScale: (scale) => set({scale}),
  isDrawing: false,
  toggleIsDrawing: () => set((state) => ({isDrawing: !state.isDrawing})),

  regions: [],
  setRegions: (regions) => set((state) => ({regions})),

  selectedRigionId: null,
  selectRegion: (selectedRigionId) => set({selectedRigionId}),
}));

export default useStore;
