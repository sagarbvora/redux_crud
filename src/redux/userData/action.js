import {USER_ADD} from "./reduxType";
import {USER_DELETE} from "./reduxType";
import {USER_EDIT} from "./reduxType";

export const userAdd = (data) => {
    return {
        type: USER_ADD,
        payload: data
    }

}
export const userDelete = (index) => {
    return {
        type: USER_DELETE,
        payload: index
    }

}
export const userEdit = (data) => {
    return {
        type: USER_EDIT,
        payload: data
    }

 }
