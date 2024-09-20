import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const MoviesCard = ({ movie, image , rating, imdb_url }) => {


    return (
        <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-72 h-96 bg-gray-800 text-white">
            {/* Movie Image */}
            <img
                src={image}
                alt={`${movie} poster`}
                className="w-full h-3/4 object-cover"
            />

            {/* Movie Details Overlay */}
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent p-3 flex flex-col justify-end">
                {/* Movie Title */}
                <h2 className="text-lg font-bold truncate">{movie}</h2>

                {/* Rating */}
                <p className="text-sm text-yellow-400 mt-1">⭐ {rating}</p>

                {/* IMDb Link */}
                <Link
                    to={imdb_url}
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on IMDb <FaExternalLinkAlt className="ml-1" />
                </Link>
            </div>
        </div>
    );
};

export default MoviesCard;
