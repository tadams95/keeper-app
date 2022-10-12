import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//noteEntry function that inputs a noteItem and returns a key, title, and content from notes.js
function noteEntry(noteItem) {
    return (
        <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
        />
    )
}


function App() {
    return (
        <div>
            <Header />
            {/* maps the notes array using the noteEntry function */}
            {notes.map(noteEntry)}
            <Footer />
        </div>
    );
}

export default App;