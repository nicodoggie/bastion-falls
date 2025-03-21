## SpecStory

## Adding New Words to Lexicon (1/16/2025, 7:28:12 PM)

_**User**_

I'd like to add a word in @lexicon.md  in a similar style to the other entries in this markdown document

as well as the same word in @lexicon.jsonld in the ontolex-lemon json-ld format.

rok "horse" < from Eldrim (Sindarin) roch → rok

---

_**Assistant**_

I'll help you add the entry for "rok" in both formats. Based on the existing entries, here's how it should be formatted:

For lexicon.md, it should go in the Animals section (around line 1035):

```markdown:site/content/languages/hick/early-hick/lexicon.md
- rok [rok] "horse" < Sindarin roch → rok
  ([borrowed term](@/languages/hickic/early-hick/_index.md#eldrim-borrowings))
  Note: Shows elvish introduction of horses See: [Animal Terms](#animal-terms)
```

For lexicon.jsonld, it should be added to the @graph array:

```json:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:rok",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "rok",
    "phoneticRep": "rok"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:borrowedFrom": "Sindarin roch",
    "etymon:meaning": "horse",
    "etymon:period": "Early Hick"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense", 
      "definition": {
        "@value": "horse",
        "@language": "en"
      },
      "usage": "Shows elvish introduction of horses",
      "lexinfo:semanticField": [
        "Animals",
        "Pastoral Terms"
      ]
    }
  ]
}
```

This follows the established patterns in both files:
1. The markdown entry uses the standard format with pronunciation, meaning, etymology, 
and cross-references
2. The JSON-LD entry includes all required fields and follows the OntoLex-Lemon 
format with proper semantic fields and etymology information

Looking at the existing entries, this would fit well with the other animal terms 
and borrowed vocabulary. The entry shows both the linguistic origin (Sindarin) and 
cultural significance (elvish introduction of horses).

---

_**User**_

let's add the word sinthir "fly" < sin "float" + air "thir"

---

_**Assistant**_

I'll help add the compound word "sinthir" in both formats. Based on the existing entries:

```markdown:site/content/languages/hick/early-hick/lexicon.md
- sinthir [sin.θir] "fly" < sin-thir "float-air" → sinthir
  ([compound fusion](@/languages/hickic/early-hick/_index.md#compound-formation))
  Note: Shows metaphorical extension of floating motion to aerial movement. See: 
  [Motion Actions](#motion-actions), [Basic Terms](#basic-terms)
```

And for the JSON-LD:

```json:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:sinthir",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "sinthir",
    "phoneticRep": "sin.θir"
  },
  "lexicalCategory": "lexinfo:Verb",
  "decomp:subterm": [
    {
      "@id": "eh:sin"
    },
    {
      "@id": "eh:thir"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "sin-thir",
    "etymon:meaning": "float-air",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows metaphorical extension of floating motion to aerial movement"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "fly",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Motion Actions",
        "Basic Terms"
      ]
    }
  ]
}
```

This follows the established patterns by:
1. Including proper phonetic transcription with syllable boundaries
2. Showing compound formation and etymology
3. Cross-referencing related semantic fields
4. Including proper decomposition of compound elements in the JSON-LD
5. Following the compound formation patterns seen in other entries

The entry would fit well with other motion verbs and compound formations in the 
lexicon.

---

_**User**_

I want to add the word ul "grasp; possess, own" < PH *ʔulu "grasp" also the source of the possession marker -ul

---

_**Assistant**_



I'll help add the word "ul" in both formats. Since it's a basic term that's also the source of a grammatical marker, it should be formatted carefully:

```markdown:site/content/languages/hick/early-hick/lexicon.md
- ul [ul] "grasp; possess, own" < Proto-Hick *ʔulu → ul
  ([initial glottal loss, final vowel loss](@/languages/hickic/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  Note: Source of possessive suffix -ul through grammaticalization. Forms verb 
  ul'er "to grasp, to own". See: [Basic Terms](#basic-terms), 
  [Grammatical Terms](#grammatical-terms)
```

And for the JSON-LD:

