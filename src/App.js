import MKNotes from "./MKNotes";
import { Routes, Route } from "react-router-dom";
import AddNote from "./AddNote";
import NoteDetails from "./NoteDetails";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MKNotes />} />
        <Route path="/AddNote" element={<AddNote />} />
        <Route path="/NoteDetails/:id" element={<NoteDetails />} />
      </Routes>
    </div >
  );
}

export default App;
