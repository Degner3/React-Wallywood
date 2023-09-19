import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PostersPage } from "./Pages/PostersPage/PostersPage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { Details } from "./Pages/DetailsPage/Details";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/posters" element={<PostersPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/details/:slug" element={<Details/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
