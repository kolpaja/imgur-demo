interface IGlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: IGlobalLayoutProps) => {
  return <div className='container'>{children}</div>;
};

export default GlobalLayout;
