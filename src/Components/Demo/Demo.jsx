import React, { useEffect } from 'react';
import {runDataDog} from '../../service/datadog';

const Demo = () => {

    useEffect(() => {
        
        // let history = createBrowserHistory();
        // let location = history.location;
        console.log('Demo page');
        // const locationChanged =
        // this.props.location !== prevProps.location;

        // runDataDog();
    }, []);

    return ( 
        <h1>Demo Page</h1>
     );
}
 
export default Demo;