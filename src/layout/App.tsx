import react, { useState } from "react";

function App() {
  const [modalCh, setModalCh] = useState<boolean>();
  return (
    <>
      {modalCh ? <div>dd</div> : null}
      <button onClick={() => setModalCh(!modalCh)}>dd</button>
    </>
  );
}

export default App;
