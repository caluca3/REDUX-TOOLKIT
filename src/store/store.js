import { configureStore} from '@reduxjs/toolkit';
import { todoApis } from './apis/todoApi';
import {counterSlice}     from './slices/counter/counterSlice';
import {pokemonSlice} from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todoApis.reducerPath]: todoApis.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApis.middleware)
})