import React from 'react';

import InterlinearText from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: [{en: 'Hello', iw: 'שלום'},{en: 'World!', iw: '!אולם'},{en: 'My name', iw: 'שם שלי'}]
        }
    }

    componentDidMount() {
        console.log('test');
    }

    render() {
        return (
            <div>
                {this.state.sentence.map((word, index)=><InterlinearText en={word.en} iw={word.iw} sentencePosition={(index+1) / this.state.sentence.length}/>)}
            </div>
        )
    }
}

export default Example;