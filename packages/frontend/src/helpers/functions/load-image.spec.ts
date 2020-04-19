import { loadImage } from './load-image';

describe('loadImage', () => {
  let img: HTMLImageElement;
  let loadFunction: () => void;
  const imgUrl = 'http://image.com';

  beforeEach(() => {
    loadFunction = jest.fn();
    img = {
      addEventListener: (event: string, func: () => void) => {
        loadFunction = func;
      }
    } as HTMLImageElement;
    jest.spyOn(document, 'createElement')
      .mockReturnValue(img);
  });

  test('does not resolve if the image is not loaded', () => {
    let res: HTMLImageElement;
    loadImage(imgUrl).then((result) => {
      res = result;
    });
    expect(res!).toBeUndefined();
  });

  test('resolves when the image is loaded', (done) => {
    loadImage(imgUrl).then((result) => {
      expect(result.src).toBe(imgUrl);
      done();
    });
    loadFunction();
  });

});
