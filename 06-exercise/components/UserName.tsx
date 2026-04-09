import { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { UserContext } from '../App';

const UserName = () => {
    const users = useContext(UserContext)
    return (
        <>
            {users.map((user, i) => (
                <Text key={i}>{user.name}</Text>
            ))}
        </>
    )
};

const styles = StyleSheet.create({

})

export default UserName;