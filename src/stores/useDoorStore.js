import create from "zustand";

const plateDictionary = [
  { nextPlate: [1.4, -1, 23], prevPlate: [0, 1, -15] },
  { nextPlate: [7, -1, -8.7], prevPlate: [-4, -1, -8.7] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
];

let useDoorStore = create((set) => ({
  scene: 0,
  nextPlatePos: plateDictionary[0]["nextPlate"],
  nextPlateState: false,
  prevPlatePos: plateDictionary[0]["prevPlate"],
  prevPlateState: false,

  next: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene + 1),
      nextPlatePos: plateDictionary[sceneIndex]["nextPlate"],
      nextPlateState: false,
      prevPlatePos: plateDictionary[sceneIndex]["prevPlate"],

      prevPlateState: false,
    })),
  prev: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene - 1),
      nextPlatePos: plateDictionary[sceneIndex]["nextPlate"],
      nextPlateState: false,
      prevPlatePos: plateDictionary[sceneIndex]["prevPlate"],

      prevPlateState: false,
    })),
  toggleNextPlate: (_isActive) =>
    set((state) => ({
      nextPlateState: _isActive,
    })),
  togglePrevPlate: (_isActive) =>
    set((state) => ({
      prevPlateState: _isActive,
    })),
}));

export default useDoorStore;
