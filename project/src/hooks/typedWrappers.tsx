import { useSelector, useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, State } from '../types/reduxTypes';

const useDispatchTyped = () => useDispatch<AppDispatch>();

const useSelectorTyped: TypedUseSelectorHook<State> = useSelector;

export {useSelectorTyped, useDispatchTyped};
