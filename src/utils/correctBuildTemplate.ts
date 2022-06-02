import BuildTemplate from "./BuildTemplate";
import convert from "./TraitConverter";

export default async function correctBuildTemplate(buildCode: string) {
  const build = new BuildTemplate(buildCode);
  for (let i = 0; i < 3; i++) {
    build.specializations[i].traits = await convert(
      build.specializations[i].id,
      build.specializations[i].traits
    );
  }

  return build;
}
