+++
title = "Proto-Hick"
weight = 0
+++

_Proto-Hick_ is a hypothetical reconstructed language that represents the
ancestral language of the Hickic languages.

The current state of its reconstruction is highly speculative, as most concrete
evidence derive from Early Hick, with some attempts to reconcile lexical items
from Northern Apgarian Languages and dialects. There are plans to document more
Seneran dialects to increase the robustness of the reconstruction. There may be
some evidence that Sanerian languages and dialects may be related to Hickic, but
more research is needed to confirm this.

# Proto-Hick Phonology

## Overview

Proto-Hick shows a simpler phonological system than Early Hick, with strict
(C)CV(C) syllable structure and obligatory onsets (filled by glottal stop if no
other consonant).

## Segmental Inventory

### Consonants

|            | Labial | Dental | Alveolar | Velar | Glottal |
| ---------- | ------ | ------ | -------- | ----- | ------- |
| Stops      | p b    |        | t d      | k g   | ʔ       |
| Fricatives |        | θ      | s        |       | h x     |
| Nasals     | m      |        | n        |       |         |
| Liquids    |        |        | l r      |       |         |
| Glides     | w      |        |          |       |         |

### Vowels

|      | Front | Central | Back |
| ---- | ----- | ------- | ---- |
| High | i     |         | u    |
| Mid  | e     | ə       | o    |
| Low  |       | a       |      |

## Phonotactics

### Syllable Structure

1. Basic Pattern: (C)CV(C)

   - Initial C required (ʔ if no other consonant)
   - No complex onsets or codas
   - null coda in the final syllable

   ```lexurgy
   Syllables:
      @consonant&[*glottal]? @consonant @vowel? @consonant?
   ```

2. Examples:
   - \*ʔahi "water"
   - \*muru "night"
   - \*telu "place"
   - \*ʔimru "evil"

### Stress Pattern

- Fixed initial stress on word initial glottal stop
- Penultimate stress on all other environments
- No vowel reduction
- All vowel qualities preserved in all positions

### Phonological Processes

1. Obligatory Onset:

   - Ø → ʔ / #\_V
   - Examples:
     - *ahi → *ʔahi "water"
     - *imru → *ʔimru "group, party"

2. Final Vowel Repair:

   - If final vowel was lost, or borrowed word had no final vowel, repair
     strategy follows vowel harmony with the last vowel:

     - C# > CV[i]# / \_V[e,i]C# (After /i/ or /e/: repair with -i)
     - C# > CV[u]# / \_V[u,o,a]C# (After /u/, /o/, or /a/: repair with -u)

   - Examples:
     - *sip → *sipi
     - *pen → *peni
     - *kat → *katu
     - *mok → *moku
     - *tup → *tupu

# Sound Changes from Proto-Hick to Early Hick

## Chronological Stages

### Pre-Hick Period (before ~600 PF)

1. Stress Shift

   - Penultimate stress patterns start shifting to initial stress
   - Secondary stress patterns move to final element on 3-element compounds
   - Secondary stress patterns move to final element on 3-element compounds

2. Final Vowel Devoicing

   - V → V̥ / \_# in unstressed syllables
   - \*thralu > [ˈθra.lu̥]
   - \*wardu > [ˈwar.du̥]
   - \*taku > [ˈta.ku̥]

3. Devoiced Vowel Reduction
   - V̥ → ə / \_#
   - [ˈθra.lu̥] > [ˈθra.lə]
   - [ˈwar.du̥] > [ˈwar.də]
   - [ˈta.ku̥] > [ˈta.kə]

### Early Hick Period (~600 PF onward)

1. Final Schwa Deletion

   - ə → ∅ / \_#
   - [ˈθra.lə] > [ˈθral]
   - [ˈwar.də] > [ˈward]
   - [ˈta.kə] > [ˈtak]

2. Initial Fricative Changes

   1. Animacy marker \*hi-:
      - \*hi- > ʔi- / #\_i
      - \*hi-C > ʔi-C[+voiced] / #\_V
      - \*hi- > ʔ- elsewhere
   2. Sacred marker \*ha-:
      - \*ha > θi / \_C
      - \*ha- > θ- elsewhere

3. Vowel Coalescence

   - \*ahi > ai
   - \*ahu > au
   - \*grau > gra

4. Compound-Specific Changes

   1. Liquid Deletion:

   - r → ∅ / \_C in compounds
   - tor-mal → tomal
   - val-mal → vamal

   2. Nasal Deletion:

   - N → ∅ / \_C in compounds
   - bram-mal → bramal
   - bran-kel → brakel

