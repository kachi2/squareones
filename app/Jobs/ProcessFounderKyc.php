<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\CompanyEntity;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Mail;
use App\Mail\KycRegistrationMail;


class ProcessFounderKyc implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public $data
    )
    {
        $this->data = $data;
         //
    }
    /**
     * Execute the job.
     */
    public function handle()
    {
        $data = $this->data;
        $entity = CompanyEntity::where(['company_id' => $data['company_id'], 'id' => $data['company_entity_id']])->first();
        $res = $this->InitiateKycProcess($entity);
        return $res;
    }

    public function InitiateKycProcess($request){

        try{
        $user = $request->load('Individual', 'Corporate');
        //  dd($user);
        if($user['Individual']){
            $firstname = $user['Individual']['first_name']??$user['Individual']['chn_first_name'];
            $lastname = $user['Individual']['last_name']??$user['Individual']['chn_last_name'];
            $email = $user['Individual']['email'];
        }else{
            $firstname = $user['Corporate']['AuthorizedPersons']['first_name']??'';
            $lastname = $user['Corporate']['AuthorizedPersons']['last_name']??'';
            $email = $user['Corporate']['AuthorizedPersons']['email']??'';;
        }
        $client = new Client();
        $req = $client->request('post', 'https://api.complycube.com/v1/clients', [
            'headers' => 
            [
                'Authorization' => 'test_d1BmZ0VlczJiV1FKZVRUUkY6MWQwODA4NWVkOTNmOTQ4MTk4NmE0N2VjYjhmZTY0MDY1MjFkNzg3NjQ4NmU3YTc2NTg0YzA0NWEzMTRmMGY4NQ==',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
             'json' => [
                'type' => 'person',
                'email'=>  $email,
                'personDetails' => [
                    'firstName' =>  $firstname,
                    'lastName' =>  $lastname,
                    'dob' => '1990-01-01'
                ],
             ] 
        ]);

        $data = json_decode($req->getBody(), true);
        if($data['id']){
          
            $request->update([
                'client_id' => $data['id']
            ]);
              $this->GetUserToken($request->id);

           $datas = [
           'first_name' => $firstname,
           'last_name' =>  $lastname,
           'company_id' => $request->company_id,
           'company_entity_id' => $request->id,
           'company_name' => $request?->company?->names[0]->eng_name??$request?->company?->names[0]->chn_name
           ]; 
         Mail::to('jesmikky@gmail.com', 'steven@squareone.com.hk')->send(new KycRegistrationMail($datas));
        }
    }catch(\Exception $e){
        return $e->getMessage();
    }
      
    }


    public function GetUserToken($company_entity_id){
        $user = CompanyEntity::where('id', $company_entity_id)->first();
        $client = new Client();
        $request = $client->request('post', 'https://api.complycube.com/v1/tokens', [
            'headers' => 
            [
                'Authorization' => 'test_d1BmZ0VlczJiV1FKZVRUUkY6MWQwODA4NWVkOTNmOTQ4MTk4NmE0N2VjYjhmZTY0MDY1MjFkNzg3NjQ4NmU3YTc2NTg0YzA0NWEzMTRmMGY4NQ==',
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ],
             'json' => [
                'clientId' => $user->client_id,
                'referrer' => '*://*/*'
             ] 
        ]);
        $res = json_decode($request->getBody(), true);
        $user->update([
            'user_token' => $res['token']
        ]);
        return $res;
    }
}
