import Link from "next/link";
import MaxWidthComponent from "./MaxWidthComponent";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthComponent>
        <div className="flex h-14 items-center justify-between border-b border-green-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span> Dilsah❤️ </span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex cursor-pointer">
            <>
              <Link href={"/pricing"}>
                <Button className="cursor-pointer" variant={"ghost"}>
                  Pricing
                </Button>
              </Link>
            </>
          </div>
        </div>
      </MaxWidthComponent>
    </nav>
  );
};

export default Navbar;
