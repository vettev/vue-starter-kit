import AbstractService from './Abstract';

class AuthService extends AbstractService
{
    static prefix = '/auth';

    login(data) {
        return {
            user: { name: 'testuser' },
            token: 'teoretyczniepoprawnytoken'
        };

        // TODO IMPLEMENT LOGIN
    }
}

export default new AuthService();