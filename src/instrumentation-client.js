// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b26f91286b778f8f0b8224fd4851c15a@o4510512322707457.ingest.us.sentry.io/4510812467429376",
  

  // Add optional integrations for additional features
  integrations: [Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      triggerLabel:"Give FeedBack",
      formTitle:"Report FeedBack/Bug",
      submitButtonLabel:"Submit",
      successMessageText:"Thank you for your Feedback!",
      emailPlaceholder:"youremail@example.com",
      showBranding:false,
      colorScheme: "system",
      themeDark: {
        background: "#222222",
      },
    }),],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
