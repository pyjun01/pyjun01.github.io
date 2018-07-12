<?php
    require_once "naverBookApi.php";

    header('Content-Type: application/json');
    header('X-Naver-Client-Id': 'RlQ7_YD7PrgRemJaOuqw');
    header('X-Naver-Client-Secret': 'kWVhntzeNx');

    $searchUrl = "https://openapi.naver.com/v1/search/movie.xml";
    $url = sprintf("%s?query=%s", $this->searchUrl, $query);
    $data =file_get_contents($url);
    $xml = simplexml_load_string($data);
    $result = json_encode($xml);
    echo $result;
?>
