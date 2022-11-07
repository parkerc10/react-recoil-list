import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persist-atom",
  storage: localStorage
})

export const listState = atom({
  key: 'listState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value),
  effects_UNSTABLE: [persistAtom]
});

export const loginState = atom({
  key: 'loginState',
  default: "",
  effects_UNSTABLE: [persistAtom]
});
