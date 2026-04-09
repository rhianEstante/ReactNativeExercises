import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  company: {
    name: string
  }
  phone: string,
  website: string
}

export default function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchUsers()
  }, []);

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
  }

  if (loading) return <Text>The data is loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder="Search by name or username"/>
      <Text>Showing {filteredUsers.length} of {users.length} users</Text>
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No users match your search</Text>}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.username}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
