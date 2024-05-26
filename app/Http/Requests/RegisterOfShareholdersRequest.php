<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfShareholdersRequest extends FormRequest
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
            'name' => 'nullable',
            'address'  => 'nullable',
            'class_of_shares'  => 'nullable',
            'denomination' => 'nullable',
            'current_holding'  => 'nullable',
            'total_consideration'  => 'nullable',
            'date_entered_as_member'  => 'nullable',
            'date_cease_to_be_member' => 'nullable'
        ];
    }
}
