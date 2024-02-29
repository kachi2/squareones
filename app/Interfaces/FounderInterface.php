<?php 
namespace App\Interfaces;

use App\Dtos\FounderCorDto;
use App\Dtos\FoundersIndDto;

interface FounderInterface {

 public function ProcessIndividualFounders(FoundersIndDto $request, $founders);
 public function ProcessCorperateFounders( FounderCorDto $request, $founders);
 public function SaveParentFounders($request);
 public function processResidentialAddress($request, $individual);
}