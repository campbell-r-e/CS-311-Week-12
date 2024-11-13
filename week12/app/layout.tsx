import { ReactNode } from 'react';
import './globals.css'; // Import your global styles

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        {/* You can add metadata, title, and other head elements here */}
        <title>My App</title>
      </head>
      <body>
        {children} {/* This is where the page content will be rendered */}
      </body>
    </html>
  );
};

export default Layout;
