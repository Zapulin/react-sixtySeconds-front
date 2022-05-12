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
          company='InvalidException'
          description="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
        <AuthorCard 
          name='Mario Zappulla'
          country='Barcelona'
          image='mario'
          role='Front-end Developer'
          company='InvalidException'
          description="My part in this project has been to design the structure of the web as well as the React project, understanding the functionalities that this great tool offers us and deciding how the components must be shown and how they must interact" />
        <AuthorCard 
          name='Yeray Campos'
          country='Bilbao'
          image='yeray'
          role='Back-end Developer'
          company='InvalidException'
          description="Even though we have infinite choices every single second of pur lives, there's only a handful that really, really matter. That's the filosofy I follow while developing a new proyect. Everything can and will change but the whole purpose of the proyect the backend will stay strong to these changes." />
        <AuthorCard 
          name='Jordi Ferre'
          country='Barcelona'
          image='jordi'
          role='Back-end Developer'
          company='InvalidException'
          description="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />
      </div>
    </div>
  );
}

export default App;