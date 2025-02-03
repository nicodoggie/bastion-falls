## SpecStory

## Adding Vocabulary Entries to Lexicon (1/24/2025, 5:35:00 PM)

_**User**_

I'd like to add a word for written word, 

tenwa "writing; spellcraft" < Eldrim tengwa "letter"
tenwa'er "to write; to make spells" < tenwa + VERB

---

_**Assistant**_

I'll help you add this entry to the lexicon. Based on the existing entries, we should include both the basic noun form and its verbal derivation, with appropriate semantic fields and etymological information.

```markdown:site/content/languages/hick/early-hick/lexicon.md
// ... existing code ...

tenwa [ten.wa]
  : writing; spellcraft
  : Eldrim tengwa "letter" → tenwa
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Shows semantic extension from basic writing to magical inscription. See:
  [Communication Terms](#communication-terms), [Sacred Terms](#sacred--ritual)

tenwa'er [ten.wa.ʔer]
  : to write; to make spells
  : tenwa + -'er → tenwa'er
  : ([verbalizer suffix](@/languages/hick/early-hick/_index.md#verbal-morphology))
  : Note: Maintains dual meaning of base noun in verbal form. See:
  [Communication Terms](#communication-terms), [Sacred Terms](#sacred--ritual)

// ... existing code ...
```

And for the JSON-LD representation:

```jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:tenwa",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "tenwa",
    "phoneticRep": "ten.wa"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Eldrim tengwa",
    "etymon:gloss": "letter",
    "etymon:soundChange": "final vowel loss",
    "etymon:note": "Shows semantic extension from basic writing to magical inscription"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense", 
      "definition": {
        "@value": "writing; spellcraft",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Communication Terms",
        "Sacred Terms",
        "Magical Terms"
      ]
    }
  ],
  "derivedForms": [
    {
      "@type": "ontolex:Form",
      "writtenRep": "tenwa'er",
      "phoneticRep": "ten.wa.ʔer",
      "decomposition": "tenwa + -'er (verbalizer)",
      "grammaticalMeaning": "to write; to make spells"
    }
  ]
}
```

This entry:
1. Shows borrowing from Eldrim (tengwa)
2. Includes both literal and magical meanings
3. Follows the pattern of other borrowed terms with sound changes
4. Links to relevant semantic fields
5. Includes the verbal derivation with the productive -'er suffix
6. Maintains consistent formatting with other entries
7. Preserves the dual meaning in both noun and verb forms

---

_**User**_

I'm thinking of a word for marriage. Leaning toward storbran < stor "add" + bran "family". I wonder if maybe the concept ot a union between families is something only formalized dufing the early hick years, or it should be earlier

---

_**Assistant**_

That's an interesting consideration! Let me think about this culturally and historically:

1. **Proto-Hick Era (before Early Hick)**:
- Likely had informal pair-bonding concepts
- Family structures would have existed but might have been more fluid
- The *bran "lineage/family branch" concept existed but was simpler

2. **Early Hick Period**:
- More complex social structures emerging
- Contact with Eldrim introducing new social concepts
- Development of formal institutions
- More emphasis on lineage and family connections
- Agricultural settlement leading to more formal family structures

Given this context, I think your suggestion of `storbran` as an Early Hick 
innovation makes good cultural sense. It would represent the formalization of 
marriage as a joining of family lines rather than just individuals, which fits 
with Early Hick's increasing social complexity.

Here's a suggested entry:

```markdown:site/content/languages/hick/early-hick/lexicon.md
storbran [stor.bran]
  : marriage, family union
  : stor-bran "join-lineage" → storbran
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows formalization of marriage as union between family lines during 
  Early Hick period. Forms verb storbran'er "to marry". See: 
  [Family Terms](#family-terms), [Social Terms](#social-terms)
```

And the corresponding JSON-LD:

```jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:storbran",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "storbran",
    "phoneticRep": "stor.bran"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:stor"
    },
    {
      "@id": "eh:bran"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "stor-bran",
    "etymon:gloss": "join-lineage",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows formalization of marriage as union between family lines"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "marriage, family union",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Family Terms",
        "Social Terms",
        "Sacred Terms"
      ]
    }
  ],
  "derivation": {
    "@type": "ontolex:LexicalEntry",
    "canonicalForm": {
      "writtenRep": "storbran'er",
      "phoneticRep": "stor.bran.ʔer"
    },
    "definition": "to marry"
  }
}
```

This timing would suggest that Proto-Hick probably had more basic terms for 
partnership/mating, while the formal institution of marriage as we see in 
`storbran` developed during the Early Hick period as society became more 
structured and influenced by contact with other cultures like the Eldrim.

Would you like me to also suggest what some of those earlier Proto-Hick 
partnership terms might have been? Or shall we focus on refining the `storbran` 
entry?

---

_**User**_

I suppose we ought to have more informal bond terms to complement this

---

_**Assistant**_

Yes! Let's develop some informal/intimate bond terms that would coexist with the formal `storbran`. Here are some suggestions:

```markdown:site/content/languages/hick/early-hick/lexicon.md
mesmer [mes.mer]
  : life-partner, beloved
  : mes-mer "heart-parent" → mesmer
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of parental bond to intimate partnership.
  Predates formal storbran. See: [Family Terms](#family-terms),
  [Social Terms](#social-terms)

mesbran [mes.bran]
  : love-bond, intimate partnership
  : mes-bran "heart-lineage" → mesbran
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Informal term for romantic bonds, contrasts with formal storbran. See:
  [Family Terms](#family-terms), [Love Terms](#love-terms)

sibrismer [si.bris.mer]
  : passionate lover
  : sibris-mer "romantic.love-parent" → sibrismer
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows extension of parental metaphor to passionate relationships. See:
  [Love Terms](#love-terms), [Person Terms](#person-terms)
```

And the JSON-LD entries:

```jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:mesmer",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "mesmer",
    "phoneticRep": "mes.mer"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:mes"
    },
    {
      "@id": "eh:mer"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "mes-mer",
    "etymon:gloss": "heart-parent",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows metaphorical extension of parental bond to intimate partnership"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "life-partner, beloved",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Family Terms",
        "Love Terms",
        "Person Terms"
      ]
    }
  ]
},
{
  "@id": "eh:mesbran",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "mesbran",
    "phoneticRep": "mes.bran"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:mes"
    },
    {
      "@id": "eh:bran"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "mes-bran",
    "etymon:gloss": "heart-lineage",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Informal term for romantic bonds, contrasts with formal storbran"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "love-bond, intimate partnership",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Family Terms",
        "Love Terms",
        "Social Terms"
      ]
    }
  ]
},
{
  "@id": "eh:sibrismer",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "sibrismer",
    "phoneticRep": "si.bris.mer"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:sibris"
    },
    {
      "@id": "eh:mer"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "sibris-mer",
    "etymon:gloss": "romantic.love-parent",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows extension of parental metaphor to passionate relationships"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "passionate lover",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Love Terms",
        "Person Terms",
        "Family Terms"
      ]
    }
  ]
}
```

This set of terms creates a nice semantic field showing different types of bonds:
- `storbran`: formal, institutional marriage (joining of families)
- `mesmer`: committed life partnership (heart-based)
- `mesbran`: informal romantic bond
- `sibrismer`: passionate/romantic lover

The use of `mer` (parent) in compounds shows how Early Hick conceptualized 
different types of intimate bonds through the metaphor of parental relationships, 
while `bran` compounds emphasize the lineage/family aspect.

Would you like me to suggest any additional related terms or refine these 
further?

---

_**User**_

perhaps brismer instead of sibrismer, similar, and could be like "fire of my heart"

