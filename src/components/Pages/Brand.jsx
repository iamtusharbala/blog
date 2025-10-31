import React from "react";

const colors = ["#3B82F6", "#8C8C8C", "#D9D9D9", "#000000"];

const Brand = () => {
  return (
    <>
      <div className="colors">
        <p className="text-xl">Colors</p>
        <div className="flex gap-3">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-15 h-15 rounded-md cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
              <p className="text-xs mt-2 text-gray-600 cursor-pointer">
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="font mt-2">
        <p className="text-xl">Font Family</p>
        <span className="text-lg jetbrains-mono-font">JetBrains Mono</span>
        <span className="text-lg ml-10">Inter</span>
      </div>
      <div className="build mt-5">
        <p className="text-lg">Crafted with ❤️ in Kochi, powered by React.</p>
      </div>
    </>
  );
};

export default Brand;
