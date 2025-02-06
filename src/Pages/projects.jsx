import Header from '../Components/Header.jsx';
import NavOptions from '../Components/NavOptions.jsx';
import ContentProjects from '../Components/ContentProjects.jsx';

export default function Projects() {
    document.title="Magnus Kjønnøy - Projects - Portfolio";

    return (
        <div className="body">
            <Header/>
            {/* <NavOptions/> */}
            <ContentProjects/>
        </div>
    );
};