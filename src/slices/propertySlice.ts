import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// type
// import type { PropertyStateType } from '../types/property';
import data from '../../public/data.json';

type PropertyType = {
  loading: boolean;
  property: any[];
  search: string;
  filteredProperties: any[];
};
const initialState: PropertyType = {
  loading: false,
  property: data,
  search: '',
  filteredProperties: data,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.filteredProperties = state.property.filter(({ name }) =>
        name.toLowerCase().includes(state.search.toLowerCase()),
      );
    },
  },
});

export const { setSearch } = propertySlice.actions;

export default propertySlice;
