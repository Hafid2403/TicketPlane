import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenText, LogOut, Plane, Ticket, User } from "lucide-react";
import { logout } from "./logout/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard ",
};

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className="border-b border-muted p-5">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-primary">Plane Project</span>
            </div>
          </nav>
          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
              <div className="space-y-2">
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/"}>Dashboard</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="uppercase text-xs font-bold">Data</div>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/airplanes"}>
                    <Plane className="mr-2 w-4 h-4" />
                    Airplane
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href="/dashboard/Flight">
                    <BookOpenText className="mr-2 w-4 h-4" />
                    Flights
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href="/dashboard/ticket">
                    <Ticket className="mr-2 w-4 h-4" />
                    Tickets
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href="/dashboard/user">
                    <User className="mr-2 w-4 h-4" />
                    Users
                  </Link>
                </Button>
              </div>
               <div className="space-y-2">
                <form action={logout}>
                <Button
                  variant={"destructive"}
                  type="submit"
                  className="w-full justify-start"
                >   
                 <LogOut className="mr-2 h-4 w-4"/>
                      Logout    
                </Button>
                </form>
              </div>
            </section>
              <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto">
            {children}
          </section>
          </section> 
        </section>
      </body>
    </html>
  );
}
