"use client";
import { projectData } from "../data/projects";
import ImageSlider from "@/components/slider/ImageSlider";
type ProjectData = {
  index: number;
  title: string;
  date: string;
  image: string[];
  description: string;
};
export default function ProjectPage() {
  const project: ProjectData[] = projectData;
  return (
    <>
      <section className="flex flex-col min-h-screen items-center justify-between pt-16 w-screen">
        {" "}
        <div className="porjects flex flex-col rel_width lg:w-[50%] py-52 text-black gap-10">
          {project.map((project) => {
            return (
              <div className="project flex flex-col justify-center items-center w-full bg-white rounded-lg px-[3rem] py-[3rem] gap-6">
                <div className="project-title flex justify-center items-center text-sub-title font-bold">
                  {project.title}
                </div>
                <div className="project-date flex text-xl">{project.date}</div>
                <div className="project-info flex justify-center items-start w-full gap-10">
                  <div className="project-img flex-grow w-1/2">
                    <ImageSlider imgArr={project.image} />
                  </div>
                  <div className="project-description flex flex-col items-center flex-grow">
                    <div className="project-top-description ">
                      {project.description}
                    </div>
                    <div className="description-div-line w-[80%] border-t border-gray-400 my-4"></div>
                    <div className="project-bottom-description">
                      {project.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
