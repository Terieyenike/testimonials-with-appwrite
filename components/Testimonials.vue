<template>
  <section class="mx-auto max-w-6xl w-4/5 mt-10">
    <div>
      <h1 class="text-3xl font-serif mb-3 md:text-5xl lg:text-6xl">
        Testimonials
      </h1>
      <p class="mb-10 text-slate-700">
        Learn from experts what they love about Appwrite Cloud
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div
        class="border-2 rounded-lg p-4 flex flex-col justify-between transition-all ease-out"
        v-for="item in items"
        :key="item.$id">
        <p class="text-sm md:text-lg">
          {{ item.comment }}
        </p>
        <div class="flex items-center mt-7">
          <img
            :src="item.imgUrl"
            class="shrink-0 w-12 h-12 rounded-full border-slate-200 shadow mr-4 bg-black object-cover"
            loading="lazy"
            :alt="item.role" />
          <div>
            <p>
              <span class="font-bold">{{ item.name }}</span>
            </p>
            <p class="text-xs md:text-sm font-light text-slate-700">
              {{ item.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Client, Databases } from "appwrite";

const runtimeConfig = useRuntimeConfig();

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint(runtimeConfig.public.API_ENDPOINT)
  .setProject(runtimeConfig.public.PROJECT_ID);

const getComment = databases.listDocuments(
  runtimeConfig.public.DATABASE_ID,
  runtimeConfig.public.COLLECTION_ID
);

const items = ref(null);

onMounted(() => {
  getComment.then(
    function (response) {
      items.value = response.documents;
    },
    function (error) {
      console.log(error);
    }
  );
});
</script>
