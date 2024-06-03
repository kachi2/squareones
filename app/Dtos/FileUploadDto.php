<?php 
namespace App\Dtos;

use Illuminate\Http\UploadedFile;

class FileUploadDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly UploadedFile|array $documents,
        public readonly ?string $document_type_id = null, 
        public readonly ?string $title,
    )
    {
    }
}