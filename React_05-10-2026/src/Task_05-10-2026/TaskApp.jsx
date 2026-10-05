import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Education from "./Education";
import Footer from "./Footer";

function TaskApp() {
  return (
    <>
      <Header/>

        <Profile />
        <Skills />
        <Education />
      <Footer />
    </>
  );
}

export default TaskApp;