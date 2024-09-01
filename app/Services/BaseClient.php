<?php 
namespace App\Services;
use Stripe\Stripe;
use GuzzleHttp\Client;

class BaseClient {

    public function __construct(public $method, public $url,  public $ApiKey=null, public $body = null)
    {
        $this->method = $method; $this->ApiKey = $ApiKey; $this->url; $this->body = $body;
    }


    public function HttpClients()
    {
         $BaseUrl = ''.$this->url;
        $client = new Client();
        $req = $client->request($this->method, $BaseUrl, [
            'headers' => 
            [
                'X-Auth-Token' => '',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
            'json' => json_encode($this->body)
        ]);
        return $req;
    }


}