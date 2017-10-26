import React from 'react';
import {PropTypes} from 'prop-types';

class InterlinearText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className=".InterlinearText" style={{display: 'inline'}}>
                <span style={{display: 'inline-flex', flexFlow: 'column'}}>
                    <div>{this.props.en}</div>
                    <div>{this.props.iw}</div>
                </span>
            </div>
        )
    }
}

InterlinearText.propTypes = {
    en: PropTypes.string,
    iw: PropTypes.string
}

export default InterlinearText;