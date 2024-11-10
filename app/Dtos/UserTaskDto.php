<?php
namespace App\Dtos;

use App\Dtos\BaseDto;

class UserTaskDto extends BaseDto
{

    public function __construct(
        public readonly string $user_id, 
        public readonly string $title,
        public readonly string $content,
        public readonly string $priority,
        public readonly ?string $status = null,
        public readonly ?string $assigned_by= null,
        public readonly ?string $task_id = null,
    )
    {
        
    }

}