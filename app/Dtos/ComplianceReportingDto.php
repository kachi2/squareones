<?php

namespace App\Dtos;

class ComplianceReportingDto extends BaseDto
{
    public function __construct(
        public readonly string $company_id,
        public readonly ?string $auditor_name = null,
        public readonly ?string $accounting_reference_date = null,
        public readonly ?string $business_registration_renewal_date = null,
        public readonly ?string $annual_return_date = null,
    ) {
    }
}
