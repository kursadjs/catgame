import { createSlice } from "@reduxjs/toolkit"

import Cat from '../assets/cat.jpg'
import Dog from '../assets/dog.jpg'

const initialState = {
    amountClick: 0,
    dataClick: 0,
    data: [
        {
            id: 1,
            title: 'Kedi',
            cover: Cat
        },
        {
            id: 2,
            title: 'Köpek',
            cover: Dog
        },
        {
            id: 3,
            title: 'Köpek',
            cover: Dog
        },
    ]

}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        boxClick: (state, action) => {
            state.dataClick = action.payload
            state.amountClick += 1
        },
        restartGame: (state, action) => {
            state.dataClick = 0
            state.amountClick = 0
        }
    }
})

export default appSlice.reducer
export const { boxClick, restartGame } = appSlice.actions