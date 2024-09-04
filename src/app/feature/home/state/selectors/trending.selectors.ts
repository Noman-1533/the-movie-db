// // src/app/state/selectors/trending.selectors.ts
// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { TrendingState } from '../reducers/trending.reducer';

// export const selectTrendingState = createFeatureSelector<TrendingState>('trending');

// export const selectTrendingData = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.data
// );

// export const selectTrendingLoading = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.loading
// );

// export const selectTrendingError = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.error
// );

// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { TrendingState } from '../reducers/trending.reducer';
// import { HomeModuleState } from '../reducers/home.reducer';

// // Step 1: Select the Home state
// export const selectHomeState = createFeatureSelector<HomeModuleState>('Home');

// // Step 2: Select the trending state from Home state
// export const selectTrendingState = createSelector(
//   selectHomeState,
//   (state: HomeModuleState) => state.trending
// );

// // Step 3: Create individual selectors for trending data, loading, and error
// export const selectTrendingData = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.data
// );

// export const selectTrendingLoading = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.loading
// );

// export const selectTrendingError = createSelector(
//   selectTrendingState,
//   (state: TrendingState) => state.error
// );
