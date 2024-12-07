<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfCompanyNameRequest extends FormRequest
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
            'date_of_name_changed' => 'nullable',
            'previous_company_name' => 'nullable',
            'new_company_name' => 'nullable',
            'namechange_id' => 'nullable',
            'remarks' => 'nullable'
        ];
    }
}
