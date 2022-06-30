import * as React from 'react' 
import { StyleSheet, Text,View, ImageBackground } from 'react-native';

import Card from '../components/Card'


const Dashboard = () => {
  return (
        <View style={styles.container}>
          <Card />
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
