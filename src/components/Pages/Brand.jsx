import React from "react";

const colors = ["#000000", "#8C8C8C", "#D9D9D9", "#3B82F6"];

const Brand = () => {
  return (
    <div className="brand mt-3">
      <div className="colors">
        <p className="text-xl">Colors</p>
        <div className="flex gap-3">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-md cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
              <p className="text-sm mt-2 text-gray-600 cursor-pointer">
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="font mt-5">
        <p className="text-xl">Font Family</p>
        <span className="text-lg jetbrains-mono-font">JetBrains Mono</span>
        <span className="text-lg ml-10">Inter</span>
      </div>
      <div className="build mt-5">
        <p className="text-lg">Crafted with ❤️ in Kochi, powered by React.</p>
      </div>
    </div>
  );
};

export default Brand;