---

_**Assistant**_



Ah yes, `brismer` works better! It's more elegant and has that nice double meaning you mentioned - it could be interpreted as either "passionate-parent" or "fire-heart" depending on how you analyze the compound. It's also shorter and follows Early Hick's tendency toward simpler compounds.

Let's revise the entry:

```markdown:site/content/languages/hick/early-hick/lexicon.md
brismer [bris.mer]
  : passionate lover
  : bris-mer "fire-parent/heart" → brismer
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows ambiguous compound analysis between "passionate-parent" and 
  "fire-heart", typical of Early Hick love poetry. See: [Love Terms](#love-terms),
  [Person Terms](#person-terms)
```

And the JSON-LD:

```jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:brismer",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "brismer",
    "phoneticRep": "bris.mer"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:bris"
    },
    {
      "@id": "eh:mer"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "bris-mer",
    "etymon:gloss": "fire-parent/heart",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows ambiguous compound analysis between 'passionate-parent' and 'fire-heart'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "passionate lover",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Love Terms",
        "Person Terms",
        "Family Terms"
      ]
    }
  ]
}
```

This version is more elegant and the ambiguity between the two possible 
interpretations adds a nice poetic depth that fits well with Early Hick's 
literary traditions. The shorter form also better matches Early Hick's 
phonological patterns.

---

_**User**_

we don't yet have words for fingers and the thumb. is it common cross-linguistically that the four fingers are simply fingers, and the thumb is a separate word/root?

---

_**Assistant**_

Yes, it's quite common cross-linguistically for languages to have a distinct root for "thumb" separate from other fingers. This makes sense both anatomically (the thumb's unique opposable nature) and functionally (its special role in tool use and grip).

Some examples:
- Latin: digitus (finger) vs pollex (thumb)
- Proto-Germanic: *fingraz (finger) vs *þūmō (thumb)
- Mandarin: 手指 shǒuzhǐ (finger) vs 拇指 mǔzhǐ (thumb)
- Japanese: 指 yubi (finger) vs 親指 oyayubi (thumb, lit. "parent finger")

For Early Hick, we could create entries like:

```markdown:site/content/languages/hick/early-hick/lexicon.md
lis [lis]
  : finger
  : Proto-Hick *lisu → lis
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: General term for fingers excluding thumb. See: [Body Parts](#body-parts)

merlis [mer.lis]
  : thumb
  : mer-lis "parent-finger" → merlis
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of parent/authority to body parts. Compare
  Japanese oyayubi. See: [Body Parts](#body-parts)
```

This follows a similar metaphorical pattern to Japanese, using the "parent" morpheme to indicate the thumb's dominant/controlling role. The `mer-` prefix is already established in Early Hick as carrying connotations of authority/parenthood, making this a culturally coherent formation.

Would you like me to provide the JSON-LD entries as well?

---

_**User**_

so are we using lis here as a metaphorical extension for sight or child? it seems to be very occupied already

---

_**Assistant**_



Ah, you make a good point! Looking at the lexicon, `lis` is already doing a lot of work:
- "child" (from "little one")
- Related to sight/eyes
- Used in diminutive formations

Let's create a distinct root for fingers. Perhaps something like:

```markdown:site/content/languages/hick/early-hick/lexicon.md
sul [sul]
  : finger
  : Proto-Hick *sulu → sul
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: General term for fingers excluding thumb. See: [Body Parts](#body-parts)

mersul [mer.sul]
  : thumb
  : mer-sul "parent-finger" → mersul
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of parent/authority to body parts. See:
  [Body Parts](#body-parts)
```

This gives us a dedicated root `sul` for fingers that doesn't conflict with the existing semantic space of `lis`. The compound `mersul` maintains the same metaphorical pattern we discussed, but with the new root.

What do you think about using `sul` as our finger root? Or would you prefer a different phonological shape for this concept?

---

_**User**_

perhaps instead it can be cognate with the word "sin" used for 1?

---

_**Assistant**_



Ah, that's a clever connection! Using the number "one" as a basis for "finger" makes great etymological sense - fingers being the basic counting unit. Let's work with that:

```markdown:site/content/languages/hick/early-hick/lexicon.md
sin [sin]
  : finger; one
  : Proto-Hick *sinu → sin
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Basic counting unit, shows semantic extension from body part to numeral.
  See: [Body Parts](#body-parts), [Numbers](#numbers)

mersin [mer.sin]
  : thumb
  : mer-sin "parent-finger" → mersin
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of parent/authority to body parts. Forms
  compounds like mersintak "thumb-strike" (approval gesture). See:
  [Body Parts](#body-parts)
```

This creates a nice etymological story:
1. The word for "finger" (`sin`) becomes the basis for "one" in counting
2. It maintains the parent-metaphor pattern with `mersin` for thumb
3. It suggests counting originated with finger-counting (historically common)
4. It could even suggest interesting cultural developments around gesture and counting

Would you like me to elaborate on any counting/gesture compounds that might derive from this root?

---

_**User**_

why is thumb parent-finger though? is that a common compound in IRL languages?

---

_**Assistant**_



You raise a good point. I was too quick to assume the "parent-finger" pattern (I mentioned Japanese 親指 oyayubi earlier) was more universal than it is. Let's look at some actual patterns for "thumb" across languages:

1. Size/strength based:
   - English "thumb" (from Proto-Germanic *þūmō "thick, swollen")
   - Latin pollex (related to polleō "to be strong")
   - Russian большой палец ("big finger")

2. Position based:
   - Arabic إبهام ibhām (from root meaning "front")
   - Chinese 拇指 mǔzhǐ (from ancient character showing prominent finger)

3. Function based:
   - Some Native American languages use terms relating to "grasping"
   - Terms relating to "opposing" or "facing" the other fingers

For Early Hick, perhaps we could create something more functionally motivated:

```markdown:site/content/languages/hick/early-hick/lexicon.md
sin [sin]
  : finger; one
  : Proto-Hick *sinu → sin
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Basic counting unit, shows semantic extension from body part to numeral.
  See: [Body Parts](#body-parts), [Numbers](#numbers)

ulsin [ul.sin]
  : thumb
  : ul-sin "grasp-finger" → ulsin
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows functional naming based on grasping role. See: [Body Parts](#body-parts)
```

This uses the existing root `ul` "grasp" to create a more functionally motivated term for thumb. This feels more grounded in physical reality and cross-linguistic patterns.

What do you think about this functional approach versus the earlier parental metaphor?

---

_**User**_

in english, though we recognize anatomically that the thumb is a finger, we never call it the thumb-finger. is that a rare case? 

---

_**Assistant**_



Actually, English is more typical in treating "thumb" as distinct from "fingers" in everyday language! Let me revise my earlier analysis:

