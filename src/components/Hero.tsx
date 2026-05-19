import type { Person } from "../types";
import "./Hero.css";

interface HeroProps {
    person: Person;
}

export default function Hero({ person }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* Avatar with Initials */}
           <div className="hero-avatar">
    {person.photo ? (
        <img src={person.photo} alt={person.name} />
    ) : (
        <>
            {person.name.charAt(0)}{person.name.split(' ')[1].charAt(0)}
        </>
    )}
</div>
                
                <h1>{person.name}</h1>
                <p className="subtitle">{person.title}</p>
                {person.bio && <p className="bio">{person.bio}</p>}

                {/* Contact Info */}
                <div className="contact-info">
                    <div className="info-item">📍 {person.location}</div>
                    <div className="info-item">✉️ {person.email}</div>
                    <div className="info-item">📱 {person.phone}</div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                    <a href={person.links.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                    <a href={`mailto:${person.email}`} className="btn btn-primary">Email</a>
                </div>
            </div>
        </section>
    );
}