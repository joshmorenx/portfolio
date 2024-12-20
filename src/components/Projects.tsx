import { Box } from "@mui/material";
import { useState, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import asset from '../assets/376301017-7b50f845-33ee-41c8-85d2-c9d33e5403f9.png'

interface ProjectProps {
    isDesktop: boolean;
    isTablet: boolean;
}

export default function Project({ isDesktop, isTablet }: ProjectProps): JSX.Element {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const images = [
        { source: asset, title: "nodeNetwork", description: "an open-source social media platform, developed using the MERN stack.", repository: "https://github.com/joshmorenx/nodeNetwork" },
        // { source: "https://flowbite.com/docs/images/carousel/carousel-2.svg", title: "title 2", description: "description 2", repository: "https://github.com/flowbite/flowbite" },
        // { source: "https://flowbite.com/docs/images/carousel/carousel-3.svg", title: "title 3", description: "description 3", repository: "https://github.com/flowbite/flowbite" },
        // { source: "https://flowbite.com/docs/images/carousel/carousel-4.svg", title: "title 4", description: "description 4", repository: "https://github.com/flowbite/flowbite" },
        // { source: "https://flowbite.com/docs/images/carousel/carousel-5.svg", title: "title 5", description: "description 5", repository: "https://github.com/flowbite/flowbite" },
    ];

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50; // minimum distance for a swipe
        const difference = touchStartX.current - touchEndX.current;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swipe left
                nextSlide();
            } else {
                // Swipe right
                prevSlide();
            }
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <Box className="projects bg-gray-900 py-12" id="projects">
            <Box sx={{
                color: 'white',
                fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw',
                width: '100%',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1>Projects I've Worked On</h1>
            </Box>

            <Box className="relative max-w-4xl mx-auto px-4">
                <Box
                    sx={{ boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.5)' }}
                    className="relative overflow-hidden rounded-lg"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <Box
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <Box
                                key={index}
                                className="min-w-full"
                            >
                                <img
                                    src={img.source}
                                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-[400px] object-cover"
                                    onClick={() => window.open(img.repository, '_blank')}
                                />
                                <Box className="pt-4 pr-4 pl-4 font-bold text-3xl text-white bg-gray-800">
                                    {img.title}
                                </Box>
                                <Box className="pt-4 pr-4 pl-4 pb-10 text-white bg-gray-800">
                                    {img.description}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <Box className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}