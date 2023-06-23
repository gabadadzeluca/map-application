import { LatLngExpression } from "leaflet";

const ACTIONS: {
  ADD_MARKER: string;
  REMOVE_MARKER: string;
} = {
  ADD_MARKER: "ADD_MARKER",
  REMOVE_MARKER: "REMOVE_MARKER",
};

type Markers = LatLngExpression[];

interface AddMarkerAction {
  type: typeof ACTIONS.ADD_MARKER;
  payload: LatLngExpression;
}
interface RemoveMarkerAction {
  type: typeof ACTIONS.REMOVE_MARKER;
  payload: LatLngExpression;
}

type ActionType = AddMarkerAction | RemoveMarkerAction;

const markerReducer = (state: Markers, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_MARKER:
      return [...state, action.payload];
    case ACTIONS.REMOVE_MARKER:
      return state.filter((tuple) => tuple !== action.payload);
    default:
      return state;
  }
};

export { markerReducer, ACTIONS};
