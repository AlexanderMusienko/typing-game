import { useStores } from "../hooks/use-stores";

export const useTheme = () => {
  const {
    appStore: { currentTheme },
  } = useStores();
  
  return currentTheme;
};
