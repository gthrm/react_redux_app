import { bindActionCreators } from 'redux';

import actions from './actions.js';

export default {
    mapStateToProps(state) {
        // console.log('state, который пришел в mapStateToProps: ', state);
        return {
            markerData: state.markerData,
            typeMenu: state.typeMenu
        }
    },
    mapDispatchToProps(dispatch) {
        return {
            changeTypeMenu: bindActionCreators(actions.changeTypeMenu, dispatch),
            changeMarkerData: bindActionCreators(actions.changeMarkerData, dispatch),
            //
            getInitialState: bindActionCreators(actions.getInitialState, dispatch)
        }
    }
}