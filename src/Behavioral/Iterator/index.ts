
// Image interface
export interface Image {
  id: number;
  url: string;
}
// Iterator interface
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | undefined;
  reset():T ;
}

// Iterable interface
interface Iterable<T> {
  createIterator(): Iterator<T>;
}


// Concrete Iterator for Image Carousel
class ImageIterator implements Iterator<Image> {
  private index: number = 0;

  constructor(private images: Image[]) {}
    reset(): Image {
        this.index =0 ;

        return this.images[this.index];
    }

  hasNext(): boolean {
    return this.index < this.images.length;
  }

  next(): Image | undefined {
    return this.hasNext() ? this.images[this.index++] : undefined;
  }
}

// Concrete Iterable for Image Carousel
export class ImageCarousel implements Iterable<Image> {
  private images: Image[] = [];

  constructor(images: Image[]) {
    this.images = images;
  }

  createIterator(): Iterator<Image> {
    return new ImageIterator(this.images);
  }
}


