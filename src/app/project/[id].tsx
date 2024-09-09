// app/projects/[id].tsx
import { useRouter } from "next/router";
import React from "react";

// 샘플 프로젝트 데이터
const projects = [
  {
    id: "1",
    name: "Project One",
    details: "Detailed information about project one.",
  },
  {
    id: "2",
    name: "Project Two",
    details: "Detailed information about project two.",
  },
  {
    id: "3",
    name: "Project Three",
    details: "Detailed information about project three.",
  },
];

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query; // URL에서 id 파라미터 가져오기

  // id에 해당하는 프로젝트 찾기
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p>{project.details}</p>
      <button
        onClick={() => router.back()}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProjectDetail;
