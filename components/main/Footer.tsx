import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex gap-6 mb-4">
        <a
          href="https://github.com/alessiotegoni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/alessio-tegoni-9a8a22274/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-400 transition-colors duration-200 cursor-pointer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Alessio Tegoni
      </p>
    </footer>
  );
}
