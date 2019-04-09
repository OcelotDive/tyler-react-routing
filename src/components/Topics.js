import React from 'react';
import {
    Link,
    Route,
    BrowserRouter,
    withRouter
} from 'react-router-dom';


function Topic({match}) {

    return (
       
        <h4>{match.params.topicId}</h4>
       
    )
}

function Default() {
    
    return(
        <h4>Select a Topic</h4>
    )
}

function Topics ({match}) {
    console.log("topics props", match)
    return (
  
    <div>
        
        <h2>Topics</h2>
        <ul>
        <li>
            <Link to={`${match.url}/rendering`}>Rendering</Link>
        </li>
        <li>
            <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
            <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
        </li>
      
        </ul>
        <hr/>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={`${match.url}`} component={Default}/>
        
        
        
        
        
    </div>
      
    )
}

export default Topics;