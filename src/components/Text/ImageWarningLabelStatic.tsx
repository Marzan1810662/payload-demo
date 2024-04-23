import * as React from 'react';
const ImageWarningLabelStatic =
  (size: string): React.FC<any> =>
  obj => {
    return <h3 style={{ color: 'red' }}>Please use image ratio: {size}</h3>;
  };

export default ImageWarningLabelStatic;