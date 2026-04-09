import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface Props {
    name: string,
    bio: string,
    followers: number,
    avatarUrl: string
}
const Profile = ( {name, bio, followers, avatarUrl}: Props) => {


    return (
        <TouchableOpacity onPress={()=> {console.log('Pressed')}}>
            <View style={styles.container}>
                <View style={{width: 300, justifyContent: 'center'}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style= {styles.data}>Followers: {followers}</Text>
                    <Text style= {styles.data}>Bio: {'\n'} {bio}</Text>
                </View>
                <Image source={{ uri: avatarUrl}} style={styles.avatar}/>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 50
    }, 
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    name: {
        fontWeight: 'bold',
        fontSize: 70
    },
    data: {
        fontSize: 20,
        textAlign: 'justify' 
    }
})
export default Profile;