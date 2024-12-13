# Next.js 15 Nested Layout Parameter Propagation Bug

This repository demonstrates a subtle bug in Next.js 15's `app` directory when using dynamic routes and nested layouts.  If a nested layout attempts to access a route parameter not defined in its parent, a runtime error can occur silently.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/product/123`.  This should work fine.
5. Navigate to `/product/123/details`. This will likely show unexpected behavior or a blank page, due to the missing parameter propagation from the parent route.

## Solution

The solution involves ensuring all necessary parameters are passed down through the layout tree using the `params` object provided by the `Layout` component.