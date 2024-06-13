import PropTypes from "prop-types";

function VideoContainer({ videoId }) {
  return (
    <div className="flex justify-center mx-auto sm:w-[640px] md:text-3xl md:w-[768px] lg:w-[1024px]">
      <iframe
        className="border-4 border-sky-700"
        width="768"
        height="420"
        src={`https://www.youtube.com/embed/${videoId}`}
        title= ""
        allowFullScreen
        // sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      ></iframe>
    </div>
  );
}

VideoContainer.propTypes = {
  videoId: PropTypes.string,
};

export default VideoContainer;
