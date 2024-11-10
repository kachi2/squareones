<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserTaskRequest;
use App\Interfaces\UserTaskInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use App\Dtos\UserTaskDto;

class TaskController extends Controller 
{
    public function __construct(
        public readonly UserTaskInterface $userTask
    )
    {}
   
    public function UpdateTaskStatus(UserTaskRequest $userTaskRequest)
    {
        try
        {
            $userTaskDto = UserTaskDto::fromRequest($userTaskRequest->validated());
            $task = $this->userTask->updateTaskStatus($userTaskDto);
            if($task)return response()->json(['data' => $task], HttpStatusCode::OK);
            return response()->json(['data' => $task], HttpStatusCode::BAD_REQUEST);
        }catch(\Exception $e)
        {

        }
    }

    public function getUserTask()
    {
        try{
            $task = $this->userTask->getUserTask(auth_user());
            return response()->json(['data' => $task], HttpStatusCode::OK);

        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }
}
