import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CoursesGrid from "./components/CoursesGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-mesh grain relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <CoursesGrid />
        <div className="hairline mx-auto max-w-6xl px-8" />
        <About />
        <div className="hairline mx-auto max-w-6xl px-8" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
