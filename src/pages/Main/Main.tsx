import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { COLORS } from "../../config/constants";
import Articles from "./components/Articles/Articles";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

const Main = () => {

    return (
        <View style={styles.main}>
            <Header />
            <Categories />
            <Articles />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 34,
      backgroundColor: COLORS.darkGreen,
      width: '100%',
      height: '100%',
    },
    main_categories: {
        marginTop: 40,
        width: '100%',
    },

    main_categories_image: {
        width: '100%',
        height: 200,
    },

    main_categories_background: {
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundImage: 'linear-gradient(0deg, #25261F 15.38%, rgba(36, 37, 30, 0.77) 42.83%, rgba(30, 31, 24, 0) 70.77%)',
        borderRadius: 30,
    }
  });

export default Main;