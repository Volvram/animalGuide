import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS, SIZES } from "../../../../config/constants";
import { articles } from "../../../../db/articles";
import Article from "./components/Article/Article";

const Articles = () => {
    return (
        <View style={styles.main_articles}>
            <Text style={{color: COLORS.white, fontSize: SIZES.h4 }}>Recommended Article</Text>
            <View style={styles.articles_list}>
                {articles.map((article) => {
                    return (
                        <Article key={article.id} article={article} />
                    )
                })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_articles: {
        marginTop: 60,
        display: 'flex',
    },

    articles_list: {
        marginTop: 13,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default Articles;