import Image from "next/image"
import { cn } from "@/utils"
import { Clock } from "lucide-react"

interface DiscordMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

type BadgeColor = "#43b581" | "#f04747" | "#faa61a" | "#7289da" | (string & {})

const getBadgeStyles = (color: BadgeColor) => {
  switch (color) {
    case "#43b581":
      return "bg-green-500/10 text-green-400 ring-green-500/20"
    case "#f04747":
      return "bg-red-500/10 text-red-400 ring-red-500/20"
    case "#faa61a":
      return "bg-yellow-500/10 text-yellow-300 ring-yellow-500/20"
    case "#7289da":
      return "bg-blue-500/10 text-blue-400 ring-blue-500/20"
    default:
      return "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20"
  }
}

export const DiscordMessage = ({
  avatarAlt,
  avatarSrc,
  badgeColor = "#43b581",
  badgeText,
  content,
  timestamp,
  title,
  username,
}: DiscordMessageProps) => {
  return (
    <div className="w-full flex items-start justify-start">
      <div className="flex items-center mb-2">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="rounded-full object-cover mr-3"
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded">
            APP
          </span>
          <span className="text-gray-400 ml-1.5 text-xs font-normal">
            {timestamp}
          </span>
        </div>

        <div className="bg-[#2f3136] text-sm w-full rounded mb-4 mt-1.5 p-3">
          <div className="flex flex-row items-center justify-between mb-2">
            {badgeText ? (
              <span
                className={cn(
                  "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                  getBadgeStyles(badgeColor)
                )}
              >
                {badgeText}
              </span>
            ) : null}
            <p className="text-white order-1 text-base/7 font-semibold">
              {title}
            </p>
          </div>

          {Object.entries(content).map(([key, value]) => (
            <p key={key} className="text-[#dcddde] text-sm/6">
              <span className="text-[#b9bbbe]">{key}:</span> {value}
            </p>
          ))}

          <p className="text-[#72767d] text-xs mt-2 flex items-center">
            <Clock className="size-3 mr-1" />
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}
