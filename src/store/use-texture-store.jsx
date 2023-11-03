import { create } from "zustand";

const useTextureStore = create((set) => ({
    key: 'default',
    change: (newValue) => set({ key: newValue })
}));

export default useTextureStore;