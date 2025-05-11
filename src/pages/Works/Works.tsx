import Footer from '../../components/Footer';
import H2 from '../../components/H2';
import Header from '../../components/Header';

const Works = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-24 text-gray-800">
        <H2>Works</H2>
        <ul className="flex flex-wrap gap-1 justify-center">
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works１</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works２</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works３</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works４</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works５</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Works５</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
        </ul>
      </div>
      <Footer />;
    </>
  );
};

export default Works;
