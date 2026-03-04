# Known Surprises

This file tracks repository-specific confusion points that caused agent mistakes.

## Entry Criteria

Add an entry only if all are true:

- It is specific to this repository (not generic advice).
- It is likely to recur for future agents.
- It has a concrete mitigation that can be followed.

If uncertain, ask the developer before adding an entry.

## Entry Template

```md
### [Short title]

- **Date:** YYYY-MM-DD
- **Observed by:** agent name or contributor
- **Context:** where/when it happened
- **What was surprising:** concrete unexpected behavior
- **Impact:** what went wrong or could go wrong
- **Mitigation:** exact step future agents should take
- **Status:** confirmed | superseded
```

## Entries

### Browser test screenshots are generated under `test/**/__screenshots__/`

- **Date:** 2026-03-04
- **Observed by:** Codex
- **Context:** reviewing unexpected untracked PNG files after browser test runs
- **What was surprising:** Vitest browser tests can generate screenshot artifacts under `test/browser-plebbit-js-mock/__screenshots__/`, but the repo did not ignore them.
- **Impact:** agents may mistake generated screenshots for intended source files or leave noisy untracked changes behind.
- **Mitigation:** treat `test/**/__screenshots__/` as generated output and keep it gitignored.
- **Status:** confirmed
