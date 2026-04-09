import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

type User = {
  id: number,
  name: String,
  username: String,
  email: String,
  company: {
    name: String
  }
  phone: String,
  website: String
}

export default function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Error fetching the data');
      }

      const data = await response.json();

      setUsers(data);

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false)
    }

    if (loading) {
      return(
        <Text>The data is loading...</Text>
      )
    } else if (error) {
      <Text>{error}</Text>
    }

  }
  return (
    <View style={styles.container}>
      <TextInput/>
      <FlatList data={users} renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.username}</Text>
        </View>
      )}/>
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