Many languages make this thumb/finger distinction lexically:
- English: thumb vs. finger
- German: Daumen vs. Finger
- French: pouce vs. doigt
- Russian: большой палец (bol'shoy palets) vs. палец (palets)
- Spanish: pulgar vs. dedo
- Chinese: 拇指 (muzhi) vs. 手指 (shouzhi)

The compound "thumb-finger" pattern is less common, though it appears in some 
technical/anatomical contexts. This suggests we might want separate roots for 
Early Hick:

```markdown:site/content/languages/hick/early-hick/lexicon.md
sin [sin]
  : finger (excluding thumb)
  : Proto-Hick *sinu → sin
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Basic counting unit, shows semantic extension from body part to numeral.
  See: [Body Parts](#body-parts), [Numbers](#numbers)

ul [ul]
  : thumb
  : Proto-Hick *ulu → ul
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Distinct from sin "finger", shows common thumb/finger lexical split.
  Related to ul'er "to grasp". See: [Body Parts](#body-parts)
```

But wait - we already have `ul` meaning "grasp"! Perhaps we need a different root 
for thumb. Would you like to explore other possible roots that would maintain 
this finger/thumb distinction?

---

_**User**_

perhaps we alter the meaning of the nominative form `ul` to thumb, even if the verbal form ul'er may still mean to grasp

---

_**Assistant**_



Yes, that's an elegant solution! It creates a nice semantic connection between "thumb" and "grasp" while maintaining them as distinct concepts. This kind of polysemy (where the nominal and verbal meanings are related but distinct) is quite natural.

Let's revise the entry:

```markdown:site/content/languages/hick/early-hick/lexicon.md
ul [ul]
  : thumb; grasp
  : Proto-Hick *ʔulu → ul
  : ([initial glottal loss, final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Source of possessive suffix -ul through grammaticalization. Forms verb
  ul'er "to grasp, to own". Shows semantic link between thumb and grasping action.
  See: [Basic Terms](#basic-terms), [Body Parts](#body-parts)

sin [sin]
  : finger (excluding thumb); one
  : Proto-Hick *sinu → sin
  : ([final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Basic counting unit, shows semantic extension from body part to numeral.
  See: [Body Parts](#body-parts), [Numbers](#numbers)
```

This creates a nice set of related meanings:
- `ul` (n): "thumb"
- `ul'er` (v): "to grasp"
- `-ul` (suffix): possessive marker

The semantic chain would be: thumb → grasping → possession, which is quite 
natural and parallels similar developments in other languages.

---

_**User**_

and perhaps the use of lative/spatial cases along with the verbal can be used to specify meaning

---

_**Assistant**_



Yes, exactly! The case system could help disambiguate different types of grasping actions. Here are some examples we could add to the entry:

```markdown:site/content/languages/hick/early-hick/lexicon.md
ul [ul]
  : thumb; grasp
  : Proto-Hick *ʔulu → ul
  : ([initial glottal loss, final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Source of possessive suffix -ul through grammaticalization. Forms verb
  ul'er with case-specified meanings:
  : - ul'er + LAT: "to grab (reaching for)"
  : - ul'er + ILL: "to catch (receiving)"
  : - ul'er + ELL: "to release grasp"
  : - ul'er + SUPE: "to hold up"
  : - ul'er + SUBE: "to hold down"
  : Shows semantic link between thumb and grasping action.
  : See: [Basic Terms](#basic-terms), [Body Parts](#body-parts)
```

This pattern of using spatial cases to specify different types of grasping 
actions is quite elegant and fits well with Early Hick's general tendency to use 
spatial cases for semantic extension. The illative especially makes sense for 
"catching" since it involves receiving something into one's grasp.

Would you like me to elaborate on any of these case-specified meanings or suggest 
additional ones?

---

_**User**_

could it be, that the root *ulu could both mean thumb, grasp, possession, then the grasping. possession meaning was specified by adding the PH locative -isu > ulisu > us 

so ul means thumb, and forms the possessive marker
then us means grasp, possession in EH

---

_**Assistant**_



Ah, that's a really elegant solution! This kind of semantic split through 
locative specification is quite naturalistic. Let's revise the etymology:

```markdown:site/content/languages/hick/early-hick/lexicon.md
ul [ul]
  : thumb
  : Proto-Hick *ʔulu → ul
  : ([initial glottal loss, final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Source of possessive suffix -ul through grammaticalization. See:
  [Body Parts](#body-parts), [Grammatical Terms](#grammatical-terms)

us [us]
  : grasp, possession
  : Proto-Hick *ʔulu-isu → ulisu → us
  : ([locative suffix, vowel coalescence](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Shows semantic specification through locative case. Forms verb us'er "to
  grasp, to own". See: [Basic Terms](#basic-terms)
```

This creates a nice etymological story:
1. PH *ʔulu meant "thumb/grasp" generally
2. The bare form ul specialized to mean "thumb" (body part)
3. The locative form *ʔulu-isu > us specified the action/possession meaning
4. The possessive suffix -ul grammaticalized from the body part meaning

This pattern of using locative case to specify more abstract meanings from 
concrete ones is quite common cross-linguistically. It also explains why Early 
Hick has two related but distinct roots for these concepts!

---

_**User**_

so the development path I was imagining
PH *ulu, perhaps ~800 PF
  - thumb
  - grasp
  - possession
PH ulu < PH *ulu  ~400 PF
 - thumb
 - possession
PH ulisu < PH *ulu + PH locative -isu ~400 PF
 - grasp
EH ul ~100 PF
 - thumb
 - possessive marker preserving possessive meaning
EH us ~100 PF
 - grasp
 - possession

---

_**Assistant**_



Yes, this is a very naturalistic semantic development path! Let me formalize this chronology:

```markdown:site/content/languages/hick/early-hick/lexicon.md
ul [ul]
  : thumb
  : Proto-Hick *ʔulu → ul
  : ([initial glottal loss, final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Original root *ʔulu (~800 PF) had meanings "thumb/grasp/possession". By
  Late Proto-Hick (~400 PF), bare form ulu specialized to "thumb/possession",
  while locative form ulisu took on "grasp" meaning. Early Hick ul preserves
  "thumb" meaning and grammaticalizes into possessive suffix -ul. See:
  [Body Parts](#body-parts), [Grammatical Terms](#grammatical-terms)

us [us]
  : grasp, possession
  : Proto-Hick *ʔulu-isu → ulisu → us
  : ([locative suffix, vowel coalescence](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Developed from locative form of *ʔulu (~400 PF) specializing in
  "grasp" meaning. By Early Hick (~100 PF), us maintains both concrete "grasp"
  and abstract "possession" meanings. Forms verb us'er "to grasp, to own". See:
  [Basic Terms](#basic-terms)
```

This shows:
1. Original polysemy in Proto-Hick
2. Early semantic split using locative case
3. Further specialization in Early Hick
4. Grammaticalization of possessive meaning
5. Retention of both concrete/abstract meanings in us

The timeline also aligns well with other Early Hick developments and shows how 
grammaticalization processes work over centuries. Would you like me to add more 
detail about any particular stage of this development?

---

_**User**_

can we update the Development Notes in @_index.md  pertaining to the possession marker?

---

_**Assistant**_



Yes! Let's revise that section to reflect this more detailed etymological development:

````markdown:site/content/languages/hick/early-hick/_index.md
### Development of the possession marker -ul

The Early Hick possessive suffix -ul shows a complex development path from 
Proto-Hick *ʔulu:

1. Original Proto-Hick (~800 PF):
   - *ʔulu had three related meanings:
     - "thumb" (concrete body part)
     - "grasp" (physical action)
     - "possession" (abstract relation)

2. Late Proto-Hick (~400 PF):
   - Semantic split occurs:
     - Bare form ulu: "thumb, possession"
     - Locative form ulisu: "grasp" (from *ʔulu-isu)
   - Shows common pattern of using locative case to specify action meanings

3. Early Hick (~100 PF):
   - Further specialization:
     - ul: "thumb" (noun)
     - -ul: possessive marker (grammaticalized from possession meaning)
     - us: "grasp, possession" (from ulisu)

This development explains:
- Why the possessive marker is phonologically identical to "thumb"
- The relationship between ul and us
- The preservation of both concrete and abstract meanings
- The parallel development of possession marking in compounds

The pattern parallels other Early Hick grammaticalizations where body parts 
develop into grammatical markers (compare -el ergative < *ʔelu "by means of").
````

This revision provides a clearer chronology and shows how the meanings evolved 
over time. Would you like me to expand on any particular aspect of this 
development?

---

_**User**_

let's update the @lexicon.jsonld entries for ul, and add us

---

_**Assistant**_





Yes, let's add these entries to reflect the etymological development we discussed:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
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
    "etymon:soundChange": [
      "initial glottal loss",
      "final vowel loss"
    ],
    "etymon:note": "Original root (~800 PF) had meanings 'thumb/grasp/possession'. By Late Proto-Hick (~400 PF), bare form specialized to 'thumb/possession'. Source of possessive suffix -ul through grammaticalization."
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "thumb",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms"
      ]
    }
  ],
  "derivedForms": [
    {
      "@type": "ontolex:Form",
      "writtenRep": "-ul",
      "phoneticRep": "ul",
      "decomposition": "grammaticalized possessive suffix",
      "grammaticalMeaning": "possessive marker"
    }
  ]
},
{
  "@id": "eh:us",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "us",
    "phoneticRep": "us"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Proto-Hick *ʔulu-isu",
    "etymon:components": [
      "*ʔulu (thumb/grasp)",
      "-isu (locative)"
    ],
    "etymon:soundChange": [
      "vowel coalescence",
      "final vowel loss"
    ],
    "etymon:note": "Developed from locative form of *ʔulu (~400 PF) specializing in 'grasp' meaning"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "grasp, possession",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Action Terms"
      ]
    }
  ],
  "derivedForms": [
    {
      "@type": "ontolex:Form",
      "writtenRep": "us'er",
      "phoneticRep": "us.ʔer",
      "decomposition": "us + -'er (verbalizer)",
      "grammaticalMeaning": "to grasp, to own"
    }
  ]
}
````

