
import ReactDOM from 'react-dom/client';
import About from './views/About/about';
import Contact from './views/Contact/contact';
import Home from './views/Home/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    const path = window.location.pathname;

    switch (path) {
        case "/":
            return <Home />;
        case "/about":
            return <About />;
        case "/contact":
            return <Contact />;
        default:
            return <h1>404 Page Not Found</h1>;
    }
}
root.render(
    <><App/></>
)

