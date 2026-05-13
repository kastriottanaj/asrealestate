import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import "./App.css";

const childRoutes = [
  {
    index: true,
    Component: HomePage,
  },
  {
    path: "prona",
    lazy: async () => {
      const { default: PropertiesPage } = await import("./pages/PropertiesPage");
      return { Component: PropertiesPage };
    },
  },
  {
    path: "prona/:slug",
    lazy: async () => {
      const { default: PropertyDetailPage } = await import("./pages/PropertyDetailPage");
      return { Component: PropertyDetailPage };
    },
  },
  {
    path: "sherbimet",
    lazy: async () => {
      const { default: ServicesPage } = await import("./pages/ServicesPage");
      return { Component: ServicesPage };
    },
  },
  {
    path: "rreth-nesh",
    lazy: async () => {
      const { default: AboutPage } = await import("./pages/AboutPage");
      return { Component: AboutPage };
    },
  },
  {
    path: "kontakti",
    lazy: async () => {
      const { default: ContactPage } = await import("./pages/ContactPage");
      return { Component: ContactPage };
    },
  },
  {
    path: "ofroni-pronen",
    lazy: async () => {
      const { default: OfferPropertyPage } = await import("./pages/OfferPropertyPage");
      return { Component: OfferPropertyPage };
    },
  },
  {
    path: "privatesia",
    lazy: async () => {
      const { default: PrivacyPolicyPage } = await import("./pages/PrivacyPolicyPage");
      return { Component: PrivacyPolicyPage };
    },
  },
];

const routes = [
  {
    path: "/",
    Component: Layout,
    entry: "src/Layout.jsx",
    children: childRoutes,
  },
  {
    path: "/en",
    Component: Layout,
    entry: "src/Layout.jsx",
    children: childRoutes,
  },
  {
    path: "/de",
    Component: Layout,
    entry: "src/Layout.jsx",
    children: childRoutes,
  },
];

export default routes;
