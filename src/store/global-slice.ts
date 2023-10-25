import { create } from "zustand";
import { LoginUser } from "../model/admin";

interface GlobalState {
  userinfo: LoginUser;
}
interface GlobalActions {
  login: () => void;
}

const initGlobalState: GlobalState = {
  userinfo: {
    username: "",
    password: "",
  },
};

const useGlobalStore = create<GlobalState & GlobalActions>()((set, get) => ({
  ...initGlobalState,
  login: () => {
    set(initGlobalState);
  },
}));
