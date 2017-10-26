import React from 'react';
import {PropTypes} from 'prop-types';

class InterlinearSentence extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <span className=".InterlinearSentence">{this.props.sentence.reverse().map((word, index) => (<InterlinearWord en={word.en} iw={word.iw} sentencePosition={(index+1) / this.props.sentence.length} key={index}/>))}</span>
    }
}

const InterlinearWord = (props) => (
    <div className=".InterlinearWord" style={{display: 'inline'}}>
        <span style={{display: 'inline-flex', flexFlow: 'column', alignItems: 'center'}}>
            <div style={{direction: 'rtl'}}>{props.iw}</div>
            <div>{props.en}</div>
        </span>
        {props.sentencePosition === 1 ? '' : (<span style={{verticalAlign: '-1rem'}}> {'↞'} </span>)}
    </div>
)

InterlinearSentence.propTypes = {
    sentence: PropTypes.array
}

InterlinearWord.propTypes = {
    en: PropTypes.string,
    iw: PropTypes.string,
    sentencePosition: PropTypes.number
}

export default InterlinearSentence;