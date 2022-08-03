import Btn from '../components/Btn';
import Layout from '../components/layout/Layout';

const pageNotFound = () => {
  return (
    <div>
      <Layout
        title='404 | Page Not Found!'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/404'
      >
        <div className='flex justify-center items-center flex-col h-[30rem]'>
          <h1 className='font-semibold'>404</h1>
          <p className='my-12 text-5xl'>Page not found!</p>
          <Btn text='Go back' />
        </div>
      </Layout>
    </div>
  );
};

export default pageNotFound;
