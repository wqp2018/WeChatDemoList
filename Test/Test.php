<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/16
 * Time: 19:02
 */
namespace app\admin\controller;

use app\common\Validation;
use think\Controller;
use think\Db;


class Test extends Controller{
    public function test(){
       //return $this->fetch("test/test");
        return view();
    }

    public function index(){
        return view();
    }

    public function login(){
        $data = [
            'username' => input("post.username",''),
            'password' => input("post.password")
        ];

        $validate = new Validation();
        if (!$validate->scene('login')->check($data)){
            return $validate->getError();
        }

        return $data;
    }


    public function upload(){
        $file = request()->file('image');

        //$upload = $file->move(ROOT_PATH.'public'.DS.'uploads',$file->hash('md5').''.$file->hash('sha1'));

        $kk = md5_file($_FILES["image"]["tmp_name"]);

        print_r($kk);

        //print_r($upload);

    }


    //判断是否存在
    public function testExist(){
        $filename = ROOT_PATH."/public/uploads/865c81239d8cddf42d3e9ca051a0188d.jpg";

        if (file_exists($filename)){
            echo "文件已存在";
        }else{
            echo "文件不存在,可存";
        }
       echo APP_PATH;

    }
}