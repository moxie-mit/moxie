# Contributing to Moxie

Moxie has a lot of members working together, so we follow a few simple rules to keep things organized and avoid stepping on each other's work. This applies to everyone — no direct exceptions.

## 1. Never push directly to `main`

`main` is protected. All changes go through a **Pull Request (PR)**, and every PR needs at least **1 approval** from someone else before it can be merged. This applies even to core team/admins.

## 2. Sub-teams and issues

- Work is organized around GitHub Issues (e.g. #1 Requirements, #2 Research).
- Each issue is owned by a sub-team. If you're not sure which sub-team you're on or which issue you're contributing to, ask before starting work.
- Comment on the issue when you start working on it, so others know it's being handled.

## 3. Branch naming

Create a new branch off `main` for your work:

```
<type>/<short-description>
```

Examples:
- `docs/requirements-doc`
- `research/iit-club-survey`
- `fix/broken-link`

Types: `docs`, `research`, `feature`, `fix`, `chore`.

## 4. Commit messages

Keep commit messages short and clear, describing *what* changed:

```
Add user stories section to requirements doc
Add IIT Bombay research entry
```

Avoid vague messages like `update`, `fix stuff`, `wip`.

## 5. Opening a Pull Request

1. Push your branch and open a PR into `main`.
2. Fill out the PR template (auto-shown when you open a PR).
3. Link the issue your PR relates to (e.g. `Closes #1` or `Relates to #2`).
4. Tag at least one teammate for review.
5. Once approved, the PR can be merged. Please don't merge your own PR without a review.

## 6. Reviewing others' work

If you're asked to review a PR:
- Check it actually addresses the linked issue.
- Leave comments for anything unclear or incomplete — be specific and kind.
- Approve once you're satisfied, or request changes with clear next steps.

## 7. Questions or blockers

If you're stuck or unsure about a requirement/task, ask in the issue comments rather than guessing — it keeps context visible for the whole team.

See also: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
