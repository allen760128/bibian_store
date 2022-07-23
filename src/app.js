import React from 'react';
import './reset.css';
import {HashRouter,Switch,Route} from 'react-router-dom';
import firstPage from './firstPage';
import sec2Page from './sec2Page';
import sec3Page from './sec3Page';

const App=(props)=>{
    return(
        <HashRouter>
            <Switch>
                <Route path='/' exact component={firstPage}></Route>
                <Route path='/free'  component={sec2Page}></Route>
                <Route path='/intro' component={sec3Page}></Route>
            </Switch>
        </HashRouter>
    );
}

export default App;