import { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import UserCard from './UserCard';
import { UserContext } from '../App';

const UserList = () => {
    const users = useContext(UserContext)
    return (
        <View>
            <FlatList data={users}
            renderItem={() => (
                <UserCard />
            )}/>
        </View>
    )
};

const styles = StyleSheet.create({

})

export default UserList;