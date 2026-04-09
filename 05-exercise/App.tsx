import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
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
  const [error, setError] = useState<String|null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error("Error al obtener los usuarios")
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Text>Loading users...</Text>
  if (error) return <Text>Error: {error}</Text>
  return (
    <View style={styles.container}>
      <FlatList  numColumns={2} data={users}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text>{item.username}</Text>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone
            }</Text>
          <Text>{item.company.name}</Text>

        </View>

      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card :{
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    width: 500
  }
});
