import ImageSrc from '../../core/UI/Image';
import styled from 'styled-components';
import LocationDropdownMenu from './LocationDropdownMenu';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px 30px;
`;

const HeaderTop = () => {
  return (
    <Container>
      <ImageSrc name="menu" width="30px" height="42px" isPointer />
      <LocationDropdownMenu />
      <ImageSrc name="bell" width="30px" height="42px" isPointer />
    </Container>
  );
};

export default HeaderTop;
