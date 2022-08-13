import React, { useState } from 'react';

import styles from '../../styles/DragAndDropFile.module.css';

const DragAndDropFile = ({
  flexDirection = 'row',
  square = true,
  image,
  setImage,
}) => {
  const [dragHighlight, setDragHighlight] = useState(false);

  const onChangeHandler = (e) => {
    const file = e.target.files[0];

    readDroppedFile(file);
  };

  const handleDrop = (e) => {
    preventDefaults(e);

    setDragHighlight(false);

    const file = e.dataTransfer.files[0];

    readDroppedFile(file);
  };

  const handleDragEnter = (e) => {
    preventDefaults(e);
    setDragHighlight(true);
  };

  const handleDragOver = (e) => {
    preventDefaults(e);

    setDragHighlight(true);
  };

  const hanldeDragLeave = (e) => {
    preventDefaults(e);

    setDragHighlight(false);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const readDroppedFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div
      className={styles.container}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={hanldeDragLeave}
    >
      <label
        htmlFor='selectImageFile'
        className={`${styles.label} ${dragHighlight && styles.highlight}`}
        style={{ flexDirection: flexDirection }}
      >
        <input
          type='file'
          id='selectImageFile'
          style={{ display: 'none' }}
          onChange={(e) => onChangeHandler(e)}
        />
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={`${styles.image_preview} ${styles.rounded} ${
            square ? `${styles.square}` : `${stylesrectangle}`
          }`}
        ></div>
        <p className={styles.choose_img}>Choose profile Image</p>
      </label>
    </div>
  );
};

export default DragAndDropFile;
