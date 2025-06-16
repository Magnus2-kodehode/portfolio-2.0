import ContactInfo from './ContactInfo.jsx';
import ButtonCV from './ButtonCV.jsx';

import myPicture from '/image/20250207_152043.jpg';
import logoHTML from '/logo/html.png';
import logoCSS from '/logo/css.png';
import logoJavaScript from '/logo/javascript.png';
import logoReact from '/logo/react.png';
import logoFigma from '/logo/figma.png';
import logoKrita from '/logo/krita.png';

export default function ContentHome() {
  return (
    <div className='containerMain'>
      <div className='containerIntroduction lineBottom'>
        <img className='myPicture' src={myPicture} alt='Bilde av meg'/>
        <div className='containerColumn'>
          <div className='name'>Magnus Kjønnøy</div>
          Jeg heter Magnus og er en webutvikler med en lidenskap for å skape
          brukervennlige og visuelt tiltalende nettsider. 
          Med ferdigheter i HTML, CSS, JavaScript og React, jobber jeg med både front-end og
          interaktive løsninger. 
          Jeg bruker Figma til webdesign, har litt
          erfaring med å tegne i Krita, og har også erfaring med å bygge
          datamaskiner.
        </div>
      </div>
      <div className='containerColumn lineBottom'>
        <div className='title'>Ferdigheter</div>
        <div className='containerSkills'>
          <a className='skill' href='https://html.com/' target='_blank'>
            <img src={logoHTML} alt='HTML logo'/>
            HTML
          </a>
          <a
            className='skill'
            href='https://www.w3.org/TR/CSS/#css'
            target='_blank'
          >
            <img src={logoCSS} alt='CSS logo'/>
            CSS
          </a>
          <a
            className='skill'
            href='https://www.javascript.com/'
            target='_blank'
          >
            <img src={logoJavaScript} alt='JavaScript logo'/>
            JavaScript
          </a>
          <a className='skill' href='https://react.dev/' target='_blank'>
            <img src={logoReact} alt='React logo'/>
            React
          </a>
          <a
            className='skill'
            href='https://www.figma.com/community'
            target='_blank'
          >
            <img src={logoFigma} alt='Figma logo'/>
            Figma
          </a>
          <a className='skill' href='https://krita.org/en/' target='_blank'>
            <img src={logoKrita} alt='Krita logo'/>
            Krita
          </a>
        </div>
      </div>
      <div className='containerColumn lineBottom'>
        <div className='title'>Om meg</div>
        <div className='text'>
          <div className='title2'>Min utviklingsreise</div>
          {/* Jeg heter Magnus og er en webutvikler med ferdigheter i HTML, CSS, JavaScript, React og Figma. */}
          Etter å ha fullført et intensivt kurs i webutvikling har jeg utviklet
          en solid forståelse for hvordan man bygger brukervennlige og
          responsive nettsider. 
          Jeg er nå klar til å ta steget videre og anvende
          mine ferdigheter i et profesjonelt miljø, hvor jeg kan bidra til
          spennende prosjekter og lære mer fra erfarne utviklere.
        </div>
        <div className='text'>
          <div className='title2'>Prosjekter og praktisk erfaring</div>
          I løpet av opplæringen har jeg jobbet på flere prosjekter som har gitt meg
          både teknisk kunnskap og praktisk erfaring. 
          Jeg har utviklet alt fra
          enkle statiske nettsider til mer interaktive applikasjoner med React,
          og har jobbet med design og prototyper i Figma. 
          Jeg har også erfaring
          med versjonskontroll (Git) og samarbeid i team, der jeg har fått
          muligheten til å bidra til koding, testing og feilsøking.
        </div>
        <div className='text'>
          <div className='title2'>Ferdigheter fra hobby</div>
          På fritiden er jeg engasjert i dataspill, som har lært meg verdifulle
          ferdigheter som tålmodighet og samarbeid. 
          Jeg tror at disse
          erfaringene hjelper meg med å tilnærme meg utfordringer på en
          systematisk måte, og gir meg en fleksibel og åpen tilnærming til
          problemene jeg møter i utviklingsprosessen.
        </div>
        <div className='text'>
          <div className='title2'>Neste steg</div>
          Jeg er motivert for å komme i gang med en praksisplass i webutvikling,
          og ser frem til muligheten til å bidra med mine ferdigheter, lære fra
          erfarne utviklere og utvikle meg videre i faget.
        </div>
      </div>
      <div className='containerColumn containerContactInfo'>
        <ContactInfo />
        CV tilgjengelig ved forespørsel.
      </div>
    </div>
  );
};