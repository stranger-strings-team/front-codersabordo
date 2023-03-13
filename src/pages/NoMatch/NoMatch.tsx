import React from "react";
import { Link } from "react-router-dom";

type Props = {}

export const NoMatch = (props: Props) => {
    return (
        <div className="nomatch-main">
            <h1>error 404.</h1>
            <Link to="/" className="nav-link">Vuelve al inicio</Link>
        </div>
    )
}