import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './CounterSlice'
import { authSlice } from './AuthSlice'
import { cartSlice } from './CartSlice'
// ...

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
    counter : counterSlice.reducer,
    auth : authSlice.reducer,
    cartSlice : cartSlice.reducer
        
    
    
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch