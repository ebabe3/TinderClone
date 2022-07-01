import * as React from 'react' 
import { StyleSheet, View } from 'react-native';

import Card from '../components/Card'
import users from '../assets/data/users'


const Dashboard = () => {
  return (
        <View style={styles.container}>
          <Card user={users[0]}/>
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
