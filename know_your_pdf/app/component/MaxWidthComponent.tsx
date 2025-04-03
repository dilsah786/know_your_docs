import { ReactNode } from "react";
import { cn } from "../config/utils";

const MaxWidthComponent = ({
  className,
  children,
}: {
  className?: string; // ✅ Changed from `String` to `string`
  children: ReactNode;
}) => {
  console.log(className);
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className // ✅ Ensure `cn` can handle `undefined`
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthComponent;
