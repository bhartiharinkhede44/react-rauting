import "./home.css";
import Navbar from "../../Component/Navbar/Navbar";
import Button from "../../Component/Button/Button";
export default function () {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>This is Home page</h1>
                <Button  text='know more '/>
                <Button text='Rellated Search'/>
            </div></>
    )
}
