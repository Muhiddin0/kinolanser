declare module 'sakura-js/dist/sakura.min.js' {
  export const Sakura: {
    (selector: string, options?: SakuraOptions): SakuraInstance;
  };

  interface SakuraOptions {
    className?: string;
    fallSpeed?: number;
    maxSize?: number;
    minSize?: number;
    delay?: number;
    colors?: SakuraColor[];
  }

  interface SakuraColor {
    gradientColorStart: string;
    gradientColorEnd: string;
    gradientColorDegree: number;
  }

  interface SakuraInstance {
    start(): void;
    stop(removeElements?: boolean): void;
  }
}
