// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Book } from '../models/Books';

//  interface BookState {
//     items: Book[];
// }
// const initialState: BookState = {
//     items: [],
// };

// const bookItemSlice = createSlice({
//     name: 'books',
//     initialState,
//     reducers: {
//         addItem: (state, action: PayloadAction<Book>) => {
//             state.items.push(action.payload);
//         },
//         getItems: (state, action: PayloadAction<Book[]>) => {
//             state.items = action.payload;
//         },
//         // removeItem: (state, action: PayloadAction<string>) => {
//         //     state.items = state.items.filter(item => item.id !== action.payload);
//         // },
//         // updateItem: (state, action: PayloadAction<Book>) => {
//         //     const index = state.items.findIndex(item => item.id === action.payload.id);
//         //     if (index !== -1) {
//         //         state.items[index] = action.payload;
//         //     }
//         // },
//     },
// });

// export const { addItem } = bookItemSlice.actions;
// export default bookItemSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Book } from "../models/Books";

const api = axios.create({
    baseURL: "http://localhost:5000/api/books" 
});

export const addBookData = createAsyncThunk(
    'books/addBook',
    async (book: Book, { rejectWithValue }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const response = await api.post('/addbooks', book);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const getBooksData = createAsyncThunk(
    'books/getBooks',
    async (_, { rejectWithValue }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

interface BookState {
    items: Book[];
    loading: boolean;
    error: string | null;
}

const initialState: BookState = {
    items: [],
    loading: false,
    error: null,
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addBookData.pending, (state) => {
                state.loading = true;
            })
            .addCase(addBookData.fulfilled, (state, action: any) => {
                state.items.push(action.payload);
                state.loading = false;
                toast.success("Book added successfully!");
            })
            .addCase(addBookData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                toast.error(`Failed to add book: ${state.error}`);
            })
            .addCase(getBooksData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBooksData.fulfilled, (state: any, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getBooksData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                toast.error(`Failed to get books: ${state.error}`);
            });
    },
});

export default bookSlice.reducer;