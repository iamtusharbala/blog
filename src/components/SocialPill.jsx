import React from "react";
import { Linkedin, Youtube, Instagram, Github, FileUser } from "lucide-react";

const SocialPill = () => {
  return (
    <div className="social-icons text-end absolute right-30 flex gap-4">
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.linkedin.com/in/tushar-balakrishnan/"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.youtube.com/@iam_tusharbala"
        target="_blank"
        aria-label="YouTube"
        rel="noopener noreferrer"
      >
        <Youtube className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://github.com/iamtusharbala"
        target="_blank"
        aria-label="GitHub"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="https://www.instagram.com/iam_tusharbala/"
        target="_blank"
        aria-label="Instagram"
        rel="noopener noreferrer"
      >
        <Instagram className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        className="p-2 cursor-pointer rounded group hover:bg-[#3B82F6] transition-colors"
        href="../assets/Tushar Resume.pdf"
        download={`Tushar_Balakrishnan_Resume_${new Date().getFullYear()}.pdf`}
      >
        <FileUser className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialPill;
