## SpecStory

## Morphological Proposal for Iterative Completive Marking (2/17/2025, 9:52:55 PM)

_**User**_

I'm thinking of rendering a phrase like

```
school began again
branum 'ilistales branrur tel
PAST school-ABS dawn/starg-ITER COMPL
```

basically using a completive marker to mark an instance of an iteration

This would be an alteration of the current documented patterns so I can use morphsyntax to mark for it

---

_**Assistant**_

This is an interesting proposal! Let me analyze this from both supportive and critical perspectives:

Supporting arguments:
1. The combination of iterative (-rur) with completive (tel) creates a logical way to mark "one instance of a repeated event"
2. It fits Early Hick's general pattern of using aspect markers to modify verbal meanings
3. The semantic extension makes sense - marking completion of one cycle in a recurring pattern

However, there are some potential issues to consider:

1. Current documentation shows tel as marking finished actions, while -rur marks repeated actions. Their combination could be semantically contradictory.

2. The branrur form (from bran "dawn/start") already implies cyclical repetition. Adding tel might be redundant.

3. The current system doesn't document interactions between aspect markers and the iterative suffix.

Alternative suggestions:

1. Use just the iterative without tel:
```plaintext
branum 'ilistales branrur
PAST school-ABS dawn/start-ITER
"School began again" (lit. "school cycled to dawn")
```

2. Use a different construction emphasizing the single instance:
```plaintext
branum 'ilistales sinbranrur
PAST school-ABS one-dawn-ITER
"School began again" (lit. "school one-cycle dawned")
```

3. Add this pattern to the documentation as a specialized construction, noting that tel with iterative specifically marks "one instance of a repeated event"

If you want to proceed with your proposal, I'd suggest adding documentation about how tel interacts with other aspect markers, particularly explaining how it can mark completion of one cycle within an iterative pattern.

What aspects of this analysis would be most helpful for refining your idea?

---

_**User**_

based on current documented usage, the iterative was intended to be continual, not sometimes continual, sometimes an instance of repetition.

I was thinking that tel would mark that the cyclical nature is ended

---

_**Assistant**_

Ah, I see - you're right! Looking at the documented usage more carefully, the iterative (-rur/-'irur/-ur) marks continuous repetition, not just potential repetition.

In that case, I'd suggest:

````plaintext
branum 'ilistales barak'er
PAST school-ABS walk-VERB
"School began"
````

This simpler construction avoids conflicting with the established meaning of the iterative marker. The iterative marker is documented for truly continuous/repeated actions, like:

````plaintext
'ales barak'irur
person-ABS walk-ITER
"The person walks repeatedly" (formal/ritual context)
````

If you want to specifically emphasize "again", you could potentially use a temporal adverbial construction, though that would need to be documented separately.

Would you like to explore other ways to express the "again" meaning without compromising the established continuous nature of the iterative marker?

---

_**User**_

yes but we do want to emphasize "again" specifically here

---

_**Assistant**_



Ah, in that case, let's look at a more semantically appropriate way to express "again" while preserving the documented meanings. Given Early Hick's spatial and temporal metaphors, we could consider:

````plaintext
branum 'ilistales barakimris
PAST school-ABS walk-ELL
"School began again" (lit. "school walked from/out")
````

The reasoning:
1. Uses the ellative case (-imris) which marks "outward motion"
2. Metaphorically extends from spatial "out from" to temporal "anew/again"
3. Maintains consistency with documented patterns
4. Follows the language's tendency to use spatial cases for temporal meanings

Or alternatively:

````plaintext
branum 'ilistales braniter
PAST school-ABS dawn-SUPE
"School began again" (lit. "school dawned upon")
````

Using the superessive (-itar) to indicate the cyclical nature of dawning/beginning.

Would either of these approaches better capture the meaning while staying true to the documented patterns? We could also explore other spatial metaphors that might work well for this concept.

---

_**User**_

aside from what is documented, are there any other reasons against it? 

