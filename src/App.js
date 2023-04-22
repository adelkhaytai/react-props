// import logo from './logo.svg';
import './App.css';
import Profile0 from './profile/Profile0';

const data ={
  fullName0: 'khayati Adel',
  fullName: 'Khayati Adel',
  bio: 'html css js es6 react-js git/github',
  profession: 'Full Stack Devloper',

}

function App() {
  return (
    <Profile0 
    fullName0={data.fullName0}
    fullname={data.fullName}
    bio={data.bio}
    profession={data.profession}
    name0={'adel'}
    />
    );
}

export default App;
