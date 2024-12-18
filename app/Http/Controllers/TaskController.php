<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserTaskRequest;
use App\Interfaces\UserTaskInterface;
use Cloudinary\Api\HttpStatusCode;
use Illuminate\Http\Request;
use App\Dtos\UserTaskDto;
use App\Models\UserTask;

class TaskController extends Controller 
{
    public function __construct(
        public readonly UserTaskInterface $userTask
    ){}
   
    public function UpdateTaskStatus(UserTaskRequest $userTaskRequest)
    {
        try
        {
            $userTaskDto = UserTaskDto::fromRequest($userTaskRequest->validated());
            $task = $this->userTask->updateTaskStatus($userTaskDto);
            return response()->json(['data' => $task], HttpStatusCode::OK);
        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::BAD_REQUEST);
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

    public function updateAllTask()
    {
        $task = UserTask::where('user_id', auth_user())->get();
        if($task)foreach($task as $ss) $ss->update(['is_new' => null]); return $task;
        return false;
    }

    public function getUserNewtask()
    {
        $task = UserTask::where(['user_id' => auth_user(), 'is_new' =>  0])->latest()->get();
        if($task) return $task;
        return false;
    }


    public function AddComments(Request $request)
    {
        try
        {
            $task = $this->userTask->addComments($request);
            return response()->json(['data' => $task], HttpStatusCode::OK);
        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::OK);

        }
    }

    public function getComments($task_id)
    {
        try
        {
            $comments = $this->userTask->getComments($task_id);
            return response()->json(['data' => $comments], HttpStatusCode::OK);
        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::OK);
        }
    }

    public function getTaskActivity($task_id)
    {
        try
        {
            $activity = $this->userTask->getTaskActivity($task_id);
            return response()->json(['data' => $activity], HttpStatusCode::OK);
        }catch(\Exception $e)
        {
            return response()->json(['data' => $e->getMessage()], HttpStatusCode::OK);
        }

    }
}
