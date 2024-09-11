// components/modal/index.tsx
import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  project: any;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-2xl mx-4 p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out scale-105">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center">
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-md mb-4 shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          />
          <h2 className="text-2xl font-semibold mb-2 text-fuchsia-500">
            {project.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mb-4"
          >
            GitHub Link
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Project URL
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
