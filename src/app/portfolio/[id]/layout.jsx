import projects from "../../Data/projects";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.category} Case Study`,
    description:
      project.shortDescription ||
      `Comprehensive ${project.category} case study and product walkthrough by Darshan Makwana.`,
    openGraph: {
      title: `${project.title} | Darshan Makwana Portfolio`,
      description:
        project.shortDescription ||
        `UI/UX Case Study: ${project.title} - ${project.category}`,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
