/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};


// The read-only `aria-valuenow` should be provided and updated

// use `aria-labelledby` if a visible label is present or `aria-label` if a visible label is not present.

// If the progress bar is describing the loading progress of a particular region of a page, include the "aria-describedby" attribute to reference the progress bar's status, and set the "aria-busy" attribute to `true` on the region until it is finished loading.

const Wrapper = styled.div`
  width: 370px;
  height: 24px; // 12px, 8px 
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px; // 4px 
  position: relative;
`;

const InnerWrapper = styled.div`
  width: calc(100% - 8px); // 100%
  height: 16px; // 100%
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
`;

const LoadingBar = styled.div`
  width: ${p => p.value + '%'};
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-label="loading" aria-valuenow={value}>
      <InnerWrapper>
        <LoadingBar value={value}></LoadingBar>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
