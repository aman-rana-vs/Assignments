import { NOTIFICATIONS_URL } from '../../constants/api-constants'

export function fetchNotificationData(SET_NOTIFICATIONS_DATA: any) {
  fetch(NOTIFICATIONS_URL)
    .then(res => res.json())
    .then(data => {
      SET_NOTIFICATIONS_DATA(data)
    })
    .catch(e => console.log(e.message))
}
