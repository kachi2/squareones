<template>
    <div class="w-3/5 p-5 bg-gray-100">
        <div class="bg-white p-8 rounded-md shadow-md">
            <div class="container mx-auto">
                <div class="w-full max-w-lg mx-auto bg-white p-8">
                    <h1 class="text-2xl font-bold text-gray-700 mb-6">Activities</h1>
                    <p class="text-gray-600 mb-4">Detail your company's primary business operations below.</p>

                    <label class="block text-gray-700 text-sm font-bold mb-2" for="business-activities">
                    Describe your expected business activities
                    </label>
                    <span class="text-sm text-gray-700">Provide a brief but clear description of your anticipated business activities. Be as specific as possible to ensure accurate representation in your business</span>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="business-activities"></textarea>
                    <p class="text-sm text-gray-700 mb-6 text-right">No minimum characters</p>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="level-activity">
                        Level of activity
                    </label>
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="level-activity">
                        <!-- Insert options here -->
                    </select>
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nature-activity">
                        Nature of activity
                    </label>
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="nature-activity">
                        <!-- Insert options here -->
                    </select>
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="customer-location">
                        Customer location and operation
                    </label>
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="customer-location">
                        <!-- Insert options here -->
                    </select>
                    </div>

                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="list-countries">
                        List of countries
                    </label>
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="list-countries">
                        <!-- Insert options here -->
                    </select>
                    </div>

                    <div class="flex items-center justify-between mt-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Back
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Continue
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