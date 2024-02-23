import services from "$lib/services.json";
export function load({ params }) {
  return services.filter((e) => e.url == params.project)[0];
}
