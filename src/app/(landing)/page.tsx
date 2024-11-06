import { MockDiscordUI } from "@/components/mock-discord-ui"
import { CoolButton } from "../../components/cool-button"
import { Heading } from "../../components/heading"
import { MaxWidthWrapper } from "../../components/max-width-wrapper"
import { Badge, Check, Star, StarHalf, User, Verified } from "lucide-react"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord.message"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import ShinyButton from "@/components/ui/shiny-button"
import Link from "next/link"

const Page = () => {
  const codeSnippet = `await fetch("https://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
      category: "sales",
      fields: {
      plan: "PRO",
      email: "nLhZx@example.com",
      amount: 30.00
      }
  }),
  headers: {
  Authorization: "Bearer <YOUR_API_KEY>",
  }
      })`

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="text-zinc-950 relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                Real-Time SaaS Insights,
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-600 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPal is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-time Discord alert for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <CoolButton className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
              </CoolButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Discord Mock UI */}
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-pfp.jpg"
                    avatarAlt="PingPal"
                    username="PingPal"
                    timestamp="Today at 4:30 PM"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="🤵 New user signed up"
                    content={{
                      name: "Tom Riddle",
                      email: "q9Pb2@example.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-pfp.jpg"
                    avatarAlt="PingPal"
                    username="PingPal"
                    timestamp="Today at 6:12 AM"
                    badgeText="Block"
                    badgeColor="#faa61a"
                    title="🚫 Payment Blocked"
                    content={{
                      name: "Anon Hacker",
                      email: "hack@hacker.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-pfp.jpg"
                    avatarAlt="PingPal"
                    username="PingPal"
                    timestamp="Yesterday at 1:20 PM"
                    badgeText="Approved"
                    badgeColor="#5865f2"
                    title="✅ Payment Approved"
                    content={{
                      name: "Jack Logan",
                      email: "jacklogan243@gmail.com",
                      plan: "PRO",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real-time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get notified about critical evnets the moment they happen,
                    no matter if you're at home or on the go
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type-inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src=""
                      alt="Phone screen displaying the app"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* second bento element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Event
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    From new user signups to successful payments, PingPanda
                    notifies you for all critical events in your SaaS.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/pingpal-any-event.png"
                    alt="illustration of the event tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* third bento element */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Add any custom data you like to an event, such as a user
                    email, a purchase amount or an exceeded quota.
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/pingpal-custom-data.png"
                    alt="illustration of custom data tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>

            {/* fourth bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Easy Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Connect PingPal with your existing workflows in minutes and
                    call our intuitive logging API from any language.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/20 px-4 py-2 text-white">
                          pingpal.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Customer Review */}
      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experiences
            </h2>
            <Heading>What our customers say</Heading>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* first customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                PingPal is a game-changer for me. I've been using it for a few
                months now and seeing sales pop up in real-time is super cool.
              </p>
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <User width={48} height={48} />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center gap-1">
                    Tom Riddle{" "}
                    <span className="flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                      PRO
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* second customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <StarHalf className="size-5 text-brand-600 fill-brand-600" />
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                I regret using PingPal. I thought it was cool at first, but it
                gets old quickly. Now, I just ignore the pings and focus on more
                important things... like my cat's Instagram account.
              </p>
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <User width={48} height={48} />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center gap-1">
                    Joe Ranfurt{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CoolButton
            href="/sign-up"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start for Free Today
          </CoolButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default Page