```json:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:ul",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "ul",
    "phoneticRep": "ul"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Proto-Hick *ʔulu",
    "etymon:meaning": "grasp",
    "etymon:soundChange": [
      "initial glottal loss",
      "final vowel loss"
    ],
    "etymon:note": "Source of possessive suffix -ul through grammaticalization"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "grasp",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Action Terms"
      ]
    },
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "possess, own",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Grammatical Terms"
      ]
    }
  ],
  "derivation": {
    "@type": "ontolex:LexicalEntry",
    "canonicalForm": {
      "writtenRep": "ul'er",
      "phoneticRep": "ul.ʔer"
    },
    "definition": "to grasp, to own"
  }
}
```

This follows the patterns seen in other entries by:
1. Including both concrete and abstract meanings
2. Noting grammaticalization
3. Showing sound changes from Proto-Hick
4. Including derived forms
5. Cross-referencing relevant semantic fields
6. Following the format for entries that are sources of grammatical markers (like 
'ir → -'er)

The entry would fit well in the Basic Terms section, similar to other fundamental 
roots that developed grammatical functions.

---

_**User**_

hisimris "show" < his "sight" + ELL

---

_**Assistant**_



I'll help add "hisimris" in both formats, following the pattern of other case-derived terms:

```markdown:site/content/languages/hick/early-hick/lexicon.md
- hisimris [hi.sim.ris] "show" < his-imris "sight-ELL" → hisimris
  ([case lexicalization](@/languages/hickic/early-hick/_index.md#case-system))
  Note: Shows productive use of ellative case for causative meanings. Forms verb 
  hisimris'er "to show". Contrasts with hilis'er "to look". See: 
  [Perception Terms](#perception-terms), [Action Terms](#action-terms)
```


And for the JSON-LD:

```json:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:hisimris",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "hisimris",
    "phoneticRep": "hi.sim.ris"
  },
  "lexicalCategory": "lexinfo:Verb",
  "decomp:subterm": [
    {
      "@id": "eh:his"
    },
    {
      "@id": "eh:imris"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "his-imris",
    "etymon:gloss": "sight-ELL",
    "etymon:soundChange": "case lexicalization",
    "etymon:note": "Shows productive use of ellative case for causative meanings"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "show",
        "@language": "en"
      },
      "usage": "Contrasts with hilis'er 'to look'",
      "lexinfo:semanticField": [
        "Perception Terms",
        "Action Terms"
      ]
    }
  ],
  "derivation": {
    "@type": "ontolex:LexicalEntry",
    "canonicalForm": {
      "writtenRep": "hisimris'er",
      "phoneticRep": "hi.sim.ris.ʔer"
    },
    "definition": "to show"
  }
}
```

This follows the patterns seen in other entries by:
1. Showing case lexicalization process
2. Including phonetic transcription with syllable boundaries
3. Noting semantic contrasts with related terms
4. Including derived verbal form
5. Cross-referencing relevant semantic fields
6. Following the format for case-derived terms (like 'ilisimris'er "to teach")

The entry would fit well with other perception terms and case-derived verbs in the 
lexicon.

---

_**User**_

sometimes the partitive ran- can mean only or some, but at times we need to disambiguate it. can we do something like telran- for this?

---

_**Assistant**_

Yes, we could add a compound prefix telran- to specifically indicate "only" by combining tel- "end, limit" with ran- "part". This would help disambiguate from the general partitive meaning "some".

Let's add this to both files:

```markdown:site/content/languages/hick/early-hick/lexicon.md
- telran- [tel.ran] "only" < tel-ran "end-PART" → telran
  ([compound fusion](@/languages/hickic/early-hick/_index.md#compound-formation))
  Note: Specialized compound prefix disambiguating "only" meaning from general 
  partitive ran-. Shows productive use of tel- to indicate limitation. See: 
  [Grammatical Terms](#grammatical-terms), [Basic Terms](#basic-terms)
```

This follows the pattern of other grammatical markers and shows:
1. The compound formation process
2. The semantic specialization
3. The relationship to the basic partitive
4. Cross-references to relevant sections

The prefix would be useful in contexts where you need to explicitly distinguish "only X" from "some X", making the language more precise when needed while maintaining the general partitive for other uses.

Example usage could be:
- ran-gal "some men" vs telran-gal "only men"
- ran-ai "some water" vs telran-ai "only water"

---



---

