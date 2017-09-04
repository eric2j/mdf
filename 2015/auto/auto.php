<?php

/*******
* Read input from STDIN
* Use echo or print to output your result, use the PHP_EOL constant at the end of each result line.
* Use:
*      local_echo( $variable ); 
 * to display simple variables in a dedicated area.
* 
 * Use:
*      local_print_r( $array ); 
 * to display arrays in a dedicated area.
* ***/

$input = array();
while( $f = stream_get_line(STDIN, 10000, PHP_EOL) ) {
    $input[] = $f;
    /*Read the input here and perform the calculations*/
}

$nbMot = $input[0];
for($i=1; $i <= $nbMot; $i++ ){
    $arrMot[]  = trim($input[$i]);
    }

$nbSoum = $input[$nbMot + 1];
for($i=$nbMot+2; $i <= $nbMot+$nbSoum+1; $i++ ){
    $arrSoum[]  = trim($input[$i]);
    }

foreach($arrSoum as $soum){
    $coutMin = 1000;
    $motCorrige = "";
    foreach($arrMot as $mot){
        $coutMot = calcCout($soum, $mot);
        if ($coutMot < $coutMin ||  ($coutMot == $coutMin && strlen($mot) < strlen($motCorrige) ) ){
            $coutMin = $coutMot;
            $motCorrige = $mot;
            }
        }
    echo "$motCorrige\n";
    }
  /*You can also perform the calculations once you have read all the data.*/

function calcCout($soum, $mot){
    if ($soum == "" && $mot == "")
        return 0;
    if ($soum == "" && strlen($mot)>0 ){
        // ajout
        return strlen($mot) * 2;
        }
    if ( strlen($soum) > 0 && strlen($mot) == 0 ){
        // suppression
        return strlen($soum) * 2;
        }
    if ($soum[0] == $mot[0])
        return calcCout( substr($soum, 1), substr($mot, 1) );
    if ( isset($mot[1]) && $soum[0] ==  $mot[1]){
        // inversion
        $cout1 = 3 + calcCout( substr($soum, 1), substr($mot, 1) );
        // suppression
        $cout2 = 2 + calcCout( $soum, substr($mot, 1) );
        if ($cout1 < $cout2)
            return $cout1;
        return $cout2;
        }
    if ( isset($soum[1]) && $soum[1] ==  $mot[0]){
        // inversion
        $cout1 = 3 + calcCout( substr($soum, 1), substr($mot, 1) );
        // ajout
        $cout2 = 2 + calcCout( substr($soum, 1), substr($mot, 1) );
        if ($cout1 < $cout2)
            return $cout1;
        return $cout2;
        }
    // changement de lettre
    return 3 + calcCout( substr($soum, 1), substr($mot, 1) );
}


?>
