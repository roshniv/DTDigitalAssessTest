import './css/main.css';

import React from 'react';
import {Router, parse, stringify} from 'react-router';
import {ReactDOM, render } from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory'
import routes from './config/routes';

const history = createHashHistory({ queryKey: false })

render(<Router history = {history}  parseQueryString={parse} stringifyQuery={stringify} routes={routes}/>, document.getElementById("main"));
