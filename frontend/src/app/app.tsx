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
import "dotenv";

import Exams from "../pages/Exams";
import Home from "../pages/Home";
import Forum from "../pages/Forum";
import "../index.css";

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
          element={<SignIn routing="path" path="/sign-in" />}

        />
        <Route path="/exams" element={<Exams />} />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/exams"
          element={
            <>
              <SignedIn>
                <Exams />
              </SignedIn>
              <SignedOut>
                <Home />
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
    <Router>
      <ClerkProviderWithRoutes />
    </Router>
  );
};

export default App;
