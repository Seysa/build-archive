import BuildTemplate from "./BuildTemplate";
import { Sigil, sigils, Weapon, weapons } from "./stuff";

export type Weapons = {
  slot1: Weapon;
  slot2?: Weapon;
  sigils: {
    first: Sigil;
    second: Sigil;
  };
};

export type Build = {
  name: string;
  description?: string;
  // remove methods from class to have only the properties
  build: Omit<BuildTemplate, "parse" | "toString">;
  code: string;
  amulet: string;
  rune: string;
  weapons: {
    first: Weapons;
    second: Weapons;
  };
};

export const vindicator: Record<string, Build> = {
  "full-zerk": {
    name: "Full Zerk",
    code: "[&DQkPKgMZRR3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]",
    amulet: "berserker",
    rune: "divinity",
    weapons: {
      first: {
        slot1: weapons.greatsword,
        sigils: {
          first: sigils.energy,
          second: sigils.exploitation,
        },
      },
      second: {
        slot1: weapons.sword,
        slot2: weapons.sword,
        sigils: {
          first: sigils.energy,
          second: sigils.doom,
        },
      },
    },
    build: {
      profession: 9,
      specializations: [
        {
          id: 15,
          traits: [1767, 1765, 1800],
        },
        {
          id: 3,
          traits: [1732, 1760, 1749],
        },
        {
          id: 69,
          traits: [2258, 2255, 2257],
        },
      ],
      skills: {
        terrestrial: {
          heal: 4572,
          utilities: [4564, 4614, 4651],
          elite: 4554,
        },
        aquatic: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
      },
      specific: [7, 2, 2, 3, 6, 18, 43, 18, 212, 17, 0, 0, 0, 0, 0, 0],
    },
  },
  "50-50-zerk": {
    name: "50-50 Zerk",
    code: "[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]",
    amulet: "berserker",
    rune: "divinity",
    weapons: {
      first: {
        slot1: weapons.greatsword,
        sigils: {
          first: sigils.energy,
          second: sigils.exploitation,
        },
      },
      second: {
        slot1: weapons.staff,
        sigils: {
          first: sigils.energy,
          second: sigils.doom,
        },
      },
    },
    build: {
      profession: 9,
      specializations: [
        {
          id: 15,
          traits: [1767, 1765, 1800],
        },
        {
          id: 3,
          traits: [1732, 1760, 1749],
        },
        {
          id: 69,
          traits: [2258, 2255, 2257],
        },
      ],
      skills: {
        terrestrial: {
          heal: 4572,
          utilities: [4564, 4614, 4651],
          elite: 4554,
        },
        aquatic: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
      },
      specific: [7, 2, 2, 3, 6, 18, 43, 18, 212, 17, 0, 0, 0, 0, 0, 0],
    },
  },
  "tanky-zerk": {
    name: "Tanky Zerk",
    code: "[&DQkJGwMZRT3cEdwR1BEGEgYSKxIrEtQRyhHKEQcCAgMGEisS1BEAAAAAAAA=]",
    amulet: "berserker",
    rune: "divinity",
    weapons: {
      first: {
        slot1: weapons.greatsword,
        sigils: {
          first: sigils.energy,
          second: sigils.exploitation,
        },
      },
      second: {
        slot1: weapons.staff,
        sigils: {
          first: sigils.energy,
          second: sigils.doom,
        },
      },
    },
    build: {
      profession: 9,
      specializations: [
        {
          id: 9,
          traits: [1810, 1782, 1779],
        },
        {
          id: 3,
          traits: [1732, 1760, 1749],
        },
        {
          id: 69,
          traits: [2258, 2255, 2238],
        },
      ],
      skills: {
        terrestrial: {
          heal: 4572,
          utilities: [4564, 4614, 4651],
          elite: 4554,
        },
        aquatic: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
      },
      specific: [7, 2, 2, 3, 6, 18, 43, 18, 212, 17, 0, 0, 0, 0, 0, 0],
    },
  },
};

export const herald: Record<string, Build> = {
  power: {
    name: "Power",
    code: "[&DQkPLgMZNCvcEQAABhIAACsSAADUEQAAyhEAAAIBAAAGEisS1BEAAAAAAAA=]",
    amulet: "berserker",
    rune: "divinity",
    weapons: {
      first: {
        slot1: weapons.sword,
        slot2: weapons.sword,
        sigils: {
          first: sigils.exploitation,
          second: sigils.energy,
        },
      },
      second: {
        slot1: weapons.staff,
        sigils: {
          first: sigils.cleansing,
          second: sigils.doom,
        },
      },
    },
    build: {
      profession: 9,
      specializations: [
        {
          id: 15,
          traits: [1767, 1802, 1800],
        },
        {
          id: 3,
          traits: [1732, 1760, 1749],
        },
        {
          id: 52,
          traits: [1716, 1743, 1772],
        },
      ],
      skills: {
        terrestrial: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
        aquatic: {
          heal: 0,
          utilities: [0, 0, 0],
          elite: 0,
        },
      },
      specific: [2, 1, 0, 0, 6, 18, 43, 18, 212, 17, 0, 0, 0, 0, 0, 0],
    },
  },
  condi: {
    name: "Condi",
    code: "[&DQkOFQMXNCbcEdwRBhIGEisSKxLUEdQRyhHKEQIEAgQGEtQRKxIGEtQRKxI=]",
    amulet: "berserker",
    rune: "divinity",
    weapons: {
      first: {
        slot1: weapons.sword,
        slot2: weapons.sword,
        sigils: {
          first: sigils.exploitation,
          second: sigils.energy,
        },
      },
      second: {
        slot1: weapons.staff,
        sigils: {
          first: sigils.energy,
          second: sigils.doom,
        },
      },
    },
    build: {
      profession: 9,
      specializations: [
        {
          id: 14,
          traits: [1793, 1727, 1795],
        },
        {
          id: 3,
          traits: [1784, 1774, 1749],
        },
        {
          id: 52,
          traits: [1806, 1738, 1772],
        },
      ],
      skills: {
        terrestrial: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
        aquatic: {
          heal: 4572,
          utilities: [4614, 4651, 4564],
          elite: 4554,
        },
      },
      specific: [2, 4, 2, 4, 6, 18, 212, 17, 43, 18, 6, 18, 212, 17, 43, 18],
    },
  },
};
