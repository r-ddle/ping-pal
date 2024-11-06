import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "@/lib/client"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/heading"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Rocket, Star } from "lucide-react"
import { CreateEventCategory } from "@/components/create-modal"

export const DashboardEmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickStartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickStartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userCategories"] })
    },
  })

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <div className="flex justify-center w-full">
        <img
          src="https://t4.ftcdn.net/jpg/01/68/01/87/240_F_168018748_qmW17F6anXnw8ah9odplfSBQfXXyD9cu.jpg"
          alt="No Categories"
          className="size-48 -mt-24 rounded-full"
        />
      </div>
      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        No Event Categories Yet
      </h1>
      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        Start tracking events by creating your first category.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant="outline"
          className="flex items-center space-x-2 w-full sm:w-auto"
          onClick={() => insertQuickStartCategories()}
          disabled={isPending}
        >
          {isPending ? (
            <span>Creating...</span>
          ) : (
            <>
              <Rocket />
              <span>Create Category</span>
            </>
          )}
        </Button>

        <CreateEventCategory>
          <Button className="flex items-center space-x-2 w-full sm:w-auto">
            <span>Add Category</span>
          </Button>
        </CreateEventCategory>
      </div>
    </Card>
  )
}
