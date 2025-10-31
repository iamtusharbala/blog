import React from "react";

const colors = ["#3B82F6", "#8C8C8C", "#D9D9D9", "#000000"];

const Brand = () => {
  return (
    <>
      <div className="colors">
        <p className="text-xl mb-4 dark:text-gray-100">Colors</p>
        <div className="flex gap-6">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-15 h-15 rounded-md cursor-pointer border border-gray-300"
                style={{ backgroundColor: color }}
              ></div>
              <p className="text-xs mt-2 text-gray-600 dark:text-gray-100 cursor-pointer">
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="font mt-10">
        <p className="text-xl mb-4 dark:text-gray-100">Font Family</p>
        <span className="text-lg jetbrains-mono-font dark:text-gray-100">JetBrains Mono</span>
        <span className="text-lg ml-10 dark:text-gray-100">Inter</span>
      </div>
      <div className="build mt-10">
        <p className="text-lg dark:text-gray-100">Crafted with ❤️ in Kochi, powered by React.</p>
      </div>
    </>
  );
};

export default Brand;
