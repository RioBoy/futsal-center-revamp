import Wrap from '../../component/layout/Wrap';
import { BtnNeutral, BtnPrimaryBrand } from '../../component/general/Button';

const HomePage = () => {
  return (
    <Wrap htmlTitle="Home">
      <div className="container my-[200px]">
        <div className="flex flex-col gap-8 w-1/6">
          <BtnPrimaryBrand className="btn-shadow">Test</BtnPrimaryBrand>
          <BtnNeutral isOutline>Test</BtnNeutral>
        </div>
      </div>
    </Wrap>
  );
};

export default HomePage;
