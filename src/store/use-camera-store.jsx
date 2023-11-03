import { create } from "zustand";

const useCameraStore = create((set) => ({
    zoom: 2,
    zoomIn: () => set((state) => ({ zoom: state.zoom <= 0 ? (state.zoom + 0.25) : (state.zoom - 0.25) })),
    zoomOut: () => set((state) => ({ zoom: state.zoom <= 0 ? state.zoom : (state.zoom + 0.25) }))
}));

export default useCameraStore;