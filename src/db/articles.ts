export type ArticleType = {
    id: string;
    image: string;
    text: string;
}

export const articles: ArticleType[] = [
    {
        id: "1",
        image: "https://faunistics.com/wp-content/uploads/2019/02/2-735x523.jpg",
        text: "По внешнему виду горный волк практически похож на лису, особенно если посмотреть на него издалека"
    },
    {
        id: "2",
        image: "https://faunistics.com/wp-content/uploads/2019/02/3-735x500.jpg",
        text: "Сивуч – это тихоокеанский ушастый тюлень, который обитает на Курильских и Командорских островах"
    },
    {
        id: "3",
        image: "https://faunistics.com/wp-content/uploads/2019/02/4-735x551.jpg",
        text: "Относится к редкому подвиду кошачьих, который смог дожить до наших дней"
    },
]