/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--wrapper-height': 8 + 'px',
    '--wrapper-padding': 0,
    '--wrapper-radius': 4 + 'px',
    '--bar-height': 8 + 'px',
    '--bar-radius': 4 + 'px'
  },
  medium: {
    '--wrapper-height': 12 + 'px',
    '--wrapper-padding': 0,
    '--wrapper-radius': 4 + 'px',
    '--bar-height': 12 + 'px',
    '--bar-radius': 4 + 'px'
  },
  large: {
    '--wrapper-height': 24 + 'px',
    '--wrapper-padding': 4 + 'px',
    '--wrapper-radius': 8 + 'px',
    '--bar-height': 16 + 'px',
    '--bar-radius': 4 + 'px'
  }
}

const clamp = (value, minimum, maximum) => {
  if (value > maximum) {
    return maximum
  }

  if (value < minimum) {
    return minimum
  }

  return value
}

const calcRadius = ({ value }) => {
  if (value >= 100) {
    return 4
  }

  if (value < 100 && value > 99) {
    return 2
  }

  return 0
}

const ProgressBar = ({ value, size }) => {
  value = clamp(value, 0, 100)
  return <Wrapper style={SIZES[size]} role='progressbar' aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <Bar style={SIZES[size]} value={value} size={size}>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Bar>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--wrapper-height);
  padding: var(--wrapper-padding);
  border-radius: var(--wrapper-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
  width: ${p => p.value + '%'};
  height: var(--bar-height);
  background-color: ${COLORS.primary};
  border-top-left-radius: var(--bar-radius);
  border-bottom-left-radius: var(--bar-radius);
  border-top-right-radius: ${p => calcRadius(p) + 'px'};
  border-bottom-right-radius: ${p => calcRadius(p) + 'px'};
`

export default ProgressBar;
