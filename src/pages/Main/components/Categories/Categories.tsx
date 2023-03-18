import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../../../../config/constants";

const Categories = () => {
    const [imageSize, setImageSize] = React.useState({width: 294, height: 137});

    React.useEffect(() => {
        try {
            const imageSource = require('../../../../../assets/animalCategory.png');
        
            const resolvedImageSource = Image.resolveAssetSource(imageSource);

            setImageSize({
                width: resolvedImageSource.width,
                height: resolvedImageSource.height
            })
        } catch(e) {

        }
        
    }, []);

    return (
        <View style={styles.main_categories}>
            <ImageBackground style={{aspectRatio: imageSize.width / imageSize.height, zIndex: 0}} 
            source={require('../../../../../assets/animalCategory.png')} resizeMode="contain">
                <LinearGradient
                    colors={[
                    'rgba(30, 31, 24, 0)',
                    'rgba(30, 31, 24, 0)',
                    'rgba(36, 37, 30, 0.77)',
                    '#25261F',
                    ]}
                    start={[0, 0.9]}
                    style={{flex: 1, justifyContent: 'center', borderRadius: 30}}>

                    <View style={{aspectRatio: imageSize.width / imageSize.height, ...styles.main_categories_background}}>
                        <View style={{width: 7, height: 19, backgroundColor: COLORS.yellow}} />
                        <Text style={{aspectRatio: imageSize.width / imageSize.height, ...styles.main_categories_background_text}}>
                            Животные
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main_categories: {
        marginTop: 30,
        width: '100%',
    },
    main_categories_background: {
        width: '100%',
        borderRadius: 30,
        zIndex: 1,
    },
    main_categories_background_text: {
        marginTop: "30%", 
        marginBottom: 30, 
        marginLeft: 22, 
        color: COLORS.white, 
        fontSize: SIZES.h3, 
        fontWeight: '700',
    }
});

export default Categories;