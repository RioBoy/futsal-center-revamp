import { useState, useEffect } from 'react';
import Wrap from '../../component/layout/Wrap';
import Hero from './component/Hero';
import { contentHome } from '../../service/api/cms/futsalCenter.cms';
import { isSuccess } from '../../helper/condition.helper';

const HomePage = () => {
  const [data, setData] = useState({});

  const _getData = () => {
    contentHome().then((resData) => {
      if (isSuccess(resData)) {
        setData(resData);
      }
    });
  };

  useEffect(() => {
    _getData();
  }, []);

  return (
    <Wrap htmlTitle="Home">
      <Hero data={data.hero || []} />
    </Wrap>
  );
};

export default HomePage;
