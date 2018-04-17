import React from "react";
// import LanguageSelector from "./language-selector.jsx";
import SelectLanguage from "./language-selector.jsx";

export default class Popular extends React.Component {
    constructor(props) {
        super(props); /* just always do this */

        this.state = {selectedLanguage: "All"};
        /* This is the only time you're allowed to do this.state = ___ . */

        this.updateLanguage = this.updateLanguage.bind(this);
        /* We bind here so that no matter when/where/in what context the
           updateLanguage method is invoked, 'this' will always be the
           component. */
    }

    updateLanguage(language) {
        /* The fact that we're using 'this' inside this method means we have to
           do the binding in the constructor. */
        this.setState(function() {
            return {selectedLanguage: language}
        });
    }

    render() {

        return (
            <div>
                {/* <LanguageSelector
                  selectedLanguage={this.state.selectedLanguage}
                  onSelect={this.updateLanguage}
                /> */}
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
        )
    } //end render()

} //end Popular component
