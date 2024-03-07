import services from "$lib/services.json";
export function load({ params }) {
  return { services: services.filter((e) => e.url == params.service)[0] };
}
