import '../stylesheets/AuthorPage.css';
import AuthorCard from '../Components/AuthorCard';


function App() {
  return (
    <div className="main">
      <h1>About the autors:</h1>
      <div className='main-content'>
        <AuthorCard 
          name='Maria Acosta'
          country='Canarias'
          image='emma'
          role='Front-end Developer'
          company='SixtySeconds'
          description="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
        <AuthorCard 
          name='Mario Zappulla'
          country='Barcelona'
          image='mario'
          role='Front-end Developer'
          company='SixtySeconds'
          description="My part in this project has been to design the structure of the web as well as the React project, understanding the functionalities that this great tool offers us and deciding how the components must be shown and how they must interact" />
        <AuthorCard 
          name='Yeray Campos'
          country='Bilbao'
          image='shawn'
          role='Back-end Developer'
          company='SixtySeconds'
          description="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." />
        <AuthorCard 
          name='Jordi Ferre'
          country='Barcelona'
          image='sarah'
          role='Back-end Developer'
          company='SixtySeconds'
          description="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />
      </div>
    </div>
  );
}

export default App;