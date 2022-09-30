<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShipmentHistory extends Model
{
    use HasFactory;
    protected $table = 'shipment_history';
    protected $fillable = ['date', 'time', 'location', 'status', 'remarks', 'shipment_id'];
    public function shipment()
    {
        return $this->belongsTo(Shipment::class, 'shipment_id');
    }
}
