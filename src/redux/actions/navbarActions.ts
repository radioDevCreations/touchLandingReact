import {ActionBooleanPayload} from '../../types/Action';

export const SET_HAMBURGER_STATE = 'SET_HAMBURGER_STATE';
export const SET_NAVBAR_BUTTON = 'SET_NAVBAR_BUTTON';

export const setHamburgerState = (hamburgerState: boolean):ActionBooleanPayload => ({
    type: SET_HAMBURGER_STATE,
    payload: hamburgerState
})
export const setNavbarButton = (navbarButton: boolean):ActionBooleanPayload => ({
    type: SET_HAMBURGER_STATE,
    payload: navbarButton
})