This shows:
1. The original polysemy of *ʔulu
2. The semantic split between ul and us
3. The grammaticalization path for -ul
4. The relationship between concrete and abstract meanings
5. The derived verbal forms

---

_**User**_

I've manually update the entries to define the verbal forms ul'er to mean to grasp and us'er to mean to possess.


---

_**Assistant**_



Ah yes, that's a good distinction! So now we have a clear semantic split in the verbal forms too:

- `ul'er`: "to grasp" (concrete physical action)
- `us'er`: "to possess" (abstract ownership)

This parallels nicely with the nominal split:
- `ul`: "thumb" (concrete body part)
- `us`: "grasp, possession" (abstract concept)

And the grammaticalized form:
- `-ul`: possessive marker

This creates a very clean semantic development where the physical and abstract 
meanings have fully separated, with the grammaticalized form preserving the 
possessive meaning. Would you like me to suggest any compounds or derived terms 
that might show these distinctions in action?

---

_**User**_

I think it would also be fun that inworld linguists would have to tease out how /us/ came to mean possession, but the possessive marker is -ul

---

_**Assistant**_



Yes! This is exactly the kind of puzzle that would intrigue historical linguists in-world. They'd be looking at patterns like:

1. Why does the possessive marker match the word for "thumb" rather than the word for "possession"?

2. The apparent paradox:
   - `us` means "possession" 
   - but `-ul` is the possessive marker
   - both clearly related to `ul` "thumb"
   - but why the split?

3. The breakthrough would come when someone notices:
   - The locative case `-isu` in Proto-Hick
   - The pattern of using locative to specify actions
   - Leading to discovery that `us` < `*ulu-isu`

This would be a classic example of how surface irregularities often preserve 
evidence of earlier regular processes. The linguists might even use this as 
evidence to reconstruct other Proto-Hick patterns of using locative case to 
specify meanings.

It's also the kind of thing that would generate competing theories before the 
full picture emerged:
- "Maybe `-ul` is older and `us` is a later innovation?"
- "Could they be from different dialects?"
- "Is there a semantic distinction we're missing?"

Would you like to develop some example texts showing how in-world scholars might 
have debated this?

---

_**User**_

nah, since part of our D&D games does explore linguistics, I'd like this to play out ingame

---

_**Assistant**_





Ah yes, that's perfect! This kind of linguistic puzzle makes for great in-game 
content. Players could:

1. Find fragments of texts using different forms
2. Notice the pattern through actual language use
3. Piece together the historical development
4. Maybe even discover previously unknown Proto-Hick texts that confirm their theories

The `ul`/`us` puzzle is particularly good for this because:
- It's complex enough to be interesting
- But not so complex it needs a linguistics degree
- Has clear physical/concrete elements (thumb, grasping)
- Shows a logical development path once discovered
- Could be revealed through common texts (property records, ritual phrases, etc.)

I'll leave the specific discoveries and revelations for your game sessions! Let 
me know if you want to develop any other linguistic mysteries that could work 
well in-game.

---

_**User**_

ok now, I was looking for a word for thumb because I need to start developing units of measur.. uran [u.rən] "inch" < PH *ulu _ + PH *haranu

---

_**Assistant**_





Ah, brilliant! Creating a length measure from "thumb-length" is very naturalistic (compare the actual etymology of "inch" from Latin uncia and its relation to thumb-width measurements).

Let's develop this:

````markdown:site/content/languages/hick/early-hick/lexicon.md
uran [u.rən]
  : inch (unit of length, approximately thumb-width)
  : Proto-Hick *ulu-haranu → uran
  : ([compound fusion, unstressed vowel reduction](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: Shows development of measurement system from body parts. Compound of
  *ulu "thumb" + *haranu "length". Compare ul "thumb". See: [Measurement Terms](#measurement-terms),
  [Body Parts](#body-parts)
````


And the JSON-LD:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:uran",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "uran",
    "phoneticRep": "u.rən"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Proto-Hick *ulu-haranu",
    "etymon:components": [
      "*ulu (thumb)",
      "*haranu (length)"
    ],
    "etymon:soundChange": [
      "compound fusion",
      "unstressed vowel reduction"
    ],
    "etymon:note": "Shows development of measurement system from body parts"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "inch (unit of length, approximately thumb-width)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Basic Terms"
      ]
    }
  ]
}
````


This nicely ties together:
1. The thumb/measurement connection
2. Regular sound changes in compounds
3. The practical basis of early measurement systems

Would you like to develop more measurement terms based on other body parts?

---

_**User**_

brastran [bras.tran] "unit of measure roughly 1 foot, arm-length" < brast "arm" + -ran (from haran), similar to number marking suffix

---

_**Assistant**_





Yes! This shows a nice pattern where `-ran` has been reanalyzed from *haranu into a measurement suffix. Let's add this entry:

````markdown:site/content/languages/hick/early-hick/lexicon.md
brastran [bras.tran]
  : foot (unit of length, approximately arm-length)
  : brast-ran "arm-length" → brastran
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows development of -ran as measurement suffix from *haranu "length".
  Compare uran "inch". See: [Measurement Terms](#measurement-terms),
  [Body Parts](#body-parts)
````


And the JSON-LD:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:brastran",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "brastran",
    "phoneticRep": "bras.tran"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:brast"
    },
    {
      "@id": "eh:ran"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "brast-ran",
    "etymon:gloss": "arm-length",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows development of -ran as measurement suffix from *haranu 'length'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "foot (unit of length, approximately arm-length)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Basic Terms"
      ]
    }
  ]
}
````


This suggests a productive pattern where `-ran` could be used with other body 
parts or objects to create measurement terms. Would you like to explore other 
possible `-ran` compounds?

---

_**User**_

just vinuram "shoulder-longth; roughly 1 yard" < vinusam + -ran

I want the longer distances be from something else

---

_**Assistant**_







