import { useState } from "react"

import WebApp from "@twa-dev/sdk"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TWA + Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  )
}

export default App
