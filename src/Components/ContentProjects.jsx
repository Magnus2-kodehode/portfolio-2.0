import { React, useState } from 'react';
import ImageModal from './ImageModal';

export default function ContentProjects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (imageSrc, imageAlt) => {
        setCurrentImage({ src: imageSrc, alt: imageAlt });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="containerMain">
            <div className="title">Prosjekter</div>
            <div className="text">
                Her er noen av prosjektene jeg har jobbet med, som viser bredden av mine ferdigheter innen webutvikling. 
                Fra å bygge en personlig portefølje til å skape kreative nettsider inspirert av spill og vitenskap, har jeg hatt gleden av å utforske både design og interaktiv funksjonalitet.
                <br/><br/>
                Du kan finne prosjektene mine på <a className="link" href="https://github.com/Magnus2-kodehode">GitHub</a>.
            </div>
            <div className="containerProject lineTop">
                <div className="containerProjectText">
                    <div className="projectText">
                        <div className="projectTitle">Portfolio</div>
                        Et personlig nettsted hvor jeg viser frem mine ferdigheter og prosjekter som webutvikler, med fokus på responsiv design og brukeropplevelse.
                    </div>
                    <div className="description">
                        <div>
                            <a className="link" href="">GitHub</a> | <a className="link" href="">GitHub pages</a>
                        </div>
                        Laget med HTML, CSS, JavaScript og React.
                    </div>
                </div>
                <img 
                    onClick={() => openModal('/image/Skjermbilde-Portfolio.png', 'Portfolio')} 
                    src="/image/Skjermbilde-Portfolio.png" 
                    className="projectImage" 
                    alt="Portfolio"
                />
            </div>
            <div className="containerProject lineTop">
                <div className="containerProjectText">
                    <div className="projectText">
                        <div className="projectTitle">Elden Café</div>
                        En nettside for en café inspirert av Elden Ring, hvor jeg kombinerte kreativt design og interaktiv funksjonalitet for å skape en unik opplevelse for fans av spillet.
                    </div>
                    <div className="description">
                        <div>
                            <a className="link" href="">GitHub</a> | <a className="link" href="">GitHub pages</a>
                        </div>
                        Laget med HTML, CSS, JavaScript og React.
                    </div>
                </div>
                <img 
                    onClick={() => openModal('/image/EldenRingSotE-2.jpg', 'Elden Café')} 
                    src="/image/EldenRingSotE-2.jpg" 
                    className="projectImage" 
                    alt="Elden Café"
                />
            </div>
            <div className="containerProject lineTop">
                <div className="containerProjectText">
                    <div className="projectText">
                        <div className="projectTitle">Planets</div>
                        En informativ nettside som viser detaljer om planetene i solsystemet, designet for å være både lærerik og visuelt engasjerende.
                    </div>
                    <div className="description">
                        <div>
                            <a className="link" href="">GitHub</a> | <a className="link" href="">GitHub pages</a>
                        </div>
                        Laget med HTML og CSS.
                    </div>
                </div>
                <img 
                    onClick={() => openModal('/image/universe.jpg', 'title')} 
                    src="/image/universe.jpg" 
                    className="projectImage" 
                    alt="title"
                />
            </div>
            <ImageModal 
                isOpen={isModalOpen} 
                onClose={closeModal}
                src={currentImage?.src} 
                alt={currentImage?.alt}
            />
        </div>
    );
};
