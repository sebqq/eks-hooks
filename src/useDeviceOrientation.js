/*
    These hooks are taken from react-native-hooks package
    https://github.com/react-native-community/react-native-hooks

    I re-implemented them because I wasn't able to make them 
    work with code from the original package.
*/
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const screen = Dimensions.get("screen");

const isOrientationPortrait = ({ width, height }) => height >= width;
const isOrientationLandscape = ({ width, height }) => width >= height;

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen)
  });

  onChange = ({ screen }) => {
    setOrientation({
      portrait: isOrientationPortrait(screen),
      landscape: isOrientationLandscape(screen)
    });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, [orientation.portrait, orientation.landscape]);

  return orientation;
};

export default useDeviceOrientation;
