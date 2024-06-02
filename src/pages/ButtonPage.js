import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
    }

    return (
        <div>
            <div onClick={handleClick}>
                <Button success rounded outline className="mb-5"><GoBell /> Click Me!</Button>
            </div>
            <div onMouseEnter={handleClick}>
                <Button danger outline><GoCloudDownload /> Hide Ads!</Button>
            </div>
            <div onMouseLeave={handleClick}>
                <Button warning><GoDatabase /> Testing!!</Button>
            </div>
            <div>
                <Button secondary outline>New Button!!</Button>
            </div>
            <div>
                <Button primary rounded>Button 5</Button>
            </div>
        </div>
    )
};

export default ButtonPage;