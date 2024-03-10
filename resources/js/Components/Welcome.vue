<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
  <body class="bg-gray-100 p-8">
    <div class="flex mb-5 flex-col items-center justify-center">
      <div class="text-center">
        <p class="text-sm uppercase tracking-widest text-blue-900">COMPANY FORMATION</p>
        <h1 class="mt-4 text-4xl font-bold text-blue-900 md:text-5xl">Hong Kong Company Limited by Shares</h1>
        <div class="mt-6 text-lg text-blue-900 mb-10">
          <p>Welcome to Square One</p>
          <p class="mt-4 text-sm text-gray-600">This form will take approximately 5-10 mins to complete, if however, you are unable to complete it in one go, you can always save and come back anytime.</p>
          <p class="mt-2 text-sm text-gray-600">Before you start, please make sure you have the following documents ready to fast track your application.</p>
        </div>
      </div>

      <div class="rounded-lg bg-white px-10 py-10 shadow-md" style="max-width: 1029px;">
        <!-- Header -->
        <h3 class="mb-10 text-gray-400"><span class="border-b pb-2">FOR INDIVIDUALS (DIRECTORS, MEMBERS, BENEFICIAL OWNER)</span></h3>
        <!-- Content Row -->
        <div class="mb-10 flex items-center justify-between">
          <!-- Identification Proof Column -->
          <div class="flex-1 pr-2">
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-blue-500"
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
              </span>
              <h4 class="font-semibold text-blue-900">Identification Proof</h4>
            </div>
            <p class="text-sm text-gray-600">Hong Kong Identity Card / Passport / Travel Document / National Identity Card (Must have a photograph bearing the person)</p>
          </div>
          <!-- Address Proof Column -->
          <div class="flex-1 pl-2">
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-blue-500"
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </span>
              <h4 class="font-semibold text-blue-900">Address Proof</h4>
            </div>
            <p class="text-sm text-gray-600">Your latest residential address proof showing your name (e.g., utility bill or bank statement issued within the last 3 months)</p>
          </div>
        </div>
        <!-- Header -->
        <h3 class="mb-10 text-gray-400"><span class="border-b pb-2">FOR CORPORATE DIRECTORS AND MEMBERS</span></h3>
        <!-- Content Row -->
        <div class="md:flex-no-wrap flex flex-wrap justify-between">
          <!-- Left Column -->
          <div class="mb-4 flex-1 md:mb-0 md:pr-4">
            <div class="mb-7">
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Certificate of Incorporation</h4>
              </div>
              <p class="text-sm text-gray-600">A valid copy of a certificate of incorporation</p>
            </div>
            <div class="mb-7">
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Memorandum and Articles of Association</h4>
              </div>
              <p class="text-sm text-gray-600">A copy of the memorandum and articles of association</p>
            </div>
            <div class="mb-7">
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Ownership Chart</h4>
              </div>
              <p class="text-sm text-gray-600">Details of the ownership and control structure of the company</p>
            </div>
            <div>
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">All Beneficial Owners</h4>
              </div>
              <p class="text-sm text-gray-600">Documents for each beneficial owner holding more than 25% of share capital (Refer to documents for Individuals)</p>
            </div>
          </div>
          <!-- Right Column -->
          <div class="flex-1 md:pl-4">
            <div class="mb-7">
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Business Registration Certificate (if applicable)</h4>
              </div>
              <p class="text-sm text-gray-600">A valid business registration certificate</p>
            </div>
            <div class="mb-7">
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Letter of Authorization</h4>
              </div>
              <p class="text-sm text-gray-600">Written authority (including board resolution or similar written authority for corporations)</p>
            </div>
            <div>
              <div class="flex items-center">
                <span class="mr-2 text-blue-500"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                </span>
                <h4 class="font-semibold text-blue-900">Register of Directors</h4>
              </div>
              <p class="text-sm text-gray-600">Showing all the directors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="bg-white p-6 shadow-md rounded-lg border border-gray-200">
  <div class="text-xl font-semibold text-gray-800 mb-4">Pricing</div>
  <div class="text-3xl font-bold text-gray-900 mb-6">No complicated pricing structure</div>
  <div class="text-gray-600 mb-8">We believe Untitled should be accessible to all companies, no matter the size.</div>

  <div class="grid grid-cols-3 gap-4">
    <!-- Incorporation Card -->
    <div class="bg-white p-4 rounded-lg border border-gray-300 flex flex-col items-center">
      <div class="mb-4">
        <!-- Insert Icon Here -->
        <span>👤</span>
      </div>
      <div class="mb-4">
        <div class="text-lg font-semibold text-gray-700">Incorporation</div>
        <div class="text-gray-600">Business registration fee for that year being charged (renews automatically)</div>
      </div>
     
    </div>

    <!-- Second Column Placeholder -->
    <div class="bg-white p-4 rounded-lg border border-gray-300 flex flex-col">
      <div class="text-lg font-semibold text-gray-700">Features</div>
      <!-- Features List -->
      <!-- Features List with SVG Checkmarks -->
  <ul class="text-sm text-gray-600 list-none">
    <li class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500 mr-2">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>
      First year designated representative
    </li>
    <li class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500 mr-2">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>
      First year company secretary retainer
    </li>
    <li class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500 mr-2">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>
      First year annual return filing
    </li>
    <li class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500 mr-2">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>
      Guidance on statutory compliance
    </li>
    <li class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500 mr-2">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>
      Bank account opening assisting
    </li>
    </ul>
    </div>

    <!-- Price Card -->
    <div class="bg-white p-4 rounded-lg border border-gray-300 flex flex-col justify-between">
      <div>
        <div class="mb-4">
          <span class="text-4xl font-bold text-gray-800">HK$ 5,000</span>
          <span class="bg-blue-500 text-white text-sm py-1 px-3 rounded-full ml-2">Annually</span>
        </div>
        <div class="text-gray-600 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
    </div>
  </div>
</div>

    <div class="flex items-center justify-center flex-row pb-3 mt-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        
    </div>
    <div class="flex items-center justify-center"><span>I'll continue this later</span></div>
  </body>
</template>
