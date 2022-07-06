import * as React from 'react' 

import { StyleSheet, 
  useWindowDimensions, 
  View
} from 'react-native';

import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  useDerivedValue,
  interpolate,
  useAnimatedGestureHandler,
 } from 'react-native-reanimated';

import { 
  GestureHandlerRootView, 
  PanGestureHandler 
} from 'react-native-gesture-handler';

import Card from '../components/Card'
import users from '../assets/data/users'

const Dashboard = () => {

  const {width: screenWidth} = useWindowDimensions();

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, screenWidth],[0, 60] ) + 'deg',
    );

  const cardStyle = useAnimatedStyle(
    () => ({
      transform:[
        {
          translateX: translateX.value,
        },
        {
          rotate: rotate.value,
        }
      ],
    })
  )
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
   },
    onEnd: () => {
       console.warn('Touch ended');  
    },
});

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View collapsable={false} style={[styles.animatedCard,cardStyle]}>
          <Card user={users[2]}/>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>

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
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default Dashboard;
