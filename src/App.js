//import logo from './logo.svg';
//import './App.css';

function ImageContainer() {
  return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
    <img
      src="./IMGP4118.jpg"
      alt="Изображение для статьи"
      />
  );
}

function App() {
  return (
    <section>
      <h1>Skillfactory Blog</h1>
      <ImageContainer />
      <ImageContainer />
      <ImageContainer />
    </section>
  );
}

export default App;
