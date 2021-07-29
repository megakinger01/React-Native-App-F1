import { combineReducers } from "redux";
import { createStore } from "redux";



export type RootState = ReturnType<typeof store.getState>;



const reducers = combineReducers({  
     
})

export const store = createStore(
        reducers,
)

