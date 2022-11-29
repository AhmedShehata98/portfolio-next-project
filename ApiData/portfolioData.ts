export interface IProjectsList {
  id: string;
  title: string;
  mediaUrl: string;
  discription: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl: string;
}

export const projectsList: IProjectsList[] = [
  {
    id: "1",
    title: "Project 1",
    mediaUrl: "/background.png",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur exercitationem neque!",
    technologies: ["HTML", "CSS 3", "Javascript", "React"],
    repositoryUrl: "https://google.com",
    demoUrl: "https://google.com",
  },
];