5. Unstressed Vowel Reduction
   - a → ə in unstressed syllables
   - After sibilants and affricates
   - After voiceless stops
   - Between identical consonants
   - In grammatical prefixes

### Ordering Rules

1. Final vowel changes must precede compound formation
2. Initial fricative changes precede vowel coalescence
3. Compound-specific changes apply after basic sound changes
4. Unstressed vowel reduction applies last

## Special Cases

1. Sacred/ritual terms resist reduction
2. Maritime terms maintain second element weight
3. Recent compounds may preserve full weight
4. Morphological boundaries may preserve weight

## Exceptions

1. Stress-related preservation:

   - Stressed syllables maintain [a]
   - Sacred/formal terms resist reduction
   - Recent compounds preserve original forms

2. Compound-specific preservation:
   - Three-element compounds follow special rules
   - Maritime terminology preserves more archaic forms

# Reconstructed Features

## Animacy Marking

1. Initial *h Development a. Animacy marker *hi-:

   - \*hi- > ʔi- / #\_?i (before /ʔi/)
   - \*hi-C > ʔi-C[+voiced] / #\_V (before /C/)
   - \*hi- > ʔ- (elsewhere)
   - Examples:
     - \*hi-mer > imer "soul"
     - \*hi-al > ʔal "person"

## Sacred/Ritual Marker

It's unknown how or why there seems to be a ritual marker in Proto-Hick, but it
seems that many Early Hick words derive from a special _ha-_ prefix with no
known lexical source. Many terms used in the ritual/sacred register seem to
derive from this prefix.

In Early Hick, the prefix is lost, but it is preserved in words starting with
the dental fricative:

- \*ha > θi / \_C
- \*ha- > θ- (th-)
- Examples:
  - \*halu > θal "holy"
  - \*haru > θar "ritual"

1. Dental Fricative Development

   1. Before non-high vowels - fusion path:

      - Vt.hV > t.hV > thV > θV Examples:
      - \*et.hal > \*t.hal > \*thal > θal "that"
      - \*ut.har > \*t.har > \*thar > θar "there"

   2. Before high vowels - aspiration path:
      - Vt.hH > t.hH > thH > tʰH > tH (where H = high vowel, aspiration
        non-contrastive) Examples:
      - \*et.his > \*t.his > \*this > tis "here"
      - \*ut.hir > \*t.hir > \*thir > tir "person"

2. Final Onset Devoicing In words with 3 syllables or more, the final onset is
   devoiced, except when preceded by a sonorant.
   - CV# > C[-voiced]V# / σσσ*, C[-sonorant]*
3. Final Vowel Loss (Pre-Early Hick)

   - Loss may have been motivated by the change of stress patterns from
     Proto-Hick and Early Hick. It could have been driven by language contact as
     well.

     1. Final \*u is lost:

        - u > u̥ > ∅ / \_#
        - Examples:

          ```plaintext
          *thralu → thral "sacred"
          *malu → mal "pool"
          *toru → tor "height"
          ```

     2. Final \*-a undergoes reduction:

        - \*-a > ə / \_C#
        - \*-a > ∅ / \_# Examples:

          ```plaintext
          *mela → məl → mel "definite"
          *kara → kərə → ker "flow"
          ```

     3. Final \_-i follows similar pattern to \_-u:

        - \*-i > ∅ / \_# Examples:

          ```plaintext
          *mari → mar "red"
          *keli → kel "sky"
          ```

   Note: These changes occurred in stages:

   - Final vowel reduction in unstressed syllables
   - Schwa deletion word-finally
   - Complete loss of final high vowels

4. Vowel Coalescence (Pre-Early Hick)

   - \*ahi → \*aʱi → ai "water" (through breathy voice intermediate)
   - \*grau → gra "grey"

   Note: The breathy voice stage (\*aʱi) may be significant for understanding
   dialectal developments, though direct evidence is limited to Early Hick.

5. Compound-Specific Changes (Early Proto-Hick)

   - Syncope in compounds:
     - \*CVCV-VCV → CCV-VCV
     - \*stenu-alu → stenal → snal
     - \*menu-alu → menal → mnal
   - /r/ dissimilation in compounds:
     - r...r → ∅...r / in compounds
     - \*staru-garu → stargar → sargar
     - \*maru-ris → marris → maris

