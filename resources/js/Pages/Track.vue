<script setup>
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import FrontLayout from '../Layouts/FrontLayout.vue';
    
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
        <FrontLayout title="Tracking">

            <!-- Start block -->
            <section class="bg-white dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Know where your goods are</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Use your tracking code or ID to find out where your goods and services are in realtime.</p>
                        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <form @submit.prevent="track(form.tracking_no)">
                            <input type="text" name="tracking" v-model="form.tracking_no" id="" placeholder="Tracking ID" class="border-gray-300 p-4 rounded-l-xl">
                            <button class="text-white bg-red-600 rounded-r-xl p-4 font-bold text-lg">Track Shipment</button>
                            </form>
                            <small v-if="errorOnPage" class="text-sm text-red-400">
                                Tracking Number does not exist.
                            </small>
                        </div>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="images/hero.svg" alt="hero image">
                    </div>                
                </div>
            </section>
            <!-- End block -->
        </FrontLayout>
    </template>
    