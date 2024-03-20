import { useState } from "react";
import "./App.css";
import Modal from "./modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="app">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Open Modal
        </button>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <h1>Hello there</h1>
        <p>It's time to go to gym</p>
      </Modal>
    </div>
  );
}

export default App;
