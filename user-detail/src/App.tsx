import { BrowserRouter, Route,Routes } from "react-router-dom";
import UserDetail from './UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id"  Component={UserDetail} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;