6. Early Hick Compound Formation Patterns

   - Regular compounding with no changes:
     - mur-mer → murmer "night-bird"
     - mur-kel → murkel "night sky"
     - kur-tin → kurtin "bronze"
   - Liquid/Nasal Deletion in Early Hick compounds:
     - thral-gral → thragral "sacred earth"
     - bram-mal → bramal "tidal pool"
     - val-mal → vamal "spirit pool"
   - Tri-element Compound Simplification (Early Hick innovation):
     - tor-mur-mer → tomur "great owl"
     - thur-mur-mer → thurmur "dusk owl"
     - li-mur-mer → limur "small owl"

7. Initial Cluster Simplification

   1. \*sC > 'C / #\_ Examples:
      - \*skel > 'kel "opening"
      - \*ster > 'ter "flow"
   2. Medial clusters resyllabified:
      - \*is-kel > [is.kel] "out-sky"
      - \*as-ter > [as.ter] "up-flow"

8. Other Initial Fricative Loss

9. \*ʃC > sC / #\_
   - \*ʃkel > skel > 'kel "cave"
   - \*ʃter > ster > 'ter "stream"
10. \*x > h / #\_

    - \*xalu > halu > al "rock"
    - \*xiru > hiru > ir "iron"

11. Final Vowel Loss

- V# > ∅ / \_#
- Extremely regular:
  - \*thralu → thral "sacred"
  - \*malu → mal "pool"
  - \*toru → tor "height"
  - \*wadu → wad "path"
  - \*nesu → nes "fish"

## Proto-Hick Features

### Animacy Marking

1. Proto-Hick \*hi- prefix

   - Marked animate/personified entities
   - Two development paths:
     - a. \*hi- > i- / \_i (before high vowels)
     - b. \*hi- > ʔ- (elsewhere)

1. Examples of \*hi- > i-:

   - \*hi-mer > imer "soul, living breath"
   - \*hi-mur > imur "evil force"
   - \*hi-skel > iskel "window" (personified sky-opening)

1. Examples of \*hi- > ʔ-:

   - \*hi-al > ʔal "person"
   - \*hi-ok > ʔok "keeper, guardian"
   - \*hi-er > ʔer "doer, actor"

1. Contrast with non-animate forms:
   - \*mer > mer "breath" (physical)
   - \*mur > mur "darkness" (abstract)
   - \*skel > skel "opening" (physical)

## Relative Chronology

1. Pre-Early Hick

   - Final vowel loss (\*-u > ∅)
   - Vowel coalescence (\*ahi > ai)

2. Early Hick Period
   - Productive compound formation
   - Development of compound-specific sound changes
   - Innovation of tri-element compound simplification

## Morphological Evolution

1. Compound Formation Patterns
   - Element + Element preserved from Proto-Hick
   - New patterns developed:
     - Descriptor + Element
     - Location + Base
2. Grammatical Categories
   - Retention of Proto-Hick case system
   - Development of new aspectual markers

### Verbalizer Development

1. Proto-Hick Stage:
   - \*heru "do, make, act" (full lexical verb)
   - Used in compounds to indicate action/process
2. Early Proto-Hick:

   - \*heru becomes postverbal particle marking action
   - \*ter heru "flow-do" > "to flow"
   - \*ward heru "guide-do" > "to guide"

3. Late Proto-Hick:

   - Unstressed position leads to reduction:
   - *heru > *her (final vowel loss)
   - *ter her, *ward her

4. Early Hick:

   - Initial /h/ > /ʔ/ in unstressed position:
   - \*her > -'er
   - Examples:
     - ter-'er "to flow" < \*ter her
     - ward-'er "to guide" < \*ward her
     - thral-'er "to be sacred" < \*thral her

5. Semantic Development:
   - Original concrete meaning "do/make"
   - Grammaticalized to general verbalizer
   - Creates both active and stative verbs depending on base

## Semantic Shifts

1. Core Vocabulary
   - \*thralu "sacred" → thral "sacred; day"
   - \*kelu "sky" kel "sky; blue"
   - \*sedu-lawesu "seed-consume" → duwes "eat/consume"
   - Sound changes:
     - Liquid deletion at morpheme boundary
     - Syncope in first element
     - Initial cluster simplification
     - Vowel coalescence
     - Final vowel loss
   - Related forms:
     - \*sedu "seed"
     - \*lawesu "consume"
2. Extended Meanings
   - \*toru "height" → tor- augmentative prefix
   - \*muru "night" → base for owl terminology

## Directional System Development

