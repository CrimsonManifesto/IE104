// src/pages/index.js
import Home from './Home';
import About from './Organization/About';
import FeaturedProjects from './Organization/FeaturedProjects';
import Achievements from './Organization/Achievements';
import Stats from './Stats/Stats';
import Donate from './Donate/Donate';
import OnlineDonate from './Donate/OnlineDonate';
import OfflineDonate from './Donate/OfflineDonate';
import OtherDonate from './Donate/OtherDonate';
import FAQ from './Contact/FAQ';
import Support from './Contact/Support';
import Login from './Login';

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/featured-projects", element: <FeaturedProjects /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/stats", element: <Stats /> },
  { path: "/donate", element: <Donate /> },
  { path: "/donate/online", element: <OnlineDonate /> },
  { path: "/donate/offline", element: <OfflineDonate /> },
  { path: "/donate/other", element: <OtherDonate /> },  
  { path: "/faq", element: <FAQ /> },
  { path: "/support", element: <Support /> },
  { path: "/login", element: <Login /> },
];
