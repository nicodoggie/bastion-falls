#!/usr/bin/env python3

import json
import os
from pathlib import Path
import sys

def get_sort_key(entry):
    """Get the sorting key from a lexical entry."""
    try:
        return entry["canonicalForm"]["writtenRep"].lstrip("'")
    except (KeyError, TypeError):
        return ""

def split_lexicon(input_file, output_dir):
    """Split lexicon.jsonld into alphabetical files."""
    # Create output directory if it doesn't exist
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Read the input lexicon
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            lexicon = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        print(f"Error occurred near line {e.lineno}, column {e.colno}")
        sys.exit(1)
    
    # Get the @context and metadata from the original file
    context = lexicon.get("@context", {})
    metadata = {k: v for k, v in lexicon.items() 
               if k not in ["@context", "@graph"] and not k.startswith("_")}
    
    # Group entries by first letter
    entries_by_letter = {}
    
    for entry in lexicon.get("@graph", []):
        sort_key = get_sort_key(entry)
        if not sort_key:
            continue
            
        first_letter = sort_key[0].lower()
        if first_letter not in entries_by_letter:
            entries_by_letter[first_letter] = []
        entries_by_letter[first_letter].append(entry)
    
    print(f"Found entries starting with: {', '.join(sorted(entries_by_letter.keys()))}")
    
    # Create the main lexicon file that combines all others
    main_lexicon = {
        "@context": context,
        "@graph": [],
        **metadata  # Include the original metadata
    }
    
    # Write each letter's entries to a separate file
    for letter, entries in sorted(entries_by_letter.items()):
        output_file = output_path / f"{letter}.jsonld"
        letter_lexicon = {
            "@context": context,
            "@id": f"lexicon:EarlyHick_{letter.upper()}",
            "@type": "lime:Lexicon",
            "dc:title": f"Early Hick Lexicon - {letter.upper()} entries",
            "dc:language": {
                "@id": "bf:hickic/seneran/early-hick",
                "skos:prefLabel": "Early Hick"
            },
            "@graph": sorted(entries, key=get_sort_key)
        }
        
        print(f"Writing {len(entries)} entries to {output_file}")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(letter_lexicon, f, ensure_ascii=False, indent=2)
        
        # Add entries to main lexicon
        main_lexicon["@graph"].extend(letter_lexicon["@graph"])
    
    # Write the main lexicon file that combines everything
    main_file = output_path.parent / "lexicon.jsonld"
    print(f"Writing combined lexicon to {main_file}")
    with open(main_file, 'w', encoding='utf-8') as f:
        json.dump(main_lexicon, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    input_file = "data/languages/hickic/seneran/early-hick/lexicon.jsonld"
    output_dir = "data/languages/hickic/seneran/early-hick/lexicon"
    split_lexicon(input_file, output_dir) 
