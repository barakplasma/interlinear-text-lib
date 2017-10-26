import React from 'react';

import InterlinearSentence from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentence: [{en: 'Hello', iw: 'שלום'},{en: 'World!', iw: 'עולם!'},{en: 'My name', iw: 'שם שלי'},{en: 'is', iw: 'הוא'},{en: 'Michael.', iw: 'מיכאל.'}]
        }
    }

    render() {
        return (
            <div>
                <InterlinearSentence sentence={this.state.sentence} />

                <p>
                    English sentence: {this.state.sentence.map(word=>word.en).join(' ')}
                </p>

                <p>
                    Hebrew sentence: 
                    {` ${this.state.sentence.map(word=>word.iw).join(' ')}`}
                </p>
            </div>
        )
    }
}

export default Example;