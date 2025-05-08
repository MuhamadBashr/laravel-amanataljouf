<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Query\Expression;
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // $table->json("model")->default(new Expression('(JSON_ARRAY())'));
            $table->boolean("escalation")->default(true);
            $table->boolean("gender")->default(true);
            $table->string("Job")->default("jjj");
            $table->string("phone")->default("06063845");
            $table->string("userName")->default("dfffsw");
            $table->string("idNumber")->default("2110824543");
            $table->enum('TybeOfUser', ['User', 'Guest'])->default("User");
            $table->boolean("StateOfUser")->default(true);
            // $table->timestamp("created_at");
            // $table->timestamp("updated_at");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
