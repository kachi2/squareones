<?php 
namespace App\Dtos;

use Illuminate\Http\UploadedFile;

class FileUploadDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id, 
        public readonly UploadedFile|array $document, 
    )
    {
    }
}