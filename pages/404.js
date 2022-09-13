import { Nav } from "../components/Nav";

export default function Custom404() {
  return (
    <div>
      <main className="main">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="flex flex-col items-center">
              <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">404</h1>

              <p class="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">Page not found</p>

              <a href="/" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Go home</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
