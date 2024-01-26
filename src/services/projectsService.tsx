import axiosInstance from "./apiServices";
import { ProjectsProps } from "@/types/project";

const projectsService = {
  getAllProjectData(token: string): Promise<ProjectsProps[]> {
    return axiosInstance(token).get("users/laiphuhieu/repos");
  },
};

export default projectsService;
