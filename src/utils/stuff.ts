export type Item = {
  name: string;
  id: string;
};

export type Weapon = Item & {
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

export type Sigil = Item;

export const sigils = {
  doom: {
    name: "Sigil of Doom",
    id: "21150",
  },
  energy: {
    name: "Sigil of Energy",
    id: "21152",
  },
  exploitation: {
    name: "Sigil of Exploitation",
    id: "81245",
  },
};
