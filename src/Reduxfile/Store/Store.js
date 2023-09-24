import { configureStore } from '@reduxjs/toolkit'
import StudentSlice from "../Slice/Slice"


const Store = configureStore({
    reducer:{
        S_Data:StudentSlice
    }
})

export default Store
