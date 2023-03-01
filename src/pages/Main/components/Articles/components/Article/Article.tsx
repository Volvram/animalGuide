import React from "react"
import { StyleSheet, View, Image, Text } from "react-native";
import { COLORS } from "../../../../../../config/constants";
import { ArticleType } from "../../../../../../db/articles";

type ArticleProps = {
    article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({article}) => {
    return (
        <View style={styles.main_articles_article}>
            {/* <Image source={require(article.image)} /> */}
            <Text style={{color: COLORS.white}}>{article.text}</Text>
            <View style={{marginTop: 20, marginBottom: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require("../../../../../../../assets/readImage.svg")} style={{width: 12, height: 12}}/>
                <Text style={{marginLeft: 3, color: COLORS.white}}>READ</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_articles_article: {
        padding: 8,
        width: 140,
        backgroundColor: '#363636',
        boxShadow: '0px 96.139px 76.9112px rgba(129, 216, 241, 0.07), 0px 12.0381px 9.63048px rgba(129, 216, 241, 0.035)',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
    }
});

export default Article;