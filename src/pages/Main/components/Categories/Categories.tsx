import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS, SIZES } from "../../../../config/constants";

const Categories = () => {

    return (
        <View style={styles.main_categories}>
            <Image style={styles.main_categories_image} source={require('../../../../../assets/animalCategory.png')} resizeMode="contain"/>
            <View style={styles.main_categories_background}>
                <View style={{width: 7, height: 19, backgroundColor: COLORS.yellow}} />
                <Text style={{marginTop: 130, marginBottom: 30, marginLeft: 22, color: COLORS.white, fontSize: SIZES.h3, fontWeight: '700', }}>
                    Животные
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_categories: {
        marginTop: 30,
        width: '100%',
        height: 200,
    },

    main_categories_image: {
        width: '100%',
        height: 200,
        zIndex: 0,
    },

    main_categories_background: {
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundImage: 'linear-gradient(0deg, #25261F 15.38%, rgba(36, 37, 30, 0.77) 42.83%, rgba(30, 31, 24, 0) 70.77%)',
        borderRadius: 30,
        zIndex: 1,
    }
});

export default Categories;