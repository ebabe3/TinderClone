import React from 'react' 

import { StyleSheet,
  View,
} from 'react-native';

import Card from '../components/Card'
import users from '../assets/data/users'
import AnimatedStack from '../components/AnimatedStack';

const Dashboard = () => {
  
  const onSwipeLeft = (user) => {
    console.warn("Swipe Left", user.name)
  }

  const onSwipeRight = (user) => {
    console.warn("Swipe Right: ", user.name)
  }

  return (
    <View style={styles.container}>
      <AnimatedStack
        data = {users}
        renderItem = {({item}) => <Card user={item}/>}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Dashboard;
