<?php 
namespace App\Dtos;

class FileUploadDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly string $document_type_id, 
        public readonly string $document, 
    )
    {
        
    }
}