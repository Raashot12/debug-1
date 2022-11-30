import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';

// type
import type { UserInfoType } from '../types/user';

import { fetchUserDetails } from '../services/user';
import type { TokenPayload } from '../utility/tokenValidation';

const details: UserInfoType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
  occupationStatus: '',
  gender: '',
  address: '',
  appSuite: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  contactNumber: '',
  nationality: '',
  residencyStatus: '',
  completedOnboarding: false,
};

type UserStateType = {
  authData: TokenPayload | null;
  isLoggedIn: boolean;
  loading: {
    [key: string]: boolean;
  };
  details: UserInfoType;
  documents: [];
};
const initialState: UserStateType = {
  authData: null,
  isLoggedIn: false,
  loading: { details: false },
  details,
  documents: [],
};

export const getUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async () => {
    const response = await fetchUserDetails();
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    addUserDetails: (state, action) => {
      state.details = { ...state.details, ...action.payload };
    },
    clearUserDetails: (state) => {
      state.details = details;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading.details = true;
    });
    builder.addCase(
      getUserDetails.fulfilled,
      (state, action: PayloadAction<UserInfoType | null>) => {
        state.isLoggedIn = true;
        state.loading.details = false;
        state.details = { ...state.details, ...action.payload };
      },
    );
    builder.addCase(getUserDetails.rejected, (state) => {
      state.isLoggedIn = true;
      state.loading.details = false;
      state.details = details;
    });
  },
});

export const { addUserDetails, clearUserDetails, setIsLoggedIn, setAuthData } =
  userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice;
