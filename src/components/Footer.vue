<script setup lang="ts">
import LogoWhite from "./icons/LogoWhite.vue";

import { links } from "../data/link";
import { socials } from "../data/social-links";
</script>

<template>
  <footer class="relative">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="-mt-px border-t border-gray-200 py-12 dark:border-gray-800 md:py-16"
      >
        <!-- Footer illustration -->
        <div
          class="pointer-events-none -z-1"
          aria-hidden="true"
          style="opacity: 0.1"
        >
          <svg
            class="absolute bottom-0 left-0 ml-24 -translate-x-1/2 transform dark:opacity-40"
            width="800"
            height="264"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="400"
              cy="400"
              r="400"
              fill="url(#footerglow_paint0_radial)"
              fillOpacity=".4"
            />
            <defs>
              <radialGradient
                id="footerglow_paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 0 400) scale(315.089)"
              >
                <stop stopColor="#3ABAB4" />
                <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <!-- Top area: Blocks -->
        <div class="mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
          <!-- 1st block -->
          <div class="hidden md:col-span-2 md:flex lg:col-span-3">
            <!-- Logo -->
            <LogoWhite />
          </div>
          <!-- 2nd, 3rd, 4th and 5th blocks -->
          <div
            class="grid grid-cols-2 gap-8 md:col-span-10 md:grid-cols-4 lg:col-span-9"
          >
            <!-- 2nd block -->
            <div v-for="key in Object.keys(links)" :key="key" class="text-sm">
              <h6 class="mb-2 font-bold">{{ key }}</h6>
              <ul>
                <ol
                  v-if="links[key] != null"
                  v-for="link in links[key]"
                  :key="link.name"
                  class="mb-1"
                >
                  <a
                    class="text-gray-600 transition duration-150 ease-in-out hover:underline dark:text-gray-400"
                    :href="link.url"
                  >
                    {{ link.name }}
                  </a>
                </ol>
              </ul>
            </div>
          </div>
        </div>
        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">
          <!-- Social links -->
          <ul class="mb-4 flex gap-1 md:order-2 md:ml-4 md:mb-0">
            <ol v-for="social in socials" :key="social.name">
              <a
                :href="social.link"
                :aria-label="social.name"
                class="flex items-center justify-center rounded-full bg-seafoam-500 text-white transition duration-150 ease-in-out hover:bg-seafoam-600 hover:underline dark:bg-gray-800 dark:text-seafoam-500"
              >
                <svg
                  class="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- {{ social.path() }} -->
                </svg>
              </a>
            </ol>
          </ul>
          <!-- Middle links -->
          <div class="mb-2 text-sm text-gray-700 md:order-1 md:mb-0">
            <a
              class="text-gray-600 transition duration-150 ease-in-out hover:underline dark:text-gray-400"
              href="#"
            >
              Terms
            </a>
            {{ " · " }}
            <a
              class="text-gray-600 transition duration-150 ease-in-out hover:underline dark:text-gray-400"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
          <!-- Copyrights note -->
          <div class="mr-4 text-sm text-gray-600 dark:text-gray-400">
            {{ "&copy; Learn how to build Web3 dApps on " }}
            <a href="https://kadena.io">Kadena</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
