import SkillsGlint from "../components/skills/SkillsGlint.vue";
import SkillsShiro from "../components/skills/SkillsShiro.vue";
import SkillsMallyx from "../components/skills/SkillsMallyx.vue";
import SkillsKalla from "../components/skills/SkillsKalla.vue";
import SkillsJalis from "../components/skills/SkillsJalis.vue";
import SkillsVentari from "../components/skills/SkillsVentari.vue";
import SkillsAlliance from "../components/skills/SkillsAlliance.vue";

/*
 * 1: Brill
 * 2: Shiro
 * 3: Nain
 * 4: Mallyx
 * 5: Kalla
 * 6: Centaure
 * 7: alliance
 */

export const stances = {
  1: {
    name: "Glint",
    component: SkillsGlint,
  },
  2: {
    name: "Shiro",
    component: SkillsShiro,
  },
  3: {
    name: "Jalis",
    components: SkillsJalis,
  },
  4: {
    name: "Mallyx",
    component: SkillsMallyx,
  },
  5: {
    name: "Kalla",
    component: SkillsKalla,
  },
  6: {
    name: "Ventari",
    component: SkillsVentari,
  },
  7: {
    name: "Alliance",
    component: SkillsAlliance,
  },
};

export function getStanceByNumber(num: number) {
  let component = null;
  Object.entries(stances).forEach(([key, value]) => {
    if (key === num.toString()) {
      //@ts-ignore
      component = value.component;
    }
  });
  if (component === null) {
    console.log("Found nothing for", num);
  }
  return component;
}
