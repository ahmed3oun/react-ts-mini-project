import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload // Action creator passed in as payload
        },
        decrementBy: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log('INCREMENT PENDING...')
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                console.log('INCREMENT FULFILLED...')
                state.value += action.payload
            })
            .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                console.log('DECREMENT FULFILLED...')
                state.value -= action.payload
            })
    },
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return amount
    }
)

export const decrementAsync = createAsyncThunk(
    "counter/decrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount
    }
)


export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;
