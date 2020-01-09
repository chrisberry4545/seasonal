const loadingImages = [];

const createImageOnLoadPromise = (
  imageSrc: string
): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = document.createElement('img');
    image.src = imageSrc;
    loadingImages.push(image);
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
};

export const loadImage = (
  imageSrc: string
): Promise<HTMLImageElement> => {
  const onLoadPromise = createImageOnLoadPromise(imageSrc);
  return onLoadPromise;
};
