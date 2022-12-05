export interface IHomeProps {
  skills: ISkillsList[];
}
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

export type newsFeedPorps = {
  news: INewsfeed[];
};
export interface INewsfeed {
  id: string;
  description: string;
  date: string;
  media: string;
}

export interface ISkillsList {
  id: string;
  image: string;
  skillName: string;
  skillLevel: number;
}
export interface ISkillsProps {
  skills: ISkillsList[];
  isVisiale: boolean;
}
