<template>
    <div class="w-3/5 p-5 bg-gray-100">
        <div class="bg-white p-8 rounded-md shadow-md">
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
        </div>
    </div>
    <div class="w-2/5 p-5 text-sm" style="background: #F6F9FB">
        <div class="h-full p-5">
            <h3 class="font-semibold mb-3">What are the restrictions on naming my company?</h3>
            <p class="mb-5">Your company name should be unique and not be too similar to any existing company registered in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability and should not contain restricted terms or imply government affiliation without permission.</p>
            <h3 class="font-semibold mb-3">Can I include both English and Chinese in my company name?</h3>
            <p class="mb-5">Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a direct translation of the English name and only Traditional Chinese characters are accepted by the Hong Kong Companies Registry.</p>
            <h3 class="font-semibold mb-3">What should I do if my preferred company name is already taken?</h3>
            <p class="mb-5">It's advisable to have alternative names ready. You can prioritize your preferred names when filling out this form, and we will register in order of preference. If all listed names are taken, you will be contacted to provide additional names.</p>
        </div> 
    </div>
</template>