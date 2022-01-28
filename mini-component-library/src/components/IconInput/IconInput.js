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
    '--padding-left': 16 + 8 + 'px',
    '--height': (24 / 16) + 'rem',
  },
  'large': {
    size: 24,
    strokeWidth: 2,
    '--size': 24 + 'px',
    '--font-size': (18 / 16) + 'rem',
    '--border-bottom': `2px solid ${COLORS.black}`,
    '--padding': 8 + 'px',
    '--padding-left': 24 + 18 + 'px',
    '--height': (36 / 16) + 'rem',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = { ...SIZES[size], '--width': width + 'px' }

  return (
    <Wrapper style={styles}>
      <Input label={label} placeholder={placeholder} type="text" />
      <IconWrapper style={styles}>
        <Icon id={icon} size={styles.size} strokeWidth={styles.strokeWidth} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`

const Input = styled.input`
  border: none;
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  padding-left: var(--padding-left);
  color: ${COLORS.gray500};
  font-weight: 700;
  font-size: var(--font-size);
  height: var(--height);
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray700};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  color: ${COLORS.gray700};
  pointer-events: none;

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`

export default IconInput;
