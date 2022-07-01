import * as React from 'react' 

import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import Card from '../components/Card'
import users from '../assets/data/users'

const Dashboard = () => {

  const sharedValue = useSharedValue(1);

  const cardStyle = useAnimatedStyle(
    () => ({
      opacity: sharedValue.value,
    })
  )

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedCard,cardStyle]}>
        <Card user={users[2]}/>
      </Animated.View>
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
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default Dashboard;
