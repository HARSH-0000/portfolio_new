import { useState } from "react"
import { About } from "./components/About"
import { AskMe } from "./components/AskMe"
import { BackgroundFX } from "./components/BackgroundFX"
import { Contact } from "./components/Contact"
import { Credentials } from "./components/Credentials"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { IntroGate } from "./components/IntroGate"
import { Marquee } from "./components/Marquee"
import { Navbar } from "./components/Navbar"
import { Playground } from "./components/Playground"
import { Preloader } from "./components/Preloader"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  const [stage, setStage] = useState<"intro" | "loading" | "main">("intro")
  const [gateMounted, setGateMounted] = useState(true)

  const handleEnter = () => {
    // mount the preloader instantly, underneath the fading gate
    setStage("loading")
    setTimeout(() => setGateMounted(false), 500)
  }

  return (
    <>
      {stage === "loading" && <Preloader onDone={() => setStage("main")} />}
      {gateMounted && <IntroGate onEnter={handleEnter} />}
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Marquee />
        <Playground />
        <AskMe />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
