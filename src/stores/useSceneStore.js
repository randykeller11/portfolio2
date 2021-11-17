import create from "zustand";

const plateDictionary = [
  { next: [1.7, -1, 25.3], prev: [0, 1, -15] },
  { next: [7, -1, -10.5], prev: [-4, -1, -10.5] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
];

let useSceneStore = create((set) => ({
  avatar: 1,
  scene: 0,
  isLocked: [true, true, true],
  isLoaded: false,
  nextPos: plateDictionary[0]["next"],

  prevPos: plateDictionary[0]["prev"],
  setAvatar: (selection) =>
    set((state) => ({
      avatar: selection,
    })),
  next: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene + 1),
      nextPos: plateDictionary[sceneIndex]["next"],
      prevPos: plateDictionary[sceneIndex]["prev"],
      isLoaded: false,
    })),
  prev: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene - 1),
      nextPos: plateDictionary[sceneIndex]["next"],
      prevPos: plateDictionary[sceneIndex]["prev"],
      isLoaded: false,
    })),
  toggleLock: (newState) =>
    set((state) => ({
      isLocked: newState,
    })),
  toggleLoaded: (newState) =>
    set((state) => ({
      isLoaded: newState,
    })),
}));

export default useSceneStore;
