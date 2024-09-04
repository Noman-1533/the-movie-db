import { Injectable } from "@angular/core";
import * as TVAction from "../actions/tv-details.actions"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DetailsFacadeService } from "../../services/details.facade.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";
@Injectable()
export class tvDetailsEffects{
    constructor(private Action$:Actions, private detailsFacade:DetailsFacadeService){}
    loadTVDetails$=createEffect(()=>this.Action$.pipe(
        ofType(TVAction.loadTVDetails),
        mergeMap((action)=>this.detailsFacade.getDetails(action.data.type,action.data.id).pipe(
            tap((res)=>{
                console.log('tv effect called')
            }),
            map((data)=>TVAction.loadTVDetailsSuccess({data})),
            catchError((error)=>of(TVAction.loadTVDetailsFailure({error})))
        ))
    ))
}