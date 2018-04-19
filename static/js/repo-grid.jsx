import React from "react";
import PropTypes from "prop-types";


export default function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map(function(repo, index){
                return(
                    <li key={repo.name} className="popular-item">
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img
                                  className="avatar"
                                  src={repo.owner.avatar_url}
                                  alt={"avatar for " + repo.owner.login} />
                            </li>
                            <li>
                                <a href={repo.html_url}>
                                    {repo.name}
                                </a>
                            </li>
                            <li>
                                @{repo.owner.login}
                            </li>
                            <li>
                                {repo.stargazers_count} stars
                            </li>
                        </ul>
                    </li> //end of jsx for one repo in the gird
                )
            })} {/* end of map function */}
        </ul> //end of grid
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
}
