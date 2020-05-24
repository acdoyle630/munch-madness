import { combineReducers } from "redux";

import { selectPriceReducers } from "./select-price-reducer";
import { selectStarsReducers } from "./select-stars-reducer";
import { selectDistanceReducer } from "./select-distance-reducer";
import { selectGeneralReducer } from "./select-general-reducer";
import { selectCategoryReducer } from "./select-category-reducer";
import { teamsReducer } from "./teams-reducer";
import { selectedPlayersReducer } from "./selected-players-reducer";
import { bracketReducer } from "./bracket-reducer";
import { setLocationReducer } from "./set-location-reducer";
import { showTopNavReducer } from "./show-top-nav-reducer";
import { errorModalReducer } from "./modals/error-modal-reducer";
import { setPhaseReducer } from "./set-phase-reducer";
import { redirectToReducer } from "./redirect-to-reducer";
import { roundModalReducer } from "./modals/round-modal-reducer";
import { matchupModalReducer } from "./modals/matchup-modal-reducer";
import { champModalReducer } from "./modals/champ-modal-reducer";

export default combineReducers({
  roundModal: roundModalReducer,
  selectedPrice: selectPriceReducers,
  selectedStars: selectStarsReducers,
  selectedDistance: selectDistanceReducer,
  generalSelections: selectGeneralReducer,
  selectedCategory: selectCategoryReducer,
  teams: teamsReducer,
  players: selectedPlayersReducer,
  bracket: bracketReducer,
  location: setLocationReducer,
  showTopNav: showTopNavReducer,
  errorModal: errorModalReducer,
  phase: setPhaseReducer,
  redirectTo: redirectToReducer,
  matchupModal: matchupModalReducer,
  champModal: champModalReducer,
});
