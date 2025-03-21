# Adding Lexicon Entry for "al"

_Created: 11/22/2024, 11:52:28 PM_

---

### User

can you add the lexicon entry for "al" in @lexicon.md  to @lexicon.jsonld ?  the jsonld file is suposedly Ontolex-Lemon

---

### AI (claude-3.5-sonnet)

I'll help add the "al" entry from the markdown file to the JSON-LD file following the Ontolex-Lemon format. From the markdown, we have:

```markdown
- al [al] "natural rock" < Proto-Hick \*xalu → halu → al
  ([initial fricative loss](@/languages/hickic/early-hick/_index.md#early-hick))
```

Here's the corresponding JSON-LD entry to add to the `@graph` array:

```jsonld
{
  "@id": "eh:al",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "al",
    "phoneticRep": "al"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Proto-Hick *xalu",
    "etymon:intermediateForm": "halu",
    "etymon:soundChange": [
      "initial fricative loss",
      "final vowel loss"
    ]
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense", 
      "definition": {
        "@value": "natural rock",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Natural World",
        "Elements"
      ]
    }
  ]
}
```

This entry follows the Ontolex-Lemon model with:
- A unique identifier using the "eh:" prefix
- The lexical entry type and canonical form
- Etymology information including the proto-form and sound changes
- Sense information with definition and semantic fields
- Proper typing of all values according to the ontology

The entry should be inserted into the `@graph` array in the JSON-LD file, 
maintaining alphabetical order if that's the current organization.

---

### User

---

