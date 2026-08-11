import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

import { Button } from "@/components/ui/button"

export default async function Home() {
  const { userId } = await auth()

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-bold">Moxie starter workspace</h1>
      <p className="text-zinc-600">
        This page demonstrates Clerk auth and a shadcn-style button component.
      </p>

      <div className="flex items-center gap-3">
        {!userId ? (
          <>
            <Button asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </>
        ) : (
          <>
            <UserButton />
            <Button asChild>
              <Link href="/dashboard">Go to protected page</Link>
            </Button>
          </>
        )}
      </div>
    </main>
  )
}
