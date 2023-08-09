<script setup lang="ts">
import { ref, watch } from "vue";

import Layout from "./components/Layout.vue";
import { listModules } from "./module-explorer";

const modules = ref<string[]>([]);
const search = ref<string>("");

function filterModules(module: string): boolean {
  if (search.value.trim() === "") return true;
  return module.toLowerCase().includes(search.value.toLowerCase());
}

const filteredModules = ref<string[]>(modules.value.filter(filterModules));

function setFilteredModules(mods: string[]) {
  filteredModules.value = mods.filter(filterModules);
}

watch(search, (nextSearch, oldSearch) => {
  setFilteredModules(modules.value);
});

listModules().then((res) => {
  if (res.result.status === "success") {
    modules.value = res.result.data;
    setFilteredModules(modules.value);
  }
});
</script>

<template>
  <Layout>
    <section>
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="pt-32 pb-10 md:pt-30 md:pb-16">
          <!-- Hero content -->
          <div class="flex flex-col items-center md:flex-row">
            <!-- Content -->
            <div
              class="mb-8 text-center md:col-span-7 md:mb-0 md:text-left lg:col-span-7"
            >
              <h1 class="h1 mb-4 font-primary font-extrabold text-3xl">
                Kadena Blockchain: Modules' explorer
              </h1>
              <div class="flex flex-col text-gray-600 dark:text-white">
                <input
                  v-model="search"
                  type="text"
                  role="searchbox"
                  id="searchbox"
                  class="border border-green-600 text-lg text-green-700 p-2 m-2 ml-0 rounded-lg"
                  placeholder="Search modules on Kadena Testnet"
                />
              </div>

              <ul class="p-5" v-if="filteredModules != null">
                <li
                  v-for="module in filteredModules"
                  :key="module"
                  class="text-lg p-2 m-2 border rounded-lg cursor-pointer"
                  role="listitem"
                >
                  {{ module }}
                </li>
              </ul>

              <div class="mt-8 flex justify-center md:justify-start"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style scoped></style>
