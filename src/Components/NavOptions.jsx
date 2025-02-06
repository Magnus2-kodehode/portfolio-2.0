import ButtonLanguage from './ButtonLanguage';
import ButtonColorMode from './ButtonColorMode';

export default function NavOptions() {

    return (
        <div className="navOptions">
            <ButtonColorMode/>
            <ButtonLanguage/>
        </div>
    );
};