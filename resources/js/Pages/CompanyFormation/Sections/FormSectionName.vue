<template>
    <div class="container mx-auto">
        <div class="mx-auto w-full max-w-2xl bg-white p-8">
            <div class="mb-4">
                <h1 class="text-2xl font-bold text-gray-700">Name</h1>
                <p class="text-gray-600">Enter your preferred company names in order of priority.</p>
            </div>

            <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="primary-choice"> Primary Choice </label>
                <p class="mb-2 text-gray-600">This is your most preferred company name. Ensure it is the legal name intended for registration.</p>
                <div class="flex">
                    <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="primary-choice-english" type="text" placeholder="This text for English name" />
                    <button class="ml-2 inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
                    <span>dropdown</span>
                    </button>
                </div>
                <div class="mt-4 flex">
                    <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="primary-choice-chinese" type="text" placeholder="This text for Chinese name" />
                    <button class="ml-2 inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
                    <span>dropdown</span>
                    </button>
                </div>
            </div>

            <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="secondary-choices"> Secondary Choices </label>
                <p class="mb-2 text-gray-600">These are alternative names you would consider should your primary choice be unavailable. List them in descending order of preference.</p>
                <div class="flex">
                    <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="secondary-choice-english" type="text" placeholder="This text for English name" />
                    <button class="ml-2 inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
                    <span>dropdown</span>
                    </button>
                </div>
                <div class="mt-4 flex">
                    <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="secondary-choice-chinese" type="text" placeholder="This text for Chinese name" />
                    <button class="ml-2 inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
                    <span>dropdown</span>
                    </button>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <button class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none" type="button">Add Another Name</button>
                <p class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800" onclick="alert('You can suggest up to 5 names. Once you reach the limit, this button will be disabled.')">?</p>
            </div>
        </div>
    </div>
</template>