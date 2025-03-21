import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces"

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = {
    bookItems: [],
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
                (item) => (item.bookingDate === action.payload.bookingDate)
            );
            if (index !== -1) {
                state.bookItems[index] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            const remainBooking = state.bookItems.filter(obj => {
                return (obj.bookingDate !== action.payload.bookingDate) ||
                    (obj.user !== action.payload.user) ||
                    (obj.company !== action.payload.company)
            })
            state.bookItems = remainBooking;
        },
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;