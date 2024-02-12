<template>
    <!-- Sidebar navigation (left-most column) -->
    <div class="w-1/5 p-5 ml-6" style="font-weight: 600; font-size: 0.9em">
            <div class="space-y-2 ">
                <!-- Sidebar content with alignment for the divider -->
                <div class="space-y-1 border-l">
                    <ul>
                        <li class="pl-5 cursor-pointer hover:bg-blue-100 p-2 rounded" v-for="item in data" :key="item.id" @click="navigateTo(item.id)">
                            {{ item.label }}
                        </li>
                    </ul>
                <!-- <p class="pl-5">Structure</p>
                <p class="pl-5">Name</p>
                <p class="pl-5">Description</p>
                <p class="border-l pl-5 border-blue-600 text-blue-600">Address</p>
                <p class="pl-5">Founders / Directors</p> -->
                <!-- ... other navigation items -->
                </div>
            </div>
        </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        data: Array
    })

    const emit = defineEmits(['updateSection'])

    const navigateTo = (sectionId) => {
        emit('updateSection', sectionId)
    }

</script>
