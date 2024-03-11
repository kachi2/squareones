<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FundSourceRequest extends FormRequest
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
            'income_expected_source' => 'required',
            'origin_funds' => 'required',
            'wealth_initial_source' => 'required',
            'income_outgoing_source' => 'required',
            //
        ];
    }
}
