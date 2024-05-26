<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfChargeRequest extends FormRequest
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
            'charge_creation_date' => 'nullable',
            'account_secured_by_charge' => 'nullable',
            'type_of_charge' => 'nullable',
            'charge_description' => 'nullable',
            'names_of_charge' => 'nullable',
            'terms_of_charge' => 'nullable',
            'registration_details' => 'nullable'
        ];
    }
}
