"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Cursos",
    href: "/cursos",
  },
  {
    title: "Professores",
    href: "/professores",
  },
  {
    title: "Conferências",
    href: "/conferencias",
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {items.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Entrar</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/register">Cadastrar</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
