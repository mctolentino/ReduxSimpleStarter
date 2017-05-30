import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDM2fPHyEgtA4qwQxydHHiwctg-I9AOz1A';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#main'));