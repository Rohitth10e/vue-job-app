<script setup>
import { defineProps, ref, computed } from "vue";

const { job } = defineProps({ job: Object });

const showFullDesc = ref(true);

const truncatedDesc = computed(() => {
  let description = job.description;
  if (!showFullDesc.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});

const descToggle = () => {
  showFullDesc.value = !showFullDesc.value;
};
</script>

<template>
  
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        {{ truncatedDesc }}
        <button @click="descToggle" class="text-green-500">
          <p v-if="showFullDesc">view less</p>
          <p v-else>view more</p>
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ job.location }}
        </div>
        <a
          :href="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