Yes, good idea! Let's add this entry but keep longer distances distinct (perhaps based on landmarks, walking time, or other cultural references).

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:vinuram",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "vinuram",
    "phoneticRep": "vi.nu.ram"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:vinusam"
    },
    {
      "@id": "eh:ran"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "vinusam-ran",
    "etymon:gloss": "shoulder-length",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows development of -ran as measurement suffix from *haranu 'length'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "yard (unit of length, approximately shoulder-width)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Basic Terms"
      ]
    }
  ]
}
````


So now we have a nice set of body-based measurements:
- `uran`: inch (thumb-width)
- `brastran`: foot (arm-length)
- `vinuram`: yard (shoulder-width)

Would you like to explore some non-body-based terms for longer distances? Perhaps 
based on walking time, landmarks, or maritime navigation?

---

_**User**_

I do like the idea of length coming from the time it takes for a person to walk to somewhere. how far can a typical person walk in 1 hour?

---

_**Assistant**_





A typical person walking at a comfortable pace on relatively flat ground can cover about 3-4 miles (5-6.5 kilometers) in an hour. This is often called "league" in historical measurements - the distance a person could walk in an hour.

For Early Hick, we could create something like:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:barak'ir",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "barak'ir",
    "phoneticRep": "ba.rak.ʔir"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:barak"
    },
    {
      "@id": "eh:ir"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "barak-'ir",
    "etymon:gloss": "walk-action",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Distance measure based on one hour's walking time. Shows development of time-based distance measurements."
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "league (distance walkable in one hour, roughly 3-4 miles)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Distance Terms",
        "Motion Terms"
      ]
    }
  ]
}
````


This uses the existing roots:
- `barak`: "walk, gait"
- `'ir`: "action, movement"

The compound literally means "walking-action" but becomes lexicalized as a 
distance measure. This fits well with Early Hick's tendency to derive concrete 
meanings from action terms.

---

_**User**_

perhaps barakter? then shortened to rakter colloquially?

---

_**Assistant**_







Yes, that's better! Using the temporal suffix `-ter` is more precise for a 
time-based measurement, and the colloquial shortening feels very natural:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:barakter",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "barakter",
    "phoneticRep": "ba.rak.ter"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:barak"
    },
    {
      "@id": "eh:ter"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "barak-ter",
    "etymon:gloss": "walk-time",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Distance measure based on one hour's walking time. Shows temporal suffix used for distance measurement."
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "league (distance walkable in one hour, roughly 3-4 miles)",
        "@language": "en"
      },
      "usage": "Often shortened to rakter in colloquial speech",
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Distance Terms",
        "Time Terms"
      ]
    }
  ],
  "derivedForms": [
    {
      "@type": "ontolex:Form",
      "writtenRep": "rakter",
      "phoneticRep": "rak.ter",
      "decomposition": "shortened form of barakter",
      "grammaticalMeaning": "colloquial form for league"
    }
  ]
}
````



This is nice because:
1. Uses the temporal suffix `-ter` appropriately
2. The colloquial shortening `rakter` follows natural speech patterns
3. Shows how formal/colloquial register distinctions develop
4. Maintains connection to both walking and time measurement

Would you like to explore multiples or fractions of this unit?

---

_**User**_

and I suppose we can divide a barakter for some medial-length distances.

tirranbarakter 1/2 of a barakter

---

_**Assistant**_









Yes! Using `tirran-` for "half" gives us a nice intermediate distance measure:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:tirranbarakter",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "tirranbarakter",
    "phoneticRep": "tir.ran.ba.rak.ter"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:tirran"
    },
    {
      "@id": "eh:barakter"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "tirran-barakter",
    "etymon:gloss": "half-league",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows systematic division of standard distance measure"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "half-league (roughly 1.5-2 miles)",
        "@language": "en"
      },
      "usage": "Often shortened to tirranrakter in colloquial speech",
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Distance Terms",
        "Time Terms"
      ]
    }
  ],
  "derivedForms": [
    {
      "@type": "ontolex:Form",
      "writtenRep": "tirranrakter",
      "phoneticRep": "tir.ran.rak.ter",
      "decomposition": "shortened form of tirranbarakter",
      "grammaticalMeaning": "colloquial form for half-league"
    }
  ]
}
````



This gives us a nice progression of distance measures:
- `uran`: inch (thumb-width)
- `brastran`: foot (arm-length)
- `vinuram`: yard (shoulder-width)
- `tirranbarakter`: half-league (~1.5-2 miles)
- `barakter`: league (~3-4 miles)

And colloquial variants:
- `tirranrakter`: half-league
- `rakter`: league

Would you like to explore other fractions or multiples?

---

_**User**_

I'm thinking this is using the partitive divisor-ran-rakter

---

_**Assistant**_





Ah yes! That's a much better analysis of the morphology. Let's revise to show 
this pattern:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:tirranrakter",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "tirranrakter",
    "phoneticRep": "tir.ran.rak.ter"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:tir"
    },
    {
      "@id": "eh:ran"
    },
    {
      "@id": "eh:rakter"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "tir-ran-rakter",
    "etymon:gloss": "two-PART-league",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows productive use of partitive -ran- in measurement divisions"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "half-league (roughly 1.5-2 miles)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Measurement Terms",
        "Distance Terms",
        "Time Terms"
      ]
    }
  ]
}
````



This suggests a productive pattern for fractions:
- `tirranrakter`: "two-part league" = half-league
- `sinranrakter`: "three-part league" = third-league
- etc.

The partitive `-ran-` makes much more sense morphologically than treating it as 
a compound with `tirran-`. Would you like to explore other fractional measures 
using this pattern?

---

_**User**_

now this would add some complexity to the language (that may be modified by speakers in later language iterations) by having to need context to the use of number-ran-word where there are cases when it's a numerical marking, but there are cases where it's fractional

---

_**Assistant**_







Yes! This is a fascinating complexity - the same morphological pattern `number-ran-noun` has two distinct interpretations:

1. As a numerical marker:
   - `tirranlis` "two children"
   - `sinranmer` "three parents"
   - `marrantak` "five strikes"

2. As a fractional divider:
   - `tirranrakter` "half-league" (league divided in two)
   - `sinranrakter` "third-league" (league divided in three)
   - `marranvinuram` "fifth of a yard"

The interpretation would depend on:
1. The semantic context (can the noun be reasonably divided?)
2. The pragmatic context (are we counting or measuring?)
3. The register/domain (measurement terms vs general counting)

This kind of ambiguity could lead to:
1. Later language stages developing disambiguating markers
2. Certain nouns becoming "locked" to one interpretation
3. Different dialects resolving the ambiguity differently
4. Specialized vocabulary for technical contexts

Would you like to explore how later stages of Hick might handle this ambiguity?

---

_**User**_

let's first document this fractional number marking in the Number Marking section in the early hick grammar

---

_**Assistant**_







Yes! Let's add this to the Number Marking section:

````markdown:site/content/languages/hick/early-hick/_index.md
### Number Marking

Early Hick has three strategies for marking number:

1. Plural Prefix ma-
   - Indicates general plurality
   - ma-mater "boats"

2. Partitive Prefix ran- (< *haranu "divide")
   - Indicates "some of" or "part of"
   - ran-mater "some boats"
   - Can develop limiter meaning in context

3. Numerical Marking with ran-
   - Links numbers to nouns
   - thal-ran-mater "three boats"
   - pil-ran-natlas "five friends"

