
import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create(set => ({
    texture: "dirt",
    cubes: [{
        id: nanoid(),
        position: [2, 2, 2],
        texture: "dirt",
    },
    {
        id: nanoid(),
        position: [4, 2, 2],
        texture: "wood",
    }, {
        id: nanoid(),
        position: [8, 2, 2],
        texture: "glass",
    },
    {
        id: nanoid(),
        position: [1, 2, 2],
        texture: "glass",
    }

    ],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                position: [x, y, z]
            }]
        }))
    },
    removeCube: (id) => {

        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id )
        }))
    },
    setTexture: (texture) => { set(() => ({ texture}) )},
    saveWorld: () => { },
    resetWorld: () => { },
    
}))