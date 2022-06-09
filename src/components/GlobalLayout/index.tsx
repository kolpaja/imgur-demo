import Footer from '../Footer';
import Navbar from '../Navbar';

interface IGlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IGlobalLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};

export default GlobalLayout;
