import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, ChatBot } from "./pages"
import {Header, SideBar} from "./components"


function App() {

  return (
    <>
    <BrowserRouter>

    <Header/>
    <SideBar/>
    
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/chatbot" element= {<ChatBot/>} />
      <Route path="*" element= {<h1> 404 Error: Page Not Found</h1>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
