import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './redux/actions';

function mapStateToProps(state) {
  return { ...state.reducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  static propTypes = {
    sample: React.PropTypes.object,
    actions: React.PropTypes.object,
  }
  state = {
    kuch: null,
  }
  render() {
    return (
      <h3 onClick={() => { this.props.actions.setHello('wow'); }}>
        hefjsssdsdsssllo{this.props.sample.data}
      </h3>
    );
  }
}
