import { Store } from '../core/store';

export const UserService = {

    getUserById(id) {
        return Store.data.users.find(user => user.id === id);
    },

    getCurrentUser() {
        // for simplicity
        return Store.data.users[0];
    }
};