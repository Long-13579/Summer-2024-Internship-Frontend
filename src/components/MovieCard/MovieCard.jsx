import React from "react";
import Button from "@/components/Button";

import tag_icon from "@/assets/icon-tag.svg";
import clock_icon from "@/assets/icon-clock.svg";
import subtitle_icon from "@/assets/subtitle.svg";
import earth_icon from "@/assets/earth.svg";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group p-4 text-white rounded-lg overflow-hidden shadow-lg max-w-xs">
      <div className="relative flex justify-center">
        <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg" />
        <div className="absolute top-2 left-2 bg-yellow-500 text-black font-bold rounded px-2 transition-transform duration-300 group-hover:-translate-y-2">{movie.ageRating}</div>
        <div className="absolute top-2 right-2 bg-red-500 text-white font-bold rounded px-2 transition-transform duration-300 group-hover:-translate-y-2">{movie.format}</div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-start justify-center text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 space-y-2">
          <h2 className="text-xl font-bold text-center">{movie.title}</h2> 
          <div className="flex items-center space-x-2">
            <img src={tag_icon} className="h-5 w-5"></img>
            <p>Drama</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={clock_icon} className="h-5 w-5"></img>
            <p>127'</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={earth_icon} className="h-5 w-5 fill-yellow-400"></img>
            <p>Thailand</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={subtitle_icon} className="h-5 w-5"></img>
            <p>VN</p>
          </div>
        </div>
      </div>
      <h2 className="mt-4 text-lg font-bold group-hover:text-yellow-custom-700 text-center">{movie.title}</h2> {/* Điều chỉnh tiêu đề ở giữa */}
      <div className="flex justify-between mt-4">
        <a href={movie.trailerLink} className="bg-red-500 text-white font-bold rounded px-4 py-2">Watch Trailer</a>
        <Button title="BOOKING" extraClass="px-4 py-2" />
      </div>
    </div>
  );
};

export default MovieCard;
