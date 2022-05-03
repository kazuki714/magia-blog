import { Nav } from "../../components/Nav"

export default function AboutPage() {
  return (
    <dev>
      <Nav />
      
      <div class="relative overflow-hidden h-screen">
          <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
              <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                  <h1 class="font-bold text-6xl sm:text-4xl text-black leading-tight mt-4">
                    ワイ思う故にワイあり
                  </h1>
              </div>
          </div>
      </div>

    </dev>
  )
}