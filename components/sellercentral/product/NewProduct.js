import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GiHelp } from 'react-icons/gi';

import { useRouter } from 'next/router';

import inputStyles from '../../../styles/InputField.module.css';

import { AddProductValidator } from '../../../utils/addProductValidator';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/actions/productActions';
import { fileUploadSingle } from '../../../redux/actions/fileUploadAction';
import { FILE_UPLOAD_RESET } from '../../../redux/constants/fileUploadConstants';
import InputField from '../../form/InputField';
import TextArea from '../../form/TextArea';
import CheckBox from '../../form/CheckBox';
import Spinner from '../../spinner/Spinner';

import styles from '../../../styles/NewProduct.module.css';
import { ADDED_PRODUCT_RESET } from '../../../redux/constants/productConstants';

const NewProduct = ({ baseUrl }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { uploading, imageData } = useSelector(
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

  useEffect(() => {
    if (!errorProduct && !loading && product && product.success) {
      router.push(baseUrl);
      dispatch({ type: ADDED_PRODUCT_RESET });
    }
    if (uploading) {
      console.log('uploading img...');
    }
    if (imageData && imageData.success) {
      setImages([
        ...images,
        { id: imageData.id, secure_url: imageData.secure_url },
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
      const tagsToArr = tags.split('#').filter((tag) => tag !== '');
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
      setShowVariantAddbutton(true);
    } else {
      setShowVariantAddbutton(false);
    }

    if (imgArrLength > 0 && images.length !== imgArrLength) {
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
    uploading,
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
  ]);

  const readDroppedFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'newoptic');
    formData.append('cloud_name', 'new-optic-corner-abdul');
    const response = await fetch(
      '  https://api.cloudinary.com/v1_1/new-optic-corner-abdul/image/upload',
      {
        method: 'post',
        body: formData,
      }
    );
    const data = await response.json();

    dispatch(fileUploadSingle({ image: data.secure_url }));
  };

  const variantImgChangeHandler = (e) => {
    const fileArr = Array.from(e.target.files);
    setImgArrLength(fileArr.length);
    fileArr.forEach((file) => readDroppedFile(file));
  };

  const addVariantHandler = (e) => {
    const addProductValidator = new AddProductValidator(
      color,
      sku,
      stock,
      images,
      price
    );

    const messages = addProductValidator.variantValidator();

    if (messages.length > 0) {
      setError([...messages]);
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

    const addProductValidator = new AddProductValidator(
      '',
      '',
      0,
      [],
      0,
      title,
      desc,
      tagsArr,
      menChecked,
      womenChecked,
      kidChecked,
      unisexChecked
    );
    const categories = [];
    if (menChecked) {
      categories.push('men');
    }
    if (womenChecked) {
      categories.push('women');
    }
    if (kidChecked) {
      categories.push('kid');
    }
    if (unisexChecked) {
      categories.push('unisex');
    }

    setError([...error, ...addProductValidator.productValidator()]);
    const productObj = {
      title,
      description: desc,
      variant: variantObjArr,
      tags: tagsArr,
      category: categories,
    };
    console.log(productObj);

    dispatch(addProduct(productObj));
    // if (product && product.success) {
    //   dispatch({ type: ADDED_PRODUCT_RESET });
    // }
    // if (!errorProduct && product.success) {
    //   router.push(baseUrl);
    // }
  };

  const deleteHandler = (e, idx) => {
    setVariantObjArr(variantObjArr.filter((arr, index) => index !== idx));
  };

  return (
    <section className={styles.container}>
      {loading ? (
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

export default NewProduct;