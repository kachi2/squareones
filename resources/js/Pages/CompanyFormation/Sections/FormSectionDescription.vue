<template>
	<div class="container mx-auto">
		<div class="mx-auto w-full max-w-2xl bg-white p-8">
			<div class="mb-6">
				<h1 class="mb-2 text-2xl font-bold text-gray-700">Description</h1>
				<p class="mb-4 text-gray-600">This information facilitates a faster review process by our team and remains strictly confidential.</p>

				<label class="mb-2 block text-sm font-bold text-gray-700" for="product-description"> Describe your product or service </label>
				<p class="mb-2 text-gray-600">Please briefly describe the product or service you are developing. Aim for a concise overview in one or two sentences.</p>
				<textarea class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="product-description" placeholder="Minimum 150 characters needed." minlength="150"></textarea>

				<label class="mb-2 block text-sm font-bold text-gray-700" for="nature-of-business"> Nature of business </label>
				<div class="relative">
					<span class="text-sm text-gray-500">Choose the primary category that best represents the business nature of your company.</span>
					<select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" id="nature-of-business">
						<option></option>
						<!-- Additional options here -->
					</select>
				</div>

				<label class="mb-2 mt-4 block text-sm font-bold text-gray-700" for="website-social"> Website or social media </label>
				<input class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="website-social" type="text" placeholder="" />
			</div>

			<div class="flex items-center justify-between">
				<button class="inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
				<span>Back</span>
				</button>
				<button class="inline-flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
					<span>Continue</span>
				</button>
			</div>
		</div>
	</div>
</template>