4. Fractional Marking with ran-
   The partitive prefix ran- can also mark fractions when used with numbers:

   ```plaintext
   tirranrakter
   two-PART-league
   "half-league" (league divided in two)
   
   sinranvinuram
   three-PART-yard
   "third of a yard" (yard divided in three)
   ```

   Note that this creates ambiguity with numerical marking, as number-ran-noun 
   can mean either "X number of nouns" or "1/X of a noun" depending on context:

   ```plaintext
   tirranlis
   two-PART-child
   "two children" (numerical marking)

   tirranrakter
   two-PART-league
   "half-league" (fractional marking)
   ```

   The interpretation depends on:
   - Whether the noun can be meaningfully divided
   - The pragmatic context (counting vs measuring)
   - The register (technical vs general usage)

   This ambiguity becomes particularly relevant in measurement and trade contexts,
   where both counting and dividing are common.
````

Would you like me to add more examples or expand on how this ambiguity plays out 
in specific contexts?

---

_**User**_

are there IRL languages with a similar ambiguity?

---

_**Assistant**_

Yes! A few examples come to mind:

1. Classical Chinese measure words like 分 (fēn):
   - "one-tenth" when used as a fraction
   - "portion/part" when used as a counter
   - So "三分" (sān fēn) could mean either "three parts" or "three-tenths" depending on context

2. Japanese counter suffix -分 (-bun):
   - 三分 (san-bun) can mean "three portions" or "one-third" 
   - Similar to its Chinese ancestor, but developed its own patterns
   - Context and domain (math vs general use) determines meaning

3. Some Arabic dialects use number+part constructions that can be ambiguous:
   - Could mean "X parts" or "one X-th" depending on context
   - Particularly in measurement and trade contexts

4. Ancient Greek had some constructions with μέρος (méros, "part"):
   - Could indicate both multiple parts and fractions
   - Required context for disambiguation

The Early Hick pattern with ran- is particularly similar to the East Asian examples, where the same morphological construction can indicate either multiplication or division depending on context and domain.

Would you like me to elaborate on any of these parallels?

---

_**User**_

can I have an entry for barakter in the md format?

---

_**Assistant**_







Here's the lexicon entry for `barakter`:

````markdown:site/content/languages/hick/early-hick/lexicon.md
barakter [ba.rak.ter]
  : league (distance walkable in one hour, roughly 3-4 miles)
  : barak-ter "walk-time" → barakter
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Distance measure based on one hour's walking time. Shows temporal suffix
  used for distance measurement. Often shortened to rakter in colloquial speech.
  See: [Measurement Terms](#measurement-terms), [Distance Terms](#distance-terms),
  [Time Terms](#time--celestial)
````

This follows the standard format:
1. Word and pronunciation
2. Definition
3. Etymology
4. Sound changes
5. Notes and cross-references

Would you like me to add any additional information or cross-references?

---

_**User**_

let's add maetil "many things; everything" < EH PLURAL + etil "thing"

---

_**Assistant**_









Here are the entries in both formats:

````markdown:site/content/languages/hick/early-hick/lexicon.md
maetil [ma.e.til]
  : many things; everything
  : ma-etil "PLURAL-thing" → maetil
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows semantic extension from plural marker to universal quantifier.
  Forms compounds like maetiltak "all-strike" (complete action). See:
  [Basic Terms](#basic-terms), [Quantifiers](#quantifiers)
````


````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:maetil",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "maetil",
    "phoneticRep": "ma.e.til"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:ma"
    },
    {
      "@id": "eh:etil"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ma-etil",
    "etymon:gloss": "PLURAL-thing",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows semantic extension from plural marker to universal quantifier"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "many things; everything",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Quantifiers"
      ]
    }
  ]
}
````


This shows a nice development where the plural marker `ma-` combines with the 
general term `etil` to create a universal quantifier. The semantic extension 
from "many things" to "everything" is quite natural. Would you like to explore 
other compounds or derivatives of `maetil`?

---

_**User**_

what are typical body metaphors for weakness

---

_**Assistant**_



Common body-part metaphors for weakness across languages include:

1. Joints/Flexibility related:
   - "weak-kneed"
   - "spineless"
   - "limp-wristed"
   - References to being "soft" or "bendable"

2. Internal organs:
   - "weak-hearted" (lacking courage)
   - "weak-stomached" (easily nauseated/disturbed)
   - "weak-livered" (in some cultures)

3. Muscle/Strength related:
   - "weak-armed"
   - "weak-handed"
   - References to being "flabby" or "without muscle"

4. Blood/Vitality:
   - "weak-blooded"
   - "pale" (implying lack of blood)
   - References to being "bloodless"

5. Bone related:
   - "weak-boned"
   - "brittle-boned"
   - References to lacking structural strength

For Early Hick, we might consider:
- Something with `brast` (arm) for physical weakness
- Something with `ka` (blood) for vitality-related weakness
- Something with `krak` (tooth) for structural weakness
- Something with `mer` (core/heart) for emotional/spiritual weakness

Would you like to explore developing any of these metaphorical patterns?

---

_**User**_

I have kapal lit stomach like as strength, maybe kaimpal as ill-bellied as weak

---

_**Assistant**_









Yes! That's a great parallel construction. If `kapal` represents strength 
(healthy-bellied), then `kaimpal` (ill-bellied) would be its natural opposite:

````markdown:site/content/languages/hick/early-hick/lexicon.md
kaimpal [ka.im.pal]
  : weak, feeble (lit. "ill-bellied")
  : ka-im-pal "like-ill-belly" → kaimpal
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of belly/gut health to general strength.
  Contrasts with kapal "strong" (lit. "healthy-bellied"). See:
  [Body Terms](#body-terms), [Basic Terms](#basic-terms)
````



````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:kaimpal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "kaimpal",
    "phoneticRep": "ka.im.pal"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:ka"
    },
    {
      "@id": "eh:im"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ka-im-pal",
    "etymon:gloss": "like-ill-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows metaphorical extension of belly/gut health to general strength. Forms antonym pair with kapal 'strong'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "weak, feeble",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
}
````



This creates a nice metaphorical system where:
- Healthy belly = strength
- Ill belly = weakness

The use of the gut/belly for strength metaphors is quite common 
cross-linguistically (think "gut feeling", "intestinal fortitude", etc.). Would 
you like to explore other derivatives or compounds using this metaphorical base?

---

_**User**_

impal can be the noun form for weakness

---

_**Assistant**_









Yes! That's a nice derivation - the compound becomes lexicalized as a noun:

