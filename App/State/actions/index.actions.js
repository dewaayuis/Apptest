import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================
// FEEDBACK Action constants

// save contact to redux
export const SAVE_CONTACT_LIST = 'SAVE_CONTACT_LIST';
export const CLEAR_CONTACT_LIST = 'CLEAR_CONTACT_LIST';


// =================
//  ACTION CREATORS
// =================


// action save contact to redux
export const updateContactList = createAction(SAVE_CONTACT_LIST);
export const clearContactList = createAction(CLEAR_CONTACT_LIST);


