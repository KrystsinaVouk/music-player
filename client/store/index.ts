// create a makeStore function
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, createStore, Store} from "redux";
import { ThunkDispatch } from "redux-thunk";
import {reducer, RootState} from "./reducers/index";

const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

