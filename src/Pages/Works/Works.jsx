import { useEffect } from "react";
import { useState } from "react";
import WorkCard from "./WorkCard";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const Works = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("../../../public/worksData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <SectionHeader header={"works"} subHeader={"My Works"}></SectionHeader>
      <div className='grid grid-cols-3 gap-10 container mx-auto py-20'>
        {projects.map((project) => (
          <WorkCard key={project.id} project={project}></WorkCard>
        ))}
      </div>
    </>
  );
};

export default Works;
