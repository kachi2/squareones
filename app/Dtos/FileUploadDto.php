<?php 
namespace App\Dtos;

use Illuminate\Http\UploadedFile;

class FileUploadDto extends BaseDto
{
    public function __construct( 
        public readonly array $document,
        public readonly ?string $document_type_id = null, 
        public readonly ?string $type = null, 
        public readonly ?string $title = null,
        public readonly ?string $company_id=null,
        public readonly ?string $year=null
    )
    {
    }
}