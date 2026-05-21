import type { Person } from "../types";
import DecorativeBackground from "./Decorativebackground";
import "./Hero.css";

interface HeroProps {
  person: Person;
}

export default function Hero({ person }: HeroProps) {
  return (
    <section className="hero" id="home">
      <DecorativeBackground variant="inverted" />

      <div className="hero-content">
        <div className="hero-avatar">
          {person.photo ? (
            <img src={person.photo} alt={person.name} />
          ) : (
            <>
              {person.name.charAt(0)}
              {person.name.split(" ")[1].charAt(0)}
            </>
          )}
        </div>

        <h1>{person.name}</h1>
        <p className="subtitle">{person.title}</p>
        {person.bio && <p className="bio">{person.bio}</p>}
      </div>
    </section>
  );
}
