import * as MovieListSelector from './movie-list.selectors';
import { listModuleState, listState } from '../../models/list-state.model';

describe('Movie List Selectors',()=>{
    const mockInitialState:listState={
        data:{page:1,results:[],total_pages:1,total_results:1},
        loading:false,
        error:{message:'error'}
    };
    describe('Popular Movie List Selectors',()=>{
        it('should select popular movie list data',()=>{
            const result=MovieListSelector.selectPopularMovieListData.projector(mockInitialState);
            expect(result).toEqual(mockInitialState.data);
        });
        it ('should select popular movie list loading',()=>{
            const loading=MovieListSelector.selectPopularMovieListLoading.projector(mockInitialState);
            expect(loading).toEqual(mockInitialState.loading);        
        });
        it('should select popular movie list error',()=>{
            const error =MovieListSelector.selectPopularMovieListError.projector(mockInitialState);
            expect(error).toEqual(mockInitialState.error);
        })
    });
})