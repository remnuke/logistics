<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('tracking_no')->unique();
            $table->string('reference')->unique();
            $table->bigInteger('amount')->nullable();
            $table->text('comment')->nullable();
            $table->string('sender_first_name')->nullable();
            $table->string('sender_last_name')->nullable();
            $table->string('sender_middle_name')->nullable();
            $table->string('sender_address')->nullable();
            $table->string('sender_state')->nullable();
            $table->string('sender_country')->nullable();
            $table->string('sender_zip')->nullable();
            $table->string('sender_town')->nullable();
            $table->string('sender_email')->nullable();
            $table->string('sender_phone')->nullable();
            $table->string('sender_title')->nullable();
            $table->string('receiver_first_name')->nullable();
            $table->string('receiver_last_name')->nullable();
            $table->string('receiver_middle_name')->nullable();
            $table->string('receiver_address')->nullable();
            $table->string('receiver_state')->nullable();
            $table->string('receiver_country')->nullable();
            $table->string('receiver_zip')->nullable();
            $table->string('receiver_town')->nullable();
            $table->string('receiver_email')->nullable();
            $table->string('receiver_phone')->nullable();
            $table->string('receiver_title')->nullable();
            $table->string('total_freight')->nullable();
            $table->date('expected_date')->nullable();
            $table->time('departure_time')->nullable();
            $table->date('pickup_date')->nullable();
            $table->time('pickup_time')->nullable();
            $table->string('origin')->nullable();
            $table->text('package')->nullable();
            $table->string('status')->nullable();
            $table->string('destination')->nullable();
            $table->string('carrier')->nullable();
            $table->string('type_of_shipment')->nullable();
            $table->string('weight')->nullable();
            $table->string('shipment_mode')->nullable();
            $table->string('product')->nullable();
            $table->string('quantity')->nullable();
            $table->string('payment_mode')->nullable();
            $table->timestamps();
        });
        Schema::create('shipment_history', function (Blueprint $table) {
            $table->id();
            $table->string('location')->nullable();
            $table->string('status')->nullable();
            $table->string('remarks')->nullable();
            $table->foreignId('shipment_id')->references('id')->on('shipments')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipments');
        Schema::dropIfExists('shipment_history');
    }
};
