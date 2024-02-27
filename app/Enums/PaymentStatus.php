<?
namespace App\Enums;


enum PaymentStatus: string 
{
    Case STATUS_PAID = 'success'; 
    Case STATUS_PENDING = "pending";
    Case STATUS_FAILED = "failed";

}