import Header from './Components/Header.jsx';
import NavOptions from './Components/NavOptions.jsx';

export default function Error() {
    document.title="Error - page not found";

    return (
        <div className="body">
            <Header/>
            {/* <NavOptions/> */}
            <div className="error">Error - page not found.</div>
        </div>
    );
};