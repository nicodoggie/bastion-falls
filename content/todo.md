+++
title = "To Do"
weight = 10
+++

# General
 - [ ] Either find an interactive map generator, or make one

# Templates
 - [ ] Think about just forking the current base template
 - [x] Maybe apply a dark theme instead of this bright white crap.
 - [ ] Actually align the Calendar
 - [ ] Default taxonomy templates

## `templates/index.html`
 - [x] Fix top-level content page listings on the side nav bar
 - [x] Add top-level section pages to be clickable if section _index.md is set to `render=true` (partially done by just exposing an "Index" page in the listing)
 - [ ] See if we can actually configure section headers to be sortable somehow

# Content Housekeeping
 - [x] ~~Mark empty articles as "stub"~~ All 0 word-count articles will contain those immediately
 - [ ] Mark content as either "stub", "incomplete" or "outofdate"

# Content
 - [ ] Update actual content to contain recent game content
 - [ ] Add content from Feywild
 - [ ] Add updates from Renault/Ynes storylines
 - [ ] Add character sidebar content for other characters
 - [ ] Add location sidebar content for other places
 - [ ] Add family trees (hopefully we can automate) 

# Helper Tools
 - [ ] Create tool to rationalize different kinds of content IDs 
 - [ ] Create tool to link fantasy-calendar events to Zola in-tree events (pending actual API adjustments)
 - [ ] Create tool to manage alterations to frontmatter

## `content-tree-builder`
 - [ ] Do working prototype in JS/TS
 - [ ] Search organization trees
 - [ ] Search location trees
 - [ ] Search family trees

