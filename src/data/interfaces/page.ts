import { NextRouter } from "next/router";
import { AppDispatch } from "../store/types";
import { AnyInterface } from "./Any";

export interface PageInterface extends AnyInterface {
  dispatch: AppDispatch
  router: NextRouter
}