<?php

namespace App\Http\Requests\VolunteerRoleRequest;

use Illuminate\Foundation\Http\FormRequest;

class VolunteerRoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|string',
            'surname'=>'required|string',
            'middlename'=>'required|string',
            'about'=>'required',
            'user_id'=>'integer'
        ];
    }
}
