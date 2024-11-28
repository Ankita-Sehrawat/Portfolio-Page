
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import HireResume from "./Components/HireResume";
import MyWork from "./Components/MyWork";
import Connect from "./Components/Connect";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <HireResume />
      <MyWork/>
      <Connect/>
    </main>
  );
}
