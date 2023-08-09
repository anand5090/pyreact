// import logo from './logo.svg';
// import './App.css';
import Cards from "./components/Cards"; 
import Navbar from "./components/Navbar";
function App() {
  return(
  <>
  <Navbar />
  <div className="d-flex gap-7 justify-content-center pt-5">
  <Cards title="JavaScript"  
  src="https://th.bing.com/th/id/OIP.H-DuKgY-G7ykDvpZNSJIHgHaE6?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  prag="loremloremloremloremloremloremloremloremloremloremloremlorem"
  btn="Button"
  />
  <Cards title="ReactJs"  
  src="https://th.bing.com/th/id/OIP.H-DuKgY-G7ykDvpZNSJIHgHaE6?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  prag="loremloremloremloremloremloremloremloremloremloremloremlorem"
  btn="Button"
  />
  <Cards title="Node js"  
  src="https://th.bing.com/th/id/OIP.H-DuKgY-G7ykDvpZNSJIHgHaE6?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  prag="loremloremloremloremloremloremloremloremloremloremloremlorem"
  btn="Button"
  />

  </div>
  </>
  )
  ;
   

}

export default App;
