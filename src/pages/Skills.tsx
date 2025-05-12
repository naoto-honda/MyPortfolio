import Footer from '../components/Footer';
import H2 from '../components/H2';
import Header from '../components/Header';

const Skills = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-32 md:mt-24 text-gray-800">
        <H2>Skills</H2>
        <ul className="flex flex-wrap gap-1 justify-center">
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>HTML</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>CSS</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>JavaScript</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>React</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>TypeScript</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
          <li className="w-1/2 md:w-1/4 p-2 mb-3 border-2 border-custom-blue rounded-md">
            <h3>Next.js</h3>
            <p>説明文が入ります。説明文が入ります。説明文が入ります。</p>
          </li>
        </ul>
      </div>
      <Footer />;
    </>
  );
};

export default Skills;
