# Moxie — Technical Information

> Technical reference for contributors working on the Moxie project.

## 1. About Moxie

**Moxie** is the technology club of **Muzaffarpur Institute of Technology (MIT), Muzaffarpur**.

This repository is being developed for the Moxie website.

The project is currently in the **planning and research stage**. Requirements and reference research are being completed before the main development work begins.

---

# 2. Current Technology Stack

The current planned technology stack for the website is:

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **Next.js**      | Web application framework          |
| **React**        | Frontend UI                        |
| **TypeScript**   | Type-safe application development  |
| **Tailwind CSS** | Styling                            |
| **shadcn/ui**    | Reusable UI components             |
| **NestJS**       | Backend framework                  |
| **MongoDB**      | Database                           |
| **Clerk**        | Authentication and user management |

These technologies represent the current project direction.

The exact implementation and architecture may evolve as the requirements are finalized.

---

# 3. Next.js

The frontend will use **Next.js**.

Next.js will be used for building the web application and handling the frontend application structure.

The project will use React through Next.js for creating reusable and interactive UI components.

Specific Next.js features and patterns will be decided as development begins.

---

# 4. React

**React** will be used to build the user interface.

The application should favor:

* Reusable components
* Clear component responsibilities
* Maintainable code
* Consistent UI patterns

The exact component structure has **not been finalized yet**.

Contributors should avoid creating large architectural abstractions before the project structure has been established.

---

# 5. TypeScript

The project will use **TypeScript**.

TypeScript should be preferred over JavaScript for application code.

The purpose is to provide:

* Type safety
* Better development tooling
* Safer refactoring
* Clearer data structures
* Better maintainability

---

# 6. Tailwind CSS

**Tailwind CSS** will be used for styling.

Contributors should prefer the project's established styling patterns once development begins.

Do not introduce another CSS framework without discussing it with the team.

---

# 7. shadcn/ui

**shadcn/ui** will be used for reusable UI components.

Where an appropriate shadcn/ui component exists, contributors should generally use and customize it rather than introducing another UI component library.

The final design system and component conventions will be established during the design/development phase.

---

# 8. NestJS

The backend will use **NestJS**.

NestJS will be responsible for backend functionality such as:

* API development
* Business logic
* Authentication integration
* Authorization
* Data validation
* Database interaction

The final backend module structure has **not yet been defined**.

Contributors should not assume a particular module or folder structure until the backend architecture is finalized.

---

# 9. MongoDB

**MongoDB** will be used as the project's database.

It is intended to store application data required by the Moxie website.

Potential data may include things such as:

* Users
* Members
* Events
* Projects
* Announcements
* Applications

However, the **final database models and collections have not yet been finalized**.

Do not create schemas or collections based only on assumptions. They should be based on finalized requirements.

---

# 10. Clerk

**Clerk** will be used for authentication and user management.

It is intended to provide functionality such as:

* User authentication
* Sign up
* Sign in
* Session management
* User identity

The exact authentication and authorization flow will be defined during the technical design phase.

Do not assume specific roles or permissions until they have been agreed upon.

---

# 11. Frontend and Backend

The project is intended to have both:

* A **Next.js/React frontend**
* A **NestJS backend**

The general intended relationship is:

```text
Frontend
Next.js + React
        ↓
Backend
NestJS
        ↓
Database
MongoDB
```

This represents the current technical direction.

The exact API design, communication layer, authentication flow and deployment architecture are **not finalized yet**.

---

# 12. Authentication Flow

Clerk will be used for authentication.

The final flow between:

* Next.js
* Clerk
* NestJS
* MongoDB

will be defined during technical architecture work.

Contributors should not independently create a new authentication system or replace Clerk without discussing it with the team.

---

# 13. GitHub & Collaboration

Moxie uses GitHub for source control and collaboration.

The repository follows a Pull Request based workflow.

### Do not push directly to `main`.

All changes should go through a Pull Request and receive at least one teammate approval before merging.

See:

`CONTRIBUTING.md`

for the complete contribution workflow.

---

# 14. Branch Naming

Branches should follow:

```text
<type>/<short-description>
```

Examples:

```text
feature/events-page
fix/mobile-navigation
docs/requirements
research/club-websites
chore/update-documentation
```

Allowed branch types currently include:

* `feature`
* `fix`
* `docs`
* `research`
* `chore`

---

# 15. Commit Messages

Commit messages should clearly describe what changed.

### Good

```text
Add requirements documentation
Add IIT Bombay research entry
Fix mobile navigation
Add event registration API
```

### Avoid

```text
update
changes
final
fix
stuff
new
```

Keep commits understandable to someone who was not involved in writing them.

---

# 16. Pull Requests

Every Pull Request should:

* Explain what was changed.
* Link the relevant GitHub issue.
* Follow `CONTRIBUTING.md`.
* Use a clear title.
* Tag at least one teammate for review.
* Address review feedback before merging.

Do not merge your own Pull Request without the required review.

---

# 17. Environment Variables & Secrets

Sensitive information must never be committed to GitHub.

Examples of sensitive information include:

* Database credentials
* Clerk secret keys
* API keys
* Access tokens
* Passwords
* Private credentials

Environment variables should be used for sensitive configuration.

Never paste real production credentials into source code or documentation.

---

# 18. Dependencies

Do not add dependencies without a reasonable need.

Before introducing a new package, consider:

1. Can the existing stack solve the problem?
2. Is the package actually necessary?
3. Is it maintained?
4. Does it introduce unnecessary complexity?
5. Does it fit the project's existing technology direction?

Discuss significant dependency or architecture changes with the team before implementing them.

---

# 19. Current Project Stage

The project is currently **not a finished application**.

The current work is focused on establishing what the Moxie website should actually contain before development begins.

The initial GitHub issues include:

### Issue #1 — Requirements

Define:

* What the website should accomplish
* Problems it should solve
* User types
* User stories
* Must-have features
* Nice-to-have features
* Required content
* Success criteria
* Open questions

The deliverable is the requirements documentation.

### Issue #2 — Research

Research existing technical club websites from colleges such as:

* IITs
* NITs
* BITS Pilani
* DTU
* NSUT
* Other notable universities

The research will be used to understand common patterns and useful ideas for the Moxie website.

---

# 20. What Has NOT Been Finalized

The following should **not be assumed yet**:

* Final folder structure
* Final frontend architecture
* Final backend architecture
* API design
* Database schemas
* MongoDB collections
* User roles
* Permission model
* Page structure
* UI design
* Design system
* Deployment architecture
* Hosting provider
* CI/CD setup
* Exact third-party services beyond the currently selected stack

These decisions should be documented once they are actually agreed upon.

---

# 21. Important Rule for Contributors

**Do not invent requirements or architecture.**

If something is unclear:

1. Check the relevant GitHub issue.
2. Check the existing documentation.
3. Ask the team in the relevant GitHub issue.
4. Discuss significant technical decisions before implementing them.

It is better to ask a question than to build something based on an assumption.

---

# 22. Current Technical Direction

At the current stage, the project is planned around:

**Frontend**

Next.js + React + TypeScript + Tailwind CSS + shadcn/ui

**Backend**

NestJS

**Database**

MongoDB

**Authentication**

Clerk

The implementation details will be established after the requirements, research and technical planning stages are completed.

---

**Moxie — MIT Muzaffarpur**

*Build together. Learn together. Ship together.*
