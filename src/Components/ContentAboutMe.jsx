import ContactInfo from './ContactInfo.jsx';
import ButtonCV from './ButtonCV.jsx';

export default function ContentAboutMe() {
    return (
        <div className="containerMain">
            <div className="title">About me</div>
            <div className="text">
                Jeg heter Magnus og er en webutvikler med ferdigheter i HTML, CSS, JavaScript, React og Figma.
                Etter å ha fullført et intensivt kurs i webutvikling har jeg utviklet en solid forståelse for hvordan man bygger brukervennlige og responsive nettsider.
                Jeg er nå klar til å ta steget videre og anvende mine ferdigheter i et profesjonelt miljø, hvor jeg kan bidra til spennende prosjekter og lære mer fra erfarne utviklere.               
            </div>
            <div className="text">
                I løpet av opplæringen har jeg jobbet på flere prosjekter som har gitt meg både teknisk kunnskap og praktisk erfaring.
                Jeg har utviklet alt fra enkle statiske nettsider til mer interaktive applikasjoner med React, og har jobbet med design og prototyper i Figma.
                Jeg har også erfaring med versjonskontroll (Git) og samarbeid i team, der jeg har fått muligheten til å bidra til koding, testing og feilsøking.
            </div>
            <div className="text">
                På fritiden er jeg engasjert i dataspill, som har lært meg verdifulle ferdigheter som tålmodighet og samarbeid.
                For eksempel, .
                Jeg kan også å bygge datamaskiner.
                Jeg tror at disse erfaringene hjelper meg med å tilnærme meg utfordringer på en systematisk måte, og gir meg en fleksibel og åpen tilnærming til problemene jeg møter i utviklingsprosessen.
            </div>
            <div className="text">
                Jeg er motivert for å komme i gang med en praksisplass i webutvikling, og ser frem til muligheten til å bidra med mine ferdigheter, lære fra erfarne utviklere og utvikle meg videre i faget.
            </div>
            <ContactInfo/>
            <ButtonCV/>
        </div>
    );
};