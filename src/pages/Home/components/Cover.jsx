import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';

import * as animationData from 'data/animation.json';

const S = {
  Cover: styled.div`
    width: 100%;
    height: 100%;
  `,
};

const Cover = () => {
  const cover = useRef();

  useEffect(() => {
    // eslint-disable-next-line
    const animation = lottie.loadAnimation({
      animationData: animationData.default,
      container: cover.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
    });
  }, []);

  return <S.Cover ref={cover} />;
};

export default Cover;
