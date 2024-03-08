<template>
    <div class="w-3/5 p-5 bg-gray-100">
        <div class="bg-white p-8 rounded-md shadow-md">
            <div class="container mx-auto">
                <div class="mx-auto w-full max-w-2xl bg-white p-8">
                    <h1 class="mb-4 text-2xl font-bold text-gray-700">Source of Funds</h1>

                    <div class="mb-6">
                    <div class="mb-4 flex justify-between">
                        <div class="mr-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="expected-source"> Expected source of funds </label>
                        <div class="relative">
                            <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="expected-source">
                            <!-- Insert options here -->
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <!-- Dropdown Icon -->
                            </div>
                        </div>
                        </div>
                        <div class="ml-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="origin-funds"> Origin of funds </label>
                        <div class="relative">
                            <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="origin-funds">
                            <!-- Insert options here -->
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <!-- Dropdown Icon -->
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="mb-4 flex justify-between">
                        <div class="mr-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="initial-source"> Initial source of wealth </label>
                        <div class="relative">
                            <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="initial-source">
                            <!-- Insert options here -->
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <!-- Dropdown Icon -->
                            </div>
                        </div>
                        </div>
                        <div class="ml-2 w-1/2">
                        <label class="mb-1 block text-sm font-bold text-gray-700" for="ongoing-source"> Ongoing source of income </label>
                        <div class="relative">
                            <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="ongoing-source">
                            <!-- Insert options here -->
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <!-- Dropdown Icon -->
                            </div>
                        </div>
                        </div>
                    </div>
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
            <h3 class="font-semibold mb-3">Why do I need to disclose the source of funds and wealth?</h3>
            <p class="mb-5">Disclosure of the source of funds and wealth is a regulatory requirement to comply with anti-money laundering laws. It helps maintain financial transparency and accountability.</p>
            <h3 class="font-semibold mb-3">What qualifies as a source of funds?</h3>
            <p class="mb-5">The source of funds refers to the origin of the capital you will invest in the company, such as personal savings, loan or credit, investment income, or any other legitimate source.</p>
            <h3 class="font-semibold mb-3">Can the source of wealth and source of funds be the same?</h3>
            <p class="mb-5">Yes, they can be the same if your initial wealth, which is funding the company, comes from a consistent ongoing source, such as a business or employment income.</p>
        </div> 
    </div>
</template>