/// <reference types="vite/client" />

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default SVG;
}
