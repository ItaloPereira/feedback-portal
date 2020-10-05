import styled from 'styled-components'; 

const sizes = {
  small: {
    radius: '56px',
  },
  big: {
    radius: '160px',
  }
}

export const Container = styled.div`
  width: ${({ size }) => sizes[size].radius};
  height: ${({ size }) => sizes[size].radius};
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;