/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript*/

// Completed on 5/10/2022

function isValidIP(str) {
        let ipRange = new RegExp(/^(([1]?\d?|2[0-4][0-9]|25[0-5])\.){3}([1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/)
        return ipRange.test(str);
      }


