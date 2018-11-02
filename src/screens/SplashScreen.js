import React, {Component} from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { USERNAME } from '../utils/Constants';

type Props = {};
class SplashScreen extends Component<Props> {

  checkUser = async() => {
    try {
      const value = await AsyncStorage.getItem(USERNAME);
      setTimeout(()=>{
        this.props.navigation.navigate(value ? 'Home' : 'Login');
      }, 1200);
     } catch (error) {
       // Error retrieving data
       console.warn(error)
     }
  }

  componentDidMount() {
    this.checkUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='grey'/>
        <Text style={styles.text}>This Is Splash</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
  },
});

export default SplashScreen;