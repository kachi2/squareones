<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserTaskRequest;
use App\Interfaces\UserTaskInterface;
use App\Models\UserTask;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use App\Dtos\UserTaskDto;

class TaskController extends Controller
{
    //

    public function __construct(
        public readonly UserTaskInterface $userTask
    )
    {}
        
        public function createTask(UserTaskRequest $userTaskRequest)
        {
            try{
            $userTaskDto = UserTaskDto::fromRequest($userTaskRequest->validated());
                $createTask = $this->userTask->createTask($userTaskDto);
                if($createTask)return response()->json(['data' => $createTask], HttpStatusCode::OK);
                return response()->json(['data' => $createTask], HttpStatusCode::BAD_REQUEST);
        }catch(\Exception $e)
        {
            return response()->json(['data' => null], HttpStatusCode::BAD_REQUEST);
        }
    }

    public function EditTask(UserTaskRequest $userTaskRequest)
    {
        try
        {
            $userTaskDto = UserTaskDto::fromRequest($userTaskRequest->validated());
            $task = $this->userTask->updateTask($userTaskDto);
            if($task)return response()->json(['data' => $task], HttpStatusCode::OK);
            return response()->json(['data' => $task], HttpStatusCode::BAD_REQUEST);
        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }

    public function getUserTask($user_id)
    {
        try{
            $task = $this->userTask->getUserTask($user_id);
            return response()->json(['data' => $task], HttpStatusCode::OK);

        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        }
    }

    public function getAllTask()
    {
        try{
            $task = $this->userTask->getAllTask();
            return response()->json(['data' => $task], HttpStatusCode::OK);

        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
        } 
    }

}
