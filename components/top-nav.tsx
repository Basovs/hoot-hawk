"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export default function TopNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between gap-2">
      <Link href="/">
        <Button
          size="sm"
          variant="link"
          className={pathname === "/" ? "font-bold" : ""}
        >
          Uz Sākumu
        </Button>
      </Link>

      <Link href="/about-us">
        <Button
          size="sm"
          variant="link"
          className={pathname === "/about-us" ? "font-bold" : ""}
        >
          Par Mums
        </Button>
      </Link>
    </div>
  )
}
