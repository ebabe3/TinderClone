import * as React from 'react' 
import { StyleSheet, Text,View, ImageBackground } from 'react-native';


const Card = props => {

    const {name, image, bio} = props.user;

  return (
          <View style= {styles.card}>
             <ImageBackground style={styles.imageStyle}
                source={{
                  uri: image,
                }}>
                <View style={styles.cardInner}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.bio}>{bio} </Text>
                </View>
              </ImageBackground>
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
  card:{
    width: '95%',
    height: '70%',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.67,

    elevation:11,
  },
  imageStyle: {
    width:'100%',
    height:'100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  }
});

export default Card;
