import projectsService from "@/services/projectsService";
import { useCallback, useEffect, useState } from "react";
import { ProjectsProps } from "@/types/project";
// import { API_TOKEN } from "@/config/config";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  const hiddenProjects = [
    "accordion",
    "cur",
    "The-band",
    "Viconstone",
    "practice-shop",
    "tiktok-ui",
  ];

  const API_TOKEN = "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";
  const githubService = useCallback(async () => {
    try {
      const response = await projectsService.getAllProjectData(API_TOKEN);
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    githubService();
  }, [githubService]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleView = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <section id="projects" className="w-full">
      <div className="py-[48px]">
        <h2 className="pb-[48px] mb-[8px] uppercase text-[56px] flex justify-center">
          Projects
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {projects?.map((project) => (
            <>
              {hiddenProjects.includes(project.name) ? (
                ""
              ) : (
                <>
                  <div
                    key={project.id}
                    className="w-full mb-[24px] rounded-[8px] border-[1px] border-solid border-[#eee] shadow-[0_4px_6px_-10x_rgba(0,0,0,0.1)] md:col-span-1"
                  >
                    <div className="p-[16px]">
                      <h3 className="text-[18px] font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-[14px] text-gray-600 mb-[12px]">
                        {project.description || "No description available"}
                      </p>
                      <p className="text-[12px] font-semibold">
                        Language: {project.language}
                      </p>
                      <p className="text-[12px]">
                        Last Updated:{" "}
                        {new Date(project.updated_at).toLocaleDateString(
                          "en-US",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>

                      <button
                        className="border-[1px] border-solid border-[#e3e3e3] hover:bg-[#0000008c] text-white py-2 px-4 rounded mt-[16px] transition-colors duration-300"
                        onClick={() => handleView(project.html_url)}
                      >
                        <span className="text-[#0000008c] ">
                          View on GitHub
                        </span>
                      </button>
                      <button
                        className="border-[1px] border-solid border-[#e3e3e3] hover:bg-[#0000008c] text-white py-2 px-4 rounded mt-[16px] transition-colors duration-300 ml-[16px]"
                        onClick={() => handleView(project.homepage)}
                      >
                        <span className="text-[#0000008c]">View</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
