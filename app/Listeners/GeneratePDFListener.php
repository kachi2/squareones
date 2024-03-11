<?php

namespace App\Listeners;

use App\Events\GeneratePDF;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class GeneratePDFListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(GeneratePDF $event): void
    {
        //
    }
}
