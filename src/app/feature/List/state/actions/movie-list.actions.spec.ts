import * as MovieListActions from './movie-list.actions';
import { listPropsType } from '../../models/list-state.model';
import { PageCardData } from '../../../home/model/cardModel';

describe('Movie List Action',()=>{

    describe('Popular Movie List Action',()=>{
        it('should create loadPopularMovieList action',()=>{
            const data:listPropsType={type:'movie',subType:'popular',queryParams:''};
            const action=MovieListActions.loadPopularMovieList({data});
            expect(action.type).toEqual('[List-Movie] Popular Movie List');
            expect(action.data).toEqual(data);
        });
        it('should create loadPopularMovieListSuccess action',()=>{
            const data:PageCardData={page:1,results:[],total_pages:1,total_results:1};
            const action=MovieListActions.loadPopularMovieListSuccess({data});
            expect(action.type).toEqual('[List-Movie] Popular Movie List Success');
            expect(action.data).toEqual(data);
        });
        it('should create loadPopularFailure action',()=>{
            const error:any={message:'error'};
            const action=MovieListActions.loadPopularMovieListFailure({error});
            expect(action.type).toEqual('[List-Movie] Popular Movie List Failure');
            expect(action.error).toEqual(error);
        })
    })

})