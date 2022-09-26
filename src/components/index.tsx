import styled from 'styled-components';
import HeaderContent from './header/HeaderContent';

const BackgroundHeader = styled.div`
  background-image: linear-gradient(#0068cc, #70b9ff);
`;

const Header = () => {
  return (
    <BackgroundHeader>
      <HeaderContent />
    </BackgroundHeader>
  );
};

export default Header;
