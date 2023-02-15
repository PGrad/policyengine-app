import "./style/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PolicyEngineCountry from "./PolicyEngineCountry";
import gtag from "./api/analytics";

export default function PolicyEngine() {
  // Look up the country ID from the user's browser language
  const browserLanguage = navigator.language;
  const countryId = browserLanguage === "en-US" ? "us" : "uk";
  gtag("js", new Date());
  gtag("config", "G-91M4529HE7");
  return (
    <Router>
      <Routes>
        <Route path="/uk/*" element={<PolicyEngineCountry countryId="uk" />} />
        <Route path="/us/*" element={<PolicyEngineCountry countryId="us" />} />
        <Route path="/ca/*" element={<PolicyEngineCountry countryId="ca" />} />
        <Route path="/ng/*" element={<PolicyEngineCountry countryId="ng" />} />
        <Route path="/*" element={<Navigate to={`/${countryId}`} />} />
      </Routes>
    </Router>
  );
}