---

_**Assistant**_

Let me think adversarially about this:

1. Typological Perspective:
- Many languages do mark "one instance of repetition" distinctly from "continuous 
  repetition"
- The semantic distinction between "again" and "repeatedly" is common cross-linguistically
- Using aspect marking to distinguish these is actually quite natural

2. Internal Logic:
- The completive tel marks finished actions
- The iterative marks repetition
- Their combination to mark "one instance of repetition" is semantically coherent
- It follows Early Hick's pattern of combining markers to create new meanings

3. Historical Development:
- The documented patterns show Early Hick uses spatial metaphors for temporal concepts
- This construction would be consistent with that tendency
- It's plausible that such a distinction would develop

Looking at it this way, I actually don't see strong linguistic arguments against your 
proposal:

````plaintext
branum 'ilistales barakrur tel
PAST school-ABS walk-ITER COMPL
"School began again" (lit. "completed one cycle of repeated walking")
````

The main constraint was just the current documentation, but the construction itself 
seems linguistically sound. Would you like to explore how to integrate this pattern 
into the existing documentation?

---

_**User**_

 yes. I feel that usage of spatial markers are already saturated at this point, I wanted some other means, and using the completive along with the iterative seemed to make sense to me

---

_**Assistant**_



That's a very good point! The spatial markers are indeed quite loaded already with multiple functions, and creating a new meaning through aspect marker interaction is both elegant and sensible.

Let's look at how we could document this pattern. I'd suggest adding it under the Aspect section, perhaps after the current iterative documentation:

````markdown:site/content/languages/hick/early-hick/analysis-sentences.md
### Iterative-Completive Interaction

When the completive marker tel follows an iterative-marked verb, it indicates a 
single instance of a repeated or cyclical action:

```plaintext
'ales barakrur tel
person-ABS walk.ITER COMPL
"The person walked again" (lit. "completed one cycle of repeated walking")

branum 'ilistales barakrur tel
PAST school-ABS walk.ITER COMPL
"School began again" (lit. "completed one cycle of repeated starting")
```

This construction differs from the simple iterative, which marks continuous 
repetition:

```plaintext
'ales barakrur
person-ABS walk.ITER
"The person walks repeatedly"
```

The iterative-completive combination is particularly useful for marking:
- Return to previous states or activities
- Cyclic events that complete one iteration
- Repeated actions viewed as single completed instances
````

This addition:
1. Clearly distinguishes the new pattern from simple iterative usage
2. Provides examples showing the semantic distinction
3. Explains the contexts where this combination is most useful
4. Maintains consistency with existing documentation style

Would you like to refine this documentation further?

---

_**User**_

if we were to add a header based on function, what aspect would this be called

---

_**Assistant**_



In aspectual terminology, this function is most commonly called "repetitive" or "iterative-semelfactive" aspect - where a single instance of a repeated action is marked.

So we could revise the header to:

````markdown:site/content/languages/hick/early-hick/analysis-sentences.md
### Repetitive Aspect

The repetitive aspect in Early Hick is formed by combining the iterative suffix 
with the completive marker tel, indicating a single instance of a repeated or 
cyclical action:

```plaintext
'ales barakrur tel
person-ABS walk.ITER COMPL
"The person walked again" (lit. "completed one cycle of repeated walking")

branum 'ilistales barakrur tel
PAST school-ABS walk.ITER COMPL
"School began again" (lit. "completed one cycle of repeated starting")
```

This construction differs from the simple iterative, which marks continuous 
repetition:

```plaintext
'ales barakrur
person-ABS walk.ITER
"The person walks repeatedly"
```

The repetitive aspect is particularly useful for marking:
- Return to previous states or activities
- Cyclic events that complete one iteration
- Repeated actions viewed as single completed instances
````

The term "repetitive" is more precise than "iterative-completive interaction" as it names the actual aspectual function rather than just describing the morphological construction. What do you think about this terminology?

---



---

