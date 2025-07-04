<script setup>
import { onMounted, reactive, ref } from "vue";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const jobs = ref([]);

// const state = reactive({
//   jobs:[],
//   isLoading:true,
//   errorMsg:''
// })

// state.jobs = response.data
// state.isLoading = false
// state.errorMsg = err.message

const isLoading = ref(true);
const errorMsg = ref('');

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});


onMounted(async()=>{
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    console.log(response.data);
    jobs.value = response.data;
  } catch (err) {
    console.log('error fetching data: ', err.message)
    errorMsg.value = err.message;
  } finally{
    isLoading.value = false;
  }
})

</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-if="isLoading">Loading.....</div>
        <div v-else-if="errorMsg">{{ errorMsg }}</div>
        <JobListing
          v-else
          v-for="job in limit ? jobs.slice(0, limit) : jobs"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      v-if="showButton"
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
