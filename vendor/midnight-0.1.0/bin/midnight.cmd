@echo off
node --experimental-strip-types "%~dp0..\apps\cli\src\index.ts" %*
