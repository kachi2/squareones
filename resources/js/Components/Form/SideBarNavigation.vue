<template>
    <!-- Sidebar navigation (left-most column) -->
    <div class="w-1/4 p-5 ml-6" style="font-weight: 600; font-size: 0.9em">
            <div class="space-y-2 ">
                <!-- Sidebar content with alignment for the divider -->
                <div class="space-y-1">
                    <ul>
                        <li class="border-l pl-5 cursor-pointer hover:bg-blue-100 p-2" :class="{'border-l border-blue-500 text-blue-500': activeItem === item.id }" v-for="item in data" :key="item.id" @click="navigateTo(item.id)">
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
    import { defineProps, defineEmits, ref, onMounted } from 'vue'

    const props = defineProps({
        data: Array
    })

    const emit = defineEmits(['updateSection'])
    const activeItem = ref(null)
    
    onMounted(() => {
        if (props.data.length > 0) {
            activeItem.value = props.data[0].id
        }
    })

    const navigateTo = (sectionId) => {
        activeItem.value = sectionId
        emit('updateSection', sectionId)
    }

</script>
