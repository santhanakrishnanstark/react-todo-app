import React, { useEffect } from 'react';
import {runDataDog} from '../../service/datadog';

const Contact = () => {

    useEffect(() => {
        
        // let history = createBrowserHistory();
        // let location = history.location;
        console.log('contact page');
        // const locationChanged =
        // this.props.location !== prevProps.location;

        // runDataDog();
    }, []);

    return ( 
        <h1>Contact Page</h1>
     );
}
 
export default Contact;