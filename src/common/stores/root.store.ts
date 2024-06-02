import { AppStore } from "./app.store";

export const appStore = new AppStore();

export const useStores = () => {
  return {
    appStore,
  };
};
