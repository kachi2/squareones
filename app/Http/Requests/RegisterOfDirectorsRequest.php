<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfDirectorsRequest extends FormRequest
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
            'date_of_appointment' => 'nullable',
            'name' => 'nullable',
            'reg_no' => 'nullable',
            'registered_office' => 'nullable',
            'ceasing_of_act' => 'nullable',
            'remarks' => 'nullable'
        ];
    }
}
