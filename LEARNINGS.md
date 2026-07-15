# Portfolio learnings

## Performance guardrails

- Treat below-the-fold imagery as part of the performance budget. Keep shipped event-poster derivatives in WebP, preserve originals only as source material, and target roughly 120 KB or less per poster whenever quality permits.
- Use `loading="lazy"` and `decoding="async"` for imagery outside the initial viewport. Do not preload event posters; that competes with the hero and makes first render slower.
- Supply fonts from `<link>` elements in the document head with `preconnect` hints. Do not use CSS `@import` for fonts because it creates an avoidable request waterfall.
- Verify both the byte budget and the rendered poster after asset changes. A smaller file that compromises legibility is not an optimization.

## Release checks

- Check desktop and mobile layouts in the browser before claiming a visual fix.
- Keep the live root URL as the eventual canonical portfolio destination; changing the current redirect strategy is a separate SEO and release decision.
