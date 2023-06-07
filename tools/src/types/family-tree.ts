interface Family {
  house?: string;
  parents?: string[];
  parents2?: string[];
  children?: string[];
  children2?: string[];
  families?: Family[];
}
interface People {
  [name: string]: {
    fullname?: string;
    name?: string;
    born?: string;
    died?: string;
    links: string[];
    class?: string[];
  }
}

interface Style {
  [className: string]: {
    [prop: string]: any;
  }
}

export interface FamilyTree {
  families: Family[];
  people: People;
}

const searchSpouseNode = (family: Family, name: string): string | null => {
  if (family.parents?.includes(name)) {
    const spouse = family.parents.filter(i => i != name)[0];
    return spouse;
  } else if (family.parents2?.includes(name)) {
    const spouse = family.parents2.filter(i => i != name)[0];
    return spouse;
  } else if (family.families) {
    for (const subfam of family.families) {
      const spouse = searchSpouseNode(subfam, name);
      if (spouse) {
        return spouse;
      }
    }
  }

  return null;
}

const searchParentNode = (family: Family, name: string): string[] | null => {
  if (family.children?.includes(name) || family.children2?.includes(name)) {
    if (family.parents) {
      return family.parents;
    } else if (family.parents2) {
      return family.parents2;
    }
  } else if (family.families) {
    for (const subfam of family.families) {
      const parents = searchParentNode(subfam, name);
      if (parents) {
        return parents;
      }
    }
  }

  return null;
}

const searchSiblingNode = (family: Family, name: string): string[] | null => {
  if (family.children?.includes(name) || family.children2?.includes(name)) {
    let children: string[] = [];
    children = children.concat(family.children ?? []);
    children = children.concat(family.children2 ?? []);
    const filtered = children.filter(i => i != name);
    if (filtered.length > 0) {
      return filtered;
    }
  } else if (family.families) {
    for (const subfam of family.families) {
      const siblings = searchSiblingNode(subfam, name);
      if (siblings) {
        return siblings;
      }
    }
  }

  return null;
}

const searchChildrenNode = (family: Family, name: string): string[] | null => {
  if (family.parents?.includes(name) || family.parents2?.includes(name)) {
    let children: string[] = [];
    children = children.concat(family.children ?? []);
    children = children.concat(family.children2 ?? []);
    return children;
  } else if (family.families) {
    for (const subfam of family.families) {
      const children = searchChildrenNode(subfam, name);
      if (children) {
        return children;
      }
    }
  }

  return null;
}

export const searchParents = (familyTree: FamilyTree, name: string) => {
  for (const families of familyTree.families) {
    const parents = searchParentNode(families, name);
    if (parents) {
      return parents;
    }
  }
  return null;
}

export const searchChildren = (familyTree: FamilyTree, name: string) => {
  for (const families of familyTree.families) {
    const children = searchChildrenNode(families, name);
    if (children) {
      return children;
    }
  }
}

export const searchSiblings = (familyTree: FamilyTree, name: string) => {
  for (const families of familyTree.families) {
    const siblings = searchSiblingNode(families, name);
    if (siblings) {
      return siblings;
    }
  }
  return null;
}

export const searchSpouse = (familyTree: FamilyTree, name: string) => {
  for (const families of familyTree.families) {
    const spouse = searchSpouseNode(families, name);
    if (spouse) {
      return spouse;
    }
  }
  return null;
}