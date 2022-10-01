<script setup>
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import FrontLayout from '../../Layouts/FrontLayout.vue';
    import Swal from 'sweetalert2'
import InputLabel from '../../../../vendor/laravel/jetstream/stubs/inertia/resources/js/Components/InputLabel.vue';
import TextInput from '../../../../vendor/laravel/jetstream/stubs/inertia/resources/js/Components/TextInput.vue';

    const props = defineProps({
        shipment: Object
    });
    const form = useForm({
        name:'',
        email:'',
        message:''
    })
    let errorOnPage = false;
    const checkMessage = (status, message) => {

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: status,
          title: message,
        });
    }
    const contact = () =>{
        form.post(route('contact.store'),
        {
            onSuccess: (res) =>  {if(res.props.flash.error == null){
                checkMessage('success', res.props.flash.message);
                form.reset();
            }else{
                checkMessage('error', res.props.flash.error);
            }},
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
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Love to hear from you</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Leave us a message and we would get back to you.</p>
                        <div class="space-y-4 sm:space-y-0 sm:space-x-4">
                            <form @submit.prevent="contact()">
                                <div class="w-full block lg:flex gap-4 mb-4">
                                    <div>
                                        <InputLabel for="name" value="Name" />
                                        <TextInput
                                            id="name"
                                            v-model="form.name"
                                            type="text"
                                            class="mt-1 block w-full"
                                            autocomplete="name"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel for="email" value="Email" />
                                        <TextInput
                                            id="email"
                                            v-model="form.email"
                                            type="email"
                                            class="mt-1 block w-full"
                                            autocomplete="email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <InputLabel for="message" value="Message" />
          
                                        <textarea class="w-full block mt-1 rounded border border-gray-300" name="" id="" cols="30" rows="10" v-model="form.message"></textarea>
                                    </div>
                                </div>
                            
                            <button class="text-white bg-red-600 rounded px-4 py-2 mt-4 w-full font-bold text-lg">Send</button>
                            </form>
                        </div>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="../../../../public/images/4.svg" alt="hero image">
                    </div>                
                </div>
            </section>
            <!-- End block -->
        </FrontLayout>
    </template>