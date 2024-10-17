import React, { useState } from "react";
import { generateRandomColor } from "./RandomColorPicker.Utils";
import { styles } from "./RandomColorPicker.styles";
import { Pressable } from "react-native";

const RandomColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const handleColorChange = () => {
    const newColor = generateRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <Pressable style={{ ...styles.container, backgroundColor: currentColor }} onPress={handleColorChange}>
      <h1 style={styles.title}>Hello there</h1>
    </Pressable>
  );
};

export default RandomColorPicker;
