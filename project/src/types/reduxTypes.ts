import store from '../store';

type State = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export type {State, AppDispatch};
