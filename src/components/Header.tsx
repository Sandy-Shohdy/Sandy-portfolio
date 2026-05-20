import './Header.css'

export default function Header() {
    

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        /* Dynamically add 'dark-theme' class based on local state */
        <header className={`header`}>
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <button 
                        className="logo-button"
                        onClick={() => scrollToSection('home')}
                    >
                        SS
                    </button>
                </div>

                {/* Navigation Links (Now aligned right via updated CSS) */}
                <nav className="nav">
                    <a 
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('home')
                        }}
                        className="nav-link"
                    >
                        Home
                    </a>
                    <a 
    href="#projects"
    onClick={(e) => {
        e.preventDefault()
        scrollToSection('projects')
    }}
    className="nav-link"
>
    Projects
</a>
                    <a 
                        href="#skills"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('skills')
                        }}
                        className="nav-link"
                    >
                        Skills
                    </a>
                    <a 
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('contact')
                        }}
                        className="nav-link"
                    >
                        Contact
                    </a>
                </nav>

                
            </div>
        </header>
    )
}