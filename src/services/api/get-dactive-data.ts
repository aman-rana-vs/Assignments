import {D_ACTIVE_API_URL} from '../../constants/api-constants';

export function fetchDactiveData(SET_D_ACTIVE_DATA: any) {
  fetch(D_ACTIVE_API_URL)
    .then(res => res.json())
    .then(data => SET_D_ACTIVE_DATA(data))
    .catch(e => console.log(e.message));
}
