<?php 
namespace App\Services;
use GuzzleHttp\Client;

class BaseClient {

    public function __construct(public $method, public $url,  public $ApiKey=null, public $body = null)
    {
        $this->method = $method; $this->ApiKey = $ApiKey; $this->url; $this->body = $body;
    }


    public function HttpClients()
    {

         $BaseUrl = 'https://api.docuseal.co/'.$this->url;
        $client = new Client();
        $req = $client->request($this->method, $BaseUrl, [
            'headers' => 
            [
                'X-Auth-Token' => 'z8Zh26TwtFkGiSXUgBLXZrLJ9W6oe6bqntgDexYAxCu',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
            'json' => $this->body
        ]);
        return $req;
    }

}