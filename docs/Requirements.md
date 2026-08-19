# Moxie Website — Requirements

## 1. Overview
- Moxie is the technical club of MIT Muzaffarpur, which organizes technical workshops, hackathons, exhibitions and Techfest(Techmiti)

- The core purpose of this website is to give Moxie one central platform to run events end-to-end (from announcement to certificate issuance), maintain a permanent record of participants and achievements, and present a professional public face to students, sponsors, and faculty.

## 2. Problems This Website Solves

- There is no single portfolio where Moxie can show its achievements, activities, and workshops to visitors, sponsors, or prospective members.

- Workshops are managed in an unorganized, manual way — registration via Google Forms, data in Google Sheets, attendance on hardcopy paper sheets.

- Participant data is lost after every event, so the club can't demonstrate its real reach and history when approaching sponsors.

- There's no single system covering an event's complete lifecycle — announcement, registration, attendee management, workshop materials, results, and certificates are all handled separately (or not at all).

- Certificates are created manually with no way for anyone to verify they're genuine.

- The club has no way to identify repeat/engaged participants (This will be helpful at time of recruitment).

- Students don't have one obvious place to learn how to join the club or when events are happening — information is scattered across WhatsApp, Instagram, and word of mouth

## 3. User Types (Personas)

| User Type | Who They Are | Goal | Frequency | Device |
|---|---|---|---|---|
| Prospective Member | MIT Muzaffarpur student not yet in Moxie | Learn about the club, see upcoming events, register/apply to join | Occasional — mainly around event announcements or recruitment drives | Mostly mobile |
| Event Participant | Student registering for a specific event/workshop, may or may not be a club member | Register for an event, receive confirmation/QR ticket, later download a certificate | Per-event — a handful of times a semester | Mostly mobile |
| Club Admin / Core Team | Moxie leadership and organizers | Create and manage events, track registrations, check in attendees, issue certificates, view participant history | Frequent, especially around event season | Mostly desktop, occasionally mobile |
| Visitor / Outsider (sponsors, judges, other colleges, faculty) | External viewer with no account | See what Moxie does, browse past achievements/events, find contact info, verify a certificate | Rare — a few visits, but high-stakes ones (e.g. sponsor deciding whether to fund the club) | Mix of mobile and desktop |

## 4. User Stories
### Prospective Member
- As a prospective member, I want to see upcoming events and how to join, so that I can decide whether to become part of Moxie.
- As a prospective member, I want to browse the club's past achievements and projects, so that I know what kind of club I'd be joining.
- As a prospective member, I want to see who's currently on the team, so that I know who runs the club and who to reach out to.
- As a prospective member, I want the site to work well on my phone, so that I can check it between classes without needing a laptop.

### Event Participant
- As an event participant, I want to register for an event online with basic details, so that I don't have to fill a paper form or message someone individually.
- As an event participant, I want to get a confirmation with a QR code after registering, so that I have proof of registration and a fast way to check in at the venue.
- As an event participant, I want to know if I've already registered for an event, so that I don't accidentally sign up twice or wonder if my registration went through.
- As an event participant, I want to download my certificate after the event, so that I can add it to my resume or LinkedIn.
- As an event participant, I want anyone (like a recruiter) to be able to verify my certificate is real, so that it actually counts as credible proof of my participation.

### Club Admin / Core Team
- As a club admin, I want to create and publish a new event with all the details, so that students can see and register for it.
- As a club admin, I want to see the full list of people registered for an event, so that I know who to expect and can plan logistics.
- As a club admin, I want to check in attendees by scanning a QR code at the venue, so that I don't have to manage attendance on paper.
- As a club admin, I want to generate certificates in bulk for everyone who attended, so that I don't have to make each one manually in Canva or Word.
- As a club admin, I want to see a searchable list of every participant across all past events, so that I can identify repeat attendees and use this data when talking to sponsors.

### Visitor / Outsider
- As a visitor/sponsor, I want to see past projects and achievements, so that I can evaluate whether to collaborate with or sponsor the club.
- As a visitor/sponsor, I want to see real numbers (events hosted, participants reached), so that I can judge the club's scale and credibility before committing funding.
- As a visitor/outsider, I want to verify whether a certificate someone has shown me is genuine, so that I can trust it as a credential.
- As a visitor, I want an easy way to contact the club, so that I can ask questions or propose a collaboration.

## 5. Must-Have Features (Non-Technical Description)

- A homepage that introduces the club and highlights upcoming events and key stats.
- A page listing all upcoming and past events with dates, descriptions, and status (open for registration, completed, etc.).
- An online registration form for events, with a way to prevent the same person registering twice for the same event.
- A confirmation screen and email with a QR code after someone registers, which they can use to check in at the event.
- A way for club admins to check in attendees quickly at the venue using the QR code (with a manual backup option if scanning fails).
- A way for club admins to generate certificates for everyone who attended an event, without doing it one by one manually.
- A public page where anyone can enter a certificate ID and confirm whether it's genuine.
- A page showcasing the club's achievements, past projects, and awards.
- A page showing the current team/leadership with names and roles.
- A sponsors page showing the club's impact (numbers, past events) to help attract funding.
- A central, searchable record of everyone who has ever registered for a Moxie event, accessible only to admins.
- A simple login system so only club admins can manage events, registrations, and certificates.
- A contact page or section so people can reach the club directly.
- The site must work well on mobile phones, since that's how most students will access it.

## 6. Nice-to-Have Features

- Member accounts for students, so they don't have to re-enter their details every time they register for a new event.
- An alumni directory to stay connected with graduated members.
- A sponsor-facing dashboard showing live engagement metrics.
- A resources page per event with slides, recordings, and code shared after workshops.
- A blog or announcements feed for club news.
- Task assigning and tracking for members in club.
- Budget/expense tracking for events, visible only to admins.
- A live-updating stats counter on the homepage (events hosted, participants, alumni) that pulls automatically from the database rather than being manually updated.

## 7. Content We Already Have / Need to Create
**Already have (can be handed to the dev/design team):**
- Club name, and general description of what Moxie does.
- Event photos/galleries from past workshops and events.
- Club logo and any brand assets (colors, fonts).

**Still needs to be written or collected:**
- Official About page text (club mission, history, how it started).
- Team/leadership bios and photos.
- A clean, written record of past events and achievements — currently scattered across Google Sheets, WhatsApp, and Google Forms and needs to be consolidated into a proper list with dates, descriptions, and photos.
- Certificate template design.
- Sponsor-facing content — a short pitch/media kit describing why sponsors should support Moxie.
- Contact details (email, social handles) to be displayed on the site.

## 8. Success Criteria
- Noticeably higher event attendance and registration completion rate, since the process is easier than before.
- Sponsors and judges can find the club's past work and impact numbers without needing it explained to them in person.
- Zero participant data lost after an event — every registrant is retained in the central participants database.
- Certificates issued through the site are verifiable and trusted (e.g., no reports of doubted/fake certificates).
- Admins spend noticeably less time on manual, repetitive event-management tasks (attendance, certificate creation) than they did with the old process.
- The site remains up to date and functional at least one full academic year after the founding team graduates.

## 9. Open Questions / Things Still Undecided
- What's the actual budget, if any, for things like a custom domain, paid tools, or scaling past free tier if the club grows?