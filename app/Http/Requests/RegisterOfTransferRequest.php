<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterOfTransferRequest extends FormRequest
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
            'registration_date' => 'nullable',
            'transferee' => 'nullable',
            'no_of_shares_transfered' => 'nullable',
            'total_consideration' => 'nullable',
            'transfer_method' => 'nullable',
            'transfer_id'   => 'nullable'
        ];
    }
}
