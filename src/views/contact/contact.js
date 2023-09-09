import "./contact.css";
import Navbar from "./../../Component/Navbar/Navbar";
import Button from "../../Component/Button/Button";

export default function () {
    return (
        <>
            <Navbar />

            <div className="maincontainer">

                <h1>This is Contact Page</h1>
                <Button text='Buy Now' />
                <Button text='know More' />


            </div></>

    )
}