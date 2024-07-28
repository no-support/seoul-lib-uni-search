import PropTypes from 'prop-types';

const Content = ({ src = '' }) => {
  return (
    <div className="w-full">
      <iframe className="w-full aspect-video" src={src}></iframe>
    </div>
  );
};

Content.propTypes = {
  src: PropTypes.string,
};

export default Content;
