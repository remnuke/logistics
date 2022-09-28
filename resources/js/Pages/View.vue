<script setup>
    import { ref } from 'vue';
    import { Inertia } from '@inertiajs/inertia';
    import { Head, Link, useFetch } from '@inertiajs/inertia-vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';    
    import ActionMessage from '@/Components/ActionMessage.vue';
    import FormSection from '@/Components/FormSection.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
    const props = defineProps({
        shipments: Object
    });    
    const del = (shipment) => {
        Inertia.delete(route('shipment.destroy', shipment))
    }
    
    </script>
    
    
    <template>
        <AppLayout title="All Shipment">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    All Shipments
                </h2>
            </template>

            <div>
                <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">

                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                All Shipments
                                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">All Shipment</p>
                            </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Carrier Reference
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Sender Email
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Receiver Email
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Amount
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="shipment in props.shipments" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{shipment.reference}}
                                    </th>
                                    <td class="py-4 px-6">
                                        {{shipment.sender_email}}
                                    </td>
                                    <td class="py-4 px-6">
                                        {{shipment.receiver_email}}
                                    </td>
                                    <td class="py-4 px-6">
                                        ${{shipment.amount}}
                                    </td>
                                    <td class="py-4 px-6 text-right">
                                        <button @click.prevent="del(shipment)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4">Delete</button>
                                        <Link :href="route('shipment.edit', shipment)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </AppLayout>
    </template>
    