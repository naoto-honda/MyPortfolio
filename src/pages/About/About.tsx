import Footer from '../../components/Footer';
import H2 from '../../components/H2';
import Header from '../../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800">
        <H2>About</H2>
        <div className="flex flex-col md:flex-row mb-5">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <h3 className="text-2xl flex items-center">
              <i className="gg-globe-alt text-custom-blue text-3xl mr-2"></i>
              経歴
            </h3>
            <ul>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                2019年 立教大学 経済学部経済学科に入学
              </li>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                学生時代に個人学習でWeb制作を始める
              </li>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                2023年3月 立教大学 経済学部経済学科を卒業
              </li>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                2023年4月 株式会社USENにエンジニアとして入社
              </li>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                2024年4月 株式会社ARPEGGIOにフロントエンジニアとして入社
              </li>
              <li className="flex items-center">
                <i className="gg-chevron-right mr-2 text-custom-blue"></i>
                2024年8月 フロントエンジニアとして初出向
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-orange-100 flex justify-center">
            <img
              src="/img/myPortfolio.jpg"
              alt="自分の写真"
              className="w-1/2"
            />
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default About;
