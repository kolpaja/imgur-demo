import Navbar from '../Navbar';
import SideBar from '../SideBar';

interface IGlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IGlobalLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className='container'>
        {children}
        <SideBar />
      </div>
    </>
  );
};

export default GlobalLayout;
