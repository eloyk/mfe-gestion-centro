import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../data/store/types";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector