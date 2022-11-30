export interface IProjectsList {
  id: string;
  title: string;
  mediaUrl: string;
  discription: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl: string;
}
export type PortfolioProps = {
  projects: IProjectsList[];
};

export interface IContactFormData {
  name: string;
  email: string;
  message: string;
}
