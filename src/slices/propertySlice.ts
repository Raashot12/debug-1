import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// type
// import type { PropertyStateType } from '../types/property';
import data from '../../public/data.json';

type PropertyType = {
  loading: boolean;
  property: any[];
  search: string;
  detailedPage: any;
  filteredProperties: any[];
};
const initialState: PropertyType = {
  loading: false,
  property: data,
  detailedPage: null,
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
    setDetailPage(state, action: PayloadAction<string | number>) {
      const data = state.property.filter(
        (value) => value.id === action.payload,
      );
      state.detailedPage = data[0];
    },
  },
});

export const { setSearch, setDetailPage } = propertySlice.actions;

export default propertySlice;
