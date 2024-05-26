<?php

namespace App\Dtos;

class RegisteredCompanyDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id,
        public readonly ?string $company_registered_name = null,
        public readonly ?string $business_registered_number = null,
        public readonly ?string $incorporated_date = null,
        public readonly ?string $company_structure = null,
        public readonly ?string $company_registered = null,
        public readonly ?string $business_classification = null,
        public readonly ?string $registration_progress_id = null,
        public readonly ?string $tax_id = null,

    ) {
    }
}
