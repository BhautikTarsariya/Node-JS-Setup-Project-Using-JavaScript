import User from '../modals/user.js';

export const readUser = async () => {
    const result = await User.find();
    return result;
};