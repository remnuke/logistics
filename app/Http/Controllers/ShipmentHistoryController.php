<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use App\Models\ShipmentHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShipmentHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all the shipment histories
        $shipments = ShipmentHistory::with('shipment')->get();
        return Inertia::render('History/View', ['shipments' => $shipments]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get all the shipment and display a create page
        $shipments = Shipment::all();
        return Inertia::render('History/Create', [
            'shipments' => $shipments
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // store the history
        $shipment = ShipmentHistory::create($request->all());
        return back()->with('message', 'History Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //edit all the histories
        $shipment = ShipmentHistory::where('id', $id)->first();
        return Inertia::render('Edit', ['shipment' => $shipment]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $shipment = ShipmentHistory::where('id', $id)->first();
        $shipment->update($request->all());
        return redirect()->route('shipment.index')->with('message', 'Shipment Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $shipment = ShipmentHistory::where('id', $id)->first();
        $shipment->delete();
        sleep(1);

        return redirect()->route('history.index')->with('message', 'Shipment Delete Successfully');
    }
}
