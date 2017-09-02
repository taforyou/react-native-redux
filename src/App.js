import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Viewtest from './components/Viewtest'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
    result: 15000,
    value: []
}
const userReducer = (state = { name: "xxx", age: 20 }, action) => {
    switch (action.type) {
        case "CHANGENAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGEAGE":
            return {
                ...state,
                age: action.payload
            }
        default:
            return state;
    }

}

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                result: state.result += action.payload,
                value: [...state.value, action.payload]
            }
        case "SUBTRACT":
            return {
                ...state,
                result: state.result -= action.payload,
                value: [...state.value, action.payload]
            }
        default:
            return state;
    }

}
const mylogger = (store) => (next) => (action) => {
    console.log("log action", action);
    next(action);
}
const store = createStore(combineReducers({ emp:empReducer, user:userReducer }), {}, applyMiddleware(mylogger));

store.subscribe(() => {
    console.log("update Store : ", store.getState());
});

export default class LabRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <Viewtest />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
