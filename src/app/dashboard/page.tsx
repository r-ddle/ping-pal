import { DashboardPageContent } from "@/app/dashboard/dashboard-page-content"
import { CreateEventCategory } from "@/components/create-modal"
import { DashboardPage } from "@/components/dashboard-page"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <DashboardPage
      cta={
        <CreateEventCategory>
          <Button className="w-full flex-1 h-10 sm:w-fit">
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventCategory>
      }
      title="Dashboard"
    >
      <DashboardPageContent />
    </DashboardPage>
  )
}

export default Page
