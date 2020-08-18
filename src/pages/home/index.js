import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

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
                 { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeDate();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeDate() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e) {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);