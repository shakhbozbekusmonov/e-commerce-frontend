import productReducer from '@/redux/reducers/productSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		product: productReducer,
	},
})
