# FE Technical Challenge

## Overview

This project is a movie/series search application built using Next.js and the OMDB API. It allows users to search for titles, view details, and manage a watchlist. The goal was to deliver a user-friendly solution with a focus on code quality and future scalability in a time and resource bound environment.

# What I Did

## NextJS

I chose `Next.js` for its flexible rendering options, built-in support for features like API routes and i18n, easy Tailwind CSS integration, and performance optimizations like automatic code splitting, making it ideal for building scalable React apps (even though I didn't use most of those features in this project). I also chose to complete this assessment with only client side rendering for simplicity, but I would consider implmenting SSR for future upgrades.

## Cypress

`Cypress` is a must-include for all new projects because it's an incredibly developer-friendly testing framework. I used it during development for its real-time reloading and ability to render multiple branching use cases at once. With Cypress, I tested key user flows like searching for a movie, adding/removing items from the watchlist, and ensuring that filters applied correctly. These tests helped me catch issues early and ensure that the critical features function as intended.

## Strongly Typed

I strongly typed most of the application since it improves code reliability by catching errors during development, enhances the developer experience through better autocomplete and suggestions, and most importantly makes the codebase easier to maintain and refactor by providing clear data structures and expectations.

# What I Couldn't Do

## Bounded Year Search

The search UI includes a range selector for year, but the OMDB API only supports exact year searches, not ranges.

# What I Would Do Next

Given the intended scope of this project, I focused on implementing core functionality but identified several features for future enhancement.

## Pagination

Pagination would be the next feature I would implement. Although it was not present in the brief or UI, search results without pagination feels incomplete. Currently the search result bar and the number of search results displayed is out of sync, and I would implement a pagination widget to ensure all results are being displayed but retaining the efficiency of the current design.

## Internationalisation

Implementing i18n would be a top priority for me. I believe it should be integrated early on, as it enables localized content that creates a more inclusive and user-friendly experience. By offering content in a user’s preferred language, it helps them better understand the interface and feel more comfortable using the app.

Additionally, tools like `react-i18next` and `Next.js` simplify this process, providing built-in support for language routing, automatic detection, and fallback options, which makes implementing i18n straightforward and seamless.

## Debounce the API calls

Debouncing API calls reduces unnecessary requests, preventing server overload and avoiding hitting API rate limits.

It also improves user experience by updating results only after a brief pause, creating a smoother interaction. Additionally, it conserves bandwidth, making the app more efficient and responsive.

I would implement this in the `onChange` callback of `components/search_query.tsx`

## e2e testing

While I included shallow suite of component tests, I would emphasize the importance of end-to-end (e2e) testing to ensure the entire user flow works as expected without regressions. e2e tests allow me to simulate user interactions and verify that critical features, such as searching for a movie, filtering results, and managing the watchlist, function seamlessly from start to finish. This approach helps catch any integration issues between components, providing greater confidence in the app’s overall stability and user experience.

## Other missing features

* Accessibility (A11y) - Images do have `alt` tags, but this isn't sufficient for a modern application. I'd add ARIA labels, keyboard navigation and possibly test with screen readers.
* Error Handling - There is no error handling, a network failure or similar would currently provide a bad UX.
* Loading, Zero and Null States - Provide more visual feedback about the application's activity
* Responsive design
* Performance optimisation - implementing `SWR` or `react-query` or even using some kind of state management.
* Dark Mode



