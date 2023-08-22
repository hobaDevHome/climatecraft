const videos = ["rain", "sun", "wind"];

const Video = () => {
  let randomIndex = Math.floor(Math.random() * videos.length);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <video
        src={`../../public/videos/${videos[randomIndex]}.mp4`}
        width="80%"
        height="auto"
        autoPlay
        loop
      />
    </div>
  );
};

export default Video;
