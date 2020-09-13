import React from "react";
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://1b4ab56fe949470e9e3f979c68b43df9@o447331.ingest.sentry.io/5427070",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

function App() {
  const user = {
    id: 1,
    username: "홍녕기",
  };
  return (
    <>
      <ErrorBoundary>
        <User />
      </ErrorBoundary>
    </>
  );
}

export default App;
