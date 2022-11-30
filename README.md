# Bulbulian.com webSite hosting

a modern web app for the family domain. built using vite, vue3, tailwilndCSS and a raft of plugins.

## Maintenance

- each `familyMember` has a folder inside `src/pages`
  - `index.md` is your homepage
  - `anything.md` is another page you can add
  - to make trees & nested pages, check `src/pages/chris/games` for an examples

## Editing

- talk to <PersonBubble name=marc /> or
- clone the project, make changes, submit pull requests...
  - pages **must** be named `*.md` (markDown) or `*.vue` (vue3)
    - example: `/youName/anything.md` or `/youName/someFolder/index.md` ... 
    - pages may be `plain text`, `markDown formatted` and/or `html formatted`
    - *proTip: to theme specific pages) put* `<style scoped>someCSS</style>` at the bottom of the page 
  - 3 `<CustomComponents>` are available
    - use `<Bulbulian/>` to render our last name in a fun way ( <Bulbulian /> |`bul•bul•ian` )
    - use `<PersonBubble name="name"/>` to make a <PersonBubble name=ben /> bubble
    - use `<YouTube id="someVideoID"/>` to embed a youTube video
    - consult <PersonBubble name="marc" /> if you have ideas for more than can help everyone

## Development

- (once) install git
- (once) install nodeJS
- clone the repo
- `npm run dev`
- make cool stuff
- `git push` <-- buildBot will publish to `ghPages`

## changeLog

- made global components
- enable markdownRendering & watch `*.md` files
- default markDown CSS
- installed `mdue` for icons
- update all dependencies (+ dropped not used ones)
- made a bunch of reusable components
- made folder/index.md for each person
  - plus some example deep level content for chris
- replaced template `README.md` with project details
  - simLinked it to a page in myDir b/c why not
- added `favicon(.ico|.svg|-192.png|-512.png)`
- added `webmanifest.manifest` to use all icons
- added favicon+manifest to index.html