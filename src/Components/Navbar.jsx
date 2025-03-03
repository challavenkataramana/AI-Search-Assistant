import React from "react";

export const Navbar=()=>{

    return(
        <div className="bg-gray-200 text-black p-4 flex gap-8 text-xl items-center">
             <img className="h-12 w-20 rounded-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdax7R2VmS5TWHvjGodn-x5ahcT6SAz4PjmQ&s" alt="logo" />
             <h3 className="text-2xl font-bold">AI Search Assistant</h3>
        </div>
    );
}