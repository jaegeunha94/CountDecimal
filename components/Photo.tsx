import * as React from 'react';
import Image from './Image';
export default function Photo() {
  const [isPhotoShow, setIsPhotoShow] = React.useState(false);
  const handleShowPhoto = () => {
    setIsPhotoShow(!isPhotoShow);
  };

  return (
    <div>
      {isPhotoShow === true ? <Image /> : null}
      <button
        style={{ height: '30px', width: '200px' }}
        onClick={handleShowPhoto}
      >
        {'서프라이즈'}
      </button>
    </div>
  );
}
