import PropTypes from 'prop-types';
import Content from '@/component/Content';

const Main = ({ src }) => {
  return (
    <div className="flex">
      <Content src={src} />
    </div>
  );
};
Main.propTypes = {
  src: PropTypes.string,
};

export default Main;
