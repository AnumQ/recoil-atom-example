import { atom } from "recoil";

const initialProfileState = {
  counter: 0,
  name: "No Name",
  age: 32,
};

export const profileAtom = atom({
  key: "profileAtom",
  default: initialProfileState,
});
