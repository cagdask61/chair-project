import { create } from "zustand";

const useTextureStore = create((set) => ({
    key: localStorage.getItem('texture'),
    change: (newValue) => set(() => {
        localStorage.setItem('texture', newValue);
        return {
            key: newValue
        }
    })
}));

export default useTextureStore;