//gallery screen for images

import SideBar from '../../components/SideBar';
import Gallery from '../Gallery';

function Home() {
  return (
    <div className='screen'>
      <Gallery />
      <SideBar />
    </div>
  );
}

export default Home;
