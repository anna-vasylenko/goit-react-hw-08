import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { handleFulFilled, handlePending, handleRejected } from "../handlers";

const initialState = {
  items: [],
  currentContact: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.currentContact = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === state.currentContact.id ? { ...action.payload } : item
        );
        state.currentContact = null;
      })
      .addMatcher(({ type }) => type.endsWith("pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("rejected"), handleRejected)
      .addMatcher(({ type }) => type.endsWith("fulfilled"), handleFulFilled);
  },
});

export const { setCurrentContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
