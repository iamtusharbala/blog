import React from "react";
import { Linkedin, Youtube, Instagram, Github, FileUser } from "lucide-react";

const SocialPill = () => {
  return (
    <div className="lg:mx-45 mx-auto social-icons flex lg:gap-3 justify-between">
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.linkedin.com/in/tushar-balakrishnan/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
      >
        <Linkedin className=" text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.youtube.com/@iam_tusharbala"
        target="_blank"
        aria-label="YouTube"
        rel="noopener noreferrer"
      >
        <Youtube className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://github.com/iamtusharbala"
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
      >
        <Github className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.instagram.com/iam_tusharbala/"
        target="_blank"
        aria-label="Instagram"
        rel="noopener noreferrer"
      >
        <Instagram className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="../assets/Tushar Resume.pdf"
        download={`Tushar_Balakrishnan_Resume_${new Date().getFullYear()}.pdf`}
      >
        <FileUser className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialPill;
