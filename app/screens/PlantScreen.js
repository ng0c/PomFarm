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

function PlantScreen(navigation) {
    return (
        <ImageBackground style={styles.background} onPress={() => navigation.goBack('WelcomeScreen')}>
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
});

export default PlantScreen;