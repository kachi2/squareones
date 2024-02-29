<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OwnershipRequest extends FormRequest
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
            'share_type' => 'required',
            'no_of_share' => 'required',
            'total_amount_paid' => 'required'
        ];
    }
}
