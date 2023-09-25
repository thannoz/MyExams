import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "dotenv";

import Home from "../pages/Home";
import Forum from "../pages/Forum";
import Dashboard from "../pages/Dashboard";
import "../index.css";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import ComposeContext from "../context/Compose.context";
import { rootContext } from "../context/root.context";

const queryClient = new QueryClient();
const pubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!pubKey) {
  throw new Error("Missing Publishable Key");
}

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={pubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in/*"
          element={
            <SignIn
              afterSignInUrl="/dashboard"
              routing="path"
              path="/sign-in"
            />
          }
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
                <Dashboard />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/forum"
          element={
            <>
              <SignedIn>
                <Forum />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/message"
          element={
            <>
              <SignedIn>
                <Messages />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>
          }
        />{" "}
        <Route
          path="/notification"
          element={
            <>
              <SignedIn>
                <Notifications />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <Router>
          <ClerkProviderWithRoutes />
        </Router>
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
