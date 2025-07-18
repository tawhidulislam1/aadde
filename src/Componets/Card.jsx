import React from "react";

const Card = ({ image,  title }) => {
    return (
        <div className="border-solid border-brightYellow border-4 flex justify-evenly items-center shadow-xl py-8 w-full rounded-3xl flex-col min-h-48 h-full">
            {image}
            <h3 className=" mb-4 text-lg font-bold md:block ">{title}</h3>
        </div>
    );
};

export default Card;