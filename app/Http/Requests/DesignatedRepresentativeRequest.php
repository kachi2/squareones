<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesignatedRepresentativeRequest extends FormRequest
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
            'name' => 'nullable',
            'remarks'=> 'nullable',
            'designated_representative_id'=> 'nullable',
            'identiy_info'=> 'nullable',
            'place_of_registration'=> 'nullable',
            'nature_of_control_over_the_company'=> 'nullable',
            'representatives_id'=> 'nullable',
        ];
    }
}
