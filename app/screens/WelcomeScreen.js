import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Image, 
    Button,
    Alert,
    Dimensions,
    SafeAreaView 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function WelcomeScreen(props) {
    const {landscape} = useDeviceOrientation();

    return (
        <SafeAreaView style={styles.background}>
            <TouchableOpacity>
            <Image source={require("../assets/favicon.png")}/>
            </TouchableOpacity>
            <Text style={{fontSize: landscape ? 50 : 30}}>Pom Farm</Text>
            <Button title="Click me" 
            onPress={() => Alert.alert("Message", "Hello", [
                {text: "Hello"},
                {text: "Bye"}
            ])}/>
            
            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                <Image
                    source={{
                    uri:
                        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Login with Google</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
      // Takes up the entire screen with flex: 1
      flex: 1,
      backgroundColor: '#FCF7EF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: '70%',
        borderRadius: 5,
        margin: 10,
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: 'black',
        padding: 10,
      },
  });

export default WelcomeScreen;