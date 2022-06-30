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
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      {/* we will set this search inside the header. */}
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/profile" element={<ProfileScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/createNote" element={<CreateNote />} exact />
          <Route path="/note/:id" element={<SingleNote />} exact />
          {/* we will pass search to mynotes too. */}
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          {/* <Route path="/mynotes" component={() => <MyNotes />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

// function App() {
//   return <div className="App">Hello</div>;
// }

export default App;
