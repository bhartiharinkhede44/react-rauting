import "./about.css";
import Navbar from "../../Component/Navbar/Navbar";
import Button from "../../Component/Button/Button";
export default function () {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>This is About page</h1>
                <Button text='know More '/>
                <Button text='about Us'/>

            </div></>
    )
}