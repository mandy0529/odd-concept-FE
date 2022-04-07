import React from 'react';
import {Image, Layer} from 'react-konva';
import useImage from 'use-image';
import {MAIN_IMAGE} from '../utils/image';

function BaseImage() {
  const [image] = useImage(MAIN_IMAGE, 'Anonymous');

  return (
    <Layer>
      <Image style={{width: '500px'}} image={image} />
    </Layer>
  );
}

export default BaseImage;
