import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LoginUser } from "../model/admin";

interface GlobalState {
  userinfo: LoginUser;
}
interface GlobalActions {
  reset: () => void;
  login: (value: LoginUser) => void;
  getState: () => any;
}

const initGlobalState: GlobalState = {
  userinfo: {
    username: "",
    password: "",
  },
};

export const createGlobalStore = create<GlobalState & GlobalActions>()(
  persist(
    (set, get) => ({
      userinfo: initGlobalState.userinfo,
      reset: () => {
        set(initGlobalState);
      },
      login: (value) => {
        set((state) => ({ userinfo: value }));
      },
      getState: () => {
        return get();
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
