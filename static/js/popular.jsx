import React from "react";
import LanguageSelector from "./language-selector.jsx";
import RepoGrid from "./repo-grid.jsx";
import api from "./api.js";


export default class Popular extends React.Component {
    constructor(props) {
        super(props); /* just always do this */

        this.state = {
            selectedLanguage: "All",
            repos: null
        };
        /* This is the only time you're allowed to do this.state = ___ . */

        this.updateLanguage = this.updateLanguage.bind(this);
        /* We bind here so that no matter when/where/in what context the
           updateLanguage method is invoked, 'this' will always be the
           component. */
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(language) {
        /* The fact that we're using 'this' inside this method means we have to
           do the binding in the constructor. */
        this.setState(function() {
            return {
                selectedLanguage: language,
                repos: null
            }
        });

        api.fetchPopularRepos(language)
           .then(function (repos) {
                this.setState(function() {
                    return {
                        repos: repos
                    };
                }) //end setState and function
           }.bind(this));
    }

    render() {

        return (
            <div>
                <LanguageSelector
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos
                    ? <p>LOADING</p>
                    : <RepoGrid repos={this.state.repos} />}

            </div>
        )
    } //end render()

} //end Popular component
