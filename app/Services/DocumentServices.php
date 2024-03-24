<?php 
namespace App\Services;

use App\Interfaces\DocumentInterface;
use App\Models\Document;
use Illuminate\Http\UploadedFile;
use GuzzleHttp\Client;

class DocumentServices  implements DocumentInterface{

    public function __construct(public $method, public $ApiKey, public $url,  public $body = null)
    {
        $this->method = $method; $this->ApiKey = $ApiKey; $this->url; $this->body = $body;
    }
    public function upload($request)
    {
        foreach($request->document as $files){
            if($files['docs'] instanceof UploadedFile){
                $base64Image = base64_encode(file_get_contents($files['docs']->getRealPath()));
            }
              $documents =  Document::create([
                'company_id' => $request->company_id,
                'document' => $base64Image,
                'document_type_id' => $files['document_type_id']
            ]);
            $docs[] =  $documents;
        }
        return  $docs;
    }

    public function HttpClients()
    {
        $client = new Client();
        $req = $client->request($this->method, $this->url, [
            'headers' => 
            [
                'Authorization' => 'Bearer '.$this->ApiKey,
                'Content-Type' => 'application/json',
            ],
            'json' => $this->body
        ]);
        return $req;
    }

    public function DocumentToPDF($document){

        

    }
    public function SignDocument($request){

    }


}