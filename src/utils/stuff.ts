export type Item = {
  name: string;
  id: string;
};

export type Weapon = Item & {
  twoHanded: boolean;
};

enum Weapons {
  greatsword = "greatsword",
  sword = "sword",
  staff = "staff",
  mace = "mace",
  shield = "shield",
  axe = "axe",
}

export const weapons: Record<Weapons, Weapon> = {
  greatsword: {
    name: "Greatsword",
    id: "31652",
    twoHanded: true,
  },
  staff: {
    name: "Staff",
    id: "31291",
    twoHanded: true,
  },
  sword: {
    name: "Sword",
    id: "31292",
    twoHanded: false,
  },
  mace: {
    name: "Mace",
    id: "31284",
    twoHanded: false,
  },
  axe: {
    name: "Axe",
    id: "",
    twoHanded: false,
  },
  shield: {
    name: "Shield",
    id: "31288",
    twoHanded: false,
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
  cleansing: {
    name: "Sigil of Cleansing",
    id: "81254",
  },
  misery: {
    name: "Sigil of Misery",
    id: "81234",
  },
};

export type Rune = Item;

export const runes = {
  sunless: {
    name: "Rune  of the Sunless",
    id: "65241",
  },
  divinity: {
    name: "Rune of Divinity",
    id: "21175",
  },
};

export const amulets = {
  rabid: {
    name: "Rabid Amulet",
    id: "13",
  },
  berserker: {
    name: "Berserker Amulet",
    id: "8",
  },
};
