import React from 'react';
import {PropTypes} from 'prop-types';

class InterlinearText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <span>{this.props.sentence.map((word, index) => (<InterlinearWord en={word.en} iw={word.iw} sentencePosition={(index+1) / this.props.sentence.length} key={index}/>))}</span>
    }
}

const InterlinearWord = (props) => (
    <div className=".InterlinearText" style={{display: 'inline'}}>
        <span style={{display: 'inline-flex', flexFlow: 'column'}}>
            <div>{props.en}</div>
            <div>{props.iw}</div>
        </span>
        {props.sentencePosition === 1 ? '' : (<span style={{verticalAlign: '-.5rem'}}> > </span>)}
    </div>
)

InterlinearText.propTypes = {
    sentence: PropTypes.array
}

InterlinearWord.propTypes = {
    en: PropTypes.string,
    iw: PropTypes.string,
    sentencePosition: PropTypes.number
}

export default InterlinearText;