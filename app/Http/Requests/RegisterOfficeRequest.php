<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfficeRequest extends FormRequest
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
            //
            'company_id' => 'required',
            'directors' => 'nullable',
            'shareholders' => 'nullable',
            'registered_office' => 'nullable',
            'business_address' => 'nullable',
            'company_secretary' => 'nullable',
            'scr_designated_representative' => 'nullable',
            'officecontract_id' => 'nullable'
        ];
    }
}
