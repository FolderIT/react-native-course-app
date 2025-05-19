import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store'; // adjust path if needed

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
