import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, createContext } from 'react';
import UserList from './components/UserList.tsx'

export type UsersType = {
  name: String,
  username: String,
  phone: String,
  email: String,
}

export const UserContext = createContext<UsersType[]>([])

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<String|null>(null);
  const [users, setUsers] = useState<UsersType[]>([]);

  useEffect(()=> {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error("Error fetching users")
      }

      const data = await response.json();
      setUsers(data);

    } catch (error){
      setError("Error fetching users: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Text>Loading users...</Text>
  if (error) return <Text>{error}</Text>

  return (
    <UserContext.Provider value={users}>
      <View style={styles.container}>
        <UserList />
      </View>
    </UserContext.Provider>
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
