import Header from '../Components/Header.jsx';
import NavOptions from '../Components/NavOptions.jsx';
import ContentHome from '../Components/ContentHome.jsx';

export default function Home() {
    document.title="Magnus Kjønnøy - Portfolio";

    return (
        <div className="body">
            <Header/>
            {/* <NavOptions/> */}
            <ContentHome/>
        </div>
    );
};