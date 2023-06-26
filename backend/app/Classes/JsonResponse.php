<?php

namespace App\Classes;

use Illuminate\Validation\Validator;

class JsonResponse {
    public static function Success($message, $content = [], $headers = []) {
        $response = response()->json(compact('message', 'content'), 200);

        foreach ($headers as $key => $value) {
            $response->headers->set($key, $value);
        }
        return $response;
    }

    public static function FetchSuccess($data) {
        return static::Success('Data successfully fetched', $data);
    }

    public static function CreateSuccess($id = null) {
        return static::Success('Data successfully created', $id);
    }

    public static function UpdateSuccess() {
        return static::Success('Data successfully updated');
    }

    public static function DeleteSuccess() {
        return static::Success('Data successfully deleted');
    }

    public static function Failed($message, $code = 400) {
        return response()->json(compact('message'), $code);
    }

    public static function Unauthorized() {
        return static::Failed("You don't have permission to access this", 401);
    }

    public static function NotFound() {
        return static::Failed("Cannot find the data", 404);
    }

    public static function ValidationFails(Validator $validator) {
        $errors = $validator->errors()->all();
        $errorMessage = implode(', ', $errors);
        return static::Failed("Input invalid: {$errorMessage}");
    }
}