````markdown:site/content/languages/hick/early-hick/lexicon.md
impal [im.pal]
  : weakness, frailty (lit. "ill-belly")
  : im-pal "ill-belly" → impal
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Source of adjective kaimpal "weak". Shows metaphorical extension of
  belly/gut health to general strength. See: [Body Terms](#body-terms),
  [Basic Terms](#basic-terms)
````




````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:impal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "impal",
    "phoneticRep": "im.pal"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:im"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "im-pal",
    "etymon:gloss": "ill-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows metaphorical extension of belly/gut health to general strength. Source of adjective kaimpal 'weak'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "weakness, frailty",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
}
````




So we have a nice set of related terms:
- `impal`: weakness (noun)
- `kaimpal`: weak (adjective)
- `kapal`: strong (adjective)
- `pal`: belly/gut (noun)

This shows how the metaphorical extension developed from concrete body terms to 
abstract qualities. Would you like to explore verbal forms or other derivatives?

---

_**User**_

let's add that entry for kapal for good measure

---

_**Assistant**_











Yes, let's document the positive term in this metaphorical pair:

````markdown:site/content/languages/hick/early-hick/lexicon.md
kapal [ka.pal]
  : strong, vigorous (lit. "healthy-bellied")
  : ka-pal "like-belly" → kapal
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows metaphorical extension of belly/gut health to general strength.
  Contrasts with kaimpal "weak". Forms compounds like kapaltak "strong-strike"
  (forceful action). See: [Body Terms](#body-terms), [Basic Terms](#basic-terms)
````





````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:kapal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "kapal",
    "phoneticRep": "ka.pal"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:ka"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ka-pal",
    "etymon:gloss": "like-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows metaphorical extension of belly/gut health to general strength. Forms antonym pair with kaimpal 'weak'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "strong, vigorous",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
}
````





Now we have the complete set showing the metaphorical system:
- `pal`: belly/gut (concrete body part)
- `kapal`: strong (healthy belly)
- `impal`: weakness (ill belly)
- `kaimpal`: weak (ill-bellied)

The progression from concrete body part → metaphorical quality → abstract noun is 
quite naturalistic. Would you like to explore compounds or expressions using 
these terms?

---

_**User**_

both kapal and kaimpal are adjective forms, as evidenced by the ka- adjectivizer prefix  btw

---

_**Assistant**_











Ah yes, you're absolutely right! Let me fix those entries to properly show their 
adjectival nature:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:kapal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "kapal",
    "phoneticRep": "ka.pal"
  },
  "lexicalCategory": "lexinfo:Adjective",
  "decomp:subterm": [
    {
      "@id": "eh:ka"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ka-pal",
    "etymon:gloss": "ADJ-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows productive use of ka- adjectivizer prefix. Forms antonym pair with kaimpal 'weak'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "strong, vigorous",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
}
````



So our revised system is:
- `pal`: belly/gut (noun)
- `kapal`: strong (adjective, with ka- prefix)
- `impal`: weakness (noun compound)
- `kaimpal`: weak (adjective, with ka- prefix)

This better reflects Early Hick's morphological system where `ka-` marks 
adjectives. Would you like me to update the other entries to match this pattern?

---

_**User**_

yes p;ease

---

_**Assistant**_













Here are both entries properly marked as adjectives:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:kapal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "kapal",
    "phoneticRep": "ka.pal"
  },
  "lexicalCategory": "lexinfo:Adjective",
  "decomp:subterm": [
    {
      "@id": "eh:ka"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ka-pal",
    "etymon:gloss": "ADJ-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows productive use of ka- adjectivizer prefix. Forms antonym pair with kaimpal 'weak'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "strong, vigorous",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
},
{
  "@id": "eh:kaimpal",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "kaimpal",
    "phoneticRep": "ka.im.pal"
  },
  "lexicalCategory": "lexinfo:Adjective",
  "decomp:subterm": [
    {
      "@id": "eh:ka"
    },
    {
      "@id": "eh:im"
    },
    {
      "@id": "eh:pal"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ka-im-pal",
    "etymon:gloss": "ADJ-ill-belly",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows productive use of ka- adjectivizer prefix. Forms antonym pair with kapal 'strong'"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "weak, feeble",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Body Terms",
        "Basic Terms",
        "Health Terms"
      ]
    }
  ]
}
````




This now properly shows:
1. Both are adjectives (lexinfo:Adjective)
2. Both use the ka- adjectivizer prefix
3. They form an antonym pair
4. The underlying metaphorical system based on belly/health

---

_**User**_

what are sources for words that mean anger/rage from different protolanguage roots?

---

_**Assistant**_





Common etymological sources for "anger/rage" across proto-languages include:

1. Heat/Fire metaphors:
   - PIE *h₂eysdh- "to burn" → Germanic *aistiz "anger"
   - Latin fervere "to boil" → French fureur
   - Many languages: "hot-headed", "burning with rage"

2. Physical Agitation:
   - PIE *wreh₁d- "to twist, torment" → English "wrath"
   - "Stirred up", "turbulent" metaphors
   - Related to "disturbed" states

3. Swelling/Pressure:
   - PIE *bʰel- "to swell" → various anger terms
   - Common metaphor of "building pressure"
   - Related to "bursting" with anger

4. Animal Behavior:
   - "Wild beast" metaphors
   - "Baring teeth" imagery
   - "Clawing/scratching" actions

5. Physical Symptoms:
   - Redness (face/eyes)
   - Trembling/shaking
   - Internal pressure/heat

For Early Hick, we could develop terms from:
- Heat/fire roots
- Body-based metaphors (like we did with belly-strength)
- Animal behavior (given their rich animal terminology)
- Physical symptoms

Would you like to explore developing any of these patterns?

---

_**User**_

I suppose we can have:
'ibris'er "burn"
'ilibris "passion; inspire fervor"
imibris "rage, anger; wrath"

---

_**Assistant**_













Yes! This creates a nice semantic family around burning/heat metaphors. Let's document them:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:ibris'er",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "ibris'er",
    "phoneticRep": "i.bris.ʔer"
  },
  "lexicalCategory": "lexinfo:Verb",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "ibris-'er",
    "etymon:gloss": "burn-VERB",
    "etymon:note": "Base form for metaphorical extensions to passion and anger"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "to burn",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Fire Terms"
      ]
    }
  ]
},
{
  "@id": "eh:ilibris",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "ilibris",
    "phoneticRep": "i.li.bris"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "il-ibris",
    "etymon:gloss": "good-burn",
    "etymon:note": "Shows positive metaphorical extension of burning sensation"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "passion; inspire fervor",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Emotion Terms",
        "Sacred Terms"
      ]
    }
  ]
},
{
  "@id": "eh:imibris",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "imibris",
    "phoneticRep": "i.mi.bris"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "im-ibris",
    "etymon:gloss": "ill-burn",
    "etymon:note": "Shows negative metaphorical extension of burning sensation"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "rage, anger; wrath",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Emotion Terms",
        "Sacred Terms"
      ]
    }
  ]
}
````




This shows a nice pattern:
1. Base physical meaning: `ibris'er` "to burn"
2. Positive metaphor: `ilibris` "passion" (good-burn)
3. Negative metaphor: `imibris` "rage" (ill-burn)

The use of `il-` and `im-` prefixes to create positive/negative metaphorical 
extensions is quite elegant. Would you like to explore compounds or derivatives 
of these terms?

---

_**User**_

please do not disregard the leading '. that's a glottal stop

---

_**Assistant**_













Ah yes, sorry! Let me fix those entries to properly show the glottal stops:

````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:'ibris'er",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "'ibris'er",
    "phoneticRep": "ʔi.bris.ʔer"
  },
  "lexicalCategory": "lexinfo:Verb",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "'ibris-'er",
    "etymon:gloss": "burn-VERB",
    "etymon:note": "Base form for metaphorical extensions to passion and anger"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "to burn",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Fire Terms"
      ]
    }
  ]
},
{
  "@id": "eh:'ilibris",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "'ilibris",
    "phoneticRep": "ʔi.li.bris"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "'il-'ibris",
    "etymon:gloss": "good-burn",
    "etymon:note": "Shows positive metaphorical extension of burning sensation"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "passion; inspire fervor",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Emotion Terms",
        "Sacred Terms"
      ]
    }
  ]
},
{
  "@id": "eh:'imibris",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "'imibris",
    "phoneticRep": "ʔi.mi.bris"
  },
  "lexicalCategory": "lexinfo:Noun",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "'im-'ibris",
    "etymon:gloss": "ill-burn",
    "etymon:note": "Shows negative metaphorical extension of burning sensation"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "rage, anger; wrath",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Emotion Terms",
        "Sacred Terms"
      ]
    }
  ]
}
````





Now properly showing:
1. Initial glottal stops in all forms
2. Proper glottal representation in phoneticRep
3. Glottal stops in the etymological glosses

Would you like to explore compounds or derivatives of these properly-transcribed 
terms?

