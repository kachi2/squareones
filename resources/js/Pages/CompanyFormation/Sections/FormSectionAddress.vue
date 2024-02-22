<template>
    <div class="w-3/5 p-5 bg-gray-100">
        <div class="bg-white p-8 rounded-md shadow-md">
            <div class="container mx-auto">
                <div class="mx-auto w-full max-w-2xl bg-white p-8">
                    <div class="mb-4">
                        <h2 class="text-2xl font-bold text-gray-700">Registered Address</h2>
                        <label class="block text-gray-700 mb-1">Registered office address</label>
                    </div>
                    <input type="text" class="w-full border rounded p-2 mb-2"/>
                    <input type="text" class="w-full border rounded p-2 mb-2"/>
                    <input type="text" class="w-full border rounded p-2 mb-2"/>
                    <input type="text" class="w-full border rounded p-2 mb-2"/>
                    <select class="w-full border rounded p-2">
                        <option>Country drop down</option>
                        <!-- ... other options -->
                    </select>
                    <div class="flex justify-between items-center mt-8">
                        <button class="text-blue-600">Back</button>
                        <button class="bg-blue-600 text-white px-4 py-2 rounded">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/5 p-5 text-sm" style="background: #F6F9FB">
        <div class="h-full p-5">
            <h3 class="font-semibold mb-3">What is registered office address?</h3>
            <p class="mb-5">A registered office address is the official legal address of a company, where formal communications and notices are sent.</p>
            <h3 class="font-semibold mb-3">Why can't I change the registered office address?</h3>
            <p class="mb-5">The registered office address provided is part of our initial service. You can update it into a new address after the incorporation is completed.</p>
        </div> 
    </div>
</template>