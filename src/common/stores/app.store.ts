import { makeAutoObservable } from "mobx";
import { TTheme } from "@/common/types/theme.type";
import { theme } from "@/common/constants/theme";
import { RootStore } from "./root.store";

export class AppStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  currentTheme: TTheme = theme.dark;

  setCurrentTheme = (theme: TTheme) => {
    this.currentTheme = theme;
  };

}
