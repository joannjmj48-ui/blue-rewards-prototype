# Blue Rewards, a guiding scenario

A low-fidelity clickable walkthrough of a proposed guiding scenario for the BMO
Blue Rewards loyalty product, built for MDPM 883 (Team Zig) at Smith School of
Business, Queen's University.

Eleven screens run from a member browsing with nothing set up, through setting a
Reward Goal, tracking it as the points requirement moves, and redeeming. A
twelfth path covers the member who never sets a goal at all. The first screen
shows what the product does today, so the gap is visible rather than asserted.

## What is mine and what is not

The task model, the personas and Scenario 4 come from the Team Zig Assignment 1
submission. The screens, the sequence and the framing are my design proposal for
the convergence session, not a team decision.

The screens use the Blue Rewards colour palette and its five-tab navigation
so the proposal reads in context, but they stay sketch level: no photography,
no marketing imagery and no reproduction of the Blue Rewards logo or wordmark.
The numbers in them are plausible rather than real.

## Running it

Static files, nothing to build. Open `index.html`, or serve the folder:

    python3 -m http.server 8000

## Files

- `index.html` &mdash; the screens and the captions
- `prototype.css` &mdash; page styling (screen internals are inline)
- `prototype.js` &mdash; step navigation, keyboard arrows, deep links (`#s0` to `#s11`)
