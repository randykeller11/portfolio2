import create from "zustand";

const plateDictionary = [
  { next: [1.7, 0, 25.5], prev: [0, 1, -15] },
  { next: [7, 0, -8], prev: [0, 0, -15] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
  { next: [3, 0, 2], prev: [0, 0, -15] },
];

let useSceneStore = create((set) => ({
  scene: 0,
  nextPos: plateDictionary[0]["next"],

  prevPos: plateDictionary[0]["prev"],

  next: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene + 1),
      nextPos: plateDictionary[sceneIndex]["next"],
      prevPos: plateDictionary[sceneIndex]["prev"],
    })),
  prev: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene - 1),
      nextPos: plateDictionary[sceneIndex]["next"],
      prevPos: plateDictionary[sceneIndex]["prev"],
    })),
}));

export default useSceneStore;
