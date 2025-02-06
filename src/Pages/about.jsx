import Header from '../Components/Header.jsx';
import NavOptions from '../Components/NavOptions.jsx';
import ContentAboutMe from '../Components/ContentAboutMe.jsx';

export default function About() {
    document.title="Magnus Kjønnøy - About - Portfolio";

    return (
        <div className="body">
            <Header/>
            <NavOptions/>
            <ContentAboutMe/>
        </div>
    );
};