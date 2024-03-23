<?php
namespace App\Interfaces;

interface SharesInterface {

    public function  SaveFromData($request);
    public function SharesToCompanyEntities($request, $owner);
    public function ListShareHolders($company_id);

}