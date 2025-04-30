<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $permissions = [
            'acceptEnter',
            'acceptUserTherd',
            'createDepartmantMangmant',
            'createReport',
            "DataModels",
            "UsersAdd",
            "ReviewDataModle",
            "FolwingModles",
            "FolwingModlesUser",
            "ViweFlowingModlesUser",
            "ReportUser"
        ];
        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
         // إنشاء الأدوار وإسناد الصلاحيات لها
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $departmentRole = Role::firstOrCreate(['name' => 'DepartmentManagerUser']);
        $entreUserRole = Role::firstOrCreate(['name' => 'EntreUser']);

        // $adminRole->givePermissionTo(Permission::all());
        $adminRole->givePermissionTo(['acceptEnter', 'acceptUserTherd','createDepartmantMangmant']);
        $departmentRole->givePermissionTo(["createReport","DataModels","FolwingModles","UsersAdd","ReviewDataModle"]);
        $entreUserRole->givePermissionTo(["FolwingModlesUser","ViweFlowingModlesUser","ReportUser"]);
    }
}
