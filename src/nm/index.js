import React from 'react';
import {render} from 'react-dom';

import App from './components/App';



async function run()
{
    render(
        <App />,
        document.getElementById("root")
    );
}

run();
