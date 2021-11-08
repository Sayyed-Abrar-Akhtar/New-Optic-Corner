import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
export default function ContactLens() {
  return (
    <div>
      <Layout
        title='Contact Lens | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/contact_lens'
      >
        <ProductGrid title='Contact lens' />
      </Layout>
    </div>
  );
}
