import JavaCourse from "./JavaCourse";
import ReactCourse from "./ReactCourse";
import withCourseAccess from "./WithCourseAccess";

const ProtectedJavaCourse = withCourseAccess(JavaCourse);
const ProtectedReactCourse = withCourseAccess(ReactCourse);

function OnlineCourseApp() {
  return (
    <>
      <h1>🎓 Online Learning Platform</h1>

      <ProtectedJavaCourse />

      <hr />

      <ProtectedReactCourse />
    </>
  );
}

export default OnlineCourseApp;