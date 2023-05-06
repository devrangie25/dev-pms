import { getCurrentInstance } from 'vue';
import { ScreenSize, Breakpoints } from "../types/global";
import { reactive, onMounted } from "vue";

export const useVuetify = () => {
  const vm: any = getCurrentInstance();

  return vm.proxy?.$vuetify || undefined;
};

export const getBreakpoint = (screenWidth: number): keyof typeof Breakpoints => {
  if (screenWidth >= Breakpoints.XL) {
      return "XL";
  } else if (screenWidth >= Breakpoints.LG) {
      return "LG";
  } else if (screenWidth >= Breakpoints.MD) {
      return "MD";
  } else if (screenWidth >= Breakpoints.SM) {
      return "SM";
  } else {
      return "XS";
  }
};

export const useScreenSize = (): Object => {

  const screenSize = reactive<ScreenSize>({
      width: window.innerWidth,
      height: window.innerHeight,
  });

  const updateScreenSize = () => {
      screenSize.width = window.innerWidth;
      screenSize.height = window.innerHeight;
  };

  onMounted(() => {
      window.addEventListener("resize", updateScreenSize);
  });

  return screenSize
};

export const objectKeyHasValue = (obj: Object) => Object.values(obj).every(val => val !== undefined && val !== null) // Will return false if Object key is null, undefined, else true
