<?php

namespace App\Http\Controllers;

//use App\Services\TestService;
use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends Controller
{
    /*private $testService;

    public function __construct(TestService $testService)
    {
        $this->testService = $testService;
    }

    public function getTestHuman(Request $request)
    {
        $data = $this->testService->getTestHuman();
        return $data;
    }*/
    public function index()
    {
        $test= test::all();
        $data=[
            'status'=>200,
            'test'=>$test
        ];
        return response()->json($data,200);
    }
}
