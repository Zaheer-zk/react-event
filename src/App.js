import "./App.css";

function App() {
  const handleKeyEvent = (e) => {
    // console.log(e);
    if (e.key === "Enter") window.alert("Enter pressed");
  };

  // There are many React Events are available
  //Some events are listed here: https://flaviocopes.com/react-events/
  return (
    <div className="App">
      <p
        onCopy={() => {
          window.alert(`Copied Successfully`);
        }}
      >
        Copy this
      </p>
      <input
        type="text"
        onPaste={() => {
          window.alert(`Pasted Successfully`);
        }}
        placeholder="press enter"
      />
      <input
        type="text"
        onKeyPress={(e) => handleKeyEvent(e)}
        placeholder="press enter"
      />
      <button
        onDoubleClick={() => {
          window.alert(`Double Clicked`);
        }}
      >
        Double Click!
      </button>
      <button
        draggable
        onDrag={() => {
          window.alert(`please don't Drag 😁`);
        }}
      >
        Drag me!
      </button>
    </div>
  );
}

export default App;
