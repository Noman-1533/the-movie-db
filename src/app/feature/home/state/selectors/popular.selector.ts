// // src/app/home/state/selectors/popular.selectors.ts
// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { PopularState } from '../reducers/popular.reducer';


// export const selectHomeState = createFeatureSelector<any>('popular');

// export const selectPopularState = createSelector(
//   selectHomeState,
//   (state) => state.popular
// ); 

// export const selectPopularData = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.data
// );

// export const selectPopularLoading = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.loading
// );

// export const selectPopularError = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.error
// );

// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { HomeModuleState } from '../reducers/home.reducer';  // Import the combined state interface
// import { PopularState } from '../reducers/popular.reducer';

// // Step 1: Select the Home state
// export const selectHomeState = createFeatureSelector<HomeModuleState>('Home');

// // Step 2: Select the popular state from Home state
// export const selectPopularState = createSelector(
//   selectHomeState,
//   (state: HomeModuleState) => state.popular
// );

// // Step 3: Create individual selectors for popular data, loading, and error
// export const selectPopularData = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.data
// );

// export const selectPopularLoading = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.loading
// );

// export const selectPopularError = createSelector(
//   selectPopularState,
//   (state: PopularState) => state.error
// );
