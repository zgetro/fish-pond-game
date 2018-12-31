<?php

require "vendor/autoload.php";
if(isset($_REQUEST['save'])){
// cg
// cdips

	
	$count = count($_REQUEST['wish']);
	if($count>0){
	$table = new TextTable($count, 1);
	$table->config(array(
		'type'     => 'file',
		'border' => true
	));
		$i = 1;
		foreach ($_REQUEST['wish'] as $key => $value) {
			$table->put( $i.',1', $value);
			$i++;
		}
		
	}
          

file_put_contents('lock/text.md', array(PHP_EOL,$table->render()),FILE_APPEND);

}

 include "index2.html";