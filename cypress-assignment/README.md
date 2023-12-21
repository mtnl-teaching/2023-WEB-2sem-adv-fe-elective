# OLA 5 - Last assignment - Cypres

For your last assignment, you're to write an end-2-end test using cypress.

I've created a version of the Wash World assignment you can use for the assignment.
You can find it deployed here:
https://wash-world-nextjs.vercel.app/

You can also write the test for you own Wash world implementation.

The test should go through the full flow from location selection to starting a wash.

The test(s) should cover and assert these areas:

1. For each page transition, validate the correct title is present.
2. For each of the selectable pages, validate the amount of buttons.
3. Validate the location under maintenance cannot be selected.
4. For the countdown, intercept the POST-call and mock it with a shorter timer.

# Getting started & resources

To add cypress to your existing NextJS Project, there's a quickstart guide here:
https://nextjs.org/docs/testing#manual-setup

If you use this project, the setup has already been done, and you can get started with:

1. npm install
2. npx cypress open

## Writing your first test

Here's a guide from Cypress about how you write your first test:
https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

And in this project, in the folder: "/cypress/e2e/examples/", there's a bunch of examples to get inspired by.
