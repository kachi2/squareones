<template>
    <h2 class="text-3xl font-semibold mb-5 text-black">Registered Address</h2>

    <!-- Form fields -->
    <label class="block text-gray-700 mb-1">Registered office address</label>
    <input type="text" class="w-full border rounded p-2 mb-2"/>
    <input type="text" class="w-full border rounded p-2 mb-2"/>
    <input type="text" class="w-full border rounded p-2 mb-2"/>
    <input type="text" class="w-full border rounded p-2 mb-2"/>
    <select class="w-full border rounded p-2">
        <option>Country drop down</option>
        <!-- ... other options -->
    </select>


    <!-- ... other form fields -->
    <!-- Form actions -->
    <div class="flex justify-between items-center mt-8">
        <button class="text-blue-600">Back</button>
        <button class="bg-blue-600 text-white px-4 py-2 rounded">Continue</button>
    </div>
</template>