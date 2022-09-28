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
        shipment: Object,
    });

    const form = useForm({
        _method: 'PUT',
        tracking_no: props.shipment.tracking_no,
        reference: props.shipment.reference,
        amount: props.shipment.amount,
        comment: props.shipment.comment,
        sender_first_name: props.shipment.sender_first_name,
        sender_last_name: props.shipment.sender_last_name,
        sender_middle_name: props.shipment.sender_middle_name,
        sender_address: props.shipment.sender_address,
        sender_state: props.shipment.sender_state,
        sender_country: props.shipment.sender_country,
        sender_zip: props.shipment.sender_zip,
        sender_town: props.shipment.sender_town,
        sender_email: props.shipment.sender_email,
        sender_phone: props.shipment.sender_phone,
        sender_title: props.shipment.sender_title,
        receiver_first_name: props.shipment.receiver_first_name,
        receiver_last_name: props.shipment.receiver_last_name,
        receiver_middle_name: props.shipment.receiver_middle_name,
        receiver_address: props.shipment.receiver_address,
        receiver_state: props.shipment.receiver_state,
        receiver_country: props.shipment.receiver_country,
        receiver_zip: props.shipment.receiver_zip,
        receiver_town: props.shipment.receiver_town,
        receiver_email: props.shipment.receiver_email,
        receiver_phone: props.shipment.receiver_phone,
        receiver_title: props.shipment.receiver_title,
        total_freight: props.shipment.total_freight,
        expected_date: props.shipment.expected_date,
        departure_time: props.shipment.departure_time,
        pickup_date: props.shipment.pickup_date,
        pickup_time: props.shipment.pickup_time,
        origin: props.shipment.origin,
        package: props.shipment.package,
        status: props.shipment.status,
        destination: props.shipment.destination,
        carrier: props.shipment.carrier,
        type_of_shipment: props.shipment.type_of_shipment,
        weight: props.shipment.weight,
        shipment_mode: props.shipment.shipment_mode,
        product: props.shipment.product,
        quantity: props.shipment.quantity,
        payment_mode: props.shipment.payment_mode,
    });
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);

    const createShipment = () => {
        if (photoInput.value) {
            form.photo = photoInput.value.files[0];
        }

        form.post(route('shipment.update', props.shipment), {
            // errorBag: 'updateProfileInformation',
            preserveScroll: true,
            // onSuccess: () => clearPhotoFileInput(),
        });
    };


    </script>
    
    
    <template>
        <AppLayout title="Create Shipment">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Create Shipment
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
                            <!-- Profile Photo -->
                            <div v-if="$page.props.jetstream.managesProfilePhotos" class="col-span-6 sm:col-span-4">
                                <!-- Profile Photo File Input -->
                                <input
                                    ref="photoInput"
                                    type="file"
                                    class="hidden"
                                    @change="updatePhotoPreview"
                                >
                
                                <InputLabel for="photo" value="Photo" />
                
                                <!-- Current Profile Photo -->
                                <div v-show="! photoPreview" class="mt-2">
                                    <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
                                </div>
                
                                <!-- New Profile Photo Preview -->
                                <div v-show="photoPreview" class="mt-2">
                                    <span
                                        class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                        :style="'background-image: url(\'' + photoPreview + '\');'"
                                    />
                                </div>
                
                                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                                    Select A New Photo
                                </SecondaryButton>
                
                                <SecondaryButton
                                    v-if="user.profile_photo_path"
                                    type="button"
                                    class="mt-2"
                                    @click.prevent="deletePhoto"
                                >
                                    Remove Photo
                                </SecondaryButton>
                
                                <InputError :message="form.errors.photo" class="mt-2" />
                            </div>

                            <!-- tracking_no: '', -->
                            <!-- tracking no -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="tracking_no" value="Tracking Number" />
                                <TextInput
                                    id="tracking_no"
                                    v-model="form.tracking_no"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="tracking_no"
                                />
                                <InputError :message="form.errors.tracking_no" class="mt-2" />
                            </div>
                            <!-- reference: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="reference" value="Reference" />
                                <TextInput
                                    id="reference"
                                    v-model="form.reference"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="reference"
                                />
                                <InputError :message="form.errors.reference" class="mt-2" />
                            </div>
                            
                            <!-- comment: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="comment" value="Comment" />
                                <TextInput
                                    id="comment"
                                    v-model="form.comment"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="comment"
                                />
                                <InputError :message="form.errors.comment" class="mt-2" />
                            </div>
                            <!-- sender_first_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_first_name" value="Sender's First name" />
                                <TextInput
                                    id="sender_first_name"
                                    v-model="form.sender_first_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_first_name"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- sender_last_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_last_name" value="Sender's Last name" />
                                <TextInput
                                    id="sender_last_name"
                                    v-model="form.sender_last_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_last_name"
                                />
                                <InputError :message="form.errors.sender_last_name" class="mt-2" />
                            </div>
                            <!-- sender_middle_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_middle_name" value="Sender's Middle name" />
                                <TextInput
                                    id="sender_middle_name"
                                    v-model="form.sender_middle_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_middle_name"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- sender_address: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_address" value="Sender's Address" />
                                <TextInput
                                    id="sender_address"
                                    v-model="form.sender_address"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_address"
                                />
                                <InputError :message="form.errors.sender_country" class="mt-2" />
                            </div>
                            <!-- sender_state: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_state" value="Sender's State" />
                                <TextInput
                                    id="sender_state"
                                    v-model="form.sender_state"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_state"
                                />
                                <InputError :message="form.errors.sender_country" class="mt-2" />
                            </div>
                            <!-- sender_country: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_country" value="Sender's Country" />
                                <TextInput
                                    id="sender_country"
                                    v-model="form.sender_country"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_country"
                                />
                                <InputError :message="form.errors.sender_country" class="mt-2" />
                            </div>
                            <!-- sender_zip: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_zip" value="Sender's Zip" />
                                <TextInput
                                    id="sender_zip"
                                    v-model="form.sender_zip"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_zip"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- sender_town: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_town" value="Sender's Town" />
                                <TextInput
                                    id="sender_town"
                                    v-model="form.sender_town"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_town"
                                />
                                <InputError :message="form.errors.sender_town" class="mt-2" />
                            </div>
                            <!-- sender_email: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_email" value="Sender's Email" />
                                <TextInput
                                    id="sender_email"
                                    v-model="form.sender_email"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_email"
                                />
                                <InputError :message="form.errors.sender_email" class="mt-2" />
                            </div>
                            <!-- sender_phone: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_phone" value="Sender's Phone number" />
                                <TextInput
                                    id="sender_phone"
                                    v-model="form.sender_phone"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_phone"
                                />
                                <InputError :message="form.errors.sender_phone" class="mt-2" />
                            </div>
                            <!-- sender_title: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="sender_title" value="Sender's Title" />
                                <TextInput
                                    id="sender_title"
                                    v-model="form.sender_title"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="sender_title"
                                />
                                <InputError :message="form.errors.sender_title" class="mt-2" />
                            </div>
                            <!-- receiver_first_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_first_name" value="Receiver's First name" />
                                <TextInput
                                    id="receiver_first_name"
                                    v-model="form.receiver_first_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_first_name"
                                />
                                <InputError :message="form.errors.receiver_first_name" class="mt-2" />
                            </div>
                            <!-- receiver_last_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_last_name" value="Receiver's Last name" />
                                <TextInput
                                    id="receiver_last_name"
                                    v-model="form.receiver_last_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_last_name"
                                />
                                <InputError :message="form.errors.receiver_last_name" class="mt-2" />
                            </div>
                            <!-- receiver_middle_name: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_middle_name" value="Receiver's Middle name" />
                                <TextInput
                                    id="receiver_middle_name"
                                    v-model="form.receiver_middle_name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_middle_name"
                                />
                                <InputError :message="form.errors.receiver_middle_name" class="mt-2" />
                            </div>
                            <!-- receiver_address: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_address" value="Receiver's Address" />
                                <TextInput
                                    id="receiver_address"
                                    v-model="form.receiver_address"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_address"
                                />
                                <InputError :message="form.errors.receiver_address" class="mt-2" />
                            </div>
                            <!-- receiver_state: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_state" value="Receiver's State" />
                                <TextInput
                                    id="receiver_state"
                                    v-model="form.receiver_state"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_state"
                                />
                                <InputError :message="form.errors.receiver_state" class="mt-2" />
                            </div>
                            <!-- receiver_country: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_country" value="Receiver's Country" />
                                <TextInput
                                    id="receiver_country"
                                    v-model="form.receiver_country"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_country"
                                />
                                <InputError :message="form.errors.receiver_country" class="mt-2" />
                            </div>
                            <!-- receiver_zip: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_zip" value="Receiver's Zip" />
                                <TextInput
                                    id="receiver_zip"
                                    v-model="form.receiver_zip"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_zip"
                                />
                                <InputError :message="form.errors.receiver_zip" class="mt-2" />
                            </div>
                            <!-- receiver_town: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_town" value="Receiver's Town" />
                                <TextInput
                                    id="receiver_town"
                                    v-model="form.receiver_town"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_town"
                                />
                                <InputError :message="form.errors.receiver_town" class="mt-2" />
                            </div>
                            <!-- receiver_email: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_email" value="Receiver's Email" />
                                <TextInput
                                    id="receiver_email"
                                    v-model="form.receiver_email"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_email"
                                />
                                <InputError :message="form.errors.receiver_email" class="mt-2" />
                            </div>
                            <!-- receiver_phone: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_phone" value="Receiver's Phone" />
                                <TextInput
                                    id="receiver_phone"
                                    v-model="form.receiver_phone"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_phone"
                                />
                                <InputError :message="form.errors.receiver_phone" class="mt-2" />
                            </div>
                            <!-- receiver_title: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="receiver_title" value="Receiver's title" />
                                <TextInput
                                    id="receiver_title"
                                    v-model="form.receiver_title"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="receiver_title"
                                />
                                <InputError :message="form.errors.receiver_title" class="mt-2" />
                            </div>
                            <!-- total_freight: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="total_freight" value="Total Freight" />
                                <TextInput
                                    id="total_freight"
                                    v-model="form.total_freight"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="total_freight"
                                />
                                <InputError :message="form.errors.total_freight" class="mt-2" />
                            </div>
                            <!-- expected_date: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="expected_date" value="Expected Date" />
                                <TextInput
                                    id="expected_date"
                                    v-model="form.expected_date"
                                    type="date"
                                    class="mt-1 block w-full"
                                    autocomplete="expected_date"
                                />
                                <InputError :message="form.errors.expected_date" class="mt-2" />
                            </div>
                            <!-- departure_time: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="departure_time" value="Departure Time" />
                                <TextInput
                                    id="departure_time"
                                    v-model="form.departure_time"
                                    type="time"
                                    class="mt-1 block w-full"
                                    autocomplete="departure_time"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- pickup_date: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="pickup_date" value="Pick up date" />
                                <TextInput
                                    id="pickup_date"
                                    v-model="form.pickup_date"
                                    type="date"
                                    class="mt-1 block w-full"
                                    autocomplete="pickup_date"
                                />
                                <InputError :message="form.errors.pickup_date" class="mt-2" />
                            </div>
                            <!-- pickup_time: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="pickup_time" value="Pick up time" />
                                <TextInput
                                    id="pickup_time"
                                    v-model="form.pickup_time"
                                    type="time"
                                    class="mt-1 block w-full"
                                    autocomplete="pickup_time"
                                />
                                <InputError :message="form.errors.sender_first_name" class="mt-2" />
                            </div>
                            <!-- origin: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="origin" value="Origin" />
                                <TextInput
                                    id="origin"
                                    v-model="form.origin"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="origin"
                                />
                                <InputError :message="form.errors.origin" class="mt-2" />
                            </div>
                            <!-- package: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="package" value="Package" />
                                <TextInput
                                    id="package"
                                    v-model="form.package"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="package"
                                />
                                <InputError :message="form.errors.package" class="mt-2" />
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
                            <!-- destination: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="destination" value="Destination" />
                                <TextInput
                                    id="destination"
                                    v-model="form.destination"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="destination"
                                />
                                <InputError :message="form.errors.destination" class="mt-2" />
                            </div>
                            <!-- carrier: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="carrier" value="Carrier" />
                                <TextInput
                                    id="carrier"
                                    v-model="form.carrier"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="carrier"
                                />
                                <InputError :message="form.errors.carrier" class="mt-2" />
                            </div>
                            <!-- type_of_shipment: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="type_of_shipment" value="Type of shipment" />
                                <TextInput
                                    id="type_of_shipment"
                                    v-model="form.type_of_shipment"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="type_of_shipment"
                                />
                                <InputError :message="form.errors.type_of_shipment" class="mt-2" />
                            </div>
                            <!-- weight: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="weight" value="Weight" />
                                <TextInput
                                    id="weight"
                                    v-model="form.weight"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="weight"
                                />
                                <InputError :message="form.errors.weight" class="mt-2" />
                            </div>
                            <!-- shipment_mode: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="shipment_mode" value="shipment_mode" />
                                <TextInput
                                    id="shipment_mode"
                                    v-model="form.shipment_mode"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="shipment_mode"
                                />
                                <InputError :message="form.errors.shipment_mode" class="mt-2" />
                            </div>
                            <!-- product: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="product" value="Product" />
                                <TextInput
                                    id="product"
                                    v-model="form.product"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="product"
                                />
                                <InputError :message="form.errors.product" class="mt-2" />
                            </div>
                            <!-- quantity: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="quantity" value="Quantity" />
                                <TextInput
                                    id="quantity"
                                    v-model="form.quantity"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="quantity"
                                />
                                <InputError :message="form.errors.quantity" class="mt-2" />
                            </div>
                            <!-- payment_mode: '', -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="payment_mode" value="Payment Mode" />
                                <TextInput
                                    id="payment_mode"
                                    v-model="form.payment_mode"
                                    type="text"
                                    class="mt-1 block w-full"
                                    autocomplete="payment_mode"
                                />
                                <InputError :message="form.errors.payment_mode" class="mt-2" />
                            </div>
                
           
                        <!-- Amount  -->
                            <div class="col-span-6 sm:col-span-4">
                                <InputLabel for="amount" value="Amount" />
                                <TextInput
                                    id="amount"
                                    v-model="form.amount"
                                    type="number"
                                    step="0.1"
                                    class="mt-1 block w-full"
                                />
                                <InputError :message="form.errors.amount" class="mt-2" />
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
    