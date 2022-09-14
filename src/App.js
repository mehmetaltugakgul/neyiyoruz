import "./App.css"
import Meal from "./components/Meal"

function App() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100%",
      }}
      className="App"
    >
      <Meal />
    </div>
  )
}

export default App
