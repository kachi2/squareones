<?php 
namespace App\Interfaces;

use App\Dtos\CorporateDto;
use App\Dtos\IndividualDto;

interface CompanyEnityInterface {

 public function ProcessIndividualEntity(IndividualDto $request, $founders);
 public function ProcessCorporateEntity( CorporateDto $request, $founders);
 public function SaveParentEntity($request);
 public function processResidentialAddress($request, $individual);
 public function RemoveEntity($entity_id);
public function UpdateEntitySignature($request);
public function deleteSignatures($request);
}