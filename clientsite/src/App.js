import { signInWithGoogle } from "./Firebase";



function App() {

  return (
    <div className="App">
      hi
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default App;
