import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;

/* this.context is one way to get info out of the pipe, consumer above is the second way
//use context if you have a single context object, use consumer if you have multiple context objects
class Button extends React.Component {
    static contextType = LanguageContext;//static adds a property to the class so could write as Button.contextType = LanguageContext instead
    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}

export default Button;
*/