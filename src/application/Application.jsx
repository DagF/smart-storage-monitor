import React from 'react';
import DevTools from '../devtools/DevTools'
import Main from './Main'
import Header from './Header'

import './Application.scss'

const Application = ({children}) => {
    return <div className="row no-spacing">
        <div className="col s12 no-spacing">
            <Header/>
            <Main children={children}/>
        </div>
        <DevTools/>
    </div>
};

export default Application