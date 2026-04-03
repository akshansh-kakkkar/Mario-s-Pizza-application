const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-[#FFF8EF] items-center">
      <lord-icon
        src="https://cdn.lordicon.com/urdbeoyx.json"
        trigger="loop"
        delay="300"
        colors="primary:#629110,secondary:#c71f16"
        style={{ width: 120, height: 120 }}
      ></lord-icon>{" "}
    </div>
  );
};

export default Loader;
