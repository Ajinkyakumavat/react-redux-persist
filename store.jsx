import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import commonSlice from './configureSlice'

const persistconfig = {key:"demo", version:1, storage}

const persistReducerblock = persistReducer(persistconfig, commonSlice)

export const store = configureStore({
    reducer:{
        commonReducer:persistReducerblock
    }
})

