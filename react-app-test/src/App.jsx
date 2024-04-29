import Card from "./Card.jsx";
import StartButton from './StartButton.jsx';
import './App.css';

function App() {
    return(
        <div className="app-container">
            <div className="content">
                <Card />
            </div>
            <div className="button-container">
                <StartButton /> {/* Add the CustomButton component */}
            </div>
        </div>
    );
}
export default App
