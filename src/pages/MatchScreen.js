import React from 'react'
import { View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    Image} 
from 'react-native'

import users from '../assets/data/users';

const Match = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <Text>
                New Match
            </Text>
            <View style={styles.users}>
                {users.map(user => (
                    <View style={styles.user} key={user.id}>
                        <Image source={{uri: user.image}} style={styles.image}/>
                    </View>
                ))}
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    root: {
        width:'100%',
        flex: 1,
        padding: 10,
    },
    user: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 50,

        borderWidth: 2,
        padding: 3,
        borderColor: '#F63A6E'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    users:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Match