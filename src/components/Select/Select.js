import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <DropDown value={value} onChange={onChange}>
        {children}
      </DropDown>
      <SelectedText>{displayedValue}</SelectedText>
      <DownArrow 
        id={'chevron-down'}
        size={24}
        strokeWidth={2}
      ></DownArrow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  height: 43px;
  width: fit-content;
  border-radius: 8px;
  position: relative;
  padding-right: 18px;

  &:focus {
    border: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const DropDown = styled.select`
  position: absolute;
  z-index: 1;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const DownArrow = styled(Icon)`
  position: relative;
  top: 6px;
  display: inline-block;
`;

const SelectedText = styled.p`
  padding: 16px;
  width: fit-content;
  display: inline-block;
  margin-top: -2px;
`;

export default Select;
