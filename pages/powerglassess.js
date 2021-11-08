import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
export default function Powerglasses() {
  return (
    <div>
      <Layout
        title='Sunglasses | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/powerglasses'
      >
        <ProductGrid title='Power Glasses' />
      </Layout>
    </div>
  );
}
