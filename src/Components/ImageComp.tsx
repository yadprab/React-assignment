const ImageComp = ({ imageStr }: { imageStr: string }) => {
  return (
    <div className="image--comp">
      <img src={imageStr} alt="avatar" />
    </div>
  );
};
export { ImageComp };
