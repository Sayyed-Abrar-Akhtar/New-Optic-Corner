import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
export default function Sunglasses() {
  return (
    <div>
      <Layout
        title='Sunglasses | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/sunglasses'
      >
        <ProductGrid title='Sunglasses' />
      </Layout>
    </div>
  );
}