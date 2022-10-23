<script setup>
import FrontLayout from '../Layouts/FrontLayout.vue';

</script>
<template>
    <FrontLayout title="Blog">
        <section class="dark:bg-gray-800 dark:text-gray-100">
            <div class="container max-w-6xl p-6 pt-20 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://source.unsplash.com/random/480x360" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                    <div class="p-6 space-y-2 lg:col-span-5">
                        <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Future Frontiers in Logistics</h3>
                        <span class="text-xs dark:text-gray-400">February 19, 2021</span>
                        <p>The future has always been bright for the logistics company, as we have had the introduction of aggregators all over ...</p>
                    </div>
                </a>
                <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1">
                        <div class="p-6 space-y-2">
                            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">Introduction to the Legend Package</h3>
                            <span class="text-xs dark:text-gray-400">January 21, 2021</span>
                            <p>Introducing the legend package for ecommerce and social commerce vendors. We are all in the market for the best of what we can get, profit, services and all. We look for the best logistics...</p>
                        </div>
                    </a>
                    
                </div>
                <div class="flex justify-center">
                    <button type="button" class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                </div>
            </div>
        </section>
    </FrontLayout>
</template>