import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// ! MINE
// const Select = ({ label, value, onChange, children }) => {
//   const displayedValue = getDisplayedValue(value, children);

//   return (
//     <Wrapper>
//       <DropDown value={value} onChange={onChange}>
//         {children}
//       </DropDown>
//       <SelectedText>{displayedValue}</SelectedText>
//       <DownArrow 
//         id={'chevron-down'}
//         size={24}
//         strokeWidth={2}
//       ></DownArrow>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   color: ${COLORS.gray700};
//   background-color: ${COLORS.transparentGray15};
//   height: 43px;
//   width: fit-content;
//   border-radius: 8px;
//   position: relative;
//   padding-right: 18px;

//   &:focus {
//     border: 2px solid ${COLORS.primary};
//   }

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const DropDown = styled.select`
//   position: absolute;
//   z-index: 1;
//   opacity: 0;
//   height: 100%;
//   width: 100%;
// `;

// const DownArrow = styled(Icon)`
//   position: relative;
//   top: 6px;
//   display: inline-block;
// `;

// const SelectedText = styled.p`
//   padding: 16px;
//   width: fit-content;
//   display: inline-block;
//   margin-top: -2px;
// `;

// =================================
// ! HIS

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children} 
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212212;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  // Using "pointer-events: none" handles the issue of
  // clicking what is "behind" the element without dealing
  // with z-index.
  pointer-events: none;
`;

export default Select;
