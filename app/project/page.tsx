"use client";
import { projectData } from "../data/projects";
import ImageSlider from "@/components/slider/ImageSlider";
type ProjectData = {
  index: number;
  title: string;
  date: string;
  image: string[];
  description: string;
  mainfunction: string;
  github: string;
  url: string;
  stack: string;
  deployment: string;
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
                      <ul className="flex flex-col gap-3">
                        <li className="flex gap-6">
                          <div className="info-title w-[120px]">
                            {" "}
                            <p>주요기능</p>
                          </div>
                          <div className="w-[50%]">
                            <p>{project.mainfunction}</p>
                          </div>
                        </li>
                        <li className="flex gap-6">
                          <div className="info-title w-[120px]">
                            {" "}
                            <p>GitHub</p>
                          </div>
                          <a href={project.github}>{project.github}</a>
                        </li>
                        <li className="flex gap-6">
                          <div className="info-title w-[120px]">
                            <p>URL</p>
                          </div>
                          <div className="w-[50%]">
                            {" "}
                            {project.url === "" ? (
                              <p>서비스 임시종료 (aws 이슈)</p>
                            ) : (
                              <a href={project.url}>{project.url}</a>
                            )}
                          </div>
                        </li>
                        <li className="flex gap-6">
                          <div className="info-title w-[120px]">
                            <p>Stack</p>
                          </div>
                          <div className="w-[50%]">
                            <p>{project.stack}</p>
                          </div>
                        </li>
                        <li className="flex gap-6">
                          <div className="info-title w-[120px]">
                            <p>Deployment</p>
                          </div>
                          <div className="w-[50%]">
                            <p>{project.deployment}</p>
                          </div>
                        </li>
                      </ul>
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
