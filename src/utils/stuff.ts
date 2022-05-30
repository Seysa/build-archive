export type Weapon = {
  name: string;
  id: string;
  twoHanded: boolean;
};

export const weapons = {
  greatsword: {
    name: "Greatsword",
    id: "31652",
    twoHanded: true,
  },
  sword: {
    name: "Sword",
    id: "31292",
    twoHanded: false,
  },
  staff: {
    name: "Staff",
    id: "31291",
    twoHanded: true,
  },
};
