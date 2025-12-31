import "./css/app.css";
import BookCard from "./components/BookCard.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/bookData.js";
function App() {
  return (
    <div>
      <h1>Hello World Do all the folders upload semalessly??</h1>
      {projects.map((project) => (
        <BookCard
          key={project.id}
          title={project.title}
          author={project.author}
          content={project.description}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
