<?php

namespace App\Dtos;


class RegisterOfficeContractDto extends BaseDto
{
    public function  __construct(
        public readonly string $company_id,
        public readonly ?string $registered_office = null,
        public readonly ?string $business_address = null,
        public readonly ?string $directors = null,
        public readonly ?string $shareholders = null,
        public readonly ?string $company_secretary = null,
        public readonly ?string $scr_designated_representative = null,
    ) {
    }
}
