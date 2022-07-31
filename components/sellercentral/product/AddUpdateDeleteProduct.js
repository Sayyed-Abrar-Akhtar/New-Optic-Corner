import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { GiHelp } from 'react-icons/gi';

import { useRouter } from 'next/router';

import { addProduct } from '../../../redux/actions/productActions';
import { fileUploadSingle } from '../../../redux/actions/fileUploadAction';
import { FILE_UPLOAD_RESET } from '../../../redux/constants/fileUploadConstants';
import { ADDED_PRODUCT_RESET } from '../../../redux/constants/productConstants';

import InputField from '../../form/InputField';
import TextArea from '../../form/TextArea';
import CheckBox from '../../form/CheckBox';
import Spinner from '../../spinner/Spinner';
import RadioBtn from '../../form/RadioBtn';

import {
  categorySelector,
  productValidator,
  variantValidator,
} from '../../../utils/newProductValidator';

import inputStyles from '../../../styles/InputField.module.css';
import styles from '../../../styles/NewProduct.module.css';

const AddUpdateDeleteProduct = ({ baseUrl }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    loading: loadingSelectedProduct,
    error: errorSelectedProduct,
    data,
  } = useSelector((state) => state.product);

  const { imageData, error: errorUploadingFIle } = useSelector(
    (state) => state.singleFileUpload
  );
  const {
    loading,
    error: errorProduct,
    product,
  } = useSelector((state) => state.addProduct);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [color, setColor] = useState('');
  const [sku, setSku] = useState('');
  const [product_type, setProduct_type] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [variantObjArr, setVariantObjArr] = useState([]);
  const [showVariantObjArr, setShowVariantObjArr] = useState(false);

  const [menChecked, setMenChecked] = useState(false);
  const [womenChecked, setWomenChecked] = useState(false);
  const [kidChecked, setKidChecked] = useState(false);
  const [unisexChecked, setUnisexChecked] = useState(false);

  const [tags, setTags] = useState('');
  const [tagsArr, setTagsArr] = useState([]);

  const [error, setError] = useState([]);

  const [showVariantAddButton, setShowVariantAddbutton] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [imgArrLength, setImgArrLength] = useState(0);
  const [addedProduct, setAddedProduct] = useState(false);

  useEffect(() => {
    // SET INITIAL VALUE
    if (
      !errorSelectedProduct &&
      !loadingSelectedProduct &&
      data &&
      data.success
    ) {
      setTitle(data.product.title);
      setDesc(data.product.description);
    }

    if (!errorProduct && !loading && product && product.success) {
      router.push(baseUrl);
      dispatch({ type: ADDED_PRODUCT_RESET });
    } else {
      setAddedProduct(false);
    }

    if (imageData && imageData.success) {
      setImages([
        ...images,
        { id: imageData.public_id, secure_url: imageData.secure_url },
      ]);

      dispatch({ type: FILE_UPLOAD_RESET });
    }
    if (variantObjArr.length > 0) {
      setShowVariantObjArr(true);
    }
    if (error.length > 0) {
      error.map((message) => toast(message));
      setError([]);
    }
    if (tags.length > 0) {
      const tagsToArr = tags
        .split('#')
        .filter((tag) => tag.toLowerCase() !== '');
      setTagsArr([...tagsToArr]);
    }
    if (
      color !== '' &&
      sku !== '' &&
      stock !== 0 &&
      price !== 0 &&
      images.length !== 0 &&
      images.length === imgArrLength
    ) {
      console.log(images);
      setShowVariantAddbutton(true);
    } else {
      setShowVariantAddbutton(false);
    }

    if (
      !errorUploadingFIle &&
      imgArrLength > 0 &&
      images.length !== imgArrLength
    ) {
      setImgLoading(true);
    } else {
      setImgLoading(false);
    }
  }, [
    errorProduct,
    loading,
    baseUrl,
    product,
    router,
    images,
    imageData,
    dispatch,
    variantObjArr,
    error,
    tags,
    color,
    price,
    sku,
    stock,
    imgArrLength,
    errorUploadingFIle,
  ]);

  const variantImgChangeHandler = (e) => {
    const fileArr = Array.from(e.target.files);

    setImgArrLength(imgArrLength + fileArr.length);
    fileArr.forEach((file) => dispatch(fileUploadSingle(file)));
  };

  const addVariantHandler = (e) => {
    const variantReport = variantValidator(color, sku, stock, images, price);

    if (!variantReport.isValid) {
      setError([...error, ...variantReport.message]);
      return;
    }

    setVariantObjArr([...variantObjArr, { color, sku, stock, price, images }]);
    setColor('');
    setSku('');
    setStock(0);
    setPrice(0);
    setImages([]);
    setError([]);
    setImgArrLength(0);
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    const categories = categorySelector(
      menChecked,
      womenChecked,
      kidChecked,
      unisexChecked
    );
    const productReport = productValidator(
      title,
      desc,
      tagsArr,
      categories,
      variantObjArr,
      product_type
    );

    if (!productReport.isValid) {
      setError([...error, ...productReport.message]);
      return;
    }
    const productObj = {
      title,
      description: desc,
      variant: variantObjArr,
      tags: tagsArr,
      category: categories,
      product_type: product_type.toLowerCase(),
    };
    console.log(productObj);

    dispatch(addProduct(productObj));
    // if (product && product.success) {
    //   dispatch({ type: ADDED_PRODUCT_RESET });
    // }
    // if (!errorProduct && product.success) {
    //   router.push(baseUrl);
    // }
    setAddedProduct(true);
  };

  const deleteHandler = (e, idx) => {
    setVariantObjArr(variantObjArr.filter((arr, index) => index !== idx));
  };

  return (
    <section className={styles.container}>
      {addedProduct ? (
        <Spinner />
      ) : (
        <>
          <main>
            <div className={styles.field__container}>
              <InputField
                type='text'
                label='Product title'
                id='product_title'
                placeholder='Product title'
                value={title}
                setValue={setTitle}
                sellercentral={true}
              />

              <TextArea
                val={desc}
                setVal={setDesc}
                label='Description'
                id='product-desc'
                sellercentral={true}
                placeholder='Product description'
              />
            </div>

            <div className={styles.field__container}>
              <div className={styles.variant_input}>
                <InputField
                  type='text'
                  label='Color'
                  id='variant_color'
                  placeholder='Color'
                  value={color}
                  setValue={setColor}
                  sellercentral={true}
                />
                <InputField
                  type='text'
                  label='SKU'
                  id='variant_sku'
                  placeholder='Variant SKU'
                  value={sku}
                  setValue={setSku}
                  sellercentral={true}
                />
                <InputField
                  type='number'
                  label='Stock Available'
                  id='variant_stock'
                  placeholder='In Stock'
                  value={stock}
                  setValue={setStock}
                  sellercentral={true}
                />
                <InputField
                  type='number'
                  label='Price'
                  id='variant_price'
                  placeholder='Price'
                  value={price}
                  setValue={setPrice}
                  sellercentral={true}
                />
              </div>
              <div className={styles.variant_imgs_container}>
                {images &&
                  images.map((img) => (
                    <div
                      key={img.id}
                      style={{
                        backgroundImage: `url('${img.secure_url}')`,
                      }}
                      className={styles.selected_variant_imgs}
                    ></div>
                  ))}

                <label
                  htmlFor='variant-imgs_label'
                  className={styles.input_file_label}
                >
                  <input
                    multiple
                    type='file'
                    className={styles.input_file}
                    id='variant-imgs_label'
                    accept='image/*'
                    onChange={(e) => variantImgChangeHandler(e)}
                  />
                  {imgLoading ? (
                    <Spinner />
                  ) : (
                    <span className='mx-10 text-slate-800 text-center font-semibold capitalize hover:text-[#00574b] hover:cursor-pointer'>
                      Select variant imgs
                    </span>
                  )}
                </label>
              </div>

              <div className={styles.btn__container}>
                {showVariantAddButton && (
                  <p
                    className={`cta ${styles.add_variant}`}
                    onClick={addVariantHandler}
                  >
                    Add variant
                  </p>
                )}
              </div>
              <div className={`${styles.selected_variant}`}>
                <b>Added variant &nbsp;</b>
                {showVariantObjArr &&
                  variantObjArr.map((variantObj, idx) => (
                    <div
                      key={new Date().getTime() + idx}
                      className={styles.variant_tbl_body}
                    >
                      <div className={styles.selected_attributes_box}>
                        <div className={styles.selected_attributes}>
                          <p>{variantObj.color && variantObj.color}</p>
                          <p>SKU:&nbsp;{variantObj.sku && variantObj.sku}</p>
                          <p className='flex flex-col'>
                            <span>
                              In stock:&nbsp;
                              {variantObj.stock && variantObj.stock}
                            </span>
                            <span className='font-semibold'>
                              Npr. {variantObj.price && variantObj.price}/-
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className={styles.selected__img__container}>
                        <div className={styles.images}>
                          {variantObj.images &&
                            variantObj.images.length > 0 &&
                            variantObj.images.map((img) => (
                              <div
                                key={img.id}
                                className={styles.selected__img}
                                style={{
                                  backgroundImage: `url('${img.secure_url}')`,
                                }}
                              ></div>
                            ))}
                        </div>
                        <div className={styles.del_variant_box}>
                          <p
                            className={styles.del_variant}
                            onClick={(e) => deleteHandler(e, idx)}
                          >
                            delete
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </main>
          <aside className={styles.aside}>
            <section className={styles.category_container}>
              <h4 className='mb-10'>Select Category</h4>
              <div className={styles.categories}>
                <CheckBox
                  ID='men_category'
                  label='men'
                  checked={menChecked}
                  setChecked={setMenChecked}
                />
                <CheckBox
                  ID='women_category'
                  label='women'
                  checked={womenChecked}
                  setChecked={setWomenChecked}
                />
                <CheckBox
                  ID='kid_category'
                  label='kid'
                  checked={kidChecked}
                  setChecked={setKidChecked}
                />
                <CheckBox
                  ID='unisex_category'
                  label='unisex'
                  checked={unisexChecked}
                  setChecked={setUnisexChecked}
                />
              </div>
            </section>
            <section className={styles.category_container}>
              <h4 className='mb-10'>Choose Product Type</h4>
              <div className='flex flex-col'>
                <RadioBtn
                  label='Sunglasses'
                  ID='sunglasses'
                  name='product_type'
                  val={product_type}
                  setVal={setProduct_type}
                />
                <RadioBtn
                  label='Powerglasses'
                  ID='powerglasses'
                  name='product_type'
                  val={product_type}
                  setVal={setProduct_type}
                />
                <RadioBtn
                  label='Contact Lens'
                  ID='contact_lens'
                  name='product_type'
                  val={product_type}
                  setVal={setProduct_type}
                />
              </div>
            </section>
            <section className={styles.tags_container}>
              <div className='text-md font-semibold leading-10 text-[#00574b] text-[1.3rem]'>
                <span className='flex items-center'>
                  <GiHelp className='mr-2' />
                  <span>How to write tag?</span>
                </span>
                <span className='ml-[2rem] block'>
                  Tag must begin with {'#'}.
                </span>

                <span className='ml-[2rem] block'>
                  Example: #tag1#tag2#tag3
                </span>
              </div>

              <div
                className={`${inputStyles.input_group} ${inputStyles.input_group__sellercentral}`}
              >
                <InputField
                  type='text'
                  label='Product Tags'
                  id='product_tag'
                  placeholder='Example: #newin#summer#ss21'
                  value={tags}
                  setValue={setTags}
                  sellercentral={true}
                />
              </div>

              <div className={styles.tags}>
                {tagsArr &&
                  tagsArr.length > 0 &&
                  tagsArr.map((tag, idx) => (
                    <span
                      className={styles.tag}
                      key={`${tag}${idx}${new Date().getTime()}`}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </section>
          </aside>
          <p
            className={`cta ${styles.add_product}`}
            onClick={addProductHandler}
          >
            Add product
          </p>
        </>
      )}
    </section>
  );
};

export default AddUpdateDeleteProduct;
