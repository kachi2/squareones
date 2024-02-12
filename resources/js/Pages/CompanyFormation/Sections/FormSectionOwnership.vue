<template>
    <div class="container mx-auto">
  <div class="mx-auto w-full max-w-2xl bg-white p-8">
    <h1 class="mb-2 text-2xl font-bold text-gray-700">Ownership</h1>
    <div class="mb-6">
      <div class="mb-4 flex justify-between">
        <input class="w-1/4 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" placeholder="Class of shares" />
        <input class="w-1/4 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" placeholder="Total number of shares" />
        <input class="w-1/4 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" placeholder="Currency" />
        <input class="w-1/4 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" placeholder="Total amount paid-up" />
      </div>
    </div>

    <div class="mb-6">
      <p class="mb-4 text-gray-700">Split the company between the founders.</p>
      <div class="mb-2 flex items-center justify-between">
        <span class="text-blue-500">John Doe</span>
        <input class="w-1/5 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" value="51%" />
      </div>
      <div class="mb-2 flex items-center justify-between">
        <span class="text-red-500">ABC LIMITED</span>
        <input class="w-1/5 appearance-none rounded border px-3 py-2 text-gray-700 shadow" type="text" value="49%" />
      </div>
      <div class="flex items-center justify-between">
        <span>Total</span>
        <span class="text-green-500">100%</span>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="mb-2 text-xl font-semibold text-gray-700">Ownership summary</h2>
      <p class="mb-4 text-gray-600">Here’s how much founders own.</p>
      <div class="mb-2 flex items-center justify-between">
        <span>Total Ownershi p</span>
        <span class="text-blue-500">A</span>
        <span class="text-red-500">B</span>
        <span class="text-gray-700">SPLIT</span>
      </div>
      <div class="mb-2 flex items-center justify-between">
        <span>50%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>

    <div class="mt-8 flex items-center justify-between">
      <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <span>Back</span>
      </button>
      <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <span>Continue</span>
      </button>
    </div>
  </div>
</div>

</template>