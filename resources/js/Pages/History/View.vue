<script setup>
    import { Inertia } from '@inertiajs/inertia';
    import { Link } from '@inertiajs/inertia-vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';    

    const props = defineProps({
        shipments: Object
    });    
    const del = (shipment) => {
        Inertia.delete(route('history.destroy', shipment))
    }
    
    </script>
    
    
    <template>
        <AppLayout title="All Shipment">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    All Shipment Histories
                </h2>
            </template>

            <div>
                <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                All Shipment Histories
                                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">All Shipment</p>
                            </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Shipment Tracking
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Date
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Time
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Location
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Status
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Remarks
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="shipment in props.shipments" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{shipment.shipment.tracking_no}}
                                    </th>
                                    <td class="py-4 px-6">
                                        {{shipment.date}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{shipment.time}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{shipment.location}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{shipment.status}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{shipment.remarks}}
                                    </td>
                                    <td class="py-4 px-6 text-right">
                                        <button @click.prevent="del(shipment)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4">Delete</button>
                                        <!-- <Link :href="route('shipment.edit', shipment)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </AppLayout>
    </template>
    