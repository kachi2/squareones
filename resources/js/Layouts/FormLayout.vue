<template>
    <!-- Full-width header -->
    <div class="p-4 flex justify-left items-center border-b bg-gray-100" >
        <button class="text-3xl border-r pr-2">×</button>
        <h1 class="text-sm pl-5" style="font-weight: 600; font-size: 0.9em">Start your company</h1>
        <div></div> <!-- Placeholder to balance the flex space -->
    </div>
  
    <!-- Main three-column layout -->
    <div class="flex h-screen bg-gray-100" style="color: #414552">
    
        <SideBarNavigation :data="navigationData" @updateSection="handleUpdateSection" />

        <!-- Main content (middle column) -->
        <slot name="form-content"></slot>
        
        
        <!-- Additional informational text (right-most column) -->
        <RightContextSidebar />
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue'
    import SideBarNavigation from "@/Components/Form/SideBarNavigation.vue"
    import RightContextSidebar from "@/Components/Form/RightContextSidebar.vue"

    const emit = defineEmits(['updateSection'])

    const props = defineProps({
        currentSection: String,
        navigationData: Array,
    })

    const handleUpdateSection = (sectionId) => {
        emit('updateSection', sectionId)
    }
    
</script>