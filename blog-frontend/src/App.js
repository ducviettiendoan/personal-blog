import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage/ListingPage";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import Links from "./pages/Links";
import Project from "./pages/Project";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={ListingPage} />
        <Route path="/about" exact component={About} />
        <Route path="/links" exact component={Links} />
        <Route path="/project" exact component={Project} />
        <Route path="/blog" exact component={BlogPage}/>
        <Route path="/log-in" exact component={LoginPage}/>
        <Route path="/sign-up" exact component={SignUpPage}/>
        <Route path="/admin" exact component={Admin}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
