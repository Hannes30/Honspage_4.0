import projects from "$lib/projects.json";
export function load({ params }) {
  return { params: params.projects };
}
