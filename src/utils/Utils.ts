const getCameraAdjust = () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  const SMALL = 576;

  if (width < SMALL) {
    return 0.6;
  }
};

export { getCameraAdjust };
