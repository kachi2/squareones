<template>
    <div class="w-3/5 p-5 bg-gray-100">
        <div class="bg-white p-8 rounded-md shadow-md">
            <div class="container mx-auto">
                <div class="mx-auto w-full max-w-xl bg-white p-8">
                    <h1 class="mb-4 text-2xl font-bold text-gray-700">Company Secretary</h1>

                    <div class="mb-6">
                    <label class="mb-2 block text-sm font-bold text-gray-700" for="type"> Company Secretary Details </label>
                    <label class="mb-1 block text-sm font-bold text-gray-700" for="type"> Type </label>
                    <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="type" type="text" placeholder="Corporate" />

                    <label class="mb-1 block text-sm font-bold text-gray-700" for="name-english"> Name in English </label>
                    <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="name-english" type="text" placeholder="Company name" />

                    <label class="mb-1 block text-sm font-bold text-gray-700" for="name-chinese"> Name in Chinese </label>
                    <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="name-chinese" type="text" placeholder="Company name in Chinese" />

                    <div class="mb-3 flex justify-between">
                        <div class="mr-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="registration-no"> Company registration no. </label>
                        <input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="registration-no" type="text" />
                        </div>
                        <div class="ml-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="country-registered"> Country registered in </label>
                        <div class="relative">
                            <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="country-registered">
                            <!-- Insert country options here -->
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <!-- SVG for the dropdown arrow -->
                            </div>
                        </div>
                        </div>
                    </div>

                    <label class="mb-1 block text-sm font-bold text-gray-700" for="address"> Address </label>
                    <div class="relative">
                        <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="address">
                            <option></option>
                        </select>
                    </div>

                    <label class="mb-1 block text-sm font-bold text-gray-700" for="license-no"> License No. </label>
                    <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="license-no" type="text" />

                    <label class="mb-1 block text-sm font-bold text-gray-700" for="email"> Email </label>
                    <input class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="email" type="email" />
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                    <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        <span>Back</span>
                    </button>
                    <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        <span>Continue</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>    
    <div class="w-2/5 p-5 text-sm" style="background: #F6F9FB">
        <div class="h-full p-5">
            
        </div> 
    </div>
</template>