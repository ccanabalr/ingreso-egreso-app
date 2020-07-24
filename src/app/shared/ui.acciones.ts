import {Action} from '@ngrx/store'
import { type } from 'os';


export const ACTIVR_LOADING = '[UI Loading] Cargando...';
export const DESACTIVR_LOADING = '[UI Loading] Fin de carga...';


export class ActivarLoadingAction implements Action{
    readonly type = ACTIVR_LOADING;
}

export class DesactivarLoadingAction implements Action{
    readonly type = DESACTIVR_LOADING;
}

export type acciones = ActivarLoadingAction | DesactivarLoadingAction;