<?php
class Book
{
        $searchUrl = "https://openapi.naver.com/v1/search/movie.xml";
                $url = sprintf("%s?query=%s", $this->searchUrl, $query);
                $data =file_get_contents($url);
                $xml = simplexml_load_string($data);
                $result = json_encode($xml);
                return $result;
        }
}
?>