1. Illative (-las)
   - From Proto-Hick \*lawes "consume/take in"
   - Sound changes:
     - *lawes >*laes > -las
   - Parallel development with \*wel > bel "mouth"
   - Original compound: \*wel-lawes "mouth-consume"
     - > *wellaes > *belaes "intake"
     - Grammaticalized to directional marker -las
2. Ellative (-imris)
   - From compound: *imer "breath" + *is "out"
   - Shows parallel grammaticalization:
     - Body action > directional marker
   - Preserved in forms like:
     - imeraes "inspiration" (soul-inward)
     - imerimris "expression" (soul-outward)
3. Example Usage
   - materok rismateraes kethes "the boatman (goes) into the reed boat"
   - materok rismaterimris kethes "the boatman (goes) out from the reed boat"

## Negation System Development

1. Proto-Hick Stage:
   - \*muru "darkness, absence" (full lexical word)
   - Used in compounds to indicate lack/absence
2. Early Proto-Hick:
   - \*muru becomes preverbal particle marking negation
   - \*muru teru "not flow" (lit. "absence flow")
3. Late Proto-Hick:
   - Unstressed position leads to reduction:
   - *muru > *mu (liquid deletion in unstressed position)
4. Early Hick:

   - Further reduction in unstressed prefix position:
   - \*mu- > mo-
   - Examples:
     - mo-thral "non-sacred" < \*mur thral
     - mo-ter "not flowing" < \*mur ter
     - mo-ward "misdirect" < \*mur ward

5. Semantic Development:
   - Original \*mur retained independently as "darkness"
   - mo- grammaticalized as general negator
   - Metaphorical extension: darkness → absence → negation

## Proto-Hick Case System

### Original Spatial/Directional Cases

1. Basic Lative Cases:

   - \*-isu (locative) "at, in"
   - \*-ethe (ablative) "from, away"
   - \*-uma (allative) "to, towards"

2. Early Compounds with \*ula (stative verb):

   - \*ula-isu "exists-at"
   - \*ula-ethe "exists-from"
   - \*ula-uma "exists-towards"

3. Development Path:
   1. Early Proto-Hick:
      - Full spatial case system
      - \*ula as independent verb
   2. Late Proto-Hick:
      - \*ula begins grammaticalizing in possessive constructions
      - Still takes case markings as a verb
      - Spatial cases begin shift to demonstrative use
   3. Early Hick:
      - \*ula > -ul (possession marker)
      - Original case meanings blur
      - _-isu,_-ethe, -uma specialize as demonstratives
      - New spatial markers emerge (-aes, -imris, etc.)
4. Examples:
   - \*telu-isu "at place" > telisu "here"
   - \*telu-ethe "from place" > telethe "there"
   - \*telu-uma "towards place" > teluma "yonder"

# Sample Proto-Hick Resconstructions

## Proto-Hick \*muruhilisu

1. Etymology: Compound of *muru "night" + *hi-lisu "see" (animate prefix +
   "eye")
2. Development:

   - *muruhilisu > *murhilisu (syncope)
   - > \*murlisu (compound reduction)
   - > mulis (Early Hick, final vowel loss)

3. Semantic Development:
   - Literal: "night-seeing"
   - Extended: "dream, vision"
   - Related forms:
     - \*muru "night"
     - \*hi-lisu "to see" (animate)
     - \*lisu "eye" (physical organ)

## Proto-Hick Definite Article

Proto-Hick had a definite article \*mela, likely derived from an earlier
demonstrative or deictic marker. Its usage patterns suggest it was still in the
process of grammaticalizing from a demonstrative to a true definite article.

1. Basic Forms:
   - \*mela (animate/proximal)
   - \*mel (reduced form in compounds)
2. Usage:
   - Post-nominal position
   - Often used with topical or previously mentioned referents
   - Shows agreement with animacy in early stages
3. Examples:

   - \*telu mela "the place" (inanimate)
   - \*kalu mela "the person" (animate)
   - \*mel-toru "the height" (in compounds)

4. Development in Early Hick:
   - Splits into two distinct morphemes: a. Definite article: mel- > -el
     (cliticized to noun) b. Ergative case: mel- > -el (homophonous but
     distinct)
   - Position shifts from post-nominal to pre-nominal
   - Animacy distinction lost

## Proto-Hick \*meru

1. Basic Forms:

   - \*meru "to nurture, care for" (original meaning)
   - \*ha-meru "sacred nurture" (sacred compound)
   - \*meru "bird" (metaphorical extension)

