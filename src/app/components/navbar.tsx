import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="md:flex hidden justify-between items-center w-full px-[5rem] py-[1.25rem] border-b border-white">
        <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
        <div className="flex flex-row gap-3">
          <Button variant="primary" size="small">
            Contact us
          </Button>
          <Button variant="secondary" size="small">
            <Link href="https://dev.app.marblels.com/register">
              Create an account
            </Link>
          </Button>
          <Button variant="text" size="small">
            <Link href="https://dev.app.marblels.com/login">Sign in</Link>
          </Button>
        </div>
      </nav>
      <nav className="flex md:hidden justify-between items-center w-full px-[1.5rem] py-[1.25rem] border-b border-white">
        <Image src="/logo.svg" alt="Marble Legal" width={48} height={36} />
        <div className="flex flex-row gap-3">
          <Button variant="primary" size="small">
            Contact us
          </Button>
          <Image src="/menu.svg" alt="menu" width={40} height={40} />
          {/* <Button variant="secondary" size="small">
              Create an account
            </Button>
            <Button variant="text" size="small">
              Sign in
            </Button> */}
        </div>
      </nav>
    </>
  );
}
