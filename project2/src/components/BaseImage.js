import React from 'react';
import {Image, Layer} from 'react-konva';
import useImage from 'use-image';
import {MAIN_IMAGE} from '../utils/image';

function BaseImage() {
  const [image] = useImage(MAIN_IMAGE, 'Anonymous');

  return (
    <Layer>
      <Image image={image} width={700} height={800} />
    </Layer>
  );
}

export default BaseImage;
