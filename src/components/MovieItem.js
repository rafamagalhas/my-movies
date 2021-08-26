import { Link } from "react-router-dom";

export const MovieItem = ({ id, title }) => (
    <li>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);