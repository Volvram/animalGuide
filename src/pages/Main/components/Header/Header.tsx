import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SIZES } from "../../../../config/constants";

const Header = () => {
    return (
        <View style={styles.main_header}>
            <Text style={{paddingBottom: 4, fontSize: SIZES.h2, color: COLORS.white}}>Animal life</Text>
            <Text style={{fontSize: SIZES.h4, color: COLORS.grey}}>Всё о животных</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_header: {
        marginTop: 45,
        display: 'flex',
    }
});

export default Header;