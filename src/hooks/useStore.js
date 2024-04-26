import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: localStorage.getItem("world") ? JSON.parse(localStorage.getItem("world")) : [],

  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          position: [x, y, z],
        },
      ],
    }));
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
  },
  setTexture: (texture) => {
    set(() => ({ texture }));
  },
 saveWorld: () => {
  const worldData = JSON.stringify(useStore.getState().cubes)
 localStorage.setItem("world", worldData)
},

    resetWorld: () => {
        localStorage.setItem("world", [])
        set((state) => ({
      cubes: [
        
      ],
    }));
    
    }
}))
