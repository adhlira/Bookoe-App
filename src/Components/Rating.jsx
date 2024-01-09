const Rating = (prop) => {
  const rate = Math.round(prop.value);
  return (
    <>
      {rate == 1 ? (
        <div>
          <span className="text-amber-700">⭐</span>
        </div>
      ) : rate == 2 ? (
        <div>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
        </div>
      ) : rate == 3 ? (
        <div>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
        </div>
      ) : rate == 4 ? (
        <div>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
        </div>
      ) : (
        <div>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
          <span className="text-amber-700">⭐</span>
        </div>
      )}
    </>
  );
};

export default Rating;
