/// <reference types="vite/client" />

declare module '*&as=srcset' {
  const src: string;
  export default src;
}

declare module '*&as=src' {
  const src: string;
  export default src;
}

declare module '*&inline' {
  const src: string;
  export default src;
}
