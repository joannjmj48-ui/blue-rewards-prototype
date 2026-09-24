# Blue Rewards, a guiding scenario

A low-fidelity walkthrough of a proposed guiding scenario for the BMO Blue
Rewards loyalty product, built for MDPM 883 (Team Zig) at Smith School of
Business, Queen's University.

The page has two parts. **The journey** is one Reward Goal from the first look
to redeeming it, six screens across nine months, because that is what a member
actually lives. **Outside the journey** is everything else the product does,
shown beside the journey rather than bolted onto it, since nobody sits through
fourteen screens in a row.

## What is mine and what is not

The task model, the personas and Scenario 4 come from the Team Zig Assignment 1
submission. The screens, the sequence and the framing are my design proposal for
the convergence session, not a team decision.

The screens use the Blue Rewards colour palette and its five-tab navigation so
the proposal reads in context, but they stay sketch level: no photography, no
marketing imagery and no reproduction of the Blue Rewards logo or wordmark. The
numbers in them are plausible rather than real.

## Running it

Static files, nothing to build. Open `index.html`, or serve the folder:

    python3 -m http.server 8000

## Files

- `index.html` &mdash; the screens and the captions
- `prototype.css` &mdash; page styling (screen internals are inline)
- `prototype.js` &mdash; journey navigation, keyboard arrows, deep links (`#s0` to `#s5`)
