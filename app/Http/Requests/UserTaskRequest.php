<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserTaskRequest extends FormRequest
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
            'title' => 'nullable',
            'content' => 'nullable',
            'user_id' => 'nullable',
            'priority' => 'nullable',
            'assigned_by' => 'nullable',
            'status' => 'nullable',
            'task_id' => 'nullable',
            'due_date' => 'nullable'
        ];
    }
}
