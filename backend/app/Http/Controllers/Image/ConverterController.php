<?php

namespace App\Http\Controllers\Image;

use App\Classes\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Imagick;

class ConverterController extends Controller
{
    public function handle(Request $request) {
        $validator = Validator::make($request->all(), [
            'file'      => 'file|mimes:png,jpeg,jpg,webp',
            'format'    => 'required|in:png,jpeg,jpg,webp',
            'height'    => 'nullable|numeric',
            'width'     => 'nullable|numeric',
        ]);

        if($validator->fails()) {
            return JsonResponse::ValidationFails($validator);
        }

        $file = $request->file('file');
        $path       = $file->path();

        $imagick = new Imagick();
        $imagick->readImage($path);
        $width  = $imagick->getImageWidth();
        $height = $imagick->getImageHeight();

        if(!empty($request->height) && empty($request->width)) {
            $resizeWidth = $request->height / $height * $width;
        } else if(!empty($request->width)) {
            $resizeWidth = $request->width;
        }

        if(!empty($request->width) && empty($request->height)) {
            $resizeHeight= $request->width / $width * $height;
        } else if(!empty($request->height)) {
            $resizeHeight= $request->height;
        }

        if(empty($resizeWidth)) {
            $resizeWidth = $width;
        }
        if(empty($resizeHeight)) {
            $resizeHeight = $height;
        }

        if(
            $resizeHeight != $height
            ||
            $resizeWidth != $width
        ) {
            $imagick->scaleImage($resizeWidth, $resizeHeight);
        }

        $imagick->setImageFormat($request->input('format'));

        $origin = $request->header('origin');
        $support= config('cors.supports_credentials') ? 'true' : 'false';

        if(in_array($origin, config('cors.allowed_origins'))) {
            header("Access-Control-Allow-Credentials: {$support}");
            header("Access-Control-Allow-Origin: {$origin}");
        }

        header("Content-type: image/{$imagick->getImageFormat()}");
        echo $imagick->getImageBlob();
        return;
    }
}
