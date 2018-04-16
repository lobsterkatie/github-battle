import React from "react";

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
        let languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

        return (
            <ul className="languages">

                {languages.map(function(language){

                    return (
                        <li
                          style={ language === this.state.selectedLanguage ?
                                    {color: "#D0021B"} :
                                    null } {/* ternary: <if cond> ? <body of
                                               if> : <body of else> */}

                          key={language}
                          {/* Whenever you do map to create an array of DOM
                              elements, you need to give each one a unique
                              key property. */}

                          onClick={this.updateLanguage.bind(null, language)}
                          {/* We need to bind here to pass in the language
                            argument. The first argument to bind is null
                            because we bound the correct 'this' (the
                            component) above, in the constructor. */}

                        > {/* end of opening <li> tag */}

                            {language}

                        </li>
                    )
                }, this)
                {/* The 'this' here is to make the 'this' inside the map
                callback the same as the 'this' outside the callback (ie,
                    to make 'this' mean the component). If we use arrow
                functions, we don't need to do this. */}

                } {/* end of array of <li>'s */}

            </ul>
        )
    } //end render()

} //end Popular component
