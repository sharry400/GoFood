import { useEffect, useState } from 'react'

const slides = [
    { image: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1200&q=80', alt: 'Burger' },
    { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80', alt: 'Pizza' },
    { image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80', alt: 'Food platter' }
]

const Carousal = ({ searchTerm, onSearchChange }) => {
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-caption" style={{ zIndex: '10' }}>
                    <form className="d-flex" role="search" onSubmit={(event) => event.preventDefault()}>
                        <input className="form-control me-2" type="search" value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === activeSlide ? 'active' : ''}`} key={slide.image}>
                        <img src={slide.image} className="d-block w-100 carousel-image" alt={slide.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousal
