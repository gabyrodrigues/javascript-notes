import api from './api';

const UsersService = {
    register: (params) => api.post('/users/register', params),
    login: async (params) => {
        const response = await api.post('/users/login', params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    },
    logout: () => {
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    },
    update: async (params) => {
        const response = await api.put('/users', params, {
            headers: {'x-access-token': localStorage.getItem('token')}
        });
        localStorage.setItem('user', JSON.stringify(response.data));
    },
    updatePassword: async (params) => {
        await api.put('users/password', params, {
            headers: {'x-access-token': localStorage.getItem('token')}
        });
    },
    delete: async () => {
        await api.delete('/users', {
            headers: {'x-access-token': localStorage.getItem('token')}
        });
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    }
}

export default UsersService;