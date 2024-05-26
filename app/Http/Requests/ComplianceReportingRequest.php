<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ComplianceReportingRequest extends FormRequest
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
            'auditor_name' => 'nullable',
            'accounting_reference_date' => 'nullable',
            'business_registration_renewal_date' => 'nullable',
            'annual_return_date' => 'nullable'
        ];
    }
}
