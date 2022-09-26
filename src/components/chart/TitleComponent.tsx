import { memo } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 20px;
`;

const TitleComponent = () => {
  return (
    <Title>
      <div>
        <span style={{ color: '#80dcff' }}>Tide</span>
        <span style={{ color: '#afc7d0', fontSize: '20px' }}>•</span>
        <span style={{ color: '#f98a00' }}> Sunrise & Sunset</span>
      </div>
    </Title>
  );
};

export default memo(TitleComponent);
