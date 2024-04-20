import { memo, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Wrap = memo(({ children, htmlTitle = '' }) => {
  useEffect(() => {
    document.title = 'Futsal Center - ' + htmlTitle;
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
});

export default Wrap;
