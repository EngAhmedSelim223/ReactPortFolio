import React, { useState } from "react";
import port1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";
import Modal from "./../Modal/Modal";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: port1,
    description: "Description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    image: port2,
    description: "Description of Project 2",
  },
  {
    id: 3,
    title: "Project 3",
    image: port3,
    description: "Description of Project 3",
  },
  {
    id: 4,
    title: "Project 4",
    image: port1,
    description: "Description of Project 4",
  },
  {
    id: 5,
    title: "Project 5",
    image: port2,
    description: "Description of Project 5",
  },
  {
    id: 6,
    title: "Project 6",
    image: port3,
    description: "Description of Project 6",
  },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="py-12 text-lg">
        <div className="itmes text-center py-5 ">
          <h2 className="text-slate-900 pt-3 fs-2">portafolio</h2>
          <div className="icons d-flex align-items-center justify-content-center ">
            <span className="span text-slate-900  mr-3">____</span>
            <i className="fa-solid fa-star fs-3  mt-4  text-slate-900"></i>
            <span className="span text-slate-900 ml-3">____</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-9 flex flex-wrap">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="imges mb-4 mr-4 relative group overflow-hidden">
              <img className="w-full" src={project.image} alt={project.title} />
              <div
                className="icons-portf absolute"
                onClick={() => openModal(project)}
              >
                <i className="fa-solid fa-plus text-white fs-3"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