---

_**User**_

please generate md entries as well

---

_**Assistant**_















Here are the markdown entries:

````markdown:site/content/languages/hick/early-hick/lexicon.md
'ibris'er [ʔi.bris.ʔer]
  : to burn
  : 'ibris-'er "burn-VERB" → 'ibris'er
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Base form for metaphorical extensions to passion and anger. See:
  [Basic Terms](#basic-terms), [Fire Terms](#fire-terms)

'ilibris [ʔi.li.bris]
  : passion; inspire fervor
  : 'il-'ibris "good-burn" → 'ilibris
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows positive metaphorical extension of burning sensation. See:
  [Emotion Terms](#emotion-terms), [Sacred Terms](#sacred--ritual)

'imibris [ʔi.mi.bris]
  : rage, anger; wrath
  : 'im-'ibris "ill-burn" → 'imibris
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows negative metaphorical extension of burning sensation. See:
  [Emotion Terms](#emotion-terms), [Sacred Terms](#sacred--ritual)
````





This shows:
1. Proper glottal stop notation in both orthographic and phonetic forms
2. The metaphorical development from physical burning to emotions
3. The contrast between positive ('il-) and negative ('im-) prefixes
4. Relevant cross-references to semantic domains

Would you like to add any additional notes or cross-references to these entries?

---

_**User**_

funnily enough, you overcorrected. imibris doesn't have an initial glottal stop, since  `im` doesn't have one 

---

_**Assistant**_















Ah yes, you're absolutely right! Only the base form `'ibris` and the positive 
prefix `'il-` have glottal stops. Let me fix those entries:

````markdown:site/content/languages/hick/early-hick/lexicon.md
'ibris'er [ʔi.bris.ʔer]
  : to burn
  : 'ibris-'er "burn-VERB" → 'ibris'er
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Base form for metaphorical extensions to passion and anger. See:
  [Basic Terms](#basic-terms), [Fire Terms](#fire-terms)

'ilibris [ʔi.li.bris]
  : passion; inspire fervor
  : 'il-'ibris "good-burn" → 'ilibris
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows positive metaphorical extension of burning sensation. See:
  [Emotion Terms](#emotion-terms), [Sacred Terms](#sacred--ritual)

imibris [i.mi.bris]
  : rage, anger; wrath
  : im-'ibris "ill-burn" → imibris
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows negative metaphorical extension of burning sensation. See:
  [Emotion Terms](#emotion-terms), [Sacred Terms](#sacred--ritual)
````





Would you like me to update the JSON-LD entries as well to fix this?

---

_**User**_

a word that have the senses of compacted, condensed, shaped from loose soil

eltek < PH ʔelu INST + PH *taku "strike; hit", from a phrase "grale 'elu taku, soil together hit" 

---

_**Assistant**_















Yes! This is a nice derivation from a verbal phrase. Let's document it:

````markdown:site/content/languages/hick/early-hick/lexicon.md
eltek [el.tek]
  : compacted, condensed (esp. of soil); shaped from loose material
  : Proto-Hick *ʔelu-taku → eltek
  : ([compound fusion, final vowel loss](@/languages/hick/early-hick/_index.md#early-hick-prehistory-to-300-pf))
  : Note: From phrase "grale 'elu taku" (soil together hit). Shows semantic
  development from physical action to resultant state. See:
  [Basic Terms](#basic-terms), [Earth Terms](#earth-terms)
````




````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:eltek",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "eltek",
    "phoneticRep": "el.tek"
  },
  "lexicalCategory": "lexinfo:Adjective",
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:protoform": "Proto-Hick *ʔelu-taku",
    "etymon:components": [
      "*ʔelu (INST)",
      "*taku (strike)"
    ],
    "etymon:soundChange": [
      "compound fusion",
      "final vowel loss"
    ],
    "etymon:note": "From phrase 'grale ʔelu taku' (soil together hit). Shows development from physical action to resultant state"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "compacted, condensed (especially of soil)",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Earth Terms"
      ]
    },
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "shaped from loose material",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Basic Terms",
        "Earth Terms"
      ]
    }
  ]
}
````





This shows:
1. The development from a verbal phrase to a single word
2. The semantic shift from action to resultant state
3. The specialization for soil/earth working
4. The extension to general material shaping

Would you like to explore compounds or derivatives using this term?

---

_**User**_

bramulis "vortex" < bram "tide" + -ul possessive + lis "eye", simplified by merging final l coda from bramul into lis

---

_**Assistant**_

















Ah, that's a lovely compound with phonological simplification! Let's document it:

````markdown:site/content/languages/hick/early-hick/lexicon.md
bramulis [bra.mu.lis]
  : vortex, whirlpool
  : bram-ul-lis "tide-POSS-eye" → bramulis
  : ([compound fusion, coda simplification](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Literally "tide's eye". Shows coda simplification where final -l of
  bramul merges with initial l- of lis. See: [Maritime Terms](#maritime-terms),
  [Water Features](#water-features)
````





````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:bramulis",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "bramulis",
    "phoneticRep": "bra.mu.lis"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:bram"
    },
    {
      "@id": "eh:ul"
    },
    {
      "@id": "eh:lis"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "bram-ul-lis",
    "etymon:gloss": "tide-POSS-eye",
    "etymon:soundChange": [
      "compound fusion",
      "coda simplification"
    ],
    "etymon:note": "Shows coda simplification where final -l of bramul merges with initial l- of lis"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "vortex, whirlpool",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Maritime Terms",
        "Water Features"
      ]
    }
  ]
}
````






This shows:
1. The metaphorical composition "tide's eye" for whirlpool
2. The phonological process of coda simplification
3. The maritime/water terminology connection
4. The use of body parts (eye) in natural feature descriptions

Would you like to explore other compounds using this pattern or similar 
phonological simplifications?

---

_**User**_

let's add momer "chicken" < from NEG-bird

---

_**Assistant**_

















Yes! A negated bird becomes a flightless bird - that's a clever derivation:

````markdown:site/content/languages/hick/early-hick/lexicon.md
momer [mo.mer]
  : chicken
  : mo-mer "NEG-bird" → momer
  : ([compound fusion](@/languages/hick/early-hick/_index.md#compound-formation))
  : Note: Shows semantic development where negated "bird" specifies flightless
  bird. See: [Animal Terms](#animal-terms), [Basic Terms](#basic-terms)
````






````jsonld:data/languages/hick/early-hick/lexicon.jsonld
{
  "@id": "eh:momer",
  "@type": "ontolex:LexicalEntry",
  "canonicalForm": {
    "@type": "ontolex:Form",
    "writtenRep": "momer",
    "phoneticRep": "mo.mer"
  },
  "lexicalCategory": "lexinfo:Noun",
  "decomp:subterm": [
    {
      "@id": "eh:mo"
    },
    {
      "@id": "eh:mer"
    }
  ],
  "etymology": {
    "@type": "etymon:Etymology",
    "etymon:compound": "mo-mer",
    "etymon:gloss": "NEG-bird",
    "etymon:soundChange": "compound fusion",
    "etymon:note": "Shows semantic development where negated 'bird' specifies flightless bird"
  },
  "sense": [
    {
      "@type": "ontolex:LexicalSense",
      "definition": {
        "@value": "chicken",
        "@language": "en"
      },
      "lexinfo:semanticField": [
        "Animal Terms",
        "Basic Terms"
      ]
    }
  ]
}
````






This is a nice example of how negation can create specific meaning rather than 
just pure negation - "not a (proper) bird" → "flightless bird" → "chicken". 
Would you like to explore other terms using this kind of negation-based 
specification?

---



---

