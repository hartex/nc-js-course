const UserStore = {
    data: [
        {
            id: 123123,
            name: 'user 1',
            age: 22
        },
        {
            id: 1231555,
            name: 'user 2',
            age: 21
        },
        {
            id: 1235557,
            name: 'user 3',
            age: 111
        },
        {
            id: 123333,
            name: 'user 4',
            age: 12
        }
    ],

    getUserById: function (id) {
        return this.data.find(element => element.id === id);
    }
};

export default UserStore;


