<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'email'=>'required|string',
            'password'=>'required|string|same:password_confirm',
            'password_confirm'=>'required|string',
            'role'=>'nullable'
        ];
    }
    public function messages()
    {
        return [
            'password.same'=>'Паролі не співпадають',
            'name.required'=>'Заповніть поля'
        ];
    }
}
