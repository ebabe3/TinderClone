import React, {useState} from 'react' 

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

const ROTATION = 60 ;

const Dashboard = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex+1);
   
  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];

  const {width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, hiddenTranslateX],[0, ROTATION] ) + 'deg',
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

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX,0,hiddenTranslateX],
          [1, 0.8, 1],
        )
      }
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.6, 1]
    )
  }))

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
      <View style={styles.nextCardContainer}>
        <Animated.View style={[styles.animatedCard, nextCardStyle]}>
          <Card user={nextProfile} />
        </Animated.View>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View collapsable={false} style={[styles.animatedCard,cardStyle]}>
          <Card user={currentProfile}/>
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
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default Dashboard;
