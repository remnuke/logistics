<script setup>
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import FrontLayout from '../Layouts/FrontLayout.vue';
    import Vue3Barcode from 'vue3-barcode';
    const props = defineProps({
        shipment: Object
    });

    const form = useForm({
        tracking_no:''
    })
    let errorOnPage = false;
    const track = (tracking_no) =>{
        form.get(route('track.shipment', {'tracking_no':tracking_no}),
        {
            onError: function(){errorOnPage = true}

        })
    }
    </script>
    
    
    <template>
        <FrontLayout title="Shipment">

            <!-- Start block -->
            <section class="bg-white">
                <div class="grid max-w-screen-xl px-4 pt-20 pb-1 mx-auto lg:gap-8 lg:grid-cols-2 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        Tracking No: {{props.shipment.tracking_no}}
                        <div>
                            <Vue3Barcode :value="props.shipment.tracking_no" height="50"/>
                        </div>
                    </div>     
                </div>

                <div class="grid max-w-screen-xl px-4 pt-1 pb-8 mx-auto lg:gap-8 lg:py-6 lg:grid-cols-2 ">
                    <div class="rounded shadow">
                       <div class="font-bold text-lg border-b p-3">Shippers Address</div>
                       <div class="p-3 leading-8">
                            <div>
                            {{shipment.sender_title}} {{shipment.sender_first_name}} {{shipment.sender_middle_name}} {{shipment.sender_last_name}}
                           </div>
                           <div>
                            {{shipment.sender_address}}
                           </div>
                           <div>
                            {{shipment.sender_phone}}
                           </div>
                           <div>
                            {{shipment.sender_email}}
                           </div>
                       </div>
                    </div>     
                    <div class="rounded shadow">
                        <div class="font-bold text-lg border-b p-3">Receiver's Address</div>
                        <div class="p-3 leading-8">
                            <div>
                            {{shipment.receiver_title}} {{shipment.receiver_first_name}} {{shipment.receiver_middle_name}} {{shipment.receiver_last_name}}
                            </div>
                            <div>
                            {{shipment.receiver_address}}
                            </div>
                            <div>
                            {{shipment.receiver_phone}}
                            </div>
                            <div>
                            {{shipment.receiver_email}}
                            </div>
                        </div>
                     </div>
                </div>
            </section>
            <!-- End block -->
            <!-- Start block -->
            <section class="bg-white">
                <div class=" max-w-screen-xl px-4 pb-1 mx-auto ">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                        <td class="py-4 px-6">
                                            <div>Origin</div>
                                            <div>{{shipment.origin}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Package</div>
                                            <div>{{shipment.package}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Status</div>
                                            <div>{{shipment.status}}</div>
                                        </td>
                                    
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Destination</div>
                                            <div>{{shipment.destination}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Carrier</div>
                                            <div>{{shipment.carrier}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Carrier</div>
                                            <div>{{shipment.carrier}}</div>
                                        </td>
                                        
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Type of Shipment</div>
                                            <div>{{shipment.type_of_shipment}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Weight</div>
                                            <div>{{shipment.weight}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Shipment Mode</div>
                                            <div>{{shipment.shipment_mode}}</div>
                                        </td>
                                        
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Carrier Reference No.</div>
                                            <div>{{shipment.reference}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Product</div>
                                            <div>{{shipment.product}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Qty</div>
                                            <div>{{shipment.quantity}}</div>
                                        </td>
                                        
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Payment Mode</div>
                                            <div>{{shipment.payment_mode}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Total Freight</div>
                                            <div>{{shipment.total_freight}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Expected Delivery Date</div>
                                            <div>{{shipment.expected_date}}</div>
                                        </td>
                                        
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Departure Time</div>
                                            <div>{{shipment.departure_time}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Pick Up Date</div>
                                            <div>{{shipment.pickup_date}}</div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div>Pick Up Time</div>
                                            <div>{{shipment.pickup_time}}</div>
                                        </td>
                                        
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="py-4 px-6">
                                            <div>Comments</div>
                                            <div>{{shipment.comment}}</div>
                                        </td>
                                       
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>     
                </div>

            </section>
            <!-- End block -->
            <section class="bg-white">
                <div class=" max-w-screen-xl px-4 pb-1 mx-auto ">

                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Shipment History
                                <!-- <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> -->
                            </caption>
                            <thead class="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="py-4 px-6">
                                        Sliver
                                    </td>
                                    <td class="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td class="py-4 px-6">
                                        $2999
                                    </td>
                                    <td class="py-4 px-6">
                                        
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </FrontLayout>
    </template>
    