<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SecretaryRequest extends FormRequest
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

            'company_id' => 'required',
            'name'=> 'required',
            'chn_name'=> 'required',
            'company_reg_no'=> 'required',
            'country_registered'=> 'required',
            'licence_no'=> 'required',
            'email'=> 'required',
            'address'=> 'required',
            'city'=> 'required',
            'state'=> 'required',
            'postal_code'=> 'required',
            'country'=> 'required',
        ];
    }
}
