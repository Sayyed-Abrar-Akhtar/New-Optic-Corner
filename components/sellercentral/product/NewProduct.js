import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../../../styles/NewProduct.module.css';

import inputStyles from '../../../styles/InputField.module.css';

import { AddProductValidator } from '../../../utils/addProductValidator';
import InputField from '../../form/InputField';
import TextArea from '../../form/TextArea';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [variantObjArr, setVariantObjArr] = useState([]);
  const [variantImages, setVariantImages] = useState([]);
  const [variantImagesSelected, setVariantImagesSelected] = useState([]);

  const [addedNewVariant, setAddedNewVariant] = useState(false);
  const [selectedImgsShowing, setSelectedImgsShowing] = useState(false);

  const [tagsArr, setTagsArr] = useState([]);
  const [selectedTagsShowing, setSelectedTagsShowing] = useState(false);

  useEffect(() => {
    if (addedNewVariant) {
      console.log(variantObjArr);
      setAddedNewVariant(false);
      setColor('');
      setSku('');
      setStock(0);
      setPrice(0);
      setVariantImages([]);
      setVariantImagesSelected([]);
    }

    if (variantImagesSelected.length > 0) {
      setSelectedImgsShowing(true);
    }

    if (tagsArr.length > 0) {
      setSelectedTagsShowing(true);
      console.log('tagsArr', tagsArr);
    }
  }, [addedNewVariant, variantObjArr, variantImagesSelected, tagsArr]);

  const readDroppedFile = (file, imgsUrlArr) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      imgsUrlArr.push(reader.result);
    };
  };

  const showSelectedImage = (files) => {
    let arrOfImgShowing = [];
    files.forEach((file) => {
      arrOfImgShowing.push(URL.createObjectURL(file));
    });
    setVariantImagesSelected(arrOfImgShowing);
  };

  const variantImgChangeHandler = (e) => {
    e.preventDefault();
    const imgsUrlArr = [];
    const filesArr = [...e.target.files];
    filesArr.map((i) => {
      readDroppedFile(i, imgsUrlArr);
    });

    showSelectedImage(filesArr);

    setVariantImages(imgsUrlArr);
  };

  const onVariantAddHandler = (e) => {
    e.preventDefault();
    let images = [...variantImages];
    const addProductValidator = new AddProductValidator(
      color,
      sku,
      images,
      price,
      stock
    );

    const messages = addProductValidator.variantValidator();

    if (messages.length > 0) {
      messages.map((message) => {
        toast.error(message);
      });
      return;
    }

    let newObj = {
      color: color.toUpperCase(),
      sku: sku.toUpperCase(),
      images,
      price,
      stock,
    };

    const newObjArr = [...variantObjArr, newObj];

    setVariantObjArr(newObjArr);

    setAddedNewVariant(true);
  };

  const deleteVariantHandler = (e, objIndex) => {
    e.preventDefault();

    let variantArr = variantObjArr.filter((arr, idx) => {
      if (idx !== objIndex) {
        return arr;
      }
    });

    setVariantObjArr([...variantArr]);
    setAddedNewVariant(true);
  };

  const onTagEnter = (e) => {
    let arr = [...tagsArr];
    if (e.keyCode === 13) {
      arr.push(e.target.value);
      e.target.value = '';
    }
    setTagsArr(arr);
  };

  return (
    <section className={styles.container}>
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
            {selectedImgsShowing &&
              variantImagesSelected.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundImage: `url('${img}')`,
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
                onChange={(e) => variantImgChangeHandler(e)}
              />
              Select variant imgs
            </label>
          </div>

          <div className={styles.btn__container}>
            <p
              className={`cta ${styles.add_variant}`}
              onClick={(e) => onVariantAddHandler(e)}
            >
              Add variant
            </p>
          </div>
          <div className={`${styles.selected_variant}`}>
            <b>Added variant &nbsp;</b>

            {variantObjArr.length > 0 &&
              variantObjArr.map((variant, variantIdx) => (
                <div key={variantIdx} className={styles.variant_tbl_body}>
                  <div className={styles.selected_attributes_box}>
                    <div className={styles.selected_attributes}>
                      <p>{variant.color && variant.color}</p>
                      <p>SKU:&nbsp;{variant.sku && variant.sku}</p>
                      <p>In stock:&nbsp;{variant.sku && variant.stock}</p>
                    </div>
                  </div>
                  <div className={styles.selected__img__container}>
                    <div className={styles.images}>
                      {variant.images.map((img, imgIdx) => (
                        <div
                          className={styles.selected__img}
                          key={imgIdx}
                          style={{ backgroundImage: `url('${img}')` }}
                        ></div>
                      ))}
                    </div>
                    <div className={styles.del_variant_box}>
                      <p
                        className={styles.del_variant}
                        onClick={(e) => deleteVariantHandler(e, variantIdx)}
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
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>select Category</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            <option value='kid'>Kid</option>
            <option value='unisex'>Unisex</option>
          </select>
        </section>
        <section className={styles.tags_container}>
          <div
            className={`${inputStyles.input_group} ${inputStyles.input_group__sellercentral}`}
          >
            <div>
              <input
                className={`${inputStyles.form_control} ${inputStyles.form_control__sellercentral}`}
                type='text'
                onKeyDown={(e) => onTagEnter(e)}
                placeholder='Enter Product Tag'
                id='product_tags'
              />
              <label
                className={`${inputStyles.input_group__text} ${inputStyles.input_group__text__sellercentral}`}
                htmlFor='product_tags'
              >
                Product Tags
              </label>
            </div>
          </div>
          {selectedTagsShowing && (
            <div className={styles.tags}>
              {tagsArr.map((tag, idx) => (
                <span className={styles.tag} key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>
      </aside>
    </section>
  );
};

export default NewProduct;
