<script setup>
    import { ref } from 'vue';
    import { Inertia } from '@inertiajs/inertia';
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import AppLayout from '@/Layouts/AppLayout.vue';    
    import ActionMessage from '@/Components/ActionMessage.vue';
    import FormSection from '@/Components/FormSection.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
    const props = defineProps({
        shipments: Object,
    });

    const form = useForm({
        location: '',
        date: '',
        time: '',
        status: '',
        remarks: '',
        shipment_id: ''
    });

    const createShipment = () => {

        form.post(route('history.store'), {
            // errorBag: 'updateProfileInformation',
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };


    </script>
    
    
    <template>
        <AppLayout title="Create Shipment History">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Create Shipment History
                </h2>
            </template>

            <div>
                <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                    <FormSection @submitted="createShipment">
                        <template #title>
                            Shipment Information
                        </template>
                
                        <template #description>
                            Create the shipment details here
                        </template>
                
                        <template #form>
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="shipment" value="Shipment" />
                                <select class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="shipment" id="shipment" v-model="form.shipment_id">
                                    <option :value="shipment.id" v-for="shipment in shipments" :key="shipment.id">
                                        {{shipment.tracking_no}} - {{shipment.reference}}
                                    </option>
                                </select>
                            </div>
                            <!-- tracking_no: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="date" value=" Date" />
                                <TextInput
                                    id="date"
                                    v-model="form.date"
                                    type="date"
                                    class="mt-1 block w-full"
                                    autocomplete="date"
                                />
                                <InputError :message="form.errors.date" class="mt-2" />
                            </div>
                            <!-- time: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="time" value=" Time" />
                                <TextInput
                                    id="time"
                                    v-model="form.time"
                                    type="time"
                                    class="mt-1 block w-full"
                                    autocomplete="time"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- tracking no -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="location" value="Location" />
                                <TextInput
                                    id="location"
                                    v-model="form.location"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="location"
                                />
                                <InputError :message="form.errors.location" class="mt-2" />
                            </div>
                            <!-- status: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="status" value="Status" />
                                <TextInput
                                    id="status"
                                    v-model="form.status"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="status"
                                />
                                <InputError :message="form.errors.status" class="mt-2" />
                            </div>
                            <!-- reference: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="remarks" value="Remarks" />
                                <TextInput
                                    id="remarks"
                                    v-model="form.remarks"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="remarks"
                                />
                                <InputError :message="form.errors.remarks" class="mt-2" />
                            </div>
                            
                            

                        </template>
                
                        <template #actions>
                            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                Saved.
                            </ActionMessage>
                
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Save
                            </PrimaryButton>
                        </template>
                    </FormSection>
                </div>
            </div>

        </AppLayout>
    </template>
    