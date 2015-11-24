echo off
cls
echo "taskkill /F /IM node.exe && rd /s/q dist && gulp && gulp watch"
cmd
