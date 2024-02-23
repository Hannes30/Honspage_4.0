import projects from "$lib/projects.json";
export function load({ params }) {
  return projects.filter((e) => e.url == params.project)[0];
}
