import type { Portfolio } from "../types";
import "./Contact.css";

interface ContactProps {
  portfolioData: Portfolio;
}

export default function ContactSection({ portfolioData }: ContactProps) {
  const { contact } = portfolioData;

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: contact.links.email,
      href: `mailto:${contact.links.email}`,
      external: false,
    },
    {
      icon: "📱",
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      external: false,
    },

    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      href: contact.links.linkedin,
      external: true,
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "View my projects",
      href: contact.links.github,
      external: true,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Let's connect! Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-card">
                <div className="contact-icon">{item.icon}</div>
                <h3>{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="contact-link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-text">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <p className="cta-text">Open to opportunities in Sweden & EU</p>
            <a href={`mailto:${contact.links.email}`} className="cta-button">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="contact-decoration decoration-1"></div>
      <div className="contact-decoration decoration-2"></div>
    </section>
  );
}
