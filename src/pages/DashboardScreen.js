import * as React from 'react' 
import { Button,StyleSheet,Text,View } from 'react-native';


const Dashboard = ({navigation}) => {


  return (
        <View style={styles.container}>
             <Text style={styles.highlight}>Dahboard Page</Text> 
             <Button onPress = {() => navigation.navigate('Chat')} title="Click me" />
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
