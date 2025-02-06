import Download from '../Functions/Download';

export default function ButtonCV() {
    const handleClick = () => {
        window.open('/document/Magnus Kjønnøy - CV.pdf', '_blank');
    };

    return (
        <button onClick={handleClick} className="buttonCV">
            <img src="/icon/document-black.png"/>
            CV
        </button>
    );
};