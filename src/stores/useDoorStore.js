import create from "zustand";

const plateDictionary = [
  { nextPlate: [1.4, -1, 22], prevPlate: [0, 1, -15] },
  { nextPlate: [7, 0, -8], prevPlate: [0, 0, -15] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
];

let useSceneStore = create((set) => ({
  scene: 0,
  nextPlatePos: plateDictionary[0]["nextDoor"],
  nextDoorOpen: false,
  prevPlatePos: plateDictionary[0]["prev"],

  next: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene + 1),
      nextPlatePos: plateDictionary[sceneIndex]["next"],
      prevPlatePos: plateDictionary[sceneIndex]["prev"],
    })),
  prev: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene - 1),
      nextPlatePos: plateDictionary[sceneIndex]["next"],
      prevPlatePos: plateDictionary[sceneIndex]["prev"],
    })),
  toggleNext: (_isOpen) =>
    set((state) => ({
      nextDoorOpen: _isOpen,
    })),
}));

export default useSceneStore;
