import React from 'react';

import InterlinearText from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: [{en: 'Hello', iw: 'שלום'},{en: 'World!', iw: '!אולם'}]
        }
    }

    componentDidMount() {
        console.log('test');
    }

    render() {
        return (
            <div>
                {this.state.sentence.map(word=><InterlinearText en={word.en} iw={word.iw} />)}
            </div>
        )
    }
}

export default Example;