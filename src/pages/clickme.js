import * as React from 'react' 
import { StyleSheet,Text,View } from 'react-native';


const Clickme  = () => {
  return (
        <View style={styles.container}>
             <Text style={styles.highlight}>Click Me Page</Text> 
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

export default Clickme;
