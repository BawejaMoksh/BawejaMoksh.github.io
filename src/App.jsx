
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
//All of these are jsx files in components folder

//arrow function
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">{/*this works same as class attribute but can also add additional css*/}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <div className='relative z-0'>{/*this to avoid stacking of rendered element by default z-index is auto*/}
          <Contact />
          <StarsCanvas />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
