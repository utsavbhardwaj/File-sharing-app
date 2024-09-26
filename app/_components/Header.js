import React from 'react'

function Header() {
  return (
    <div>
       <header  style={{ backgroundColor: '#182c54' }}>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b" >
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
         <img src= "./logo.svg" width={50} height={75} />
          <span class="sr-only">Home</span>
         
    
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-white transition hover:text-blue-500/75" href="#"> Home </a>
            </li>

            <li>
              <a class="text-white transition hover:text-blue-500/75" href="/upload"> Upload </a>
            </li>

            <li>
              <a class="text-white transition hover:text-blue-500/75" href="#"> About Us  </a>
            </li>

            <li>
              <a class="text-white transition hover:text-blue-500/75" href="#"> Contact Us </a>
            </li>

            <li>
              <a class="text-white transition hover:text-blue-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/sign-in"
            >
              Login
            </a>

            <div class="hidden sm:flex">
              <a
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                href="/sign-up"
              >
                Register
              </a>
            </div>
          </div>

          <div class="block md:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header
