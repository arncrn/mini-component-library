/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role

// The read-only `aria-valuenow` should be provided and updated

// use `aria-labelledby` if a visible label is present or `aria-label` if a visible label is not present.

// If the progress bar is describing the loading progress of a particular region of a page, include the "aria-describedby" attribute to reference the progress bar's status, and set the "aria-busy" attribute to `true` on the region until it is finished loading.
// ! mine
// const Wrapper = styled.div`
//   width: 370px;
//   height: var(--height);
//   background-color: ${COLORS.transparentGray15};
//   border-radius: var(--border-radius);
//   position: relative;
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
// `;

// const DefaultBar = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0px;
//   bottom: 0px;
//   left: 0px;
//   right: 0px;
//   margin: auto;
//   border-radius: 4px;
//   overflow: hidden;
// `;

// const LargeBar = styled(DefaultBar)`
//   width: calc(100% - 8px);
//   height: 16px;
// `;

// const LoadingProgress = styled.div`
//   width: ${p => p.value + '%'};
//   height: 100%;
//   background-color: ${COLORS.primary};
// `;

// const SIZES = {
//   large: {
//     '--height': '24px',
//     '--border-radius': '8px',
//   },
//   medium: {
//     '--height': '12px',
//     '--border-radius': '4px',
//   }, 
//   small: {
//     '--height': '8px',
//     '--border-radius': '4px',
//   },
// };

// const ProgressBar = ({ value, size }) => {
//   const styles = SIZES[size];
//   let Component;

//   if (size === 'large') {
//     Component = LargeBar;
//   } else {
//     Component = DefaultBar;
//   }

//   return (
//     <Wrapper
//       role="progressbar"
//       aria-label="loading"
//       aria-valuenow={value}
//       style={styles}
//     >
//       <Component>
//         <LoadingProgress value={value}></LoadingProgress>
//       </Component>
//     </Wrapper>
//   );
// };

// ==========================
// ! his
const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;