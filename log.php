php
 Get the current timestamp
$timestamp = date(Y-m-d His);

 Append the timestamp to the log file
$file = fopen(log.txt, a);
fwrite($file, $timestamp . n);
fclose($file);

 Respond with a success message
echo Timestamp logged successfully!;

