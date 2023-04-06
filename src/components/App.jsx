// import { Header } from './Header/Header.jsx';
import { Title } from './Hero/Title/Title.jsx';
import { Video } from './Hero/Video/Video.jsx';
// import { Service } from './Main/Service/Service.jsx';
import { Man } from './Main/Man/Man.jsx';
// import { Footer } from './Footer/Footer.jsx';


// import jobs from './Data/jobs.json';
import man from './Data/man.json';
// import service from './Data/service.json';


import '../../src/index.css'


export const App = () => {
  return (
    <div>
      <Title /> 
      <Video />
      <Man  name={man[0].name} quote={man[0].quote} image={man[0].image} position={man[0].position}/>
    </div>
  );
};
