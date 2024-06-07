const getCameraAdjust = () => {
  const width = document.documentElement.clientWidth;

  const SMALL = 600;
  const MEDIUM = 900;

  if (width < SMALL) {
    return 0.6;
  }
  if (width < MEDIUM) {
    return 1;
  }
};

export { getCameraAdjust };
