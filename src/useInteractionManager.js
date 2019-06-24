import React, { useEffect, useState } from "react";
import { InteractionManager } from "react-native";

const useInteractionManager = () => {
  const [complete, updateInteractionStatus] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      updateInteractionStatus(true);
    });
  }, []);
  return complete;
};

export default useInteractionManager;
