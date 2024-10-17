import { Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [bgColor, SetBgColor] = useState('#ffffff');
  const BibliotecColor = '0123456789ABCDEF';

  const changeColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color +=
        BibliotecColor[Math.floor(Math.random() * BibliotecColor.length)];
    }
    console.log(color)
    SetBgColor(color);
    return
  };

  return (
    <Pressable style={{...styles.container, backgroundColor:bgColor}} onPress={changeColor}>
      <Text style={styles.paragraph}>Hello there</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
