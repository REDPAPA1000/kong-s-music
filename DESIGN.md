# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-01
- Primary product surfaces: Home introduction, grade and domain resource library, resource detail viewer
- Evidence reviewed: `C:/Users/KOREAN/Desktop/speeches 악보.pdf`, Chrome app shortcut `[음악(이동희)] 1-4-1_스마트PPT.lnk`; no existing site, brand assets, portrait, or UI components were present in the repository.

## Brand
- Personality: Contemporary music studio, confident, energetic, teacher-led, and easy to use in front of a class.
- Trust signals: Clear grade and domain labels, visible file type, lesson duration, material status, and predictable controls.
- Avoid: Childish rainbow styling, textbook-beige monotony, orange/coral accents, Korean display serif or Gungseo-like headings, dense admin dashboards, and tiny embedded PDFs.

## Product goals
- Goals: Let a teacher reach a lesson resource in a few clicks; launch publisher Smart PPT directly; present score, lesson flow, and teacher notes as one teaching unit; work on classroom screens and phones.
- Non-goals: Student accounts, grading, attendance, a public upload system, or recreating publisher-owned QR content.
- Success signals: A resource is reachable in three interactions or fewer; the score can be enlarged without leaving the lesson; empty grades remain understandable.

## Personas and jobs
- Primary personas: The music teacher preparing or leading a class; students viewing a projected screen.
- User jobs: Find material by grade and domain, enlarge a score, launch related media, follow the lesson sequence, and download the original PDF.
- Key contexts of use: Laptop connected to a classroom display, desktop preparation, and quick mobile lookup.

## Information architecture
- Primary navigation: Home, 초1·2, 초3, 초4, 초5, 초6, 중1, 중2, 중3, 고1, 이론. Grade navigation stays visually centered between the brand and account/theme controls.
- Core routes/screens: Single-page home; grade library filtered by 가창, 기악, 감상, 창작; theory overview; resource-detail overlay; lightweight teacher login dialog.
- Content hierarchy: Grade -> semester label -> domain -> resource card -> primary Smart score launch -> secondary three-way launcher for Smart lesson plan, textbook eBook, and in-site score lesson plan.

## Design principles
- Teaching unit, not file storage: Keep all materials needed for one lesson together.
- Projector first: Large controls, strong contrast, bold sans-serif Korean headings, minimal page chrome, and no tiny PDF thumbnail as the only reading surface.
- Calm orientation: The current grade and domain must always be obvious.
- Tradeoffs: The first version uses repository files and a simple content object instead of a CMS so it remains reliable and easy to host.

## Visual language
- Color: Deep midnight `#111328`, electric indigo `#5755e7`, vivid blue `#376cf6`, acid lime `#c9f36a`, aqua `#75ddd0`, and cool off-white `#f4f5fa`. Orange is not used. Domain colors are fixed across every grade: 가창 indigo, 기악 lime, 감상 aqua, 창작 lavender. Semester colors are independent status colors: 1학기 blue and 2학기 magenta; the resource-card top border always matches its semester label.
- Typography: Keep the current compact sans-serif navigation, tabs, English eyebrows, and readable body copy. All large Korean page/section/dialog headings use a heavy modern sans-serif stack; only English song titles and numeric accents may retain a restrained serif.
- Spacing/layout rhythm: 8px base; generous 24-48px section gaps; asymmetric editorial compositions; max content width 1440px.
- Shape/radius/elevation: 14-24px cards with cut-corner or geometric accents; cool-gray borders; crisp colored shadows and layered shapes rather than soft beige blobs.
- Motion: Short opacity/translate transitions; no looping decoration.
- Imagery/iconography: One authentic teacher portrait framed like an album cover; waveform, grid, disc, and equalizer motifs; domain color cues remain distinct.

## Components
- Existing components to reuse: None.
- New/changed components: Three-zone sticky header, centered grade/theory nav, login control, dark-mode toggle, domain tabs, search field, resource card with large separate semester/domain badges, 1+3 material launcher, lesson viewer, PDF pane, media pane, lesson-step list, empty state.
- Variants and states: Active/inactive navigation and tabs; available/coming-soon/URL-required resources; modal open/closed.
- Token/component ownership: CSS custom properties in `styles.css`; lesson content in `app.js`.

## Accessibility
- Target standard: WCAG 2.2 AA where practical.
- Keyboard/focus behavior: All controls are semantic buttons/links; visible focus ring; Escape closes the viewer; focus returns to the opener.
- Contrast/readability: Body text maintains strong contrast; text is never communicated by color alone.
- Screen-reader semantics: Landmark elements, labeled dialogs, live result count, and descriptive alternative text.
- Reduced motion and sensory considerations: Disable transitions when reduced motion is requested.

## Responsive behavior
- Supported breakpoints/devices: 360px phones through classroom displays.
- Layout adaptations: Header navigation collapses behind the menu control on smaller screens; the 1+3 resource launcher remains legible as one full-width and three compact controls; resource detail changes from two columns to a stacked layout; the PDF remains at least 65vh tall.
- Touch/hover differences: Controls have a minimum 44px target; hover enhancement is not required to understand state.

## Interaction states
- Loading: Native PDF/browser loading inside a stable framed area.
- Empty: Explain that materials will be added and offer another domain shortcut.
- Error: If a PDF cannot render, retain a direct download/open link.
- Success: Selected grade/domain reflected in heading, nav state, and URL hash.
- Disabled: QR-linked content without a confirmed URL displays `연결 주소 등록 필요` and cannot launch.
- Offline/slow network: Local PDFs remain available after the site files are loaded; external videos may not.

## Content voice
- Tone: Warm, concise, and instructional.
- Terminology: Use `초1·2` for the combined class and the four fixed domains `가창`, `기악`, `감상`, `창작`.
- Microcopy rules: Lead with an action or teaching purpose; distinguish `준비 중` from a technical error.

## Implementation constraints
- Framework/styling system: Dependency-free static HTML, CSS, and JavaScript for the prototype.
- Design-token constraints: Reuse the CSS custom properties; do not introduce per-card arbitrary colors.
- Performance constraints: Defer PDF loading until the lesson viewer opens; use compressed web images when the portrait is supplied.
- Compatibility constraints: Current Chrome, Edge, Safari, and mobile browsers; browser-native PDF rendering may vary.
- Test/screenshot expectations: Verify desktop at 1440x900 and mobile at 390x844; test keyboard close, grade/domain filtering, search, PDF open, and download fallback.

## Open questions
- [ ] Confirm the teacher's preferred site title, name display, and introduction copy.
- [ ] Supply the portrait and confirm whether it may be shown on a public site.
- [ ] Provide or approve the destination URL behind each remaining publisher QR code; do not infer or republish protected media.
- [x] Speechless launches the official Vivasam Smart score URL supplied by the user; its Smart lesson plan opens iBook 5942 page 8 and textbook eBook opens iBook 4774 page 31.
- [ ] Confirm whether non-publisher lesson videos will be YouTube links or uploaded MP4 files.
- [ ] Decide whether materials need a private teacher-only login before public deployment.