2. Development Path:

   1. Early Proto-Hick:
      - \*meru primary meaning "nurture/care"
      - Used in sacred compounds with \*ha-
      - Cultural association with birds as nurturers
   2. Late Proto-Hick:
      - *ha-meru > *θameru (sacred prefix spirantization)
      - *θameru > *θəmeru (unstressed vowel reduction)
      - \*meru specializes in bird terminology
   3. Early Hick:
      - \*θəmeru > thimer "spiritual nurturing, penitence"
      - mer "bird" and "parent" (dual meaning preserved)
      - Rich owl terminology develops

3. Semantic Development:

   - Original: "nurture, care for"
   - Sacred: "spiritual nurturing" (\*ha-meru > thimer)
   - Extended: "bird" (especially nurturing birds)
   - Further extended: "parent" (from bird metaphor)

4. Examples:

   - \*muru-meru "night-bird" > murmer "owl"
   - \*toru-muru-meru "great-night-bird" > tomur "great owl"
   - \*mer-lisu "parent-child" > merlis "offspring"

5. Cultural Context:
   - Birds, especially owls, seen as exemplars of nurturing
   - Sacred nurturing preserved in ritual terminology
   - Parental nurturing preserved in kinship terms

## Proto-Hick Number System

1. Basic Numbers:

   - \*su "one"
   - \*tiru "two"
   - \*thalu "three"
   - \*fenu "four"
   - \*pilu "five"
   - \*seku "six"
   - \*pranu "seven"
   - \*kresu "eight"
   - \*kethu "hundred"
   - \*thranu "thousand"

2. Counting Numbers (with \*-inu suffix):
   - \*su-inu "one (counting)"
   - \*tir-inu "two (counting)"
   - \*thal-inu "three (counting)"
   - \*fen-inu "four (counting)"
   - \*pil-inu "five (counting)"
   - \*sek-inu "six (counting)"
   - \*pran-inu "seven (counting)"
   - \*kres-inu "eight (counting)"
   - \*thran-inu "thousand (counting)"

The counting suffix \*-inu was used in enumeration contexts. By Early Hick, this
distinction was lost, with some numbers preserving the counting form (sin, fen,
pran, thran) and others keeping the basic form (tir, thal, pil, sek).

Compound numbers developed in Early Hick:

- "nine": \*su-inu-kresu > sinkres "one-eight"
- "ten": \*tiru-kresu > tirkres "two-eight"

# Known Proto-Hick Roots

## Basic Roots

- \*ahi "water" > Early Hick ai
- \*gralu "earth, soil" > Early Hick gral
- \*kelu "sky" > Early Hick kel
- \*thiru "air, wind" > Early Hick thir
- \*xalu "rock" > Early Hick al
- \*garu "stone" > Early Hick gar
- \*malu "pool" > Early Hick mal
- \*ranu "stream" > Early Hick ran
- \*risu "reed" > Early Hick ris
- \*wudu "wood, tree" > Early Hick wud
- \*grasu "grass" > Early Hick gras
- \*sedu "seed" > Early Hick sed
- \*venu "flower" > Early Hick wen
- \*wardu "guide" > Early Hick ward
- \*thralu "sacred" > Early Hick thral
- \*threnu "watch" > Early Hick thren
- \*wadu "path" > Early Hick wad
- \*meru "nurture/bird" > Early Hick mer
- \*taku "strike" > Early Hick tak
- \*storu "grow" > Early Hick stor

## Numbers

- \*su "one"
- \*tiru "two"
- \*thalu "three"
- \*fenu "four"
- \*pilu "five"
- \*seku "six"
- \*pranu "seven"
- \*kresu "eight"
- \*kethu "hundred"
- \*thranu "thousand"

## Grammatical Elements

- \*mela "definite marker" > Early Hick -el (ergative)
- \*heru "do, make" > Early Hick -'er (verbalizer)
- \*hi- "animate prefix" > Early Hick i-/ʔ-
- \*ha- "sacred prefix" > Early Hick θ- (th-)

## Notes

1. All Proto-Hick roots show:

   - Final vowel (usually \*-u)
   - (C)CV(C)V structure
   - No complex onsets or codas
   - Fixed initial stress

2. Sound changes to Early Hick include:

   - Final vowel loss (\*-u > ∅)
   - Initial fricative loss (\*x- > h- > ∅)
   - Vowel coalescence (\*ahi > ai)
   - Compound-specific changes (liquid/nasal deletion)

3. Semantic domains preserved:
   - Natural features
   - Sacred/ritual terminology
   - Basic actions
   - Numbers
   - Grammatical markers

# Proto-Hick Ablative

lu-
