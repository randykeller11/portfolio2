import create from "zustand";

const plateDictionary = [
  { nextPlate: [1.4, -1, 23], prevPlate: [0, 1, -15] },
  { nextPlate: [7, 0, -8.7], prevPlate: [0, 0, -15] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
  { nextPlate: [3, 0, 2], prevPlate: [0, 0, -15] },
];

let useSceneStore = create((set) => ({
  scene: 1,
  nextPlatePos: plateDictionary[1]["nextPlate"],
  nextPlateState: false,
  nextDoorState: false,
  prevPlatePos: plateDictionary[1]["prevPlate"],

  next: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene + 1),
      nextPlatePos: plateDictionary[sceneIndex]["nextPlate"],
      prevPlatePos: plateDictionary[sceneIndex]["prevPlate"],
    })),
  prev: (sceneIndex) =>
    set((state) => ({
      scene: (state.scene = state.scene - 1),
      nextPlatePos: plateDictionary[sceneIndex]["nextPlate"],
      prevPlatePos: plateDictionary[sceneIndex]["prevPlate"],
    })),
  toggleNextPlate: (_isActive) =>
    set((state) => ({
      nextPlateState: _isActive,
    })),
  toggleNextDoor: (_isOpen) =>
    set((state) => ({
      nextDoorState: _isOpen,
    })),
}));

export default useSceneStore;
