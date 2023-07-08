interface TechProps {
  name: string;
  color?: string;
  logo?: string;
}

export default interface ProjectsProps {
  name: string;
  url_image: string;
  repository: string;
  url_page?: string;
  technologies: TechProps[];
}
