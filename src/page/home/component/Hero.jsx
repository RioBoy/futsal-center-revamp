import _ from 'lodash';
import { BtnPrimaryBrand } from '../../../component/general/Button';
import { domainURL } from '../../../service/api/cms/_endPoint.cms';

const Hero = (props) => {
  const _handleExploreArena = () => {};

  return (
    <section id="hero" className="mt-[70px] hero">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap lg:px-4">
          <div className="w-full self-center md:order-1 md:w-1/2">
            <h3 className="text-[28px] lg:text-5xl font-bold text-primary max-w-[350px] lg:max-w-xl mt-10 lg:mt-0">
              Lupakan Kesibukanmu, Mari Bermain Bersama
            </h3>
            <p className="text-base font-light text-secondary mt-5 leading-7 mb-8 max-w-md lg:max-w-lg">
              Kami menyediakan lapangan unggulan dan nyaman untuk digunakan
              bersama dengan teman, keluarga dan kerabat
            </p>
            <BtnPrimaryBrand
              className="btn-shadow"
              handle={_handleExploreArena}
            >
              Pesan Lapangan
            </BtnPrimaryBrand>

            <div className="flex items-center mt-20">
              {!_.isEmpty(props.data)
                ? props.data.map((hero) => {
                    return (
                      <div className="w-full" key={hero._id}>
                        <div className="flex xsm:gap-[5px] gap-3 items-center">
                          <img
                            src={`${domainURL}/${hero.imageUrl}`}
                            alt={hero.name}
                            style={{ width: 68 }}
                          />
                          <div className="flex flex-col">
                            <h5 className="text-2xl lg:text-4xl font-medium text-primary">
                              {hero.itemId.length}
                            </h5>
                            <p className="text-sm lg:text-lg font-light text-secondary">
                              {hero.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="w-full self-center -order-1 md:order-2 md:w-1/2">
            <img
              src="/image/content/hero.jpg"
              alt="Hero"
              className="max-w-full rounded-2xl object-cover object-center hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
