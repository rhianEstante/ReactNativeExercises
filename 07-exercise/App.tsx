import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile.tsx'
export default function App() {
  return (
    <View style={styles.container}>
      <Profile name={'Rhian'} bio={'Lorem ipsumdhfjhfdasadffjlsakddfhhs fhdsajfhdjkfdsh hls dafh hfds hfhdskh'} followers={500} avatarUrl={'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxhdmF0YXJ8ZW58MHx8fHwxNzc1NzM3NjIwfDA&ixlib=rb-4.1.0&fit=max&q=80'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
