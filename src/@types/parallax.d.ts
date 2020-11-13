declare module 'parallax-js' {
  export default class Parallax {
    private inputElement?: string | HTMLElement | null;

    public relativeInput?: boolean;
    public clipRelativeInput?: boolean;
    public pointerEvents?: boolean;
    public hoverOnly?: boolean;
    public selector?: string | null;
    public onReady?: () => void;

    constructor(element: HTMLElement, options?: IParallaxOptions);

    public enable(): void;
    public disable(): void;
    public destroy(): void;
    public version(): void;
    public setInputElement(element: string | HTMLElement | null): void;
  }

  export interface IParallaxOptions {
    relativeInput?: boolean;
    clipRelativeInput?: boolean;
    hoverOnly?: boolean;
    inputElement?: string | HTMLElement | null;
    pointerEvents?: boolean;
    selector?: string | null;
    onReady?: () => void;
  }
}