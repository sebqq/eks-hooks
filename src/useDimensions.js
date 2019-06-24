/*
    These hooks are taken from react-native-dimensions-hooks package
    https://github.com/rjerue/react-native-dimensions-hooks
*/
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useDimensionsHelper = dim => {
  const [dims, setDims] = useState(Dimensions.get(dim));

  const handleDimChange = dimensions => {
    setDims(dimensions[dim]);
  };
  useEffect(() => {
    Dimensions.addEventListener("change", handleDimChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimChange);
    };
  });
  return dims;
};

export const useWindowDimensions = () => {
  return useDimensionsHelper("window");
};

export const useScreenDimension = () => {
  return useDimensionsHelper("screen");
};

export default function useDimensions() {
  return {
    window: useWindowDimensions(),
    screen: useScreenDimension()
  };
}
