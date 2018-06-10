// criaremos um armazenamento para o state global do site
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'


export const history = createHistory()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : 
  compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
    )
);

export const store = createStore(
    reducers,
    enhancer
)