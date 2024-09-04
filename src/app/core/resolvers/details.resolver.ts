import { inject,  } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DetailsFacadeService } from "../../feature/details/services/details.facade.service";

// @Injectable()
export const DetailsResolver: ResolveFn<any>=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
    let type:string=route.paramMap.get('type');
    let id:number=parseInt(route.paramMap.get('id'));
    const detailsFacade=inject(DetailsFacadeService);
    detailsFacade.loadData(type,id,true);        
    
}