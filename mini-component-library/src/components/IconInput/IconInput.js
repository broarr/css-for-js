import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  'large': {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size]

  return (
    <Wrapper>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.borderThickness} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        label={label}
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem,'
        }}
      />
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  height: var(--height);
  width: var(--width);
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
