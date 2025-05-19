import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store'; // adjust path if needed

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
