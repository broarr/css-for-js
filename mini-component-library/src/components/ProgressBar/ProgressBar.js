/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--wrapper-height': 8 + 'px',
    '--wrapper-width': 370 + 'px',
    '--wrapper-padding': 0,
    '--wrapper-radius': 4 + 'px',
    '--bar-height': 8 + 'px',
    '--bar-radius': 4 + 'px'
  },
  medium: {
    '--wrapper-height': 12 + 'px',
    '--wrapper-width': 370 + 'px',
    '--wrapper-padding': 0,
    '--wrapper-radius': 4 + 'px',
    '--bar-height': 12 + 'px',
    '--bar-radius': 4 + 'px'
  },
  large: {
    '--wrapper-height': 24 + 'px',
    '--wrapper-width': 370 + 'px',
    '--wrapper-padding': 4 + 'px',
    '--wrapper-radius': 8 + 'px',
    '--bar-height': 16 + 'px',
    '--bar-radius': 4 + 'px'
  }
}

const genBarStyles = ({ value, size }) => {
  const barWidth = (size === 'large') ? 370 - 8 : 370;
  const width = (value/100) * barWidth;

  let rightRadius; 
  if (size === 'large') {
    if (value > 99 && value < 100) {
      rightRadius = 2 + 'px';
    } else if (value >= 100) {
      rightRadius = 4 + 'px';
    }
  } else if (size === 'medium') {
    rightRadius = 4 + 'px';
  } else {
    rightRadius = 4 + 'px';
  }

  return {
    '--bar-width': width + 'px',
    '--bar-right-radius': rightRadius,
  }
}

const ProgressBar = ({ value, size }) => {
  const barStyles = genBarStyles({ value, size })
  return <Wrapper style={SIZES[size]}>
    <Bar style={{...SIZES[size], ...barStyles}} value={value} size={size}>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Bar>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: var(--wrapper-width);
  height: var(--wrapper-height);
  padding: var(--wrapper-padding);
  border-radius: var(--wrapper-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: ${COLORS.primary};
  border-top-left-radius: var(--bar-radius);
  border-bottom-left-radius: var(--bar-radius);
  border-top-right-radius: var(--bar-right-radius);
  border-bottom-right-radius: var(--bar-right-radius);
`

export default ProgressBar;
