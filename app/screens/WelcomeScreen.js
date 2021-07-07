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
    ImageBackground,
    SafeAreaView 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

function WelcomeScreen(props) {
    const {landscape} = useDeviceOrientation();

    return (
        <ImageBackground style={styles.background}>
            <View style={styles.logoContainer}>
                <TouchableOpacity>
                <Image style={styles.logo} source={require("../assets/pom-farm-logo.png")}/>
                </TouchableOpacity>
                <Text style={{fontSize: landscape ? 50 : 30}}>Pom Farm</Text>
            </View>
            
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

            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                <Image
                    source={{
                    uri:
                        'https://toppng.com/uploads/preview/logo-facebook-png-facebook-new-png-logo-11562934578ywpqznc6qq.png',
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Login with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                <Image
                    source={{
                    uri:
                        'data:image/png;base64,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',
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Login with Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
                <Image
                    source={
                    require("../assets/pom-farm-logo.png")
                    }
                    style={styles.buttonImageIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Sign up</Text>
            </TouchableOpacity>

        </ImageBackground>
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
    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 100,
    },
    logo: {
        height: 100,
        width: 100,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        height: 70,
        width: '70%',
        borderRadius: 5,
        margin: 10,
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 40,
        width: 40,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: 'black',
        fontSize: 20,
        padding: 10,
      },
  });

export default WelcomeScreen;