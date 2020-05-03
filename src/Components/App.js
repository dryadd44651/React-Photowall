import { connect } from 'react-redux';
import Main from './Main';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions'
import {withRouter} from 'react-router'
// take state in store and map it to props.
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments // this is now an object with Ids
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
   }


// // shorthand for component
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions, dispatch) // { } makes sure it is a property of an object
// }

// // returns a function that returns a component in which we are going to inject our state. It returns a new connected component: App. A connected component is connected to a redux store and we render the connected component
const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));
//const App = connect(mapStateToProps,mapDispachToProps)(Main)
export default App