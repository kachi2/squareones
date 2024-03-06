<script setup>
import { ref, computed } from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    ComboboxButton,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const { options } = defineProps({
    options: Array,
});

const selected = ref(options[0]);
const query = ref("");

const filteredOptions = computed(() =>
    query.value === ""
        ? options
        : options.filter((option) => {
              return option.name
                  .toLowerCase()
                  .includes(query.value.toLowerCase());
          })
);
</script>

<template>
    <Combobox v-model="selected">
        <div class="relative">
            <div
                class="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left focus:outline-none focus:border focus:border-blue-300 sm:text-sm"
            >
                <ComboboxInput
                    class="w-full border border-gray-300 rounded-xl py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:border focus:border-blue-300"
                    :displayValue="(option) => option.name"
                    @change="query = $event.target.value"
                />
                <ComboboxButton
                    class="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </ComboboxButton>
            </div>
            <TransitionRoot
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                @after-leave="query = ''"
            >
                <ComboboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[999]"
                >
                    <div
                        v-if="filteredOptions.length === 0 && query !== ''"
                        class="relative cursor-default select-none px-4 py-2 text-gray-700"
                    >
                        Nothing found.
                    </div>

                    <ComboboxOption
                        v-for="option in filteredOptions"
                        as="template"
                        :key="option.id"
                        :value="option"
                        v-slot="{ selected, active }"
                    >
                        <li
                            class="relative cursor-default select-none py-2 pl-10 pr-4"
                            :class="{
                                'bg-blue-500 text-white': active,
                                'text-gray-900': !active,
                            }"
                        >
                            <span
                                class="block truncate"
                                :class="{
                                    'font-medium': selected,
                                    'font-normal': !selected,
                                }"
                            >
                                {{ option.name }}
                            </span>
                            <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                :class="{
                                    'text-white': active,
                                    'text-blue-500': !active,
                                }"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </TransitionRoot>
        </div>
    </Combobox>
</template>
