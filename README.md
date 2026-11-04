# mariano-fu.github.io
My developer portfolio with a terminal-inspired theme. HTML, CSS, vanilla JS. 

Live site: https://mariano-fu.github.io

Video (top 2 challenges): https://youtu.be/vg6-VKm_jno

Sections
Hero: a Bash-style prompt (luis@portfolio:~$ whoami) with a blinking cursor
About: profile, plus a code panel that types itself out
Skills: web, programming, and tools/homelab
Projects: InterpAscend, Arcana, and my homelab
Contact: a form with labeled, required fields (no backend), plus email and GitHub links
Built with
Semantic HTML: header, nav, main, section, article, footer
CSS: Flexbox, Grid, a media query, and a keyframe animation
A small amount of vanilla JavaScript for the typing effect (textContent and setTimeout)
Google Fonts: Inter and JetBrains Mono
Responsive design

Built mobile-first. The base styles are the phone layout, with everything in one column. A @media (min-width: 768px) query switches the sections to 2- and 3-column grids on larger screens. Tested at 360px and 1280px.