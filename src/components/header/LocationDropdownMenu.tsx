import styled from 'styled-components';
import ImageSrc from '../../core/UI/Image';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const LocationDropdownMenu = () => {
  return (
    <Container>
      MyENV
      <div>
        Current Location
        <ImageSrc
          name="dropdown"
          width="12px"
          height="12px"
          isPointer
          style={{ marginLeft: '5px', marginBottom: '-2px' }}
        />
      </div>
    </Container>
  );
};

export default LocationDropdownMenu;
