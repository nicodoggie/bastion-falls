# Chat Transcript - Tab 62

## User:


[selections]  
```typescript
const parser = new JsonLdParser();
parser.write(fileContent);
```
```typescript

interface LexicalEntry {
  id: string;
  lemma: string;
```
```typescript
switch (predicate) {
  case ONTOLEX + 'canonicalForm':
    // Handle canonical form - usually points to another node
    break;

  case ONTOLEX + 'writtenRep':
    entry.lemma = object;
    break;

  case LEXINFO + 'pronunciation':
    entry.pronunciation = object;
    break;

  case DCT + 'description':
  case ONTOLEX + 'definition':
    entry.definition = object;
    break;
  case ONTOLEX + 'sense':
    entry.sense = object;
    break;

  case ONTOLEX + 'etymology':
  case LEXINFO + 'etymology':
    entry.etymology = object;
    break;

  case LEXINFO + 'semanticField':
    entry.semanticField = object;
    break;

  case ONTOLEX + 'reference':
    entry.crossRefs = entry.crossRefs || [];
    entry.crossRefs.push(object);
    break;

  case LEXINFO + 'example':
    entry.examples = entry.examples || [];
    entry.examples.push(object);
    break;

  case ONTOLEX + 'lexicalCategory':
    entry.category = object;
    break;
  default:
    console.log('Unhandled predicate:', predicate, object, subject);
```
[text]  
write 

