<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfAllotmentRequest extends FormRequest
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
            'allotment_date' => 'nullable',
            'name' => 'nullable',
            'address' => 'nullable',
            'class_of_shares' => 'nullable',
            'no_of_shares_allocated' => 'nullable',
            'denomination' => 'nullable',
            'total_consideration' => 'nullable',
            'remarks' => 'nullable'
        ];
    }
}
