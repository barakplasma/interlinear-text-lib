import React from 'react';

import InterlinearText from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: [{en: 'Hello', iw: 'שלום'},{en: 'World!', iw: '!אולם'},{en: 'My name', iw: 'שם שלי'},{en: 'is', iw: 'הוא'},{en: 'Michael.', iw: '.מיכאל'}]
        }
    }

    componentDidMount() {
        console.log('test');
    }

    render() {
        return (
            <div>
                <InterlinearText sentence={this.state.sentence} />
            </div>
        )
    }
}

export default Example;