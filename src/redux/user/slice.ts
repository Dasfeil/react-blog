import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../interfaces/user';

const initialState : User = {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = action.payload
        },
    }
});

export const { actions: userAction, reducer: userReducer } =
  userSlice;
