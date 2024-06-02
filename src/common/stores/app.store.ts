import { makeAutoObservable } from "mobx";
import { TTheme } from "@/common/types/theme.type";
import { theme } from "@/common/constants/theme";

export class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentTheme: TTheme = theme.dark;

  setCurrentTheme(theme: TTheme) {
    this.currentTheme = theme;
  }
}
