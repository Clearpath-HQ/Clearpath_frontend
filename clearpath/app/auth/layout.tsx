import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen bg-gray-200'>
      {children}
    </div>
  );
};
export default Layout;
