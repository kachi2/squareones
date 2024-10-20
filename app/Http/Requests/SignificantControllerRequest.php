<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignificantControllerRequest extends FormRequest
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
            'entry_date' => 'nullable',
            'date_becoming_rep_person'  => 'nullable',
            'date_ceased_to_be_rep_person' => 'nullable',
            'corresponding_address' => 'nullable',
            'resdential_address' => 'nullable',
            'identity_info' => 'nullable',
            'place_of_registration' => 'nullable',
            'nature_of_control_over_the_company' => 'nullable',
            'controllers_id'=> 'nullable',
            'legal_entity_name' => 'nullable'
        ];
    }
}
