import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;
/*
//first one gets its language from state and will update but the other 2 don't
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>

//second one gets the value from a fixed the provider of always dutch
                <LanguageContext.Provider value="dutch">
                    <UserCreate />
                </LanguageContext.Provider>

//third gets default english and never sees update
                <UserCreate />
*/