import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  let [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen} >
        <h3>Animated modal</h3>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
