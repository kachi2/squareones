<template>
<div class="container mx-auto">
  <div class="mx-auto w-full max-w-xl bg-white p-8">
    <h1 class="mb-4 text-2xl font-bold text-gray-700">Sign</h1>
    <p class="mb-6 text-gray-600">When you’re ready, sign your documents and we’ll set up your company.</p>

    <div class="mb-6">
      <h2 class="mb-2 text-lg font-semibold text-gray-700">Incorporation</h2>

      <div class="mb-4">
        <p class="mb-1 flex items-center text-gray-700">
          <span class="mr-2">📄</span>
          Incorporation Form (NNC1)
        </p>
        <p class="ml-6 text-gray-600">We file this with the Companies Registry.</p>
      </div>

      <div class="mb-4">
        <p class="mb-1 flex items-center text-gray-700">
          <span class="mr-2">📄</span>
          Articles of Association (AA)
        </p>
        <p class="ml-6 text-gray-600">The Articles of Association is a document that outlines the regulations for a company's operations and the structure of its internal governance.</p>
      </div>

      <div class="mb-4">
        <p class="mb-1 flex items-center text-gray-700">
          <span class="mr-2">✔️</span>
          Notice to Business Registration Office (IRBR1)
        </p>
        <p class="ml-6 text-gray-600">Notify the Inland Revenue for business registration.</p>
        <ul class="ml-10 list-inside list-disc text-gray-600">
          <li>This makes application for the purpose of business registration.</li>
          <li>Business registration is renewed on an annual basis if elected to obtain 1-year Business Registration Certificate.</li>
          <li>This shows your business address, and the nature of your business.</li>
        </ul>
      </div>
    </div>

    <button class="mb-6 rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:bg-gray-100">Preview your documents</button>

    <div class="mb-6">
      <p class="mb-2 text-gray-700">Signed by John Doe on December 26, 2023</p>
      <div class="flex items-center">
        <span class="mr-2">✍️</span>
        <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" type="text" placeholder='Enter "John Doe" to sign' />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" type="button">Back</button>
      <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" type="button">Continue</button>
    </div>
  </div>
</div>

</template>