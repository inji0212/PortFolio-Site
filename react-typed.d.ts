declare module "react-typed" {
  import * as React from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    onComplete?: () => void;
    onStringTyped?: (arrayPos: number) => void;
    onLastStringBackspaced?: () => void;
    onTypingPaused?: (arrayPos: number) => void;
    onTypingResumed?: (arrayPos: number) => void;
    onReset?: () => void;
    onStop?: (arrayPos: number) => void;
    onStart?: (arrayPos: number) => void;
    onDestroy?: () => void;
  }

  const Typed: React.FC<TypedProps>;
  export default Typed;
}
