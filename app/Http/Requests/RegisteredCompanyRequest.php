<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisteredCompanyRequest extends FormRequest
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
            'company_registered_name' => 'nullable',
            'business_registered_number' => 'nullable',
            'incorporated_date' => 'nullable',
            'company_structure' => 'nullable',
            'company_registered' => 'nullable',
            'business_classification' => 'nullable',
            'tax_id' => 'nullable',
        ];
    }
}
