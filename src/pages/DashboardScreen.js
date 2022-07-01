import * as React from 'react' 

import 'react-native-gesture-handler';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  useAnimatedGestureHandler,
 } from 'react-native-reanimated';

import Card from '../components/Card'
import users from '../assets/data/users'
import { PanGestureHandler } from 'react-native-gesture-handler';

const Dashboard = () => {

  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(
    () => ({
      transform:[
        {
          translateX: translateX.value * 500 - 250,
        },
      ],
    })
  )

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,) => {
      console.warn('Touch Start');
    },
    onActive: (event) => {
      translateX.value = event.translationX;
      console.log('Touch x :', event.translationX);  
   },
    onEnd: () => {
       console.warn('Touch ended');  
    },
});

  return (
    <View style={styles.container}>
      <PanGestureHandler gestureHandler={gestureHandler}>
        <Animated.View style={[styles.animatedCard,cardStyle]}>
          <Card user={users[2]}/>
        </Animated.View>
      </PanGestureHandler>
      <Pressable 
        onPress={() => (translateX.value = withSpring(Math.random()))}
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
