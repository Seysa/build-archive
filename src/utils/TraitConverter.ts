import axios from "axios";

export default async function convert(specId: number, choices: number[]) {
  const response = await axios.get(
    `https://api.guildwars2.com/v2/specializations/${specId}`
  );
  const res = [-1, -1, -1];
  let i = 0;
  choices.forEach((trait) => {
    res[i] = response.data.major_traits[trait - 1 + i * 3];
    i++;
  });

  return res;
}
