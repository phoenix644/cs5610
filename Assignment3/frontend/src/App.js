import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/createNote" element={<CreateNote />} exact />
        <Route path="/note/:id" element={<SingleNote />} exact />
        <Route path="/mynotes" element={<MyNotes />} />
        {/* <Route path="/mynotes" component={() => <MyNotes />} /> */}
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

// function App() {
//   return <div className="App">Hello</div>;
// }

export default App;
