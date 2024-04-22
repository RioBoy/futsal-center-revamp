import Wrap from '../../component/layout/Wrap';
import { BtnPrimaryBrand } from '../../component/general/Button';

const HomePage = () => {
  return (
    <Wrap htmlTitle="Home">
      <div className="container my-[200px]">
        <BtnPrimaryBrand isHoverDarken className="btn-shadow">
          Test
        </BtnPrimaryBrand>
      </div>
    </Wrap>
  );
};

export default HomePage;
