import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./Layout"; // Ensure this path is correct
import HomePage from "./Pages/Home";
import PropertiesPage from "./Pages/Properties";
import AboutPage from "./Pages/About";
import ServicesPage from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import PropertyDetailsPage from "./Pages/PropertyDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/propertydetails" element={<PropertyDetailsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
