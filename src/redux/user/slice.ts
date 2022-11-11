import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, RUser } from '../../interfaces/user'
const initialState: RUser = {
    email: '',
    token: '',
    username: '',
    bio: '',
    image: '',
    loading: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            Object.assign(state, action.payload)
        },
        getUser: (state, action: PayloadAction<string>) => {
            state.loading = true
        },
        stopLoad: (state) => {
            state.loading = false
        }
    }
});

export const { actions: userAction, reducer: userReducer } =
  userSlice;
