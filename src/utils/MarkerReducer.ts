import { LatLngTuple } from "leaflet";

const ACTIONS: {
  ADD_MARKER: string;
  REMOVE_MARKER: string;
} = {
  ADD_MARKER: "ADD_MARKER",
  REMOVE_MARKER: "REMOVE_MARKER",
};

type Markers = LatLngTuple[];

interface AddMarkerAction {
  type: typeof ACTIONS.ADD_MARKER;
  payload: LatLngTuple;
}
interface RemoveMarkerAction {
  type: typeof ACTIONS.REMOVE_MARKER;
}

type ActionType = AddMarkerAction | RemoveMarkerAction;

const markerReducer = (state: Markers, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_MARKER:
      return [...state, (action as AddMarkerAction).payload];
    case ACTIONS.REMOVE_MARKER:
      return [...state.slice(0,-1)]
    default:
      return state;
  }
};

export { markerReducer, ACTIONS};
