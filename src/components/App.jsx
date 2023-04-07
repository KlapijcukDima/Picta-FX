// import { Header } from './Header/Header.jsx';
import { Title } from './Hero/Title/Title.jsx';
import { Video } from './Hero/Video/Video.jsx';
// import { Service } from './Main/Service/Service.jsx';
import { Jobs } from './common/Card-jobs/Card-jobs.jsx';
import { Man } from './Main/Man/Man.jsx';
import { Footer } from './Footer/Footer.jsx';
import { Button } from './common/Button/Button.jsx';

import jobs from './Data/jobs.json';
import man from './Data/man.json';
// import service from './Data/service.json';

export const App = () => {
  return (
    <div>
      <Title />
      <Button />
      <Video />
      <Jobs jobs={jobs} />
      {/* <Jobs
        position={jobs[0].position}
        location={jobs[0].location}
        workTime={jobs[0].workTime}
      /> */}
      <Man
        name={man[0].name}
        quote={man[0].quote}
        image={man[0].image}
        position={man[0].position}
      />
      <Footer />
    </div>
  );
};
