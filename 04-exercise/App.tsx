import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [history, setHistory] = useState<number[]>([2, 5, 6]);
  const [count, setCount] = useState<number>(5);

  const handleCounter = (operation: String) => {
    if (operation === 'plus') {
      setCount(prev => {
        const newCount = prev + 1;
        setHistory(prev => [...prev, newCount].slice(-5))
        return newCount;
    })
      
    } else if (operation === 'minus') {
      {
      setCount(prev => {
        const newCount = prev - 1;
        setHistory(prev => [...prev, newCount].slice(-5))
        return newCount;
    })
    }
  }}
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => handleCounter('plus')}>
          <Text style={styles.buttonsText}>+</Text>
        </Pressable>
          <Text style={styles.count}>{count}</Text>
        <Pressable style={styles.buttons} onPress={() => handleCounter('minus')}>
          <Text  style={styles.buttonsText}>-</Text>
        </Pressable>
      </View>
      <View style={styles.historyContainer}>
        <FlatList horizontal data={history} renderItem={({item}) => (
          <Text style={styles.history}>{item}</Text>
        )}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  historyContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  history: {
    fontSize: 50,
    marginHorizontal: 20,
  },
  count: {
    margin: 20,
    fontSize: 300
  },
  buttons: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#5f9c92',
    padding: 20,
    margin: 50
  },
  buttonsText: {
    fontSize: 70
  }
});
