import React from "react"
import { StyleSheet, View, Image, Text, Dimensions  } from "react-native";
import { COLORS } from "../../../../../../config/constants";
import { ArticleType } from "../../../../../../db/articles";

type ArticleProps = {
    article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({article}) => {
    const [desiredWidth, setDesiredWidth] = React.useState<number>(735)
    const [desiredHeight, setDesiredHeight] = React.useState<number>(525)

    Image.getSize(article.image, (width, height) => {
        setDesiredWidth(width);
        setDesiredHeight(height);
    })
    return (
        <View style={styles.main_articles_article}>
            { article.image && <Image style={{aspectRatio: Number(desiredWidth / desiredHeight), borderRadius: 13, marginBottom: 7}} 
            source={{uri: article.image }} resizeMode="contain"/> 
            }
            <Text style={{color: COLORS.white}}>{article.text}</Text>
            <View style={{marginTop: 20, marginBottom: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require("../../../../../../../assets/readImage.png")} style={{width: 12, height: 12}}/>
                <Text style={{marginLeft: 3, color: COLORS.white}}>ЧИТАТЬ</Text>
            </View>
        </View>
    );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    main_articles_article: {
        marginBottom: 15,
        padding: 8,
        width: 140,
        minWidth: '45%',
        backgroundColor: '#363636',
        boxShadow: '0px 96.139px 76.9112px rgba(129, 216, 241, 0.07), 0px 12.0381px 9.63048px rgba(129, 216, 241, 0.035)',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
    },
});

export default Article;