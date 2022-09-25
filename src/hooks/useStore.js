import { nanoid } from 'nanoid';
import create from 'zustand';

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [
    {
      key: nanoid(),
      pos: [10, 1, 10],
      texture: 'dirt',
    },
    {
      key: nanoid(),
      pos: [2, 1, 10],
      texture: 'glass',
    },
    {
      key: nanoid(),
      pos: [4, 1, 10],
      texture: 'wood',
    },
    {
      key: nanoid(),
      pos: [3, 1, 10],
      texture: 'grass',
    },
    {
      key: nanoid(),
      pos: [6, 1, 10],
      texture: 'log',
    },
    {
      key: nanoid(),
      pos: [6, 1, 10],
      texture: 'grass',
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},

  resetWorld: () => {},
}));
