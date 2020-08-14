import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <div className='banner-img'></div>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeDate();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeDate() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);