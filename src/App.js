import './App.css';
import Phonebook from './Components/Phonebook';

function App() {
  return (
    <html>
      <div className="App">
        <header>
          <h1>Address Book</h1>
          <h2>Never lose a contact again</h2>
          <h3>Assuming you dont have a smartphone and its 1997 right now</h3>
        </header>
        <main>
          <Phonebook className="phonebook" />
        </main>

        <footer>
          <a> &#169;David Elbling 305217416 and all that</a>
        </footer>
      </div>
    </html>
  );
}

export default App;
