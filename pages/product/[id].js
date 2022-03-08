import Layout from '../../components/layout/Layout';
import Description from '../../components/product/Description';
import Images from '../../components/product/Images';
import Price from '../../components/product/Price';
import ProductGrid from '../../components/product/ProductGrid';
import Stock from '../../components/product/Stock';
import Variant from '../../components/product/Variant';
import styles from '../../styles/Product.module.css';

const myProduct = () => {
  return (
    <div>
      <Layout
        title='Product | New Optic Corner'
        description='The latest and trendy eyewear, lenses, power glasses, sunglasses online in Nepal.'
        ogUrl='https://www.newopticcorner.com.np/cart'
        classValue='main'
      >
        <section className={styles.product}>
          <Images />
          <section className={styles.details}>
            <h1 className={styles.title}>Cool Cat Eye Women Sunglasses</h1>
            <Price />
            <form action=''>
              <Variant />
              <Stock />
              <section className={`cta ${styles.cta}`}>Add to cart</section>
            </form>

            <Description />
          </section>
        </section>
        <ProductGrid title='Similar to the product' />
      </Layout>
    </div>
  );
};

export default myProduct;
