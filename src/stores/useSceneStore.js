import create from "zustand";

const plateDictionary = [
  {},
  { next: [1.7, -1, 25.3], prev: [0, 1, -15] },
  { next: [9, -1, -10.5], prev: [-6, -1, -10.5] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
];

let useSceneStore = create((set) => ({
  avatar: 0,
  scene: 0,
  isLocked: [true, true, true, true],
  isLoaded: false,
  nextPos: null,
  prevPos: null,

  setAvatar: (newState) =>
    set((state) => ({
      avatar: newState,
      scene: 1,
      nextPos: plateDictionary[1]["next"],
      prevPos: plateDictionary[1]["prev"],
      isLoaded: false,
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
  carReset: (newState) =>
    set((state) => ({
      scene: newState,
      isLoaded: false,
    })),
  carExit: () =>
    set((state) => ({
      scene: 2,
      nextPos: plateDictionary[2]["next"],
      prevPos: plateDictionary[2]["prev"],
      isLoaded: false,
    })),
}));

export default useSceneStore;
