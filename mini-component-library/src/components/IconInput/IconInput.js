import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {},
  'large': {}
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <Input label={label} placeholder={placeholder} type="text" />
      <IconWrapper style={{ '--size': 16 + 'px' }}>
        <Icon id={icon} size={16} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px;
  padding-left: 26px;
  color: ${COLORS.gray500};
  font-weight: 700;

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
