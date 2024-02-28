<?php 
namespace App\Services;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadServices {

    public function upload(UploadedFile $file, string $rootDirectory, string $fileName = null): array
    {
        $fileName = $fileName ?? null;

        $uploadedFile = cloudinary()->upload($file->getRealPath(), [
            'folder' => '' . $rootDirectory,
            'display_name' => $fileName
        ]);

        $filePath = $uploadedFile->getSecurePath();
        $fileName = $uploadedFile->getOriginalFileName();

        return [$fileName, $filePath];
    }

    public function delete(string $publicId): bool
    {
        if (cloudinary()->destroy($publicId)) {
            return true;
        }
        return false;
    }
}