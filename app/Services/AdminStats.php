<?php 
namespace App\Services;
use App\Models\AdminActivity;
use App\Models\AdminActivityLog;
use App\Models\Billing;
use App\Models\Company;
use App\Models\RegisteredCompany;
use App\Models\User;
use App\Models\userActivity;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;

class AdminStats 
{
    public function AdminActivityLog()
    {
        $activities = AdminActivityLog::latest()->paginate(10);
        return $activities;
    }


    public function UserActivities() 
    {
        $activities = userActivity::latest()->paginate(4);
        return $activities;
    }

    public function companyStats($request) 
    {
        
        if(isset($request->start_date) || isset($request->end_date)){
        $dates = $request->only(['start_date', 'end_date']);
        $start_date = Carbon::createFromFormat('Y-m-d', $dates['start_date']);
        $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);
        $data = Company::whereBetween('created_at', [$start_date,  $end_date])->paginate(10);
        $month = Carbon::now()->subDays(30);
        $data['thismonth'] = Company::whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(), Carbon::now()])->count();
        $data['active'] = RegisteredCompany::where('renewal_date', '>', Carbon::now())->count();
        $data['inactive'] = RegisteredCompany::where('renewal_date', '<', Carbon::now())->count();
        $data['incorporated'] = RegisteredCompany::where('incorporated_date','!=', null )->count();
        $data['Unincorporated'] = RegisteredCompany::where('incorporated_date', null )->count();
        $data['thisMonthIncorporated'] = RegisteredCompany::whereBetween('incorporated_date', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()])->count();
        $data['thisMonthUnIncorporated'] = RegisteredCompany::whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()])->where('incorporated_date', null)->count();
        return $data;
        }
        $data = Company::paginate(10);
        $data['thismonth'] = Company::whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(), Carbon::now()])->count();
        $data['active'] = RegisteredCompany::where('renewal_date', '>', Carbon::now())->count();
        $data['inactive'] = RegisteredCompany::where('renewal_date', '<', Carbon::now())->count();
        $data['incorporated'] = RegisteredCompany::where('incorporated_date','!=', null )->count();
        $data['Unincorporated'] = RegisteredCompany::where('incorporated_date', null )->count();
        $data['thisMonthIncorporated'] = RegisteredCompany::whereBetween('incorporated_date', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()])->count();
        $data['thisMonthUnIncorporated'] = RegisteredCompany::whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()])->where('incorporated_date', null)->count();
        return $data;
       
    }


    public function getRevenueStats($request)
    {
        if(isset($request->start_date) || isset($request->end_date)){
            $dates = $request->only(['start_date', 'end_date']);
            $start_date = carbon::createFromFormat('Y-m-d',$dates['start_date']);
            $end_date = carbon::createFromFormat('Y-m-d',$dates['end_date']);
            $data = Billing::whereBetween('created_at', [$start_date, $end_date])->get();
            $data->load('user', 'company');
            return $data;
        }
        $data = Billing::paginate(10);
        $data->load('user', 'company');
        return $data;
    }

    public function getUsers($request)
    {
        if($request->search){
            $query = User::query();
              $query->where(function($query) use ($request){
                $query->where('name', 'LIKE', "$request->search%"); 
                $query->orwhere('email', 'LIKE', "$request->search%"); 
            });
            $query =$query->paginate(10);
        }else{
            $query = User::latest()->paginate(10);
        }
        $query?->load('company', 'getUserDocuments', 'billing');
        $data['active'] = User::where('status', 1)->count();
        $data['inactive'] = User::where('status', 0)->count();
        $data['newUsers'] = User::whereBetween('created_at', [Carbon::now()->subDays(30)->startOfDay(),  Carbon::now()])->count();
        $data['newThisWeek'] = User::whereBetween('created_at', [Carbon::now()->subDays(7)->startOfDay(),  Carbon::now()])->count();
        $data['unVerified'] =  User::where('email_verified_at', null)->count();
        $data['verified'] =  User::where('email_verified_at','!=' ,null)->count();
        $data['userCount'] =  User::count();
        $data['users'] = $query;
        return $data;
    }

    public function getCompanies($user_id)
    {
             $company = Company::where('user_id', $user_id)->paginate(20);
            $data['companies'] =  $company->load('Names', 'Billing');
            $data['form_completed'] = Company::where('is_complete', 1)->get();
            $data['is_incorporated'] = Company::where('is_incorporated', 1)->get();
            return $data;
    }

    public function getBilling($user_id)
    {
        $billing = Billing::where('user_id', $user_id)->paginate(20);
        $billing->load('company','user');
        return $billing;
    }

    public function getUsersBilling()
    {
        $billing = Billing::paginate(20);
        $billing->load('company','user');
        return $billing;
    }

    public function getUserStats($request)
    {
        $user = User::where('id', $request->user_id)->first();
        if($user){
            switch($request->status)
            {
                case 1: $user->update(['status' => user::ACTIVE]);
                break;
                case 2: $user->update(['status' => User::BLOCKED]);
            }
        }
        return $user;
    }

}