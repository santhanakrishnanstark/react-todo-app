import React, { useEffect } from 'react';
import {runDataDog} from '../../service/datadog';

const About = () => {

    useEffect(() => {
        
        // let history = createBrowserHistory();
        // let location = history.location;
        console.log('about page');
        // const locationChanged =
        // this.props.location !== prevProps.location;

        // runDataDog();
    }, []);

    return ( 
        <h1>About Page</h1>
     );
}
 
export default About;