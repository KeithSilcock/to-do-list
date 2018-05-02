import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.css';
import List from './list';

const App = () => (
    <div>
        <div className="container">
            <h1 className='center'>To do list</h1>
            <List/>
        </div>
    </div>
);

export default App;
