import { UPDATE_LOCATION } from "../action_types";

export function updateLocation(value) {
  return{
      type: UPDATE_LOCATION,
      payload: value
  }
}