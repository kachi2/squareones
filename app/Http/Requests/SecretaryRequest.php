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
            'name'=> 'nullable',
            'chn_name'=> 'nullable',
            'company_reg_no'=> 'nullable',
            'country_registered'=> 'nullable',
            'licence_no'=> 'nullable',
            'email'=> 'nullable',
            'address'=> 'nullable',
            'city'=> 'nullable',
            'state'=> 'nullable',
            'postal_code'=> 'nullable',
            'country'=> 'nullable',
        ];
    }
}
