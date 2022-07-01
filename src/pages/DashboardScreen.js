import * as React from 'react' 

import 'react-native-gesture-handler';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import Card from '../components/Card'
import users from '../assets/data/users'

const Dashboard = () => {

  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(
    () => ({
      transform:[
        {
          translateX: sharedValue.value * 500 - 250,
        },
      ],
    })
  )

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedCard,cardStyle]}>
        <Card user={users[2]}/>
      </Animated.View>
      <Pressable 
        onPress={() => (sharedValue.value = withSpring(Math.random()))}
        >
         <Text>Change Value</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  animatedCard: {
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default Dashboard;
