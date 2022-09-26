import styled from 'styled-components';
import ImageSrc from '../../core/UI/Image';

const Container = styled.div`
  color: black;
  max-width: 100px;
  padding: 10px 0;
  text-align: center;
  width: 25%;
`;

const AddItem = () => {
  return (
    <Container>
      <ImageSrc name="add" width="35px" height="35px" isPointer style={{ marginTop: '12px' }} />
      <div>Add</div>
    </Container>
  );
};

export default AddItem;
