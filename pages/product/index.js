import Layout from '../../components/layout/Layout';
import Card from '../../components/product/Card';

import styles from '../../styles/AllProduct.module.css';

export default function Cart() {
  return (
    <div>
      <Layout
        title='Product | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/cart'
        classValue='main'
      >
        <section>
          <h1 className='heading'>All products</h1>
        </section>
        <section className={styles.products}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, index) => (
              <Card key={index + Date.now()} productId='123' />
            )
          )}
        </section>
      </Layout>
    </div>
  );
}
