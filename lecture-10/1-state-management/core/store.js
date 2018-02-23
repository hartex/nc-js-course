export const Store = {

    get data() {
        return this._data;
    },

    _data: {
        users: [
            {
                id: 111,
                name: 'Harold',
                avatar: 'https://ih0.redbubble.net/image.225771333.5422/flat,800x800,075,f.jpg'
            },
            {
                id: 211,
                name: 'Nicolas',
                avatar: 'https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SY463_.jpg'
            }
        ],

        tweets: [
            {
                id: 1231231,
                userId: 111,
                text: "hey i'm Harold",
                date_added: "22.02.2018, 15:58"
            },
            {
                id: 255675,
                userId: 211,
                text: "hey i'm Nicolas",
                date_added: "21.02.2018, 11:00"
            },
            {
                id: 155672,
                userId: 211,
                text: "vote for Pedro",
                date_added: "21.02.2018, 12:12"
            },
            {
                id: 456858,
                userId: 211,
                text: "today i've eaten sausages",
                date_added: "20.02.2018, 19:33"
            },
            {
                id: 435358,
                userId: 211,
                text: "smoke weed everyday",
                date_added: "20.02.2018, 21:18"
            }
        ]
    }
}