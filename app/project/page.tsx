"use client";
import { projectData } from "../data/projects";
import { corpProjectData } from "../data/corporate_project";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const corp_project: ProjectData[] = corpProjectData;

  return (
    <>
      <section className="flex flex-col min-h-screen items-center justify-between pt-16 w-screen">
        <Tabs
          defaultValue="side_project"
          className="w-full flex flex-col justify-center items-center py-52"
        >
          <TabsList>
            <TabsTrigger value="side_project">Side Project</TabsTrigger>
            <TabsTrigger value="corp_project">Corporate Project</TabsTrigger>
          </TabsList>
          <TabsContent value="side_project">
            {project.map((project, index) => (
              <div
                key={index} // key prop 추가
                className="project flex flex-col justify-center items-center w-full bg-white rounded-lg px-[3rem] py-[3rem] gap-6"
              >
                <div className="project-title flex justify-center items-center text-sub-title font-bold">
                  {project.title}
                </div>
                <div className="project-date flex text-xl">{project.date}</div>
                <div className="project-info flex justify-center items-start w-full gap-10">
                  <div className="project-img flex-grow w-[250px]">
                    <ImageSlider imgArr={project.image} />
                  </div>
                  <div className="project-description flex flex-col items-center w-[300px] flex-grow">
                    <div className="project-top-description">
                      {project.description}
                    </div>
                    <div className="description-div-line w-full border-t border-gray-400 my-8"></div>
                    <div className="project-bottom-description w-full">
                      <ul className="flex flex-col gap-3">
                        <li className="flex flex-col gap-2 w-full ">
                          <div className="info-title  font-bold">
                            <p>주요기능</p>
                          </div>
                          <div className="">
                            <p>{project.mainfunction}</p>
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full ">
                          <div className="info-title  font-bold">
                            <p>GitHub</p>
                          </div>
                          <a
                            className="text-[--color-sub-002]"
                            href={project.github}
                          >
                            깃허브 주소
                          </a>
                        </li>
                        <li className="flex flex-col gap-2 w-full ">
                          <div className="info-title  font-bold">
                            <p>URL</p>
                          </div>
                          <div className="">
                            {project.url === "" ? (
                              <p>서비스 임시종료 (aws 이슈)</p>
                            ) : (
                              <a
                                className="text-[--color-sub-002]"
                                href={project.url}
                              >
                                서비스 주소
                              </a>
                            )}
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full ">
                          <div className="info-title  font-bold">
                            <p>Stack</p>
                          </div>
                          <div className="">
                            <p>{project.stack}</p>
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full ">
                          <div className="info-title  font-bold">
                            <p>Deployment</p>
                          </div>
                          <div className="">
                            <p>{project.deployment}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="corp_project">
            {corp_project.map((project, index) => (
              <div
                key={index} // key prop 추가
                className="project flex flex-col justify-center items-center w-full bg-white rounded-lg px-[3rem] py-[3rem] gap-6"
              >
                <div className="project-title flex justify-center items-center text-sub-title font-bold">
                  {project.title}
                </div>
                <div className="project-date flex text-xl">{project.date}</div>
                <div className="project-info flex justify-center items-start w-full gap-10">
                  <div className="project-img flex-grow w-1/2">
                    <ImageSlider imgArr={project.image} />
                  </div>
                  <div className="project-description flex flex-col items-center flex-grow">
                    <div className="project-top-description">
                      {project.description}
                    </div>
                    <div className="description-div-line w-full border-t border-gray-400 my-8"></div>
                    <div className="project-bottom-description">
                      <ul className="flex flex-col gap-3">
                        <li className="flex flex-col gap-2 w-full">
                          <div className="info-title font-bold">
                            <p>주요기능</p>
                          </div>
                          <div className="flex-grow">
                            <p>{project.mainfunction}</p>
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full">
                          <div className="info-title  font-bold">
                            <p>GitHub</p>
                          </div>
                          <div className="flex-grow">{project.github}</div>
                        </li>
                        <li className="flex flex-col gap-2 w-full">
                          <div className="info-title  font-bold">
                            <p>URL</p>
                          </div>
                          <div className="flex-grow">
                            {project.url === "" ? (
                              <p>사내 백오피스 서비스라 접속불가</p>
                            ) : (
                              <a
                                className="text-[--color-sub-002]"
                                href={project.url}
                              >
                                서비스링크
                              </a>
                            )}
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full">
                          <div className="info-title  font-bold">
                            <p>Stack</p>
                          </div>
                          <div className="flex-grow">
                            <p>{project.stack}</p>
                          </div>
                        </li>
                        <li className="flex flex-col gap-2 w-full">
                          <div className="info-title  font-bold">
                            <p>Deployment</p>
                          </div>
                          <div className="flex-grow">
                            <p>{project.deployment}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
