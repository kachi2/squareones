<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompanyRequest extends FormRequest
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
            'business_nature_id' => 'required',
            'description' => 'required',
            'website' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
            'address' => 'required',
            'street_no' => 'required',
            'city' => 'required',
            'country' => 'required',
            'user_id' => 'nullable',
            'names' => 'array'
        ];
    }

    // public function messages():array
    // {
    //     return [
    //         'business_nature_id.required' => 'Select Nature of Business', 
    //         // 'postal_code.required' => 'Provide Business Address postal Code'

    //     ];
    // }
}
