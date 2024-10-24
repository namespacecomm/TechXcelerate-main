import React from "react";
import "./ThemesCard.css";

function ThemesCard({
  image,
  title,
  gradientColor,
  gradientColorText,
  assignmentLink
}) {
  return (
    <div className="ProjectCard relative rounded-lg mx-2 py-2">
      <div className="flex flex-col items-center justify-center">
        <div
          className={`ProjectBand absolute top-0 left-0 overflow-hidden h-[10px] w-full ${gradientColor}`}
        />
        <div className="pt-2">
          <img className="p-4 h-40 w-40" src={image} alt="sdg" />
        </div>
      </div>
      <div className="px-4 pb-2 flex flex-col">
        <h5
          className={`mb-2 text-[1.5rem] font-bold tracking-tight text-center ${gradientColorText}`}
        >
          {title}
        </h5>
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
    </div>
  );
}

export default ThemesCard;
