import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    size: 16,
    strokeWidth: 2,
    '--size': 16 + 'px',
    '--font-size': (16 / 16) + 'rem',
    '--border-bottom': `1px solid ${COLORS.black}`,
    '--padding': 4 + 'px',
    '--padding-left': 24 + 'px',
    '--height': (24 / 16) + 'rem',
  },
  'large': {
    size: 24,
    strokeWidth: 2,
    '--size': 24 + 'px',
    '--font-size': (18 / 16) + 'rem',
    '--border-bottom': `2px solid ${COLORS.black}`,
    '--padding': 8 + 'px',
    '--padding-left': 36 + 'px',
    '--height': (36 / 16) + 'rem',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = { ...SIZES[size], '--width': width + 'px' }

  return (
    <Wrapper style={styles}>
      <Input label={label} {...delegated} type="text" />
      <IconWrapper style={styles}>
        <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  padding-left: var(--padding-left);
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  height: var(--height);
  width: 100%;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray700};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

export default IconInput;
