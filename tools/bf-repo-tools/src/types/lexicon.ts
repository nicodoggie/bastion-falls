
export interface OntolexLemon {
  "@context": {
    "@vocab": string;
    "ontolex": string;
    "lexinfo": string;
  };
  "@id": string;
  "@type": string;
  "dc:title": string;
  "dc:language": {
    "@id": string;
  };
  "@graph": GraphEntry[];
}

export interface GraphEntry {
  "@id": string;
  "@type": string | string[];
  "lexicalCategory": string;
  "canonicalForm": {
    "@type": string;
    "writtenRep": string;
    "phoneticRep": string;
  };
  "etymology": {
    "@type": string;
    "etymon:protoform": string;
    "etymon:soundChange": string;
    "etymon:note": string;
  };
  "sense": OntolexSense | OntolexSense[];
  "derivedForms": OntolexDerivedForm[];
}

export interface OntolexSense {
  "@type": string;
  "definition": {
    "@value": string;
    "@language": string;
  };
  "usage"?: string;
  "lexinfo:semanticField": string | string[];
}

export interface OntolexDerivedForm {
  "@type": string;
  "writtenRep": string;
  "phoneticRep": string;
  "decomposition": string;
  "grammaticalMeaning": string;
}

export interface Sense {
  definition: string;
  semanticField: string[];
  usage: string;
}

export interface DerivedForm {
  writtenForm: string;
  phoneticForm: string;
  decomposition: string;
  grammaticalMeaning: string;
}

export interface LexicalEntry {
  id: string;
  types: string[];
  writtenForm: string;
  phoneticForm: string;
  protoform?: string;
  lexicalCategory: string;
  note?: string;
  senses: Sense[];
  derivedForms: DerivedForm[];
  graphEntry: GraphEntry;
}
