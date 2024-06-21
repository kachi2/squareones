<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use PragmaRX\Google2FALaravel\Facade as Google2FA;

class VerifyTwoFactorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'secret' => ['required', 'string', 'digits:6']
        ];
    } 

    public function ValidateToken()
    {
        // dd($this->secret);
        try{
            return Google2FA::verifyKey($this->user()->google2fa_secret, $this->secret);
        }catch(\Exception $e){
            return false;
        }
    }
}
