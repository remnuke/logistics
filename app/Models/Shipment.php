<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;

    protected $fillable = [
        'tracking_no',
        'reference',
        'amount',
        'comment',
        'sender_first_name',
        'sender_last_name',
        'sender_middle_name',
        'sender_address',
        'sender_state',
        'sender_country',
        'sender_zip',
        'sender_town',
        'sender_email',
        'sender_phone',
        'sender_title',
        'receiver_first_name',
        'receiver_last_name',
        'receiver_middle_name',
        'receiver_address',
        'receiver_state',
        'receiver_country',
        'receiver_zip',
        'receiver_town',
        'receiver_email',
        'receiver_phone',
        'receiver_title',
        'total_freight',
        'expected_date',
        'departure_time',
        'pickup_date',
        'pickup_time',
        'origin',
        'package',
        'status',
        'destination',
        'carrier',
        'type_of_shipment',
        'weight',
        'shipment_mode',
        'product',
        'quantity',
        'payment_mode'
    ];

    public function history()
    {
        return $this->hasMany(ShipmentHistory::class);
    }
}
