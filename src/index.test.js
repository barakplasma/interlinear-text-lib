import React from 'react';
import ReactDOM from 'react-dom';
import InterlinearText from 'index';

describe('<InterlinearText />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InterlinearText />, div);
    });
});
