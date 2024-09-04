import * as MovieListReducer from './movie-list.reducers';
import * as MovieListActions from '../actions/movie-list.actions';
import { initialListState, listPropsType } from '../../models/list-state.model';
import { PageCardData } from '../../../home/model/cardModel';
describe('Movie List Reducers',()=>{
    describe('Popular Movie List Reducers',()=>{
        it('should return initial state for',()=>{
            const initialState=initialListState;
            const action={type:'Unknown'};
            const state=MovieListReducer.popularMovieListReducers(initialState,action);
            expect(state).toEqual(initialState);
        });
        it('should set loading to true on loadPopularMovieList action',()=>{
            const data:listPropsType={type:'movie',subType:'popular',queryParams:''};
            const action=MovieListActions.loadPopularMovieList({data});
            const state=MovieListReducer.popularMovieListReducers(initialListState,action);
            expect(state.loading).toEqual(true);
        });
        it('should update the data with correct payload data on loadMorePopularMovieListSuccess action',()=>{
            const data:PageCardData={page:1,results:[],total_pages:1,total_results:1};
            const action=MovieListActions.loadPopularMovieListSuccess({data});
            const state=MovieListReducer.popularMovieListReducers(initialListState,action);
            expect(state.loading).toEqual(false);
            expect(state.data).toEqual(data);
        });
        it('should change the error with correct error on loadMorePopularMovieListFailure action',()=>{
            const error:any={message:'error'};
            const action=MovieListActions.loadPopularMovieListFailure({error});
            const state=MovieListReducer.popularMovieListReducers(initialListState,action);
            expect(state.loading).toEqual(false);
            expect(state.error).toEqual(error);
        })
    })
})