import { createSelector } from "@ngrx/store";
import { selectPopularPeopleListState } from "./index.selectors";
import { listState } from "../../models/list-state.model";

export const selectPopularPeopleListData=createSelector(
    selectPopularPeopleListState,
    (state:listState)=>state.data
)
export const selectPopularPeopleListLoading=createSelector(
    selectPopularPeopleListState,
    (state:listState)=>state.loading
)
export const selectPopularPeopleListError=createSelector(
    selectPopularPeopleListState,
    (state:listState)=>state.error
)