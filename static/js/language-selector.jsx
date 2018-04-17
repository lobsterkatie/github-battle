import React from "react";
import PropTypes from "prop-types";

// export default class LanguageSelector extends React.Component {
//     render() {
//         let languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

//         return (
//             <ul className="languages">

//                 {languages.map(function (language) {

//                     return (
//                         <li
//                             style={language === this.props.selectedLanguage ?
//                                 { color: "#D0021B" } :
//                                 null} /* ternary: <if cond> ? <body of
//                                                 if> : <body of else> */

//                             key={language}
//                             /* Whenever you do map to create an array of DOM
//                                 elements, you need to give each one a unique
//                                 key property. */

//                             onClick={this.props.onSelect.bind(null, language)}
//                             /* We need to bind here to pass in the language
//                                 argument. The first argument to bind is null
//                                 because we bound the correct 'this' (the
//                                 component) above, in the constructor. */

//                         > {/* end of opening <li> tag */}

//                             {language}

//                         </li>
//                     )
//                 }, this)
//                     /* The 'this' here is to make the 'this' inside the map
//                        callback the same as the 'this' outside the callback
//                        (ie, to make 'this' mean the component). If we use arrow
//                        functions, we don't need to do this. */

//                     } {/* end of array of <li>'s */}

//             </ul>
//         )
//     } //end render()
// } // end LanguageSelector component

// LanguageSelector.propTypes = {
//     selectedLanguage: PropTypes.string.isRequired,
//     onSelect: PropTypes.func.isRequired
// }



export default function SelectLanguage(props) {
    let languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

    return (
        <ul className="languages">

            {languages.map(function (language) {

                return (
                    <li
                        style={language === props.selectedLanguage ?
                            { color: "#D0021B" } :
                            null} /* ternary: <if cond> ? <body of
                                            if> : <body of else> */

                        key={language}
                        /* Whenever you do map to create an array of DOM
                            elements, you need to give each one a unique
                            key property. */

                        onClick={props.onSelect.bind(null, language)}
                    /* We need to bind here to pass in the language
                        argument. The first argument to bind is null
                        because we bound the correct 'this' (the
                        component) above, in the constructor. */

                    > {/* end of opening <li> tag */}

                        {language}

                    </li>
                )
            }) //end of mapping function

            } {/* end of array of <li>'s */}

        </ul>
    )
} // end SelectLanguage functional component


SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}
