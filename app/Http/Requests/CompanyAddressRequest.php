<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyAddressRequest extends FormRequest
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
            'state' => 'required',
            'postal_code' => 'required',
            'address' => 'required',
            'street_no' => 'required',
            'city' => 'required',
            'country' => 'required',
            'company_id' => 'required'
        ];
    }
}
